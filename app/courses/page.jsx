"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials"; // Reusing success stories
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaVideo, FaChalkboardTeacher, FaCheckCircle, FaWhatsapp, FaCode, FaTools, FaProjectDiagram, FaMoneyBillWave } from "react-icons/fa";
import courseData from "@/data/courses/fullstackEngineering.json";

export default function CourseRegistration() {
  const [isSliate, setIsSliate] = useState(false);
  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />
      
      {/* 1. HERO SECTION - TWO COLUMN DESIGN */}
      <div className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
             <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1"
                >
                    <div className="badge badge-accent mb-6 p-4 text-sm font-bold shadow-lg shadow-accent/20 uppercase tracking-wider backdrop-blur-md">
                        Enrolling for Batch 03
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-tight">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                            {courseData.courseTitle}
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl font-light opacity-80 mb-6 leading-relaxed">
                        {courseData.subtitle || `${courseData.focus} • Designed for ${courseData.targetAudience}`}
                    </p>
                    
                    <p className="text-base opacity-70 mb-8 max-w-xl leading-relaxed">
                        {courseData.overview}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <a href="#register" className="btn btn-primary btn-lg rounded-full px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-all w-full sm:w-auto text-lg gap-2">
                            Secure Your Spot <FaCheckCircle />
                        </a>
                        <a href="#curriculum" className="btn btn-outline btn-lg rounded-full w-full sm:w-auto hover:bg-base-content/10 hover:border-base-content/20 font-bold backdrop-blur-sm">
                            Explore Curriculum
                        </a>
                    </div>
                </motion.div>

                {/* Poster / Stats Image */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative group order-1 lg:order-2 px-8 lg:px-0"
                >
                    <div className="absolute -inset-4 bg-linear-to-tr from-primary/30 to-secondary/30 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-700 opacity-50"></div>
                    <img 
                        src="/images/poster.png" 
                        alt="Batch 03 Poster" 
                        className="relative w-full max-w-md mx-auto aspect-4/5 object-cover rounded-4xl shadow-2xl border border-white/10 dark:border-white/5 transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out" 
                    />
                    
                    {/* Floating Info Cards over the poster */}
                    <div className="absolute -right-2 top-8 lg:-right-8 lg:top-16 glass-card p-3 pr-6 rounded-2xl shadow-2xl border border-base-content/10 backdrop-blur-md hidden sm:block">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary shadow-inner">
                                <FaCalendarAlt size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Start Date</p>
                                <p className="font-extrabold text-sm text-base-content/90">Apr 04, 8 AM</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="absolute -left-2 bottom-8 lg:-left-12 lg:bottom-16 glass-card p-3 pr-6 rounded-2xl shadow-2xl border border-base-content/10 backdrop-blur-md hidden sm:block">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-secondary/20 to-secondary/5 flex items-center justify-center text-secondary shadow-inner">
                                <FaClock size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Schedule</p>
                                <p className="font-extrabold text-sm text-base-content/90">Sat & Sun</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Horizontal Global Info Bar */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 w-full glass-card rounded-3xl border border-base-content/5 p-6 relative overflow-hidden hidden md:block"
            >
                <div className="grid grid-cols-4 gap-4 divide-x divide-base-content/10">
                    <div className="flex items-center justify-center gap-4 px-4">
                        <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success"><FaMoneyBillWave size={20}/></div>
                        <div>
                            <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Monthly Fee</div>
                            <div className="font-black text-lg">1500 LKR</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 px-4">
                        <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info"><FaVideo size={20}/></div>
                        <div>
                            <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Delivery Mode</div>
                            <div className="font-black text-lg text-nowrap">{courseData.mode}</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 px-4">
                        <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning"><FaClock size={20}/></div>
                        <div>
                            <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Total Duration</div>
                            <div className="font-black text-lg">TBA</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 px-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><FaChalkboardTeacher size={20}/></div>
                        <div>
                            <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Language</div>
                            <div className="font-black text-lg text-nowrap">Sinhala Medium</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* 2. CURRICULUM SECTION */}
      <section className="py-24 relative bg-base-100" id="curriculum">
          <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-black mb-6">What You Will Master</h2>
                  <p className="text-lg opacity-70">An industry-aligned curriculum designed to take you from fundamentals to deploying full-stack web applications seamlessly.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courseData.modules.map((module, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group flex flex-col glass-card rounded-4xl overflow-hidden border border-base-content/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                    >
                        {/* Header Gradient */}
                        <div className="p-8 bg-linear-to-br from-base-200 to-base-300 relative overflow-hidden border-b border-base-content/5">
                            <div className="absolute top-[-50%] right-[-20%] w-48 h-48 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 group-hover:scale-150 transition-all duration-500"></div>
                            <h3 className="text-xl inline-flex font-bold mb-0 items-start gap-4 relative z-10">
                                <span className="text-primary mt-1">
                                    <FaCode size={20}/>
                                </span>
                                <span className="leading-snug">{module.title}</span>
                            </h3>
                        </div>
                        
                        {/* Body Details */}
                        <div className="p-8 flex-1 flex flex-col bg-base-100/40">
                            <ul className="space-y-4 mb-8 flex-1">
                                {module.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                                            <FaCheckCircle className="text-success text-[10px]" />
                                        </div>
                                        <span className="text-sm opacity-90 leading-relaxed font-medium">{topic}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Icons Space */}
                            <div className="pt-6 border-t border-base-content/10">
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] opacity-40 mb-3 ml-1">Tech Stack Matrix</p>
                                {module.icons && module.icons.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        <img 
                                            src={`https://skillicons.dev/icons?i=${module.icons.join(',')}`} 
                                            alt="Tooling vector icons" 
                                            className="h-9 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap gap-2">
                                        {module.tools.map((tool, i) => (
                                            <span key={i} className="badge badge-sm badge-ghost border-base-content/20 font-mono">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sub-project Footer */}
                        {module.project && (
                            <div className="p-4 bg-primary/5 border-t border-primary/10 flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary shadow-sm backdrop-blur-md">
                                    <FaProjectDiagram size={16} />
                                </div>
                                <div className="text-xs opacity-90 font-bold tracking-wide">{module.project}</div>
                            </div>
                        )}
                    </motion.div>
                ))}
              </div>
          </div>
      </section>

      {/* 4. VALUE PROPOSITION SPLIT LAYOUT */}
      <section className="py-24 bg-base-200/50 border-y border-base-content/5 relative overflow-hidden">
          {/* Subtle bg art */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-20 lg:gap-16 items-start">
                  
                  {/* Left: Who & Outcomes */}
                  <div className="space-y-16">
                      <div>
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs uppercase tracking-widest font-black mb-6">
                              <FaProjectDiagram /> Who Is This For?
                          </div>
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">The perfect springboard for ambitious developers.</h2>
                          
                          <div className="space-y-4">
                              {courseData.whoIsThisFor.map((audience, i) => (
                                  <div key={i} className="glass-card px-6 py-4 rounded-3xl flex items-center gap-5 hover:bg-base-100/50 transition-colors border border-base-content/5">
                                      <div className="w-10 h-10 rounded-full bg-base-300 flex items-center justify-center shrink-0">
                                          <FaCheckCircle className="text-base-content/40" size={16} />
                                      </div>
                                      <p className="opacity-90 font-semibold">{audience}</p>
                                  </div>
                              ))}
                          </div>
                      </div>

                      <div className="glass-card p-8 rounded-3xl border border-primary/20 bg-primary/5">
                          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                              <FaTools className="text-primary text-2xl" /> Key Takeaways
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                              {courseData.outcomes.map((outcome, i) => (
                                  <div key={i} className="flex items-start gap-3">
                                      <FaCheckCircle className="text-success mt-1 shrink-0" size={14} />
                                      <span className="text-sm opacity-80 leading-relaxed font-medium">{outcome}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Right: Portfolio Building */}
                  <div className="relative">
                      <div className="lg:sticky lg:top-32">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest font-black mb-6">
                              <FaCode /> Hands-On Real world Apps
                          </div>
                          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">Build your portfolio while you learn.</h2>
                          
                          <div className="space-y-5">
                              {courseData.projects.map((proj, i) => (
                                  <div key={i} className="group relative glass-card p-8 rounded-4xl border border-base-content/10 overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10">
                                      <div className="absolute top-0 left-0 w-1.5 h-full bg-linear-to-b from-primary to-secondary group-hover:w-full group-hover:opacity-[0.03] transition-all duration-700 ease-in-out"></div>
                                      <h4 className="font-extrabold text-xl mb-3 relative z-10 flex items-center gap-3">
                                          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                                          {proj.title}
                                      </h4>
                                      <p className="opacity-70 text-sm leading-relaxed relative z-10">{proj.description}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* 3. SUCCESS STORIES (Untouched Component) */}
      <Testimonials />

      {/* 4. REGISTRATION FORM */}
      <section className="py-24 relative" id="register">
         <div className="max-w-4xl mx-auto px-4">
             <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 bg-linear-to-br from-base-100 to-base-200 relative overflow-hidden">
                 {/* Decorative background gradients */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>

                 <div className="text-center mb-10">
                     <h2 className="text-4xl font-black mb-4">Secure Your Spot</h2>
                     <p className="opacity-70 text-lg max-w-2xl mx-auto">
                        Fill out this form to register for the upcoming course. We will contact you shortly with the next steps!
                     </p>
                 </div>
                 
                 <form className="max-w-2xl mx-auto space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label"><span className="label-text font-bold">First Name</span></label>
                            <input type="text" placeholder="e.g. Dimuth" className="input input-bordered w-full bg-base-100/50 backdrop-blur-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text font-bold">Last Name</span></label>
                            <input type="text" placeholder="e.g. Adithya" className="input input-bordered w-full bg-base-100/50 backdrop-blur-sm" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label"><span className="label-text font-bold">Email Address</span></label>
                            <input type="email" placeholder="you@example.com" className="input input-bordered w-full bg-base-100/50 backdrop-blur-sm" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text font-bold">WhatsApp Number</span></label>
                            <input type="tel" placeholder="+94 7X XXX XXXX" className="input input-bordered w-full bg-base-100/50 backdrop-blur-sm" required />
                        </div>
                    </div>

                    <div className="form-control bg-base-200/50 p-6 rounded-2xl border border-base-content/5 mt-4">
                        <label className="label cursor-pointer justify-start gap-4">
                            <input 
                                type="checkbox" 
                                className="checkbox checkbox-primary" 
                                checked={isSliate}
                                onChange={(e) => setIsSliate(e.target.checked)}
                            />
                            <span className="label-text font-bold text-lg">Are you a SLIATE student?</span>
                        </label>
                        
                        {isSliate && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-4 pt-4 border-t border-base-content/10"
                            >
                                <label className="label"><span className="label-text font-bold">Which ATI Location?</span></label>
                                <select className="select select-bordered w-full bg-base-100/50" defaultValue="Select your ATI">
                                    <option disabled>Select your ATI</option>
                                    <option>ATI Kegalle</option>
                                    <option>ATI Kandy</option>
                                    <option>ATI Kurunegala</option>
                                    <option>ATI Dehiwala</option>
                                    <option>ATI Colombo</option>
                                    <option>Other</option>
                                </select>
                            </motion.div>
                        )}
                    </div>

                    <div className="pt-6 text-center">
                        <button type="submit" className="btn btn-primary btn-lg px-12 text-lg rounded-full shadow-xl hover:shadow-primary/30 transition-all gap-3 w-full md:w-auto">
                            Submit Registration <FaCheckCircle />
                        </button>
                        <p className="text-sm mt-4 opacity-50">
                            *This is a UI demonstration. Backend integration will be connected later.
                        </p>
                    </div>
                 </form>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
