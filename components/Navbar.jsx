"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState('night');

  useEffect(() => {
    // Check local storage or default to night
    const savedTheme = localStorage.getItem('theme') || 'night';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? 'winter' : 'night';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
    
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-primary">
          CodeRoom<span className="text-secondary">.Online</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
          </li>
          <li>
            <a href="#courses" className="hover:text-primary transition-colors">Courses</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <label className="swap swap-rotate btn btn-ghost btn-circle text-primary">
          <input 
            type="checkbox" 
            onChange={toggleTheme} 
            checked={theme === 'winter'}
          />

          {/* sun icon (Winter/Light) */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,5.64,7.05Zm12,1.41a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,17.64,8.46Zm1.06,10.61a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM21,12a1,1,0,0,0-1-1H19a1,1,0,0,0,0,2h1A1,1,0,0,0,21,12ZM12,17a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V18A1,1,0,0,0,12,17Zm-5-5a5,5,0,1,1,5,5A5,5,0,0,1,7,12Z" />
          </svg>

          {/* moon icon (Night/Dark) */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <a
          href="https://wa.me/YOUR_NUMBER"
          className="btn btn-primary btn-sm md:btn-md hidden sm:flex"
        >
          Join WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Navbar;
