"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaPalette } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#courses", label: "Courses" },
    { href: "#testimonials", label: "Success Stories" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={`navbar fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-card shadow-lg" : "bg-transparent"
    }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-xl" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl glass-card rounded-box w-52">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-medium text-base-content hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <motion.a
          href="#home"
          className="btn btn-ghost text-xl lg:text-2xl font-black normal-case"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">CodeRoom</span>
          <span className="text-accent">.Online</span>
        </motion.a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="text-base-content hover:text-primary hover:bg-primary/10 transition-all rounded-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        {/* Enhanced Theme Toggler */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-primary/10 hover:text-primary transition-all">
            <FaPalette className="text-xl" />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow-2xl glass-card rounded-box w-56 mt-4 menu gap-1">
            <li className="menu-title px-3 py-2">
              <span className="text-primary font-bold">Choose Theme</span>
            </li>
            <li>
              <button data-set-theme="light" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">☀️</span>
                <span className="flex-1">Light</span>
              </button>
            </li>
            <li>
              <button data-set-theme="dark" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">🌙</span>
                <span className="flex-1">Dark</span>
              </button>
            </li>
            <li>
              <button data-set-theme="synthwave" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">🌆</span>
                <span className="flex-1">Synthwave</span>
              </button>
            </li>
            <li>
              <button data-set-theme="cyberpunk" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">🤖</span>
                <span className="flex-1">Cyberpunk</span>
              </button>
            </li>
            <li>
              <button data-set-theme="valentine" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">💖</span>
                <span className="flex-1">Valentine</span>
              </button>
            </li>
            <li>
              <button data-set-theme="aqua" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">🌊</span>
                <span className="flex-1">Aqua</span>
              </button>
            </li>
            <li>
              <button data-set-theme="forest" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">🌲</span>
                <span className="flex-1">Forest</span>
              </button>
            </li>
            <li>
              <button data-set-theme="luxury" className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                <span className="text-xl">💎</span>
                <span className="flex-1">Luxury</span>
              </button>
            </li>
          </ul>
        </div>

        <motion.a
          href="#contact"
          className="btn btn-primary btn-sm lg:btn-md gap-2 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="hidden sm:inline">Join Now</span>
          <span className="sm:hidden">Join</span>
        </motion.a>
      </div>
    </div>
  );
}
