import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import logo from "../../assets/SWcuanBn.webp";

const BuyerNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-500 to-lime-400 shadow-lg px-4 py-3 flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <img src={logo} alt="AgroBuy Logo" className="w-12 h-12 rounded-full shadow-md" />
        <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
          Buyer Panel
        </span>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/buyer-home"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
         Home
        </Link>
        <Link
          to="/marketplace"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          Marketplace
        </Link>
        <Link
          to="/buyer-orders"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          My Orders
        </Link>
        <Link
          to="/buyer-profile"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 bg-white/20 hover:bg-white/40 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default BuyerNav;