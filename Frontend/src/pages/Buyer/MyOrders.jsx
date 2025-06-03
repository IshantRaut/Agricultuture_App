import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  // Fetch orders from backend cart
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      try {
        const res = await fetch("http://localhost:5000/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setOrders(data);
        } else {
          setError(data.message || "Failed to fetch orders");
        }
      } catch (err) {
        setError("Server error", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Countdown for receipt
  useEffect(() => {
    let timer;
    if (showReceipt && countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else if (showReceipt && countdown === 0) {
      setShowReceipt(false);
      navigate("/buyer-home");
    }
    return () => clearTimeout(timer);
  }, [showReceipt, countdown, navigate]);

  // Calculate total price
  const total = orders.reduce(
    (sum, order) =>
      sum +
      Number(order.product?.price || order.price) *
        Number(order.quantity),
    0
  );

  // Delete order handler
  const handleDelete = async (productId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/cart/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        setOrders((prev) =>
          prev.filter(
            (order) => (order.product?._id || order.product) !== productId
          )
        );
        toast.success("Order deleted!");
      } else {
        toast.error("Failed to delete order");
      }
    } catch {
      toast.error("Server error");
    }
  };

  // Razorpay payment handler
   const handleRazorpayPayment = async () => {
    const token = localStorage.getItem("token");
    setProcessing(true);
    try {
      // 1. Create order on backend
      const res = await fetch("http://localhost:5000/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: total }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Failed to create payment order");
        setProcessing(false);
        return;
      }

      // 2. Open Razorpay checkout
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY, // Replace with your Razorpay key_id
        amount: data.amount,
        currency: data.currency,
        name: "Agri Marketplace",
        description: "Order Payment",
        order_id: data.id,
        handler: async function (response) {
          // 1. Store each order in backend and update status to "Successful"
          for (const order of orders) {
            // Create order
            const res = await fetch("http://localhost:5000/api/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                name: order.product?.name || order.name,
                quantity: order.quantity,
                price: order.product?.price || order.price,
                unit: order.product?.unit || order.unit,
                farmer: order.product?.farmer || order.product?.user || order.farmer,
              }),
            });
            const createdOrder = await res.json();

            // Update status to "Successful"
            await fetch(`http://localhost:5000/api/orders/${createdOrder._id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ status: "Successful" }),
            });
          }

          // 2. Mark as successful and show receipt
          setOrders((prev) =>
            prev.map((order) => ({
              ...order,
              status: "Successful",
            }))
          );
          setShowReceipt(true);
          toast.success("Payment successful! Order placed.");

          // 3. Optionally clear cart in backend after placing order
          await fetch("http://localhost:5000/api/cart/clear", {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        },
        prefill: {},
        theme: {
          color: "#22c55e",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error("Payment error",err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen bg-green-50 font-nunito">
      <h1 className="text-2xl font-bold text-green-700 mb-6">My Orders</h1>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-lime-100 text-green-800">
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Unit</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Order Date</th>
                  <th className="py-2 px-4 text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2 px-4">{order.product?.name || order.name}</td>
                    <td className="py-2 px-4">{order.product?.category || order.category}</td>
                    <td className="py-2 px-4">₹{order.product?.price || order.price}</td>
                    <td className="py-2 px-4">{order.quantity}</td>
                    <td className="py-2 px-4">{order.product?.unit || order.unit}</td>
                    <td className="py-2 px-4">{order.status || "Pending"}</td>
                    <td className="py-2 px-4">
                      {order.orderDate
                        ? new Date(order.orderDate).toLocaleString()
                        : ""}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() =>
                          handleDelete(order.product?._id || order.product)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                        disabled={showReceipt || processing}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <span className="text-lg font-bold text-green-800">
                Total: ₹{total}
              </span>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleRazorpayPayment}
                className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ${processing ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={showReceipt || processing}
              >
                {processing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Pay & Place Order"
                )}
              </button>
            </div>
          </div>
          {showReceipt && (
            <div className="bg-white rounded-lg shadow-md p-6 mt-6 border border-green-300">
              <h2 className="text-xl font-bold text-green-700 mb-4">Order Receipt</h2>
              <ul className="mb-4">
                {orders.map((order, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="font-semibold">
                      {order.product?.name || order.name}
                    </span>{" "}
                    - {order.quantity} {order.product?.unit || order.unit} × ₹
                    {order.product?.price || order.price} = ₹
                    {Number(order.product?.price || order.price) *
                      Number(order.quantity)}
                  </li>
                ))}
              </ul>
              <div className="font-bold text-green-800 text-lg mb-2">
                Total Paid: ₹{total}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full transition-all"
                  style={{ width: `${(countdown / 5) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500">
                Thank you for your order!
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Redirecting to home in {countdown} second{countdown !== 1 ? "s" : ""}...
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyOrders;