import { ArrowDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./Portfolio.css";

import bg1 from "@/portfoliopics/newest/IMG20260328100201.jpg";
import bg2 from "@/portfoliopics/newest/IMG20260328101133.jpg";
import bg3 from "@/portfoliopics/newest/IMG20260328121219.jpg";
import bg4 from "@/portfoliopics/newest/IMG_20260328_145741 (1).jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentBg}
            src={backgrounds[currentBg]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(20%) sepia(10%) hue-rotate(130deg) brightness(80%)'
            }}
          />
        </AnimatePresence>
      </div>

      <div className="hero-background" style={{ zIndex: 1 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="hero-content" style={{ zIndex: 2, position: 'relative' }}>
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Sparkles size={16} style={{ color: '#10b981' }} />
          <span style={{ color: '#22d3ee', fontSize: '0.875rem', fontWeight: 500 }}>Software Engineer & Architect</span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ fontWeight: 800, letterSpacing: '-0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
        >
          Innovating with <span className="glow-text">AI</span> & Code.<br/>
          Building Secure Digital Ecosystems.
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ color: '#10b981', fontWeight: 600, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
        Piyush Kumar | Full Stack & AI Developer
        </motion.p>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          style={{ maxWidth: '650px', fontSize: '1.25rem', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
        >
          Passionate about building intelligent, secure, and scalable solutions. From advanced cybersecurity systems to AI-powered civic platforms, I deliver high-performance applications that make a real-world impact.
        </motion.p>

        <motion.button 
          onClick={scrollToAbout} 
          className="cta-button"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
        >
          <span>View Projects</span>
          <ArrowDown size={20} className="arrow-icon" />
        </motion.button>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ zIndex: 2 }}
      >
        <div className="scroll-dot"></div>
      </motion.div>
    </section>
  );
}
