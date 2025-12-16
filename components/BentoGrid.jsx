"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUserTie, FaCertificate, FaRocket, FaUsers, FaGlobe } from "react-icons/fa";

export default function BentoGrid() {
  return (
    <div className="py-24 bg-base-100 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-base-200 to-transparent pointer-events-none"></div>
        
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Why <span className="gradient-text">CodeRoom?</span>
          </h2>
          <p className="text-xl text-base-content/70">Everything you need to become a top 1% developer.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
          
          {/* Card 1 - Large Left */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaLaptopCode className="text-9xl transform rotate-12" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="badge badge-primary mb-4">Core Focus</div>
                    <h3 className="text-3xl font-bold mb-4">Project-Based Learning</h3>
                    <p className="text-lg opacity-80">Stop watching tutorials. Start building. We focus on real-world projects that simulate actual industry work environments.</p>
                </div>
                <div className="mt-8">
                    <div className="flex -space-x-4">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-base-100 bg-base-300 flex items-center justify-center font-bold">
                                P{i}
                            </div>
                        ))}
                        <div className="w-12 h-12 rounded-full border-4 border-base-100 bg-primary text-primary-content flex items-center justify-center font-bold">
                            +20
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Card 2 - Mentorship */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-secondary/10 dark:bg-secondary/20 p-6 rounded-3xl border border-secondary/20 flex flex-col justify-between"
          >
            <FaUserTie className="text-4xl text-secondary mb-4" />
            <div>
                <h3 className="text-xl font-bold">Expert Mentors</h3>
                <p className="text-sm opacity-70">Learn from engineers at top tech companies.</p>
            </div>
          </motion.div>

          {/* Card 3 - Certification */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-1 md:row-span-1 bg-accent/10 dark:bg-accent/20 p-6 rounded-3xl border border-accent/20 flex flex-col justify-between"
          >
            <FaCertificate className="text-4xl text-accent mb-4" />
            <div>
                <h3 className="text-xl font-bold">Certification</h3>
                <p className="text-sm opacity-70">Industry recognized certificates upon completion.</p>
            </div>
          </motion.div>

          {/* Card 4 - Wide Bottom Info */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-primary to-secondary text-primary-content p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Career Acceleration</h3>
                <p className="opacity-90">From resume building to mock interviews, we handle it all.</p>
                <div className="mt-4 flex gap-2">
                    <span className="badge badge-ghost text-white">Resume Review</span>
                    <span className="badge badge-ghost text-white">Mock Interviews</span>
                </div>
            </div>
            <FaRocket className="absolute bottom-4 right-4 text-8xl opacity-20 transform -rotate-12" />
          </motion.div>

          {/* Card 5 - Community */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 glass-card p-6 rounded-3xl border-t-4 border-success"
          >
            <div className="h-full flex flex-col items-center text-center justify-center">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-3xl text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Community</h3>
                <p className="text-sm opacity-70">Join 500+ developers in our exclusive Discord & WhatsApp groups.</p>
            </div>
          </motion.div>

          {/* Card 6 - Global Reach */}
           <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 bg-base-200 p-6 rounded-3xl flex flex-col justify-between"
          >
            <FaGlobe className="text-5xl text-info opacity-80" />
             <div>
                <h3 className="text-4xl font-black mt-4">10+</h3>
                <p className="font-bold">Countries</p>
                <p className="text-xs opacity-60 mt-2">Our students are working globally.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
