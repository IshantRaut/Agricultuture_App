import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import bgImage from "../assets/BackgroundImage.avif";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/api/auth/login`, // <-- use env variable
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    const data = await res.json();
    if (res.ok) {
      setError("");
      toast.success("Login successful!");
      localStorage.setItem("token", data.token);
      localStorage.setItem("currentUser", JSON.stringify(data.user));
      login(data.user);
      setTimeout(() => {
        if (data.user.role === "Farmer") {
          navigate("/farmer-dashboard");
        } else {
          navigate("/buyer-dashboard");
        }
      }, 1000);
    } else {
      setError(data.message || "Invalid Email or Password");
      toast.error(data.message || "Invalid Email or Password");
    }
  } catch (err) {
    setError("Server error");
    toast.error("Server error", err);
  }
};

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-2"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Toaster position="top-center" />
      <main className="bg-white/10 backdrop-blur-md rounded-xl border border-black/30 shadow-2xl p-6 sm:p-8 max-w-md w-full">
        <section className="flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-gray-800 font-medium">
                Email
              </label>
              <input
                id="email"
                value={form.email}
                type="email"
                placeholder="Email"
                className="rounded px-4 py-2 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-900 placeholder-gray-900 text-base sm:text-lg"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="password" className="text-gray-800 font-medium">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={form.password}
                className="rounded px-4 py-2 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-900 placeholder-gray-900 text-base sm:text-lg pr-10"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-3 mt-12 -translate-y-1/2 text-gray-700"
                tabIndex={-1}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-gradient-to-r from-lime-600 to-green-700 text-white rounded px-4 py-2 font-semibold hover:from-green-700 hover:to-lime-600 transition text-base sm:text-lg shadow-lg"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-gray-700">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-green-700 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;