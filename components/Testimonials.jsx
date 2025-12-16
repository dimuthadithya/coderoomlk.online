"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaQuoteLeft, FaGithub } from "react-icons/fa";
import testimonials from "@/data/testimonials.json";

// Helper to get avatar from github link or username
const getAvatar = (github) => {
    if (!github) return "https://github.com/github.png";
    const username = github.replace('https://github.com/', '').replace('/', '');
    return `https://github.com/${username}.png`;
};

// Helper for clean GitHub Link
const getGithubLink = (github) => {
    if (github.startsWith('http')) return github;
    return `https://github.com/${github}`;
};

export default function Testimonials() {
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
      <div className="relative z-10">
          <Marquee gradient={true} gradientColor="hsl(var(--b1))" speed={40} pauseOnHover={true}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mx-4 my-8">
                <div className="glass-card w-[400px] p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col justify-between">
                   <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img 
                                src={getAvatar(testimonial.github)} 
                                alt={testimonial.name} 
                                className="w-12 h-12 rounded-full border-2 border-primary/20 bg-base-200" 
                                onError={(e) => {e.target.src = "https://github.com/github.png"}}
                            />
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className="font-bold text-base-content">{testimonial.name}</h4>
                                    <a href={getGithubLink(testimonial.github)} target="_blank" rel="noopener" className="text-base-content/40 hover:text-primary transition-colors">
                                        <FaGithub />
                                    </a>
                                </div>
                                <p className="text-xs text-base-content/60 font-medium">{testimonial.university}</p>
                            </div>
                        </div>
                        <FaQuoteLeft className="text-primary/20 text-4xl" />
                   </div>
                   
                   <p className="text-base-content/80 leading-relaxed mb-4 text-sm flex-grow">
                       "{testimonial.text}"
                   </p>

                   <div className="pt-4 border-t border-base-content/5 mt-auto">
                        <div className="text-xs font-bold text-primary uppercase tracking-wide">
                            {testimonial.course}
                        </div>
                   </div>
                </div>
              </div>
            ))}
          </Marquee>

           {/* Infinite Marquee - Row 2 (Reverse) */}
           <Marquee gradient={true} gradientColor="hsl(var(--b1))" speed={30} direction="right" pauseOnHover={true}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mx-4 my-2">
                <div className="glass-card w-[400px] p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col justify-between">
                   <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img 
                                src={getAvatar(testimonial.github)} 
                                alt={testimonial.name} 
                                className="w-12 h-12 rounded-full border-2 border-secondary/20 bg-base-200"
                                onError={(e) => {e.target.src = "https://github.com/github.png"}}
                            />
                            <div>
                                <div className="flex items-center gap-2">
                                    <h4 className="font-bold text-base-content">{testimonial.name}</h4>
                                    <a href={getGithubLink(testimonial.github)} target="_blank" rel="noopener" className="text-base-content/40 hover:text-secondary transition-colors">
                                        <FaGithub />
                                    </a>
                                </div>
                                <p className="text-xs text-base-content/60 font-medium">{testimonial.university}</p>
                            </div>
                        </div>
                        <FaQuoteLeft className="text-secondary/20 text-4xl" />
                   </div>
                   
                   <p className="text-base-content/80 leading-relaxed mb-4 text-sm flex-grow">
                       "{testimonial.text}"
                   </p>

                   <div className="pt-4 border-t border-base-content/5 mt-auto">
                         <div className="text-xs font-bold text-secondary uppercase tracking-wide">
                            {testimonial.course}
                        </div>
                   </div>
                </div>
              </div>
            ))}
          </Marquee>
      </div>
    </div>
  );
}
