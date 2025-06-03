import React, { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import toast from "react-hot-toast";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    unit: "kg",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/api/products`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
        } else {
          setError(data.message || "Failed to fetch products");
          toast.error(data.message || "Failed to fetch products");
        }
      } catch (err) {
        setError("Server error", err.message);
        toast.error("Server error");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/api/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setProducts((prev) => [...prev, data]);
        setSuccess("Product added!");
        toast.success("Product added!");
        setFormData({
          name: "",
          category: "",
          price: "",
          quantity: "",
          unit: "kg",
          description: "",
          image: null,
        });
      } else {
        setError(data.message || "Failed to add product");
        toast.error(data.message || "Failed to add product");
      }
    } catch (err) {
      setError("Server error", err.message);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    setError("");
    setSuccess("");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/api/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        setSuccess("Product deleted!");
        toast.success("Product deleted!");
      } else {
        setError(data.message || "Failed to delete product");
        toast.error(data.message || "Failed to delete product");
      }
    } catch (err) {
      setError("Server error", err.message);
      toast.error("Server error");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto font-nunito bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 flex items-center gap-2 mb-8">
        <Leaf className="w-8 h-8" /> Product Management
      </h1>

      {/* Add Product Form */}
      <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Add New Product</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {success && <div className="text-green-600 mb-2">{success}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-700">Product Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
                required
              >
                <option value="">Select Category</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="grains">Grains</option>
                <option value="dairy">Dairy</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
                required
                min="0"
                step="0.01"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-green-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
                  required
                  min="0"
                />
              </div>
              <div className="w-24">
                <label className="block text-sm font-medium text-green-700">Unit</label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
                >
                  <option value="kg">kg</option>
                  <option value="g">g</option>
                  <option value="l">l</option>
                  <option value="unit">unit</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-green-100 file:text-green-800
                hover:file:bg-green-200"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>

      {/* Products List */}
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-lime-500 mt-10">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Your Products</h2>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500">No products added yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="relative transform hover:scale-[1.02] transition duration-300 ease-in-out border border-lime-300 bg-gradient-to-br from-lime-50 to-green-100 rounded-2xl p-4 shadow-md hover:shadow-xl flex flex-col items-center"
              >
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(product._id)}
                  className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow z-10 transition"
                  title="Delete Product"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {/* Product Image */}
                <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-lime-300 bg-white flex items-center justify-center shadow mb-3">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-4xl text-lime-400">🌱</span>
                  )}
                </div>
                {/* Product Info */}
                <div className="w-full text-center">
                  <h3 className="font-bold text-green-900 text-lg border-b border-lime-200 pb-1 mb-1 flex items-center justify-center gap-2">
                    <span>🌾</span> {product.name}
                  </h3>
                  <p className="text-xs text-lime-700 font-semibold mb-1 uppercase tracking-wide">{product.category}</p>
                  <p className="text-base text-green-900 font-semibold mb-1">
                    ₹{product.price} / {product.quantity} {product.unit}
                  </p>
                  <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;