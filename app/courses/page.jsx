"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials"; // Reusing success stories
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaVideo, FaChalkboardTeacher, FaCheckCircle, FaWhatsapp, FaCode, FaTools, FaProjectDiagram, FaMoneyBillWave } from "react-icons/fa";
import courseData from "@/data/courses/frontendFundamentals.json";

export default function CourseRegistration() {
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
                {courseData.focus} • Designed for {courseData.targetAudience}
            </p>
            <p className="text-lg opacity-60 max-w-2xl mx-auto mb-10">
                {courseData.year} Edition - {courseData.duration} comprehensive training program
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                <a href="https://forms.gle/TdmiUVUeHpajcLgV7" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/50 transition-all">
                    Register Now
                </a>
                <a href="#curriculum" className="btn btn-ghost btn-lg rounded-full">
                    View Curriculum
                </a>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                {[
                    { icon: FaCalendarAlt, label: "Start Date", val: "Coming Soon" },
                    { icon: FaClock, label: "Duration", val: courseData.duration },
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
                      <div className="badge badge-primary badge-lg">{courseData.duration}</div>
                      <div className="badge badge-secondary badge-lg">{courseData.mode}</div>
                      <div className="badge badge-accent badge-lg">{courseData.focus}</div>
                  </div>
              </div>
              
              <div className="grid gap-6">
                {/* Dynamic Module Rendering */}
                {courseData.modules.map((module, index) => (
                    <motion.div 
                        key={module.module}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="collapse collapse-arrow bg-base-100 border border-base-content/10 rounded-xl hover:border-primary/30 transition-all"
                    >
                        <input type="radio" name="my-accordion-2" defaultChecked={index === 0} /> 
                        <div className="collapse-title text-xl font-medium flex items-center gap-4">
                            <span className="badge badge-primary">Module {module.module}</span>
                            <span className="flex-1">{module.title}</span>
                            <span className="text-sm opacity-60 hidden md:block">{module.month}</span>
                        </div>
                        <div className="collapse-content"> 
                            <div className="space-y-6 pt-4">
                                {/* Topics Section */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaCode className="text-primary" />
                                        <h4 className="font-semibold">Topics Covered</h4>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {module.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <FaCheckCircle className="text-success mt-1 flex-shrink-0" size={14} />
                                                <span className="text-sm opacity-80">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tools Section */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <FaTools className="text-secondary" />
                                        <h4 className="font-semibold">Tools & Technologies</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {module.tools.map((tool, i) => (
                                            <span key={i} className="badge badge-secondary badge-outline">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Section */}
                                <div className="bg-base-200/50 p-4 rounded-lg border border-accent/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FaProjectDiagram className="text-accent" />
                                        <h4 className="font-semibold">Module Project</h4>
                                    </div>
                                    <p className="text-sm opacity-80">{module.project}</p>
                                </div>
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
                              <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
                              <span>{outcome}</span>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 3. SUCCESS STORIES (Reused) */}
      <Testimonials />

      {/* 4. REGISTRATION FORM */}
      <section className="py-24 relative" id="register">
         <div className="max-w-4xl mx-auto px-4">
             <div className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-base-100 to-base-200">
                 <div className="text-center">
                     <h2 className="text-4xl font-black mb-6">Secure Your Spot</h2>
                     <p className="opacity-70 text-lg mb-10 max-w-2xl mx-auto">
                        Limited seats available for the upcoming batch. Click the button below to complete your registration via our official form.
                     </p>
                     
                     <div className="flex justify-center">
                        <a 
                            href="https://forms.gle/TdmiUVUeHpajcLgV7" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg px-12 text-lg rounded-full shadow-xl hover:shadow-primary/30 transition-all gap-3"
                        >
                            Register Now <FaCheckCircle />
                        </a>
                     </div>
                     <p className="text-sm text-center mt-6 opacity-50">
                        You will be redirected to our secure Google Form.
                     </p>
                 </div>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
