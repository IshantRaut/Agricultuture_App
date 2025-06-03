import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MarketPlace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("http://localhost:5000/api/products/market");
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
        } else {
          setError(data.message || "Failed to fetch products");
        }
      } catch (err) {
        setError("Server error", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Add to cart handler (uses toast)
  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1, // or let user choose
        }),
      });
      if (res.ok) {
        toast.success("Added to cart!");
      } else {
        const data = await res.json();
        toast.error(data.message || "Failed to add to cart");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen bg-green-50 font-nunito">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Marketplace</h1>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <div
              key={product._id || idx}
              className="border border-lime-300 bg-gradient-to-br from-lime-50 to-green-100 rounded-2xl p-4 shadow-md flex flex-col items-center"
            >
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
              <div className="w-full text-center">
                <h3 className="font-bold text-green-900 text-lg border-b border-lime-200 pb-1 mb-1 flex items-center justify-center gap-2">
                  <span>🌾</span> {product.name}
                </h3>
                <p className="text-xs text-lime-700 font-semibold mb-1 uppercase tracking-wide">{product.category}</p>
                <p className="text-base text-green-900 font-semibold mb-1">
                  ₹{product.price} / {product.quantity} {product.unit}
                </p>
                <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-700 mt-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketPlace;