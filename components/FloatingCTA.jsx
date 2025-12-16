"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaTimes } from "react-icons/fa";

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
          <Link href="/courses">
            <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Button Content */}
                <div className="relative bg-base-100/90 backdrop-blur-xl border border-primary/30 hover:border-primary text-base-content py-2 pl-2 pr-6 rounded-full flex items-center gap-3 shadow-2xl transition-all transform group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="bg-gradient-to-tr from-primary to-secondary w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
                    <FaRocket className="text-xl animate-bounce-subtle" />
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Limited Seats</span>
                        <span className="text-md font-black gradient-text">Register Now</span>
                    </div>
                </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
