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
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Tooltip / Label */}
          <div className="bg-base-100 shadow-xl rounded-xl p-3 border border-primary/20 mb-2 relative hidden md:block">
             <p className="text-sm font-bold">New Batch Enrolling!</p>
             <div className="absolute -bottom-1 right-6 w-3 h-3 bg-base-100 border-b border-r border-primary/20 rotate-45"></div>
          </div>

          <Link href="/courses">
            <button className="btn btn-primary btn-lg rounded-full shadow-2xl gap-2 animate-bounce-subtle">
              <FaRocket /> 
              <span className="font-bold">Register Now</span>
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
