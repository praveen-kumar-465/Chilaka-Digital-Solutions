import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Studio from "./components/Studio";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Videos from "./components/Videos";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";
import OurServices from "./components/OurServices";


const Reveal = ({ children, direction = "left", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const initial = direction === "right" ? "translate-x-12" : direction === "up" ? "translate-y-8" : "-translate-x-12";
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${initial}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Reveal direction="left"><Hero /></Reveal>
      <Reveal direction="right"><About /></Reveal>
      <Reveal direction="left"><OurServices /></Reveal>
      <Reveal direction="right"><Studio /></Reveal>
      <Reveal direction="left"><Portfolio /></Reveal>
      <Reveal direction="right"><Reviews /></Reveal>
      <Footer />
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <OurServices />
      <Footer />
    </div>
  );
};

const AboutPageComponent = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <AboutPage />
      <Footer />
    </div>
  );
};

function App() {
  const whatsappNumber = "918919170320"; // +91 8919170320
  const defaultMessage = encodeURIComponent(
    "Hello! I’m interested in your services. Could you provide more details?"
  );
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPageComponent />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        {/* Floating WhatsApp button shown on all pages */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center w-12 h-12 transition transform hover:scale-105 focus:outline-none"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            alt="WhatsApp"
            className="w-12 h-12"
            loading="lazy"
          />
        </a>
      </BrowserRouter>
    </div>
  );
}

export default App;
