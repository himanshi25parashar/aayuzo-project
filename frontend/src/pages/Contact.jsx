import React from "react";
import {motion} from "framer-motion";
import {FiMail, FiPhone, FiMapPin} from "react-icons/fi";
import BackButton from "../components/BackButton";
import "../styles/contact.css";

const Contact = () => {
    return (
        <section className="contact-section relative overflow-hidden">
            {/* Soft golden glow */}
            <div className="contact-glow"></div>
            <BackButton />
            {/* Header */}
            <motion.div
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="contact-header text-center"
            >
                <h2 className="contact-heading">
                    Get in Touch with <span>Aayuzo</span>
                </h2>
                <div className="divider"></div>
                <p className="contact-sub">
                    Have a question, feedback, or partnership idea? Our team would love to hear from you. Let’s make
                    luxury beauty more accessible — together.
                </p>
            </motion.div>

            {/* Contact Content */}
            <div className="contact-container">
                {/* Left: Contact Details */}
                <motion.div
                    className="contact-info"
                    initial={{opacity: 0, x: -40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                >
                    <h3>Contact Information</h3>
                    <p>
                        Whether you’re a salon partner, customer, or simply curious about Aayuzo — we’re here to help
                        you find your perfect glow.
                    </p>

                    <div className="contact-details">
                        <p>
                            <FiMail className="icon" /> Contact@aayuzo.com
                        </p>
                        <p>
                            <FiPhone className="icon" /> +91 9528227124
                        </p>
                        {/* <p>
                            <FiMapPin className="icon" /> Mumbai, Maharashtra, India
                        </p> */}
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.form
                    className="contact-form"
                    initial={{opacity: 0, x: 40}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="form-group">
                        <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message →
                    </button>
                </motion.form>
            </div>

            {/* Support Section */}
            <section className="support-section">
                <div className="support-overlay"></div>

                <h3>Need Assistance or Have Questions?</h3>
                <p>
                    Our Aayuzo support team is here to help — whether it’s booking inquiries, feedback, or partnership
                    discussions, we ensure every interaction feels seamless and premium.
                </p>
                <a
                    href="https://wa.me/9528227124?text=Hello%20Aayuzo!%20I%20need%20some%20help%20regarding%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="support-btn"
                >
                    Chat on WhatsApp →
                </a>
            </section>
        </section>
    );
};

export default Contact;
