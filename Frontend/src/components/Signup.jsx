import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import bgImage from "../assets/BackgroundImage.avif";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword, role } = form;

    if (!fullName || !email || !password || !confirmPassword || !role) {
      setError("Please fill all the fields");
      toast.error("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

  try {
  const res = await fetch(
    `${import.meta.env.VITE_APP_API_URL}/api/auth/signup`, // <-- use env variable
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password, role }),
    }
  );
  const data = await res.json();
  if (res.ok) {
    setError("");
    toast.success("User created successfully!");
    setTimeout(() => navigate("/login"), 1200);
  } else {
    setError(data.message || "Signup failed");
    toast.error(data.message || "Signup failed");
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
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="fullName" className="text-gray-800 font-medium">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Full Name"
                className="rounded px-4 py-2 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-900 placeholder-gray-900 text-base sm:text-lg"
                required
                value={form.fullName}
                onChange={e => setForm({ ...form, fullName: e.target.value })}
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-gray-800 font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="rounded px-4 py-2 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-900 placeholder-gray-900 text-base sm:text-lg"
                required
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            {/* Password */}
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="password" className="text-gray-800 font-medium">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                minLength={6}
                className="rounded px-4 py-2 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-900 placeholder-gray-900 text-base sm:text-lg pr-10"
                required
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
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
            {/* Confirm Password */}
            <div className="flex flex-col gap-1 relative">
              <label htmlFor="confirmPassword" className="text-gray-800 font-medium">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                minLength={6}
                className="rounded px-4 py-2 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-900 placeholder-gray-900 text-base sm:text-lg pr-10"
                required
                value={form.confirmPassword}
                onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-3 mt-12 -translate-y-1/2 text-gray-700"
                tabIndex={-1}
                onClick={() => setShowConfirm((prev) => !prev)}
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {/* Role */}
            <div className="flex flex-col gap-1">
              <label htmlFor="role" className="text-gray-800 font-medium">
                Role
              </label>
              <select
                id="role"
                className="rounded px-4 py-2 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-900 text-base sm:text-lg"
                required
                value={form.role}
                onChange={e => setForm({ ...form, role: e.target.value })}
              >
                <option value="">Select Role</option>
                <option value="Farmer">Farmer</option>
                <option value="Buyer">Buyer</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="bg-gradient-to-r from-lime-600 to-green-700 text-white rounded px-4 py-2 font-semibold hover:from-green-700 hover:to-lime-600 transition text-base sm:text-lg shadow-lg"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center text-sm text-gray-100">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-900 font-bold hover:underline"
            >
              Login
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signup;