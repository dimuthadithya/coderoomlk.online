"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPalette } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState('synthwave');

  const themes = [
    { name: 'synthwave', label: 'Synthwave', color: 'bg-gradient-to-r from-pink-500 to-purple-600' },
    { name: 'night', label: 'Night', color: 'bg-gradient-to-r from-blue-900 to-slate-900' },
    { name: 'dracula', label: 'Dracula', color: 'bg-gradient-to-r from-purple-900 to-pink-900' },
    { name: 'cyberpunk', label: 'Cyberpunk', color: 'bg-gradient-to-r from-yellow-400 to-pink-500' },
    { name: 'forest', label: 'Forest', color: 'bg-gradient-to-r from-green-700 to-emerald-900' },
    { name: 'luxury', label: 'Luxury', color: 'bg-gradient-to-r from-amber-600 to-yellow-500' },
    { name: 'winter', label: 'Winter', color: 'bg-gradient-to-r from-blue-400 to-cyan-300' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'synthwave';
    console.log('Loading theme:', savedTheme);
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (newTheme) => {
    console.log('Changing theme to:', newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
    
  return (
    <div className="navbar bg-base-100/90 backdrop-blur-xl fixed top-0 z-50 shadow-2xl border-b border-base-300">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52"
          >
            <li><a href="#about" className="text-base">About</a></li>
            <li><a href="#courses" className="text-base">Courses</a></li>
            <li><a href="#testimonials" className="text-base">Testimonials</a></li>
            <li><a href="#contact" className="text-base">Contact</a></li>
          </ul>
        </div>
        <motion.a 
          href="#"
          className="btn btn-ghost text-xl lg:text-2xl font-black"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CodeRoom
          </span>
          <span className="text-accent">.Online</span>
        </motion.a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-base gap-2">
          <li>
            <a href="#about" className="hover:text-primary transition-all duration-300">About</a>
          </li>
          <li>
            <a href="#courses" className="hover:text-primary transition-all duration-300">Courses</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-primary transition-all duration-300">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition-all duration-300">Contact</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost btn-circle tooltip tooltip-bottom"
            data-tip="Change Theme"
          >
            <FaPalette className="text-xl text-primary" />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow-2xl bg-base-100 rounded-box w-64 mt-4 border border-base-300 max-h-96 overflow-y-auto">
            <li className="mb-2 px-2 font-bold text-sm opacity-60">Choose Theme</li>
            {themes.map((t) => (
              <li key={t.name}>
                <button
                  onClick={() => changeTheme(t.name)}
                  className={`w-full text-left p-3 rounded-lg hover:bg-base-200 transition-all flex items-center gap-3 ${
                    theme === t.name ? 'bg-base-200 ring-2 ring-primary' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full ${t.color} shadow-lg`}></div>
                  <span className="font-semibold">{t.label}</span>
                  {theme === t.name && <span className="ml-auto text-primary">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <a
          href="https://wa.me/YOUR_NUMBER"
          className="btn btn-primary btn-sm md:btn-md hidden sm:flex gap-2 shadow-lg hover:shadow-xl transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Join WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Navbar;
