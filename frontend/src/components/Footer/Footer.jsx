import React from "react";
import {Link} from "react-router-dom";
import {FiFacebook, FiInstagram, FiMail, FiPhone} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/PNG.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="luxury-footer">
            {/* Decorative glow or sparkle overlay */}
            <div className="sparkle-overlay"></div>

            {/* Main Footer Content */}
            <div className="footer-container">
                {/* Brand Info */}
                <div className="footer-col">
                    <img src={logo} alt="Aayuzo" className="footer-logo" />
                    <p className="footer-desc">
                        Your trusted destination for premium beauty, grooming & luxury salon experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li>
                            <Link to="/" className="footer-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="footer-link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience" className="footer-link">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="footer-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Partner Section */}
                <div className="footer-col">
                    <h4 className="footer-heading">Partner with Us</h4>
                    <p className="footer-desc">
                        Own a salon? Join our exclusive partner network and grow your business with Aayuzo.
                    </p>
                    <a href="/salon-register" className="footer-button">
                        Join as a Partner →
                    </a>
                </div>

                {/* Contact & Socials */}
                <div className="footer-col">
                    <h4 className="footer-heading">Connect</h4>
                    <div className="footer-contact">
                        <p>
                            <FiMail className="footer-icon" /> Contact@aayuzo.com
                        </p>
                        <p>
                            <FiPhone className="footer-icon" /> +91 9528227124
                        </p>
                    </div>

                    <div className="footer-socials">
                        <a href="https://www.facebook.com/share/17oPzkv66q/" className="social-link">
                            <FiFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/aayuzo_official/?fbclid=IwY2xjawOmV9BleHRuA2FlbQIxMQBicmlkETFEWUpUY2hHaDNrWUJmdUFEc3J0YwZhcHBfaWQBMAABHlZKgLS0W_HA1rOprY19jSA0DBEfnTbGqnqKJpEShCc24a1ssLTCC_FjpCHV_aem_EbbDA7lp9xmIKsqqGY1W-g&brid=aZCW6HYnvC0oU3WwTue1ZA"
                            className="social-link"
                        >
                            <FiInstagram />
                        </a>
                        <a
                            href="https://wa.me/9528227124?text=Hello%20Aayuzo!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            title="Chat on WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                © {new Date().getFullYear()} <span className="brand">Aayuzo</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
