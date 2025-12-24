import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MinimalNavbar from "./components/Navbar/MinimalNavbar";
import Footer from "./components/Footer/Footer";
import MinimalFooter from "./components/Footer/MinimalFooter";
import ScrollToTop from "./components/ScrollToTop.jsx";

// ✅ Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Services from "./pages/Services.jsx";
import SalonList from "./pages/SalonList";
import SalonRegister from "./pages/SalonRegister";
import SalonLogin from "./pages/SalonLogin";
import ShareStory from "./pages/ShareStory.jsx";

function App() {
  const location = useLocation();

  // ✅ Define routes for minimal UI pages
  const minimalRoutes = ["/salon-register", "/salon-login", "/share-story"];
  const isMinimalPage = minimalRoutes.includes(location.pathname);

  return (
    <>
      {/* ✅ Conditional Navbar */}
      {isMinimalPage ? <MinimalNavbar /> : <Navbar />}

      {/* ✅ Scroll to top on route change */}
      <ScrollToTop />

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-salon" element={<SalonList />} />
        <Route path="/salon-register" element={<SalonRegister />} />
        <Route path="/salon-login" element={<SalonLogin />} />
        <Route path="/share-story" element={<ShareStory />} />
      </Routes>

      {/* ✅ Conditional Footer */}
      {isMinimalPage ? <MinimalFooter /> : <Footer />}
    </>
  );
}

export default App;
