import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FiMenu, FiX, FiLogIn, FiUserPlus, FiUser, FiSearch} from "react-icons/fi";
import logo from "../../assets/PNG.png";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

  // ✅ Define functions BEFORE the return statement
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <img src={logo} alt="Aayuzo" className="h-14 md:h-16" />

                {/* Center Search (Always Visible on Mobile + Desktop) */}
                {/* Center Search (Desktop Only) */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="luxury-search-wrapper relative w-full max-w-md">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search salons or services..."
                            className="luxury-search-input bg-transparent text-white placeholder:text-gray-400"
                        />
                        <FiSearch
                            className="absolute right-16 top-1/2 transform -translate-y-1/2 text-[#cfa84a] text-xl cursor-pointer hover:text-[#f5d67b] transition-all duration-300"
                            onClick={handleSearch}
                            title="Search"
                        />
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 font-medium">
                    {["Home", "Salons", "Services", "Contact"].map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer transition bg-gradient-to-r from-[#F9E8A3] via-[#F5C86B] to-[#D89B28] bg-clip-text text-transparent hover:opacity-80"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Desktop Right Section */}
                <div className="hidden md:flex items-center space-x-6 relative">
                    {/* Account Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setAccountOpen(true)}
                        onMouseLeave={() => setAccountOpen(false)}
                    >
                        <button className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-[#F9E8A3] via-[#F5C86B] to-[#D89B28] bg-clip-text text-transparent hover:opacity-80 font-medium">
                            <FiUser className="text-lg" />
                            Account
                        </button>

                        {accountOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-[#d1b84b]/30 rounded-lg shadow-lg py-2">
                                <a
                                    href="/user-login"
                                    className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#F5C86B] transition"
                                >
                                    <FiLogIn /> Login
                                </a>
                                <a
                                    href="/user-register"
                                    className="flex items-center gap-2 px-4 py-2 text-white hover:text-[#F5C86B] transition"
                                >
                                    <FiUserPlus /> Register
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center space-x-3">
                    {/* Mobile Search Icon */}
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="text-white text-2xl focus:outline-none"
                    >
                        <FiSearch />
                    </button>

                    {/* Menu Icon */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar (below navbar) */}
            {searchOpen && (
                <div className="sm:hidden px-4 pb-3 animate-slideDown">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search salons or services..."
                            className="w-full px-4 py-2 rounded-full bg-white/90 text-black outline-none focus:ring-2 focus:ring-[#d8b44a] transition-all duration-300"
                        />
                        <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700" />
                    </div>
                </div>
            )}

            {/* Mobile Drawer Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-95 text-white px-6 py-6 space-y-6 z-50 transform transition-transform duration-500 ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
                style={{maxHeight: "100vh"}}
            >
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white text-2xl hover:text-[#F5C86B] transition"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col space-y-4 text-lg font-medium">
                    {["Home", "Salons", "Services", "Contact"].map((item, index) => (
                        <li
                            key={index}
                            className="cursor-pointer transition bg-gradient-to-r from-[#F9E8A3] via-[#F5C86B] to-[#D89B28] bg-clip-text text-transparent hover:opacity-80"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Mobile Account Section */}
                <div className="flex flex-col space-y-4 mt-6 text-lg font-medium">
                    <p className="text-[#F5C86B] font-semibold mb-2">User</p>
                    <a
                        href="/user-login"
                        className="flex items-center gap-2 cursor-pointer text-white hover:text-[#F5C86B]"
                    >
                        <FiLogIn className="text-lg" /> Login
                    </a>
                    <a
                        href="/user-register"
                        className="flex items-center gap-2 cursor-pointer text-white hover:text-[#F5C86B]"
                    >
                        <FiUserPlus className="text-lg" /> Register
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
