import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/api/orders`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setOrders([]);
        toast.error("Failed to fetch orders");
      }
    };
    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/api/orders/${orderId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      if (res.ok) {
        setOrders((prev) => prev.filter((order) => order._id !== orderId));
        toast.success("Order deleted!");
      } else {
        toast.error("Failed to delete order");
      }
    } catch {
      toast.error("Server error");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-nunito bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 flex items-center gap-2 mb-8">
        <ShoppingCart className="w-8 h-8" /> Orders
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-lime-500">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Order List</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-lime-100 text-green-800">
                  <th className="py-2 px-4 text-left">Product</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Price (₹)</th>
                  <th className="py-2 px-4 text-left">Unit</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Order Date</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} className="border-b hover:bg-lime-50">
                    <td className="py-2 px-4">{order.name}</td>
                    <td className="py-2 px-4">{order.quantity}</td>
                    <td className="py-2 px-4">{order.price}</td>
                    <td className="py-2 px-4">{order.unit}</td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      {order.orderDate
                        ? new Date(order.orderDate).toLocaleString()
                        : ""}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="bg-red-500 hover:bg-red-600 text-white rounded-full px-2 py-1 text-xs"
                        title="Delete Order"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;