"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero min-h-screen relative overflow-hidden bg-base-200" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-base-200"></div>
        <motion.div
           animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, -45, 0],
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/30 rounded-full blur-[120px]"
        />
         <motion.div
           animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 45, 0],
            x: [0, -50, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[20%] right-[0%] w-[60vw] h-[60vw] bg-secondary/30 rounded-full blur-[120px]"
        />
         <motion.div
           animate={{
            scale: [1, 1.3, 1],
           }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse z-10 gap-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          {/* Placeholder for a cool image or 3D element. Using a mockup card for now */}
          <div className="mockup-code glass shadow-2xl bg-opacity-20 transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <pre data-prefix="$"><code>npm install web-development</code></pre> 
            <pre data-prefix=">" className="text-warning"><code>installing knowledge...</code></pre> 
            <pre data-prefix=">" className="text-success"><code>Done! Career launched.</code></pre>
            <pre data-prefix=">" className="text-gray-500"><code>Welcome to CodeRoom.Online</code></pre>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Master the Web
          </h1>
          <p className="py-6 text-lg lg:text-xl text-base-content/80">
            We don't just teach code; we build careers. Join CodeRoom.Online to become a world-class Web Developer. Live classes, real projects, and expert mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
             <a href="#courses" className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform">
               <FaLaptopCode className="mr-2"/> View Courses
             </a>
             <a href="#contact" className="btn btn-outline btn-lg shadow-lg hover:scale-105 transition-transform">
               <FaRocket className="mr-2"/> Start Now
             </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
