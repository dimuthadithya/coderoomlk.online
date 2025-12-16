"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
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
      <div className="navbar-end">
        <a
          href="https://wa.me/YOUR_NUMBER"
          className="btn btn-primary btn-sm md:btn-md"
        >
          Join WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Navbar;
