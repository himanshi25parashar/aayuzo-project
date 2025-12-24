import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiStar, FiShield, FiUsers, FiCheckCircle } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "../styles/whyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiShield />,
      title: "Verified & Trusted Salons",
      desc: "Every salon on Aayuzo is verified for safety, hygiene, and professionalism — ensuring you total peace of mind.",
    },
    {
      icon: <FiStar />,
      title: "Top-Rated Professionals",
      desc: "Our experts are handpicked for excellence, artistry, and years of professional luxury salon experience.",
    },
    {
      icon: <FiUsers />,
      title: "Personalized Experience",
      desc: "From luxury makeovers to bridal perfection, every service is tailored for your unique beauty style.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Luxury You Can Trust",
      desc: "Enjoy premium certified salon services — where quality meets comfort, every single time.",
    },
  ];

  return (
    <section className="why-premium-section relative py-24 px-6 text-white overflow-hidden">
      <div className="gold-glow"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="why-heading">
          Why Choose <span>Aayuzo</span>
        </h2>
        <div className="divider"></div>
        <p className="why-sub">
          We redefine luxury beauty by combining trust, technology, and timeless
          style. Discover why thousands choose Aayuzo for their glow.
        </p>
      </motion.div>

      {/* Swiper Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="max-w-6xl mx-auto mt-16 px-4"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {features.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="feature-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between text-center"
              >
                <div className="icon-wrapper mb-4">{item.icon}</div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
