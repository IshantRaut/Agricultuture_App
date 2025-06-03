import React, { useEffect, useState } from "react";
import logo from "../assets/SWcuanBn.webp";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    const handleStorage = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <img
          src={logo}
          alt="AgroBuy Logo"
          className="w-14 h-14 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
        />
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center rounded-lg px-5 py-2 bg-white text-green-700 font-bold text-base shadow-sm hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/"
                className="inline-flex items-center rounded-lg px-5 py-2 bg-green-600 text-white font-bold text-base shadow-sm hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center rounded-lg px-5 py-2 bg-green-600 text-white font-bold text-base shadow-sm hover:bg-green-700 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;