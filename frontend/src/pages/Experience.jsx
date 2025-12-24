import React from "react";
import {motion} from "framer-motion";
import {FiUserPlus, FiSearch, FiPackage, FiHeart} from "react-icons/fi";
import "../styles/experience.css";
import BackButton from "../components/BackButton";

const Experience = () => {
    const process = [
        {
            icon: <FiUserPlus />,
            title: "Join Aayuzo",
            desc: "Step into the world of luxury. Sign up or explore instantly to unlock access to verified premium salons near you.",
        },
        {
            icon: <FiSearch />,
            title: "Search Salons",
            desc: "Find trusted, top-rated salons tailored to your style, location, and beauty goals — all verified for quality and safety.",
        },
        {
            icon: <FiPackage />,
            title: "Select Packages",
            desc: "Choose from curated beauty packages designed for every occasion — from daily glow-ups to bridal luxury.",
        },
        {
            icon: <FiHeart />,
            title: "Enjoy Experience",
            desc: "Relax and indulge at your chosen salon. Experience luxury, comfort, and artistry — every single time.",
        },
    ];

    return (
        <section className="experience-section">
            <div className="gold-overlay"></div>
            <BackButton />
            {/* Header */}
            <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="experience-header"
            >
                <h2 className="experience-heading">
                    Your <span>Aayuzo Journey</span>
                </h2>
                <div className="divider"></div>
                <p className="experience-sub">
                    From discovery to indulgence — here’s how you experience luxury with Aayuzo.
                </p>
            </motion.div>

            {/* Process Steps */}
            <div className="process-container">
                {process.map((step, i) => (
                    <motion.div
                        key={i}
                        className="process-card"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: i * 0.2, duration: 0.8}}
                    >
                        <span className="step-label">Step {i + 1}</span>
                        <div className="process-icon">{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>

                        {/* Gold line connector */}
                        {i < process.length - 1 && <span className="line-connector"></span>}
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.5, duration: 1}}
                className="cta-section"
            >
                <h3>Begin Your Glow Journey Today</h3>
                <a href="/salons" className="cta-button">
                     Get Started →
                </a>
            </motion.div>
        </section>
    );
};

export default Experience;
