import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">About us</a>
        <a href="#courses" className="link link-hover">Courses</a>
        <a href="#testimonials" className="link link-hover">Testimonials</a>
        <a href="#contact" className="link link-hover">Contact</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="#" className="hover:text-primary transition-colors"><FaFacebook /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaGithub /></a>
        </div>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by CodeRoom.Online</p>
      </div>
    </footer>
  );
};

export default Footer;
