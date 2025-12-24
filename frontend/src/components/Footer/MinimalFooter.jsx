import React from "react";
import "./MinimalFooter.css";

const MinimalFooter = () => {
  return (
    <footer className="minimal-footer">
      <div className="minimal-footer-container">
        <p>© 2025 <span className="brand">Aayuzo</span>. All Rights Reserved.</p>
        <div className="minimal-footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
