// src/components/BackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../styles/BackButton.css";

const BackButton = ({ position = "fixed" }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // ✅ Step-by-step back navigation
  };

  return (
    <button
      className={`back-button ${position === "absolute" ? "absolute-btn" : ""}`}
      onClick={handleBack}
      aria-label="Go Back"
    >
      <FiArrowLeft className="back-icon" />
      <span className="back-text">Back</span>
    </button>
  );
};

export default BackButton;
