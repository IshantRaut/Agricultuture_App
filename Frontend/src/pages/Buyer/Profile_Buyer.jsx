import React, { useState, useEffect } from "react";

const Profile_Buyer = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(profile);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message
  const [loading, setLoading] = useState(false); // Loading state for Save button

  // Fetch profile from backend on mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/api/auth/profile`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (res.ok) {
          setProfile(data);
          setForm(data);
        } else {
          setError(data.message || "Failed to fetch profile");
        }
      } catch (err) {
        setError("Server error", err.message);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    setForm(profile);
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update profile in backend
  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/api/auth/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setProfile(data);
        setEditMode(false);
        setSuccess("Profile updated successfully!");
        setError("");
      } else {
        setError(data.message || "Failed to update profile");
      }
    } catch (err) {
      setError("Server error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 font-nunito">
      <h2 className="text-3xl font-bold text-green-700 mb-6">My Profile</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-600 mb-4">{success}</div>}
      {!editMode ? (
        <div>
          <div className="mb-4">
            <span className="font-semibold text-green-800">Name: </span>
            {profile.fullName || <span className="text-gray-400">Not set</span>}
          </div>
          <div className="mb-4">
            <span className="font-semibold text-green-800">Email: </span>
            {profile.email || <span className="text-gray-400">Not set</span>}
          </div>
          <button
            onClick={() => setEditMode(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-700">
              Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-600 focus:ring-green-600"
              required
              readOnly
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditMode(false);
                setForm(profile);
              }}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile_Buyer;