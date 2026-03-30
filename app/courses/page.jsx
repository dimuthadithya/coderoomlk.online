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
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="badge badge-accent badge-outline mb-4 font-bold">New Batch Enrolling Now</div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                <span className="gradient-text">{courseData.courseTitle}</span>
            </h1>
            <p className="text-xl opacity-70 max-w-2xl mx-auto mb-4 leading-relaxed">
                {courseData.subtitle || `${courseData.focus} • Designed for ${courseData.targetAudience}`}
            </p>
            <p className="text-lg opacity-60 max-w-2xl mx-auto mb-8">
                {courseData.overview}
            </p>
            <p className="text-md opacity-80 max-w-2xl mx-auto mb-10 font-bold bg-base-200/50 py-2 px-6 rounded-full inline-block">
                {courseData.year} Edition comprehensive training program
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                <a href="#register" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/50 transition-all">
                    Register Now
                </a>
                <a href="#curriculum" className="btn btn-ghost btn-lg rounded-full">
                    View Curriculum
                </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                {[
                    { icon: FaCalendarAlt, label: "Start Date", val: "Apr 04, 8 AM" },
                    { icon: FaClock, label: "Duration", val: "TBA" },
                    { icon: FaMoneyBillWave, label: "Monthly Fee", val: "1500 LKR" },
                    { icon: FaVideo, label: "Mode", val: courseData.mode },
                    { icon: FaChalkboardTeacher, label: "Language", val: "Sinhala" }
                ].map((item, i) => (
                    <div key={i} className="glass-card p-4 rounded-2xl flex flex-col items-center w-36 md:w-48">
                        <item.icon className="text-2xl text-primary mb-2" />
                        <div className="font-bold text-lg">{item.val}</div>
                        <div className="text-xs opacity-60">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* 2. CURRICULUM SECTION */}
      <section className="py-20 bg-base-200/50" id="curriculum">
          <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">What You Will Learn</h2>
                  <p className="opacity-70">A comprehensive curriculum designed for 2025's job market.</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-4">
                      <div className="badge badge-secondary badge-lg">{courseData.mode}</div>
                      <div className="badge badge-accent badge-lg">{courseData.focus}</div>
                  </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {/* Topics Rendering (No chronological breakdown) */}
                {courseData.modules.map((module, index) => (
                    <motion.div 
                        key={module.module}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 rounded-2xl border border-base-content/10 hover:border-primary/30 transition-all flex flex-col"
                    >
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                            <FaCode className="text-primary text-2xl" />
                            {module.title}
                        </h3>
                        
                        <div className="flex-1">
                            <ul className="mb-6 space-y-3">
                                {module.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-success mt-1 shrink-0" size={14} />
                                        <span className="text-sm opacity-90 leading-relaxed">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools Section */}
                        <div className="pt-6 border-t border-base-content/10 mt-auto">
                            <h4 className="font-semibold text-sm opacity-70 mb-4">Tools & Tech:</h4>
                            {module.icons && module.icons.length > 0 ? (
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <img 
                                        src={`https://skillicons.dev/icons?i=${module.icons.join(',')}`} 
                                        alt={module.tools.join(', ')} 
                                        className="h-10 hover:scale-105 transition-transform"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {module.tools.map((tool, i) => (
                                        <span key={i} className="badge badge-secondary badge-outline text-xs">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <div className="bg-base-200/50 p-3 rounded-lg border border-accent/20 mt-auto">
                                <div className="flex items-center gap-2 mb-1">
                                    <FaProjectDiagram className="text-accent text-sm" />
                                    <h4 className="font-bold text-sm">Key Project</h4>
                                </div>
                                <p className="text-xs opacity-80 leading-relaxed">{module.project}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
              </div>

              {/* Course Outcomes */}
              <div className="mt-12 glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Course Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseData.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-start gap-3">
                              <FaCheckCircle className="text-success mt-1 shrink-0" />
                              <span>{outcome}</span>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Projects Section */}
              {courseData.projects && (
                  <div className="mt-16">
                      <h3 className="text-3xl font-bold mb-8 text-center">What You Will Build</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {courseData.projects.map((proj, i) => (
                              <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                      <FaProjectDiagram className="text-2xl text-primary" />
                                  </div>
                                  <h4 className="font-bold text-xl mb-3">{proj.title}</h4>
                                  <p className="opacity-70 text-sm leading-relaxed">{proj.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              )}

              {/* Who Is This For Section */}
              {courseData.whoIsThisFor && (
                  <div className="mt-16 glass-card p-8 rounded-2xl bg-base-300/30">
                      <h3 className="text-2xl font-bold mb-6 text-center">Who Is This For?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {courseData.whoIsThisFor.map((audience, i) => (
                              <div key={i} className="flex gap-3 items-start">
                                  <FaCheckCircle className="text-secondary mt-1 shrink-0" />
                                  <p className="opacity-80 leading-relaxed text-sm">{audience}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              )}

              {/* Why Join Section */}
              {courseData.whyJoin && (
                  <div className="mt-16">
                      <h3 className="text-3xl font-bold mb-8 text-center">Why Join CodeRoomLK?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {courseData.whyJoin.map((reason, i) => (
                              <div key={i} className="glass-card p-6 rounded-2xl border-l-4 border-primary">
                                  <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                                      <FaCheckCircle className="text-primary" /> {reason.title}
                                  </h4>
                                  <p className="opacity-70 text-sm leading-relaxed">{reason.description}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              )}
          </div>
      </section>

      {/* 3. SUCCESS STORIES (Reused) */}
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
