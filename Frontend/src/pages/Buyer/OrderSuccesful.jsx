import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccesful = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/buyer-home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 font-nunito">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <span className="text-6xl mb-4 text-green-500">✅</span>
        <h1 className="text-3xl font-bold text-green-700 mb-2">Order Successful!</h1>
        <p className="text-gray-700 mb-6">Thank you for your purchase. Your order has been placed successfully.</p>
        <button
          onClick={handleBack}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccesful;