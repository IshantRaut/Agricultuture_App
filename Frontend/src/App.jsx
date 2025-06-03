import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import FarmerDashboard from "./components/FarmerDashboard";
import BuyerDashboard from "./components/BuyerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import FarmerNav from "./pages/Farmer/FarmerNav";
import BuyerNav from "./pages/Buyer/BuyerNav";
import { useAuth } from "./context/AuthContext";
import AboutUs from "./pages/Farmer/AboutUs";
import Dashboard from "./pages/Farmer/Dashboard";
import Product from "./pages/Farmer/Product";
import Order from "./pages/Farmer/Order";
import Profile from "./pages/Farmer/Profile";
import MarketPlace from "./pages/Buyer/MarketPlace";
import MyOrders from "./pages/Buyer/MyOrders";
import Profile_Buyer from "./pages/Buyer/Profile_Buyer";
import { Toaster } from "react-hot-toast"; // <-- Add this import

function getNavbar(user) {
  if (user?.role === "Farmer") return <FarmerNav />;
  if (user?.role === "Buyer") return <BuyerNav />;
  return <Navbar />;
}

function App() {
  const { user } = useAuth();

  // Helper: where to send logged-in users
  const getDashboard = () =>
    user?.role === "Farmer"
      ? "/farmer-dashboard"
      : user?.role === "Buyer"
      ? "/buyer-home"
      : "/";

  return (
    <>
      <Toaster position="top-center" /> {/* Add Toaster here */}
      {getNavbar(user)}
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to={getDashboard()} replace /> : <Login />
          }
        />
        <Route
          path="/login"
          element={
            user ? <Navigate to={getDashboard()} replace /> : <Login />
          }
        />
        <Route
          path="/signup"
          element={
            user ? <Navigate to={getDashboard()} replace /> : <Signup />
          }
        />
        {/* Farmer Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute allowedRole="Farmer">
              <FarmerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/farmer-crops"
          element={
            <ProtectedRoute allowedRole="Farmer">
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/farmer-orders"
          element={
            <ProtectedRoute allowedRole="Farmer">
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/farmer-profile"
          element={
            <ProtectedRoute allowedRole="Farmer">
              <Profile />
            </ProtectedRoute>
          }
        />
        {/* If you want a separate dashboard page for Farmer, keep this, else remove */}
        <Route
          path="/farmer-Dashboard"
          element={
            <ProtectedRoute allowedRole="Farmer">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Buyer Routes */}
        <Route
          path="/buyer-home"
          element={
            <ProtectedRoute allowedRole="Buyer">
              <BuyerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketplace"
          element={
            <ProtectedRoute allowedRole="Buyer">
              <MarketPlace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer-orders"
          element={
            <ProtectedRoute allowedRole="Buyer">
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyer-profile"
          element={
            <ProtectedRoute allowedRole="Buyer">
              <Profile_Buyer />
            </ProtectedRoute>
          }
        />
        {/* Public */}
        <Route path="/about" element={<AboutUs />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;