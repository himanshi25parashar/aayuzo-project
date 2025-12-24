import React from "react";
import logo from "../../assets/PNG.png";
import "./MinimalNavbar.css";

const MinimalNavbar = () => {
  return (
    <nav className="minimal-navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Aayuzo Logo" />
        </a>
      </div>
    </nav>
  );
};

export default MinimalNavbar;
