"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import testimonials from "@/data/testimonials.json";

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
            Join hundreds of students who are now working at top tech companies.
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Row 1 */}
      <div className="relative z-10">
          <Marquee gradient={true} gradientColor="hsl(var(--b1))" speed={40} pauseOnHover={true}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mx-4 my-8">
                <div className="glass-card w-[400px] p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                   <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                            <div>
                                <h4 className="font-bold text-base-content">{testimonial.name}</h4>
                                <p className="text-xs text-base-content/60 font-medium">{testimonial.role}</p>
                            </div>
                        </div>
                        <FaQuoteLeft className="text-primary/20 text-4xl" />
                   </div>
                   
                   <p className="text-base-content/80 leading-relaxed mb-4 text-sm">
                       "{testimonial.text}"
                   </p>

                   <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-warning text-sm" />
                        ))}
                    </div>
                </div>
              </div>
            ))}
          </Marquee>

           {/* Infinite Marquee - Row 2 (Reverse) */}
           <Marquee gradient={true} gradientColor="hsl(var(--b1))" speed={30} direction="right" pauseOnHover={true}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="mx-4 my-2">
                <div className="glass-card w-[400px] p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
                   <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-secondary/20" />
                            <div>
                                <h4 className="font-bold text-base-content">{testimonial.name}</h4>
                                <p className="text-xs text-base-content/60 font-medium">{testimonial.role}</p>
                            </div>
                        </div>
                        <FaQuoteLeft className="text-secondary/20 text-4xl" />
                   </div>
                   
                   <p className="text-base-content/80 leading-relaxed mb-4 text-sm">
                       "{testimonial.text}"
                   </p>

                   <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-warning text-sm" />
                        ))}
                    </div>
                </div>
              </div>
            ))}
          </Marquee>
      </div>
    </div>
  );
}
