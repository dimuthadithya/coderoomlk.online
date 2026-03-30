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
                                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success"><FaMoneyBillWave size={20} /></div>
                                <div>
                                    <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Monthly Fee</div>
                                    <div className="font-black text-lg">1500 LKR</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 px-4">
                                <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info"><FaVideo size={20} /></div>
                                <div>
                                    <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Delivery Mode</div>
                                    <div className="font-black text-lg text-nowrap">{courseData.mode}</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 px-4">
                                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning"><FaClock size={20} /></div>
                                <div>
                                    <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Total Duration</div>
                                    <div className="font-black text-lg">TBA</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 px-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"><FaChalkboardTeacher size={20} /></div>
                                <div>
                                    <div className="text-xs font-bold uppercase opacity-50 tracking-wider">Language</div>
                                    <div className="font-black text-lg text-nowrap">Sinhala Medium</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2. REGISTRATION FORM (MOVED TO TOP & REDESIGNED) */}
            <section className="py-24 relative" id="register">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="glass-card rounded-[3rem] overflow-hidden border border-primary/20 bg-base-100 relative shadow-2xl">
                        {/* Decorative background gradients */}
                        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
                            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
                        </div>

                        <div className="grid lg:grid-cols-5 gap-0 relative z-10">
                            {/* Left Side Info */}
                            <div className="lg:col-span-2 bg-linear-to-br from-primary/10 to-primary/5 p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-base-content/10 flex flex-col justify-center">
                                <div className="badge badge-primary mb-6 p-4 text-sm font-bold shadow-lg shadow-primary/30 uppercase tracking-wider backdrop-blur-md border-0">
                                    Limited Seats Available
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                                    Secure Your Spot For Batch 03
                                </h2>
                                <p className="text-lg opacity-80 mb-8 leading-relaxed font-medium">
                                    Don't miss the chance to join Sri Lanka's premium mentorship program. Spots fill up incredibly fast once opened.
                                </p>
                                <ul className="space-y-5 mb-10">
                                    <li className="flex items-center gap-4"><div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0"><FaCheckCircle size={16} /></div><span className="font-bold opacity-90">100% Practical Mentorship</span></li>
                                    <li className="flex items-center gap-4"><div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0"><FaCheckCircle size={16} /></div><span className="font-bold opacity-90">Live Weekend Sessions</span></li>
                                    <li className="flex items-center gap-4"><div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0"><FaCheckCircle size={16} /></div><span className="font-bold opacity-90">Exclusive SLIATE Discounts</span></li>
                                </ul>
                            </div>

                            {/* Right Side Form */}
                            <div className="lg:col-span-3 p-10 md:p-14 lg:p-16">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control">
                                            <label className="label py-1"><span className="label-text font-bold text-xs uppercase tracking-widest opacity-60">First Name</span></label>
                                            <input type="text" placeholder="e.g. Dimuth" className="input input-lg input-bordered w-full bg-base-200/50 backdrop-blur-sm rounded-2xl focus:border-primary transition-colors hover:border-base-content/30" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label py-1"><span className="label-text font-bold text-xs uppercase tracking-widest opacity-60">Last Name</span></label>
                                            <input type="text" placeholder="e.g. Adithya" className="input input-lg input-bordered w-full bg-base-200/50 backdrop-blur-sm rounded-2xl focus:border-primary transition-colors hover:border-base-content/30" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="form-control">
                                            <label className="label py-1"><span className="label-text font-bold text-xs uppercase tracking-widest opacity-60">Email Address</span></label>
                                            <input type="email" placeholder="you@example.com" className="input input-lg input-bordered w-full bg-base-200/50 backdrop-blur-sm rounded-2xl focus:border-primary transition-colors hover:border-base-content/30" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label py-1"><span className="label-text font-bold text-xs uppercase tracking-widest opacity-60">WhatsApp Number</span></label>
                                            <input type="tel" placeholder="+94 7X XXX XXXX" className="input input-lg input-bordered w-full bg-base-200/50 backdrop-blur-sm rounded-2xl focus:border-primary transition-colors hover:border-base-content/30" required />
                                        </div>
                                    </div>

                                    <div className="form-control bg-base-300/40 p-6 md:p-8 rounded-3xl border border-base-content/5 mt-8 shadow-sm">
                                        <label className="label cursor-pointer justify-start gap-4 hover:opacity-80 transition-opacity">
                                            <input
                                                type="checkbox"
                                                className="checkbox checkbox-primary checkbox-lg rounded-xl border-2"
                                                checked={isSliate}
                                                onChange={(e) => setIsSliate(e.target.checked)}
                                            />
                                            <span className="label-text font-bold text-lg">Are you currently a SLIATE student?</span>
                                        </label>

                                        {isSliate && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="mt-6 pt-6 border-t border-base-content/10"
                                            >
                                                <label className="label"><span className="label-text font-bold text-xs uppercase tracking-widest opacity-60">Which ATI Location?</span></label>
                                                <select className="select select-lg select-bordered w-full bg-base-200/80 rounded-2xl" defaultValue="Select your ATI">
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

                                    <div className="pt-10 flex flex-col xl:flex-row items-center justify-between gap-6">
                                        <button type="submit" className="btn btn-primary btn-lg rounded-2xl px-12 text-lg font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all w-full xl:w-auto h-16">
                                            Submit Registration <FaCheckCircle className="ml-2" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CURRICULUM SECTION */}
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
                                            <FaCode size={20} />
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



            {/* 3. SUCCESS STORIES (Untouched Component) */}
            <Testimonials />



            <Footer />
        </main>
    );
}
