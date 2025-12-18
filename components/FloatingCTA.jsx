"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50 group cursor-pointer"
        >
          <div className="flex flex-col gap-4 items-end">
            {/* Register Now Button */}
            <a href="https://forms.gle/TdmiUVUeHpajcLgV7" target="_blank" rel="noopener noreferrer">
              <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Button Content */}
                  <div className="relative bg-base-100/90 backdrop-blur-xl border border-primary/30 hover:border-primary text-base-content py-2 px-5 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all transform group-hover:scale-105 group-hover:-translate-y-1 min-w-[120px]">
                      <span className="text-[9px] uppercase font-bold tracking-wider opacity-60">Limited Seats</span>
                      <span className="text-sm font-black gradient-text">Register Now</span>
                  </div>
              </div>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
