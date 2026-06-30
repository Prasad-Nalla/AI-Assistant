import { useState } from "react";
import { FaRobot, FaUserPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", formData);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#030712] via-[#111827] to-[#1F2937] flex items-center justify-center px-6">

      {/* Aurora Lights */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-[180px] animate-pulse"></div>

      <div className="absolute top-10 right-0 w-[450px] h-[450px] rounded-full bg-violet-500/20 blur-[180px] animate-pulse"></div>

      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-pink-400/15 blur-[180px] animate-pulse"></div>

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-10">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 flex items-center justify-center shadow-xl shadow-cyan-500/30">
            <FaRobot className="text-white text-4xl" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-10 leading-relaxed">
          Join AI Document Assistant and organize your documents intelligently.
        </p>

        <form onSubmit={handleRegister} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
          >
            <FaUserPlus />
            Create Account
          </button>

        </form>

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;