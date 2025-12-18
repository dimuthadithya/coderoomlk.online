"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaPalette, FaTimes, FaRocket, FaSun, FaMoon, FaCity, FaTree, FaGem } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/#testimonials", label: "Stories" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-content overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4 text-sm font-medium">
              <span className="hidden md:inline-flex items-center gap-2"> New Batch Enrolling Now! Limited Seats Available.</span>
              <span className="md:hidden flex items-center gap-2"> New Batch Enrolling Now!</span>
              <a href="https://forms.gle/TdmiUVUeHpajcLgV7" target="_blank" rel="noopener noreferrer" className="btn btn-xs bg-base-100 text-primary border-none hover:bg-base-200">
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        !isScrolled ? "top-14" : "top-4" // Adjust top position based on banner presense
      }`}>
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`w-full max-w-5xl rounded-full transition-all duration-300 ${
            isScrolled
              ? "glass-card shadow-lg bg-base-100/80 backdrop-blur-md border border-base-content/5 py-2 px-6"
              : "bg-base-100/50 backdrop-blur-sm border border-transparent py-3 px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src="/images/logo.png" alt="CodeRoom" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-bold tracking-tight text-lg">
                <span className="gradient-text">CodeRoom</span>
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-1 bg-base-200/50 p-1 rounded-full border border-base-content/5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? "bg-base-100 shadow-sm text-primary"
                        : "text-base-content/70 hover:text-base-content hover:bg-base-content/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggler - Minimal */}
              <div className="dropdown dropdown-end">
                <div 
                    tabIndex={0} 
                    role="button" 
                    className="btn btn-circle btn-sm btn-ghost hover:bg-base-content/10"
                >
                  <FaPalette className="text-base opacity-70" />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-2xl w-48 mt-4 border border-base-content/10 gap-1">
                    {[
                      { id: "light", icon: <FaSun />, label: "Light" },
                      { id: "dark", icon: <FaMoon />, label: "Dark" },
                      { id: "synthwave", icon: <FaCity />, label: "Synthwave" },
                      { id: "forest", icon: <FaTree />, label: "Forest" },
                      { id: "luxury", icon: <FaGem />, label: "Luxury" },
                    ].map((theme) => (
                      <li key={theme.id}>
                        <button data-set-theme={theme.id} className="rounded-lg text-sm font-medium">
                          <span className="text-lg text-primary">{theme.icon}</span> {theme.label}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn btn-circle btn-sm btn-ghost md:hidden"
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* CTA Button */}
              <Link
                href="/courses"
                className="hidden md:inline-flex btn btn-primary btn-sm rounded-full px-5 font-medium shadow-lg hover:shadow-primary/25 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed left-4 right-4 z-40 bg-base-100 rounded-3xl shadow-2xl border border-base-content/10 p-4 md:hidden ${
                !isScrolled ? "top-32" : "top-20" // Adjust based on banner
            }`}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-base-200 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-base-content/5 my-2"></div>
              <Link
                href="/courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-primary w-full rounded-xl"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
