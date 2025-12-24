import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiCheckCircle, FiStar } from "react-icons/fi";
import BackButton from "../components/BackButton";
import "../styles/salonList.css";

const salons = [
  {
    id: 1,
    name: "Luxe Glow Studio",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    verified: true,
    image: "/images/about1.jpg",
  },
  {
    id: 2,
    name: "Golden Mirror Lounge",
    location: "Delhi, India",
    rating: 4.7,
    verified: true,
    image: "/images/about2.jpg",
  },
  {
    id: 3,
    name: "The Velvet Chair",
    location: "Bangalore, Karnataka",
    rating: 4.9,
    verified: true,
    image: "/images/about3.jpg",
  },
  {
    id: 4,
    name: "Aurum Beauty Bar",
    location: "Pune, Maharashtra",
    rating: 4.6,
    verified: true,
    image: "/images/about4.jpg",
  },
];

const SalonList = () => {
  return (
    <section className="salon-list-section">
      <div className="gold-overlay"></div>
      <BackButton />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="salon-header"
      >
        <h2 className="salon-heading">
          Discover <span>Verified Salons</span>
        </h2>
        <div className="divider"></div>
        <p className="salon-sub">
          Explore our trusted network of premium, verified salons and find the perfect match for your beauty journey.
        </p>
      </motion.div>

      {/* Salon Cards */}
      <div className="salon-grid">
        {salons.map((salon, i) => (
          <motion.div
            key={salon.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="salon-card"
          >
            <div className="salon-image">
              <img src={salon.image} alt={salon.name} />
              {salon.verified && (
                <span className="verified-badge">
                  <FiCheckCircle /> Verified
                </span>
              )}
            </div>
            <div className="salon-content">
              <h3>{salon.name}</h3>
              <p className="salon-location">
                <FiMapPin /> {salon.location}
              </p>
              <div className="salon-rating">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FiStar
                      key={index}
                      className={index < Math.round(salon.rating) ? "filled-star" : ""}
                    />
                  ))}
                <span>{salon.rating}</span>
              </div>
              <a href="/contact" className="book-btn">
                Book Now →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SalonList;
