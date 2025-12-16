import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-base-300 border-t border-base-content/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CodeRoom
              </span>
              <span className="text-accent">.Online</span>
            </h3>
            <p className="text-base-content/70 mb-4">
              Empowering the next generation of developers with world-class education and mentorship.
            </p>
            <div className="flex gap-3">
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-primary transition-all">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-primary transition-all">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-error transition-all">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-info transition-all">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-secondary transition-all">
                <FaYoutube className="text-lg" />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-accent transition-all">
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="link link-hover text-base-content/70 hover:text-primary">About Us</a></li>
              <li><a href="#courses" className="link link-hover text-base-content/70 hover:text-primary">Our Courses</a></li>
              <li><a href="#testimonials" className="link link-hover text-base-content/70 hover:text-primary">Success Stories</a></li>
              <li><a href="#contact" className="link link-hover text-base-content/70 hover:text-primary">Contact</a></li>
              <li><a href="#" className="link link-hover text-base-content/70 hover:text-primary">Blog</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover text-base-content/70 hover:text-primary">Full Stack Development</a></li>
              <li><a href="#" className="link link-hover text-base-content/70 hover:text-primary">Frontend Mastery</a></li>
              <li><a href="#" className="link link-hover text-base-content/70 hover:text-primary">Backend Engineering</a></li>
              <li><a href="#" className="link link-hover text-base-content/70 hover:text-primary">Mobile Development</a></li>
              <li><a href="#" className="link link-hover text-base-content/70 hover:text-primary">DevOps & Cloud</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-base-content/70">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">📍</span>
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">📧</span>
                <a href="mailto:hello@coderoom.online" className="link link-hover hover:text-primary">
                  hello@coderoom.online
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">📞</span>
                <a href="tel:+94701234567" className="link link-hover hover:text-primary">
                  +94 70 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">💬</span>
                <a href="https://wa.me/YOUR_NUMBER" className="link link-hover hover:text-success">
                  WhatsApp Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-content/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/60 text-sm text-center md:text-left">
              © {currentYear} <span className="font-bold text-primary">CodeRoom.Online</span>. All rights reserved.
            </p>
            <p className="text-base-content/60 text-sm flex items-center gap-1">
              Made with <FaHeart className="text-error animate-pulse" /> for aspiring developers
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="link link-hover text-base-content/60 hover:text-primary">Privacy Policy</a>
              <a href="#" className="link link-hover text-base-content/60 hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
