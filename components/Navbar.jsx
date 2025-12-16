"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaPalette } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { href: "/#testimonials", label: "Success Stories" }, // Anchor on home page
    { href: "/contact", label: "Contact" },
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
                <Link href={link.href} className="font-medium text-base-content hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl lg:text-2xl font-black normal-case hover:scale-105 transition-transform"
        >
          <span className="gradient-text">CodeRoom</span>
          <span className="text-accent">.Online</span>
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`transition-all rounded-lg ${
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-base-content hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
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
            {[
              { id: "light", icon: "☀️", label: "Light" },
              { id: "dark", icon: "🌙", label: "Dark" },
              { id: "synthwave", icon: "🌆", label: "Synthwave" },
              { id: "cyberpunk", icon: "🤖", label: "Cyberpunk" },
              { id: "valentine", icon: "💖", label: "Valentine" },
              { id: "aqua", icon: "🌊", label: "Aqua" },
              { id: "forest", icon: "🌲", label: "Forest" },
              { id: "luxury", icon: "💎", label: "Luxury" },
            ].map((theme) => (
              <li key={theme.id}>
                <button data-set-theme={theme.id} className="flex items-center gap-3 hover:bg-primary/10 hover:text-primary transition-all">
                  <span className="text-xl">{theme.icon}</span>
                  <span className="flex-1">{theme.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="btn btn-primary btn-sm lg:btn-md gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <span className="hidden sm:inline">Join Now</span>
          <span className="sm:hidden">Join</span>
        </Link>
      </div>
    </div>
  );
}
