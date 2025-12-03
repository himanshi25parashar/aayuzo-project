// import React from "react";
import "../styles/featuredServices.css";
import bridalImg from "../assets/glam.jpg";
import makeupImg from "../assets/red-carpet.jpg";
import React, { useEffect } from "react";


const FeaturedServices = () => {
    useEffect(() => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  return () => {
    cards.forEach((card) => observer.unobserve(card));
  };
}, []);

  return (
    // ✅ Added unified luxury styling wrapper
    <section className="luxury-section featured-section">
      <div className="featured-container">
        {/* Premium Heading */}
        <h2 className="featured-heading premium-heading">
          Discover Your <span>Signature Look</span>
        </h2>

        {/* Gold Underline */}
        <div className="premium-underline"></div>

        {/* Subheading */}
        <p className="featured-sub">
          Your beauty, your style — discover salons that perfect your signature look.
        </p>

        {/* Services Grid */}
        <div className="services-grid">
          {/* Makeup Service */}
          <div className="service-card">
            {/* Gold sparkle overlay */}
            <div className="sparkle-overlay"></div>

            <img
              src={makeupImg}
              alt="Makeup Service"
              className="service-img"
            />

            <div className="service-content">
              <h3>Red-Carpet Ready Looks</h3>
              <p>
                Indulge in makeup artistry designed for premium occasions & exclusive events.
              </p>
              <a href="/salons?service=makeup" className="service-btn">
                View Salons →
              </a>
            </div>
          </div>

          {/* Bridal Makeup Service */}
          <div className="service-card">
            <div className="sparkle-overlay"></div>

            <img
              src={bridalImg}
              alt="Bridal Makeup"
              className="service-img"
            />

            <div className="service-content">
              <h3>Timeless Bridal Beauty</h3>
              <p>
                Discover elite artists crafting exquisite bridal transformations with perfection.
              </p>
              <a href="/salons?service=bridal-makeup" className="service-btn">
                View Salons →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
