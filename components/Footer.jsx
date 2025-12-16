import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
      <div className="grid grid-flow-col gap-4 font-semibold">
        <a href="#about" className="link link-hover hover:text-primary transition-colors">About us</a>
        <a href="#courses" className="link link-hover hover:text-primary transition-colors">Courses</a>
        <a href="#testimonials" className="link link-hover hover:text-primary transition-colors">Testimonials</a>
        <a href="#contact" className="link link-hover hover:text-primary transition-colors">Contact</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300"><FaFacebook /></a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-600 hover:-translate-y-1 transition-all duration-300"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-600 hover:-translate-y-1 transition-all duration-300"><FaLinkedin /></a>
          <a href="#" className="hover:text-gray-100 hover:-translate-y-1 transition-all duration-300"><FaGithub /></a>
        </div>
      </div>
      <div>
        <p className="opacity-70">Copyright © {new Date().getFullYear()} - All right reserved by <span className="text-secondary font-bold">CodeRoom.Online</span></p>
      </div>
    </footer>
  );
};

export default Footer;
