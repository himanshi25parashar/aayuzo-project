import React from "react";
import {motion} from "framer-motion";
import "../styles/about.css";
import BackButton from "../components/BackButton";

const About = () => {
    return (
        <section className="about-section">
            <div className="gold-overlay"></div>
             <BackButton />
            {/* Header */}
            <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="about-header text-center"
            >
                <h2 className="about-heading">
                    About <span>Aayuzo</span>
                </h2>
                <div className="divider"></div>
                <p className="about-sub">
                    Aayuzo isn’t just another salon platform — it’s a movement to bring trust, technology, and timeless
                    beauty together. We connect you with verified, top-rated salons that redefine the art of luxury
                    care.
                </p>
            </motion.div>

            {/* Story Section */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.5, duration: 1.2}}
                className="about-content"
            >
                <div className="about-text">
                    <h3>Our Story</h3>
                    <p>
                        Born from a passion for perfection, Aayuzo was created to make luxury beauty more accessible,
                        transparent, and trustworthy. Every salon that joins our platform goes through a strict
                        verification process — ensuring you receive only the best, safest, and most professional care.
                    </p>
                    <p>
                        We believe that self-care is not just a service, but an experience. Whether it’s your first
                        visit or your fiftieth, every Aayuzo salon partner promises consistency, artistry, and warmth.
                    </p>
                </div>

                <div className="about-image-wrapper">
                    <div className="bubble-cluster">
                        <div className="bubble bubble-large">
                            <img src="/images/about1.jpg" alt="Luxury salon" />
                        </div>
                        <div className="bubble bubble-medium">
                            <img src="/images/about2.jpg" alt="Beauty experience" />
                        </div>
                        <div className="bubble bubble-small">
                            <img src="/images/about3.jpg" alt="Makeover" />
                        </div>
                        <div className="bubble bubble-medium bubble-back">
                            <img src="/images/about4.jpg" alt="Bridal luxury" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Vision Section */}
            <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.4, duration: 1}}
                viewport={{once: true}}
                className="vision-section"
            >
                <h3>Our Vision</h3>
                <p>
                    To create a world where beauty professionals and customers meet in harmony — guided by trust, driven
                    by innovation, and inspired by luxury. Aayuzo isn’t just about booking a salon — it’s about
                    discovering your glow.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
