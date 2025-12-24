import React, { useState } from "react";
import "../styles/SalonRegister.css";
import bgImage from "../assets/background2.jpg";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const SalonRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://aayuzo.com/api/register_salon.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  // ✅ Redirect when switched ON
  const handleToggle = () => {
    setIsLogin(!isLogin);
    if (!isLogin) {
      setTimeout(() => navigate("/salon-login"), 400);
    }
  };

  return (
    <>
      <section
        className="salon-register-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="salon-overlay"></div>
        <div className="gold-glow"></div>
            <BackButton />
        <div className="salon-register-container">
          <h2 className="register-title">
            Register Your <span>Salon</span>
          </h2>
          <p className="register-sub">
            Join Aayuzo’s exclusive luxury network and connect with high-value clients
          </p>

          <form className="salon-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Salon Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Salon Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="register-btn">
              ✨ Register Now
            </button>
          </form>

          {/* ✅ Golden Switch for Login Navigation */}
          <div className="login-toggle-container">
            <label className="toggle-switch">
              <input type="checkbox" checked={isLogin} onChange={handleToggle} />
              <span className="slider"></span>
            </label>
            <span className="toggle-text">
              {isLogin ? "Redirecting to Login..." : "Switch ON to Login"}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalonRegister;
