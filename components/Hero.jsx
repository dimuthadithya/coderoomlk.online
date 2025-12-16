"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-base-200 via-base-300 to-base-200" id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold">Now Enrolling for 2025</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="block">Master</span>
              <TypeAnimation
                sequence={[
                  'Web Development',
                  2000,
                  'React & Next.js',
                  2000,
                  'Full Stack',
                  2000,
                  'Your Future',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                repeat={Infinity}
              />
            </h1>

            <p className="text-lg lg:text-xl text-base-content/70 max-w-xl">
              Transform from beginner to professional developer with our industry-leading courses. 
              Live classes, real projects, and career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <motion.a
                href="#courses"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg gap-2 shadow-2xl shadow-primary/50"
              >
                <FaRocket />
                Explore Courses
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline btn-lg gap-2"
              >
                <FaGraduationCap />
                Free Consultation
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm opacity-60">Students</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm opacity-60">Success Rate</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm opacity-60">Courses</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.02}
              className="w-full max-w-md"
            >
              <div className="card bg-base-100 shadow-2xl border border-base-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
                <div className="card-body relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <div className="w-3 h-3 rounded-full bg-success"></div>
                  </div>
                  
                  <div className="mockup-code bg-base-300/50 backdrop-blur-sm">
                    <pre data-prefix="$"><code className="text-primary">npm install success</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>Building your future...</code></pre>
                    <pre data-prefix=">" className="text-success"><code>✓ Skills acquired</code></pre>
                    <pre data-prefix=">" className="text-success"><code>✓ Portfolio built</code></pre>
                    <pre data-prefix=">" className="text-success"><code>✓ Career launched</code></pre>
                    <pre data-prefix=">" className="text-info"><code>Welcome to CodeRoom 🚀</code></pre>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-6">
                    <div className="badge badge-primary badge-lg">React</div>
                    <div className="badge badge-secondary badge-lg">Node.js</div>
                    <div className="badge badge-accent badge-lg">Next.js</div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 opacity-60">
          <span className="text-sm">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
