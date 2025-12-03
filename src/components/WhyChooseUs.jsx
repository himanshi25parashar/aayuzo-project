import React from "react";
import {motion} from "framer-motion";
import Slider from "react-slick";
import {FiStar, FiShield, FiUsers, FiCheckCircle} from "react-icons/fi";
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

    const settings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  adaptiveHeight: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // Tablet
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 1, // ✅ Important
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px", // ✅ Prevents clipping
      },
    },
  ],
};


    return (
        <section className="why-premium-section relative py-24 px-6 text-white overflow-hidden">
            <div className="gold-glow"></div>

            <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="max-w-6xl mx-auto text-center"
            >
                <h2 className="why-heading">
                    Why Choose <span>Aayuzo</span>
                </h2>
                <div className="divider"></div>
                <p className="why-sub">
                    We redefine luxury beauty by combining trust, technology, and timeless style. Discover why thousands
                    choose Aayuzo for their glow.
                </p>
            </motion.div>

            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.5, duration: 1.2}}
                className="max-w-6xl mx-auto mt-16 px-4"
            >
                <Slider {...settings}>
                    {features.map((item, i) => (
                        <div key={i} className="px-2 sm:px-4 h-full">
                            <motion.div
                                whileHover={{scale: 1.05}}
                                className="feature-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between text-center"
                            >
                                <div className="icon-wrapper mb-4">{item.icon}</div>
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-desc">{item.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </motion.div>
        </section>
    );
};

export default WhyChooseUs;
