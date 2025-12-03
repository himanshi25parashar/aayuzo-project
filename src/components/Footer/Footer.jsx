import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone } from "react-icons/fi";
import logo from "../../assets/PNG.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="luxury-footer relative text-white">
      {/* Sparkle overlay for subtle golden animation */}
      <div className="sparkle-overlay"></div>

      {/* Footer content container */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Section */}
        <div>
          <img src={logo} alt="Aayuzo" className="h-14 mb-5" />
          <p className="text-gray-300 text-[15px] leading-relaxed font-light">
            Your trusted destination for premium beauty, grooming & luxury salon experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="space-y-2 mt-4 text-gray-400 text-[15px]">
            {["Home", "Salons", "Services", "Contact"].map((link, i) => (
              <li
                key={i}
                className="hover:text-[#F5C86B] transition duration-300 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Partner Section */}
        <div>
          <h4 className="footer-heading">Partner with Us</h4>
          <p className="text-gray-300 mt-4 text-[15px] leading-relaxed font-light">
            Own a salon? Join our exclusive partner network and grow your business.
          </p>
          <a
            href="/salon-register"
            className="inline-block mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9E8A3] via-[#F5C86B] to-[#D89B28] text-black font-semibold text-[15px] shadow-md transition-transform hover:scale-105 hover:shadow-[#f5c86b]/40"
          >
            Join as a Partner →
          </a>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="footer-heading">Connect</h4>
          <div className="mt-4 space-y-2 text-gray-300 text-[15px]">
            <p className="flex items-center gap-2">
              <FiMail className="text-[#F5C86B]" /> support@aayuzo.com
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-[#F5C86B]" /> +91 98765 43210
            </p>
          </div>

          <div className="flex gap-5 mt-6 text-xl">
            {[FiFacebook, FiInstagram, FiTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-[#F5C86B] transition transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2e2b22] text-center py-5 text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#F5C86B] font-medium">Aayuzo</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
