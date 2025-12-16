import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-base-300">
      <div className="footer p-10 max-w-7xl mx-auto text-base-content">
        <aside>
          <h3 className="text-2xl font-black">
            <span className="gradient-text">CodeRoom</span>
            <span className="text-accent">.Online</span>
          </h3>
          <p className="max-w-xs">
            Empowering the next generation of developers with world-class education and mentorship.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-primary">
              <FaFacebook className="text-lg" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-info">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-error">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-primary">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-error">
              <FaYoutube className="text-lg" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost hover:btn-neutral">
              <FaGithub className="text-lg" />
            </a>
          </div>
        </aside>
        
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a href="#home" className="link link-hover">Home</a>
          <a href="#courses" className="link link-hover">Courses</a>
          <a href="#testimonials" className="link link-hover">Success Stories</a>
          <a href="#contact" className="link link-hover">Contact</a>
        </nav>
        
        <nav>
          <h6 className="footer-title">Popular Courses</h6>
          <a href="#" className="link link-hover">Full Stack Development</a>
          <a href="#" className="link link-hover">Frontend Mastery</a>
          <a href="#" className="link link-hover">Backend Engineering</a>
          <a href="#" className="link link-hover">Mobile Development</a>
        </nav>
        
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <a href="mailto:hello@coderoom.online" className="link link-hover">hello@coderoom.online</a>
          <a href="tel:+94701234567" className="link link-hover">+94 70 123 4567</a>
          <a href="https://wa.me/YOUR_NUMBER" className="link link-hover text-success">WhatsApp Community</a>
          <p>Colombo, Sri Lanka</p>
        </nav>
      </div>
      
      <div className="footer footer-center p-4 bg-base-300 text-base-content border-t border-base-content/10">
        <aside className="flex flex-col md:flex-row items-center gap-2">
          <p>© {currentYear} <span className="font-bold gradient-text">CodeRoom.Online</span> - All rights reserved</p>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-error animate-pulse" /> for aspiring developers
          </p>
        </aside>
      </div>
    </footer>
  );
}
