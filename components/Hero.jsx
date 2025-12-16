"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaGraduationCap, FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero min-h-screen gradient-bg relative overflow-hidden" id="home">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl"
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

      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl mx-auto px-4 relative z-10 py-20">
        {/* Right side - Enhanced Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl"></div>
            
            <div className="card glass-card shadow-2xl relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 animate-pulse"></div>
              
              <div className="card-body relative z-10">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-error animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-warning animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                
                <div className="mockup-code bg-base-300/50 backdrop-blur-sm border border-primary/20">
                  <pre data-prefix="$" className="text-primary"><code>npm install @coderoom/success</code></pre>
                  <pre data-prefix=">" className="text-warning"><code>⚡ Building your future...</code></pre>
                  <pre data-prefix="✓" className="text-success"><code>Skills acquired successfully</code></pre>
                  <pre data-prefix="✓" className="text-success"><code>Portfolio built & deployed</code></pre>
                  <pre data-prefix="✓" className="text-success"><code>Dream job secured 🎉</code></pre>
                  <pre data-prefix=">" className="text-info"><code>Ready to change the world!</code></pre>
                </div>

                <div className="flex gap-2 mt-4 flex-wrap">
                  <div className="badge badge-primary gap-2">
                    <FaCode /> React
                  </div>
                  <div className="badge badge-secondary gap-2">
                    <FaCode /> Next.js
                  </div>
                  <div className="badge badge-accent gap-2">
                    <FaCode /> Node.js
                  </div>
                  <div className="badge badge-info gap-2">
                    <FaCode /> TypeScript
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left side - Enhanced Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold text-primary">🔥 Enrolling Now for 2025</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Master the Art of
            <br />
            <span className="gradient-text inline-block">Web Development</span>
          </h1>
          
          <p className="text-xl text-base-content/80 mb-8 max-w-xl leading-relaxed">
            Transform your career with <span className="text-primary font-semibold">industry-leading courses</span>. 
            Build real-world projects, learn from experts, and join a thriving community of developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <motion.a
              href="#courses"
              className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket />
              Explore Courses
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline btn-lg gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay />
              Watch Demo
            </motion.a>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "500+", label: "Students", color: "primary" },
              { value: "95%", label: "Success", color: "secondary" },
              { value: "10+", label: "Courses", color: "accent" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl lg:text-4xl font-black text-${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-base-content/60 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-base-content/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
