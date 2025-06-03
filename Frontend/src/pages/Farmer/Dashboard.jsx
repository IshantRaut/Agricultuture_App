import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const FarmerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        // Fetch products
        const prodRes = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/api/products`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        const prodData = await prodRes.json();
        setProducts(prodData);

        // Fetch orders
        const orderRes = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/api/orders`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        const orderData = await orderRes.json();
        setOrders(orderData);
      } catch (err) {
        setProducts([]);
        setOrders([]);
      }
    };
    fetchData();
  }, []);

  // Calculate summary data
  const totalProducts = products.length;
  const activeOrders = orders.length;
  const totalRevenue = orders.reduce(
    (sum, order) => sum + Number(order.price) * Number(order.quantity),
    0
  );
  const productsInStock = products.reduce(
    (sum, product) => sum + Number(product.quantity),
    0
  );

  // Show up to 5 recent orders
  const recentOrders = orders.slice(-5).reverse();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Farmer Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Products</h3>
          <p className="text-2xl font-bold text-green-600">{totalProducts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Active Orders</h3>
          <p className="text-2xl font-bold text-blue-600">{activeOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-2xl font-bold text-purple-600">₹{totalRevenue}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Products in Stock</h3>
          <p className="text-2xl font-bold text-orange-600">{productsInStock}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link to="/farmer-orders">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
            View Orders
          </button>
        </Link>
        <Link to="/farmer-profile">
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full">
            Update Profile
          </button>
        </Link>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.length === 0 ? (
                <tr>
                  <td className="px-4 py-2" colSpan="5">
                    No orders yet
                  </td>
                </tr>
              ) : (
                recentOrders.map((order) => (
                  <tr key={order._id}>
                    <td className="px-4 py-2">{order.name}</td>
                    <td className="px-4 py-2">{order.quantity} {order.unit}</td>
                    <td className="px-4 py-2">₹{Number(order.price) * Number(order.quantity)}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold
                        ${order.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      {order.orderDate
                        ? new Date(order.orderDate).toLocaleString()
                        : ""}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;