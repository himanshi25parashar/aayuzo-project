import React, { useState } from "react";
import "../styles/SalonLogin.css";
import bgImage from "../assets/background2.jpg";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import MinimalFooter from "../components/Footer/MinimalFooter";

const SalonLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [goRegister, setGoRegister] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://aayuzo.com/api/salon_login.php", {
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

  // 🔄 Toggle to Register Page
  const handleToggle = () => {
    setGoRegister(!goRegister);
    if (!goRegister) {
      setTimeout(() => navigate("/salon-register"), 400);
    }
  };

  return (
    <>
      <section
        className="salon-login-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="salon-overlay"></div>
        <div className="gold-glow"></div>
            <BackButton />
        <div className="salon-login-container">
          <h2 className="login-title">
            Welcome Back to <span>Aayuzo</span>
          </h2>
          <p className="login-sub">
            Login to manage your salon profile, services, and premium bookings 
          </p>

          <form className="salon-login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="login-btn">
              Login Now
            </button>
          </form>

          {/* Switch for Register */}
          <div className="register-toggle-container">
            <label className="toggle-switch">
              <input type="checkbox" checked={goRegister} onChange={handleToggle} />
              <span className="slider"></span>
            </label>
            <span className="toggle-text">
              {goRegister ? "Redirecting to Register..." : "Switch ON to Register"}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalonLogin;
