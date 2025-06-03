
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import logo from "../../assets/SWcuanBn.webp";

const FarmerNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 via-green-500 to-lime-400 shadow-lg px-4 py-3 flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <Link to="/home">
        <img src={logo} alt="AgroBuy Logo" className="w-12 h-12 rounded-full shadow-md" />
        </Link>
        <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
          Farmer Panel
        </span>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/home"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          About
        </Link>
        <Link
          to="/farmer-crops"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          My Crops
        </Link>
        <Link
          to="/farmer-orders"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          Orders
        </Link>
        <Link
          to="/farmer-Dashboard"
          className="text-white font-semibold hover:text-lime-100 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/farmer-profile"
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

export default FarmerNav;