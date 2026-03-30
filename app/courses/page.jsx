"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials"; // Reusing success stories
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaClock, FaVideo, FaChalkboardTeacher, FaCheckCircle, FaWhatsapp, FaCode, FaTools, FaProjectDiagram, FaMoneyBillWave, FaArrowRight, FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaStar, FaFire, FaBolt } from "react-icons/fa";
import courseData from "@/data/courses/fullstackEngineering.json";

const STEPS = ["Personal Info", "Contact", "Enrollment"];

const ATI_LOCATIONS = ["ATI Kegalle", "ATI Kandy", "ATI Kurunegala", "ATI Dehiwala", "ATI Colombo", "Other"];

function FloatingInput({ label, name, type = "text", icon: Icon, required, form, focused, handleChange, setFocused }) {
    return (
        <div className="relative group">
            <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focused[name] || form[name] ? "text-primary" : "text-base-content/30"}`}>
                {Icon && <Icon size={16} />}
            </div>
            <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                onFocus={() => setFocused(f => ({ ...f, [name]: true }))}
                onBlur={() => setFocused(f => ({ ...f, [name]: false }))}
                placeholder=" "
                required={required}
                className="peer w-full pl-10 pr-4 pt-6 pb-2 bg-base-200/50 border border-base-content/10 rounded-2xl text-base-content outline-none focus:border-primary focus:bg-base-100/60 transition-all duration-300 hover:border-base-content/20 focus:shadow-lg focus:shadow-primary/10"
                id={`field-${name}`}
            />
            <label
                htmlFor={`field-${name}`}
                className="absolute left-10 top-4 text-xs font-bold uppercase tracking-widest text-base-content/40 transition-all duration-200 peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-primary peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] pointer-events-none"
            >
                {label}
            </label>
        </div>
    );
}

export default function CourseRegistration() {
    const [isSliate, setIsSliate] = useState(false);
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", whatsapp: "", sliate: false, atiLocation: ""
    });
    const [focused, setFocused] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
        if (name === "sliate") setIsSliate(checked);
    };

    const handleNext = () => { if (step < STEPS.length - 1) setStep(s => s + 1); };
    const handleBack = () => { if (step > 0) setStep(s => s - 1); };
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };


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

            {/* 2. REGISTRATION FORM — PREMIUM MULTI-STEP WIZARD */}
            <section className="py-24 relative overflow-hidden" id="register">
                {/* Section ambient glow */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-6xl mx-auto px-4">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full mb-6">
                            <FaFire size={11} /> Batch 03 · Limited Seats
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                            Reserve Your <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Seat Today</span>
                        </h2>
                        <p className="text-base opacity-60 max-w-xl mx-auto">Complete the short form below — takes under 60 seconds.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-6 items-start">
                        {/* ── LEFT PANEL ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-5"
                        >
                            {/* Urgency card */}
                            <div className="relative glass-card rounded-3xl p-7 border border-error/20 overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-error/15 rounded-full blur-2xl" />
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
                                    </span>
                                    <span className="text-error text-xs font-black uppercase tracking-widest">Enrolling Now</span>
                                </div>
                                <p className="text-2xl font-black mb-1">Batch 03 — April 2025</p>
                                <p className="text-sm opacity-60 font-medium">Starts <strong className="text-base-content/90">April 04</strong> · Sat & Sun · 8 AM</p>
                                <div className="mt-5 flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-primary/60 to-secondary/60 border-2 border-base-100 flex items-center justify-center text-[10px] font-black text-white">{i}</div>
                                        ))}
                                    </div>
                                    <p className="text-xs font-bold opacity-70">+12 enrolled this week</p>
                                </div>
                            </div>

                            {/* Pricing card */}
                            <div className="glass-card rounded-3xl p-7 border border-success/20 relative overflow-hidden">
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-success/20 rounded-full blur-2xl" />
                                <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-3">Monthly Investment</p>
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-5xl font-black text-success">1,500</span>
                                    <span className="text-lg font-bold opacity-60 mb-2">LKR / mo</span>
                                </div>
                                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/15">
                                    <p className="text-xs font-bold text-primary flex items-center gap-2">
                                        <FaBolt size={11} /> SLIATE students get an exclusive discount
                                    </p>
                                </div>
                            </div>

                            {/* Feature list */}
                            <div className="glass-card rounded-3xl p-7 border border-base-content/5">
                                <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-5">What's Included</p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: FaVideo, label: "Live Online Sessions", color: "text-info" },
                                        { icon: FaChalkboardTeacher, label: "1:1 Mentorship Access", color: "text-primary" },
                                        { icon: FaCode, label: "Real-World Projects", color: "text-secondary" },
                                        { icon: FaWhatsapp, label: "WhatsApp Study Group", color: "text-success" },
                                        { icon: FaStar, label: "Career Guidance", color: "text-warning" },
                                    ].map(({ icon: Icon, label, color }, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <div className={`w-9 h-9 rounded-xl bg-base-200 flex items-center justify-center ${color} shrink-0`}>
                                                <Icon size={14} />
                                            </div>
                                            <span className="text-sm font-semibold opacity-85">{label}</span>
                                            <FaCheckCircle className="ml-auto text-success/60 shrink-0" size={12} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* ── RIGHT PANEL — WIZARD FORM ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="glass-card rounded-[2.5rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 relative">
                                {/* Ambient blobs inside card */}
                                <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
                                <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] pointer-events-none" />

                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        /* ── SUCCESS STATE ── */
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="relative z-10 p-12 md:p-16 flex flex-col items-center justify-center text-center min-h-[520px]"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                                className="w-24 h-24 rounded-full bg-success/15 border-2 border-success/40 flex items-center justify-center text-success mb-8 shadow-xl shadow-success/20"
                                            >
                                                <FaCheckCircle size={40} />
                                            </motion.div>
                                            <h3 className="text-3xl font-black mb-3">You're Registered! 🎉</h3>
                                            <p className="opacity-70 text-lg font-medium max-w-sm">
                                                We've received your registration for <strong>Batch 03</strong>. We'll reach out via WhatsApp shortly.
                                            </p>
                                            <div className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-success bg-success/10 px-6 py-3 rounded-full border border-success/20">
                                                <FaWhatsapp size={16} /> Check your WhatsApp for updates
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* ── FORM STATE ── */
                                        <div key="form" className="relative z-10 p-8 md:p-12">
                                            {/* Step Progress Header */}
                                            <div className="mb-10">
                                                <div className="flex items-center justify-between mb-6">
                                                    {STEPS.map((s, i) => (
                                                        <React.Fragment key={i}>
                                                            <div className="flex flex-col items-center gap-2">
                                                                <motion.div
                                                                    animate={{
                                                                        background: i <= step ? "var(--color-primary)" : "var(--color-base-300)",
                                                                        scale: i === step ? 1.15 : 1,
                                                                    }}
                                                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shadow-lg transition-all duration-300 ${i <= step ? "text-primary-content shadow-primary/30" : "text-base-content/40"}`}
                                                                >
                                                                    {i < step ? <FaCheckCircle size={16} /> : i + 1}
                                                                </motion.div>
                                                                <span className={`text-[10px] font-black uppercase tracking-widest hidden sm:block transition-colors ${i === step ? "text-primary" : "opacity-40"}`}>
                                                                    {s}
                                                                </span>
                                                            </div>
                                                            {i < STEPS.length - 1 && (
                                                                <div className="flex-1 h-0.5 mx-3 bg-base-300 rounded-full overflow-hidden">
                                                                    <motion.div
                                                                        className="h-full bg-primary rounded-full"
                                                                        animate={{ width: i < step ? "100%" : "0%" }}
                                                                        transition={{ duration: 0.4 }}
                                                                    />
                                                                </div>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                                <div className="h-1 w-full bg-base-300/60 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-linear-to-r from-primary to-secondary rounded-full"
                                                        animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Step Content — Animated */}
                                            <form onSubmit={handleSubmit}>
                                                <AnimatePresence mode="wait" custom={step}>
                                                    {step === 0 && (
                                                        <motion.div
                                                            key="step0"
                                                            initial={{ opacity: 0, x: 30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -30 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="space-y-5"
                                                        >
                                                            <div className="mb-2">
                                                                <h3 className="text-2xl font-black">What's your name?</h3>
                                                                <p className="text-sm opacity-50 mt-1">Let's start with the basics.</p>
                                                            </div>
                                                            <FloatingInput label="First Name" name="firstName" icon={FaUser} required form={form} focused={focused} handleChange={handleChange} setFocused={setFocused} />
                                                            <FloatingInput label="Last Name" name="lastName" icon={FaUser} required form={form} focused={focused} handleChange={handleChange} setFocused={setFocused} />
                                                        </motion.div>
                                                    )}
                                                    {step === 1 && (
                                                        <motion.div
                                                            key="step1"
                                                            initial={{ opacity: 0, x: 30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -30 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="space-y-5"
                                                        >
                                                            <div className="mb-2">
                                                                <h3 className="text-2xl font-black">How can we reach you?</h3>
                                                                <p className="text-sm opacity-50 mt-1">We'll send updates to your WhatsApp & email.</p>
                                                            </div>
                                                            <FloatingInput label="Email Address" name="email" type="email" icon={FaEnvelope} required form={form} focused={focused} handleChange={handleChange} setFocused={setFocused} />
                                                            <FloatingInput label="WhatsApp Number (+94 XXX XXXXXX)" name="whatsapp" type="tel" icon={FaPhone} required form={form} focused={focused} handleChange={handleChange} setFocused={setFocused} />
                                                        </motion.div>
                                                    )}
                                                    {step === 2 && (
                                                        <motion.div
                                                            key="step2"
                                                            initial={{ opacity: 0, x: 30 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -30 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="space-y-6"
                                                        >
                                                            <div className="mb-2">
                                                                <h3 className="text-2xl font-black">One last thing…</h3>
                                                                <p className="text-sm opacity-50 mt-1">Are you eligible for a SLIATE discount?</p>
                                                            </div>

                                                            {/* SLIATE toggle */}
                                                            <button
                                                                type="button"
                                                                onClick={() => { setIsSliate(!isSliate); setForm(f => ({ ...f, sliate: !isSliate })); }}
                                                                className={`w-full p-5 rounded-2xl border-2 text-left flex items-center gap-5 transition-all duration-300 cursor-pointer ${isSliate ? "border-primary bg-primary/10 shadow-lg shadow-primary/20" : "border-base-content/10 bg-base-200/40 hover:border-base-content/20"}`}
                                                            >
                                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${isSliate ? "bg-primary text-primary-content" : "bg-base-300 text-base-content/40"}`}>
                                                                    <FaGraduationCap size={20} />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <p className="font-black text-base">I'm a SLIATE / ATI Student</p>
                                                                    <p className="text-xs opacity-60 mt-0.5">Eligible for exclusive fee reduction</p>
                                                                </div>
                                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${isSliate ? "border-primary bg-primary" : "border-base-content/20"}`}>
                                                                    {isSliate && <FaCheckCircle className="text-primary-content" size={12} />}
                                                                </div>
                                                            </button>

                                                            {/* ATI location picker */}
                                                            <AnimatePresence>
                                                                {isSliate && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                                        animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                                                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                                        className="overflow-hidden"
                                                                    >
                                                                        <div className="relative">
                                                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                                                                                <FaGraduationCap size={15} />
                                                                            </div>
                                                                            <select
                                                                                name="atiLocation"
                                                                                value={form.atiLocation}
                                                                                onChange={handleChange}
                                                                                className="w-full pl-10 pr-4 py-4 bg-base-200/50 border border-base-content/10 rounded-2xl text-base-content outline-none focus:border-primary focus:bg-base-100/60 transition-all duration-300 appearance-none font-medium"
                                                                            >
                                                                                <option value="" disabled>Select your ATI location…</option>
                                                                                {ATI_LOCATIONS.map(loc => (
                                                                                    <option key={loc} value={loc}>{loc}</option>
                                                                                ))}
                                                                            </select>
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>

                                                            {/* Review summary */}
                                                            <div className="bg-base-200/60 rounded-2xl p-5 border border-base-content/5 space-y-3">
                                                                <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-4">Review Your Details</p>
                                                                {[
                                                                    { label: "Name", value: `${form.firstName} ${form.lastName}`.trim() || "—" },
                                                                    { label: "Email", value: form.email || "—" },
                                                                    { label: "WhatsApp", value: form.whatsapp || "—" },
                                                                ].map(({ label, value }) => (
                                                                    <div key={label} className="flex items-center justify-between text-sm">
                                                                        <span className="opacity-50 font-bold">{label}</span>
                                                                        <span className="font-semibold text-right truncate max-w-[55%]">{value}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                {/* Navigation Buttons */}
                                                <div className={`flex items-center mt-10 gap-4 ${step > 0 ? "justify-between" : "justify-end"}`}>
                                                    {step > 0 && (
                                                        <button
                                                            type="button"
                                                            onClick={handleBack}
                                                            className="btn btn-ghost rounded-2xl gap-2 font-bold hover:bg-base-200 transition-all"
                                                        >
                                                            <FaArrowLeft size={14} /> Back
                                                        </button>
                                                    )}
                                                    {step < STEPS.length - 1 ? (
                                                        <button
                                                            type="button"
                                                            onClick={handleNext}
                                                            className="btn btn-primary rounded-2xl px-8 gap-2 font-black shadow-lg shadow-primary/20 hover:scale-[1.03] transition-all ml-auto"
                                                        >
                                                            Continue <FaArrowRight size={14} />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary btn-lg rounded-2xl px-10 gap-2 font-black shadow-xl shadow-primary/25 hover:scale-[1.03] transition-all ml-auto"
                                                        >
                                                            Submit Registration <FaCheckCircle size={16} />
                                                        </button>
                                                    )}
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Trust bar below form */}
                            <div className="flex flex-wrap items-center justify-center gap-6 mt-6 opacity-50">
                                {[
                                    { icon: FaCheckCircle, label: "No spam, ever" },
                                    { icon: FaWhatsapp, label: "Updates via WhatsApp" },
                                    { icon: FaMoneyBillWave, label: "Flexible payment" },
                                ].map(({ icon: Icon, label }, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-bold">
                                        <Icon size={12} /> {label}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
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
