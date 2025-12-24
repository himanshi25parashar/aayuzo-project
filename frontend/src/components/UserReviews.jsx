import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/UserReviews.css";
import { FiStar } from "react-icons/fi";

import review1 from "../assets/bridal.jpg";
import review2 from "../assets/bridal.jpg";
import review3 from "../assets/bridal.jpg";
import review4 from "../assets/bridal.jpg";
import review5 from "../assets/bridal.jpg";

const reviews = [
  {
    id: 1,
    name: "Ananya Mehta",
    role: "Bridal Client",
    text: "Aayuzo made my bridal look absolutely magical — calm, professional, and flawless.",
    rating: 5,
    image: review1,
  },
  {
    id: 2,
    name: "Rohan Sharma",
    role: "Salon Partner",
    text: "Partnering with Aayuzo helped my salon connect with high-end clients. Exceptional platform!",
    rating: 5,
    image: review2,
  },
  {
    id: 3,
    name: "Isha Kapoor",
    role: "Makeup Enthusiast",
    text: "Every appointment through Aayuzo feels premium and effortless. Highly recommended!  Every appointment through Aayuzo feels premium and effortless. Highly recommended!",
    rating: 4,
    image: review3,
  },
  {
    id: 4,
    name: "Simran Kaur",
    role: "Bride-to-be",
    text: "From booking to styling — Aayuzo made every moment feel like royalty.",
    rating: 5,
    image: review4,
  },
  {
    id: 5,
    name: "Nikhil Verma",
    role: "Corporate Professional",
    text: "Luxury, professionalism, and class — that’s Aayuzo for me.",
    rating: 5,
    image: review5,
  },
];

const UserReviews = () => {
  return (
    <section className="reviews-slider-section">
      <motion.div
        className="reviews-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="reviews-title">Glow Stories by Aayuzo</h2>
        <p className="reviews-sub">
          Discover how Aayuzo transforms every beauty experience into a story of
          elegance, trust, and luxury.
        </p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1.3}
        centeredSlides
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3.2 },
        }}
        className="reviewsSwiper"
      >
        {reviews.map((rev) => (
          <SwiperSlide key={rev.id}>
            <motion.div
              className="review-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="review-image">
                <img src={rev.image} alt={rev.name} />
              </div>
              <div className="review-info">
                <h3>{rev.name}</h3>
                <p className="role">{rev.role}</p>
                <div className="stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FiStar key={i} />
                  ))}
                </div>
                <p className="text">“{rev.text}”</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        className="reviews-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="/share-story" className="cta-btn">
          Join the Aayuzo Story →
        </a>
      </motion.div>
    </section>
  );
};

export default UserReviews;




