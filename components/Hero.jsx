"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl mx-auto px-4 relative z-10">
        {/* Right side - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
              </div>
              <div className="mockup-code bg-neutral text-neutral-content">
                <pre data-prefix="$"><code className="text-primary">npm install success</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Building your future...</code></pre>
                <pre data-prefix=">" className="text-success"><code>✓ Skills acquired</code></pre>
                <pre data-prefix=">" className="text-success"><code>✓ Portfolio built</code></pre>
                <pre data-prefix=">" className="text-success"><code>✓ Career launched 🚀</code></pre>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                <div className="badge badge-primary">React</div>
                <div className="badge badge-secondary">Next.js</div>
                <div className="badge badge-accent">Node.js</div>
                <div className="badge badge-info">MongoDB</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <div className="badge badge-primary badge-lg gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-content opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-content"></span>
            </span>
            Enrolling Now for 2025
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Master <span className="gradient-text">Web Development</span>
          </h1>
          
          <p className="text-xl text-base-content/70 mb-8 max-w-xl">
            Transform your career with industry-leading courses. Learn React, Next.js, Node.js and build real-world projects with expert mentors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <motion.a
              href="#courses"
              className="btn btn-primary btn-lg gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Explore Courses
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline btn-lg gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGraduationCap />
              Free Consultation
            </motion.a>
          </div>

          {/* Stats */}
          <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100">
            <div className="stat place-items-center">
              <div className="stat-value text-primary">500+</div>
              <div className="stat-title">Students</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-secondary">95%</div>
              <div className="stat-title">Success Rate</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-accent">10+</div>
              <div className="stat-title">Courses</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
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
}
