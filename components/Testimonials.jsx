"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft, FaGithub, FaTimes, FaPaperPlane } from "react-icons/fa";
import testimonials from "@/data/testimonials.json";

// Helper to get avatar from github link or username
const getAvatar = (github) => {
    if (!github) return "https://github.com/github.png";
    const username = github.replace('https://github.com/', '').replace('/', '');
    return `https://github.com/${username}.png`;
};

// Helper for clean GitHub Link
const getGithubLink = (github) => {
    if (!github) return "#";
    if (github.startsWith('http')) return github;
    return `https://github.com/${github}`;
};

const TRUNCATE_LENGTH = 120;

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const TestimonialCard = ({ testimonial, color = "primary" }) => {
    const isLong = testimonial.text.length > TRUNCATE_LENGTH;
    const displayText = isLong ? testimonial.text.slice(0, TRUNCATE_LENGTH) + "..." : testimonial.text;

    return (
        <div className="glass-card w-[350px] h-[280px] p-6 rounded-2xl mx-4 my-4 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative group">
            <div>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <img 
                            src={getAvatar(testimonial.github)} 
                            alt={testimonial.name} 
                            className={`w-12 h-12 rounded-full border-2 border-${color}/20 bg-base-200 object-cover`}
                            onError={(e) => {e.target.src = "https://github.com/github.png"}}
                        />
                        <div className="overflow-hidden">
                            <div className="flex items-center gap-2">
                                <h4 className="font-bold text-base-content truncate max-w-[140px]">{testimonial.name}</h4>
                                {testimonial.github && (
                                    <a href={getGithubLink(testimonial.github)} target="_blank" rel="noopener" className={`text-base-content/40 hover:text-${color} transition-colors`}>
                                        <FaGithub />
                                    </a>
                                )}
                            </div>
                            <p className="text-xs text-base-content/60 font-medium truncate">{testimonial.university}</p>
                        </div>
                    </div>
                    <FaQuoteLeft className={`text-${color}/20 text-3xl shrink-0`} />
                </div>
                
                <p className="text-base-content/80 text-sm leading-relaxed mb-1">
                    "{displayText}"
                </p>
                {isLong && (
                    <button 
                        onClick={() => setSelectedTestimonial(testimonial)}
                        className={`text-xs font-bold text-${color} hover:underline mt-1 cursor-pointer`}
                    >
                        See more
                    </button>
                )}
            </div>

            <div className="pt-4 border-t border-base-content/5 mt-auto">
                <div className={`text-xs font-bold text-${color} uppercase tracking-wide truncate`}>
                    {testimonial.course}
                </div>
            </div>
        </div>
    );
  };

  return (
    <div className="py-24 bg-base-100 relative overflow-hidden" id="testimonials">
        
       {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
            <div className="badge badge-primary px-4 py-3 mb-4 text-xs font-bold tracking-widest uppercase">Community Love</div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Trusted by <span className="gradient-text">Students</span>
          </h2>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">
            From university students to industry professionals, see who's learning with us.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Row 1 */}
      <div className="relative z-10 hover:pause">
          <Marquee gradient={true} gradientColor="hsl(var(--b1))" speed={40} pauseOnHover={true}>
            {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((t, index) => (
              <TestimonialCard key={index} testimonial={t} color="primary" />
            ))}
          </Marquee>

           {/* Infinite Marquee - Row 2 (Reverse) */}
           <Marquee gradient={true} gradientColor="hsl(var(--b1))" speed={30} direction="right" pauseOnHover={true}>
            {testimonials.slice(Math.ceil(testimonials.length / 2)).map((t, index) => (
               <TestimonialCard key={index} testimonial={t} color="secondary" />
            ))}
          </Marquee>
      </div>

      <div className="text-center mt-12 relative z-10">
        <a href="/contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-base-100/30 backdrop-blur-md border border-white/10 rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_var(--color-primary)] hover:-translate-y-1">
            <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Submit Your Feedback</span>
            <FaPaperPlane className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Modal for Full Feedback */}
      <AnimatePresence>
        {selectedTestimonial && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-base-100/80 backdrop-blur-md"
                onClick={() => setSelectedTestimonial(null)}
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-base-100 border border-base-content/10 shadow-2xl w-full max-w-lg rounded-3xl p-8 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setSelectedTestimonial(null)}
                        className="btn btn-circle btn-sm btn-ghost absolute top-4 right-4"
                    >
                        <FaTimes />
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                         <img 
                            src={getAvatar(selectedTestimonial.github)} 
                            alt={selectedTestimonial.name} 
                            className="w-16 h-16 rounded-full border-4 border-primary/10 object-cover"
                            onError={(e) => {e.target.src = "https://github.com/github.png"}}
                        />
                        <div>
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                {selectedTestimonial.name}
                                {selectedTestimonial.github && (
                                    <a href={getGithubLink(selectedTestimonial.github)} target="_blank" rel="noopener" className="text-primary text-lg">
                                        <FaGithub />
                                    </a>
                                )}
                            </h3>
                            <p className="text-base-content/60">{selectedTestimonial.university}</p>
                        </div>
                    </div>

                    <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                        <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
                        <p className="text-lg leading-relaxed text-base-content/90">
                            {selectedTestimonial.text}
                        </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-base-content/10 flex justify-between items-center text-sm font-medium">
                        <span className="text-primary">{selectedTestimonial.course}</span>
                        <div className="badge badge-outline">Verified Student</div>
                    </div>

                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
