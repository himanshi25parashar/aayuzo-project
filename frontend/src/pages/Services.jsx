import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/services.css";
import BackButton from "../components/BackButton";
import {FiX, FiArrowRight} from "react-icons/fi";

import hairImg from "../assets/makup1.jpg";
import makeupImg from "../assets/bridal2.jpg";
import spaImg from "../assets/background1.jpg";
import groomingImg from "../assets/makup1.jpg";
import bridalImg from "../assets/red-carpet.jpg";

const services = [
    {
        id: 1,
        title: "Hair Styling",
        desc: "Transform your hair with expert stylists — precision cuts, color, and nourishing treatments designed for your unique look.",
        image: hairImg,
    },
    {
        id: 2,
        title: "Makeup Artistry",
        desc: "From bridal elegance to editorial glam — discover professional makeup experiences that enhance your beauty.",
        image: makeupImg,
    },
    {
        id: 3,
        title: "Spa & Wellness",
        desc: "Rejuvenate with luxury spa rituals, aroma therapies, and massages to calm your mind and soul.",
        image: spaImg,
    },
    {
        id: 4,
        title: "Men’s Grooming",
        desc: "Refined grooming experiences crafted for today’s gentleman — clean cuts, facials, and relaxation.",
        image: groomingImg,
    },
    {
        id: 5,
        title: "Bridal Beauty",
        desc: "Step into your big day with confidence. Our expert stylists ensure a flawless, radiant look.",
        image: bridalImg,
    },
];

const Services = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="services-section">
            <BackButton />
            {/* Hero Section */}
            <motion.div
                className="services-hero"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
            >
                <h1 className="services-title">Luxury Services</h1>
                <p className="services-sub">
                    Explore a world of premium beauty and grooming experiences curated by Aayuzo — where every service
                    is a statement of elegance.
                </p>
            </motion.div>

            {/* Circular Service Slider */}
            {/* Circular Service Slider */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={25}
                slidesPerView={1.4}
                centeredSlides
                pagination={{clickable: true}}
                autoplay={{delay: 4000, disableOnInteraction: false}}
                breakpoints={{
                    640: {slidesPerView: 2},
                    1024: {slidesPerView: 3.5},
                }}
                className="serviceSwiper"
            >
                {services.map((service) => (
                    <SwiperSlide key={service.id}>
                        <div className="service-item">
                            <motion.div
                                className="service-bubble"
                                whileHover={{scale: 1.08}}
                                transition={{type: "spring", stiffness: 200}}
                                onClick={() => setSelected(service)}
                            >
                                <div className="bubble-image-wrapper">
                                    <img src={service.image} alt={service.title} className="bubble-image" />
                                    <div className="bubble-overlay">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <a href="/salons" className="bubble-link">
                                            Explore <FiArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 🔥 Service name always visible below the circle */}
                            <p className="service-name">{service.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal for Mobile (Tap to View Details) */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="service-modal"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <motion.div
                            className="service-modal-content"
                            initial={{scale: 0.8}}
                            animate={{scale: 1}}
                            exit={{scale: 0.8}}
                            transition={{type: "spring", stiffness: 180}}
                        >
                            <button className="close-modal" onClick={() => setSelected(null)}>
                                <FiX />
                            </button>
                            <img src={selected.image} alt={selected.title} />
                            <h3>{selected.title}</h3>
                            <p>{selected.desc}</p>
                            <a href="/salons" className="modal-link">
                                Explore Services →
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA */}
            <div className="services-cta">
                <h3>Begin Your Glow Journey Today</h3>
                <a href="/Our-Salon" className="cta-btn">
                    Discover Salons →
                </a>
            </div>
        </section>
    );
};

export default Services;
