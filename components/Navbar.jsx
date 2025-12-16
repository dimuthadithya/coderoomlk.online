"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

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
      isScrolled ? "bg-base-100/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
    }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-xl" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-medium">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <motion.a
          href="#home"
          className="btn btn-ghost text-xl lg:text-2xl font-bold normal-case"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">CodeRoom</span>
          <span className="text-pink-500">.Online</span>
        </motion.a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        {/* Theme Toggler */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 menu">
            <li className="menu-title">
              <span>Choose Theme</span>
            </li>
            <li><button data-set-theme="light" data-act-class="active">🌞 Light</button></li>
            <li><button data-set-theme="dark" data-act-class="active">🌙 Dark</button></li>
            <li><button data-set-theme="synthwave" data-act-class="active">🌆 Synthwave</button></li>
            <li><button data-set-theme="cyberpunk" data-act-class="active">🤖 Cyberpunk</button></li>
            <li><button data-set-theme="valentine" data-act-class="active">💖 Valentine</button></li>
            <li><button data-set-theme="aqua" data-act-class="active">🌊 Aqua</button></li>
          </ul>
        </div>

        <motion.a
          href="#contact"
          className="btn btn-primary btn-sm lg:btn-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.a>
      </div>
    </div>
  );
}
