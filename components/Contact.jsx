"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <div className="py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden" id="contact">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="badge badge-accent badge-lg gap-2">
                            <FaPaperPlane />
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black mb-4">
                        <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                            Start Your Journey Today
                        </span>
                    </h2>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Have questions? We're here to help you choose the right path.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info Cards */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                            <p className="text-base-content/70 mb-8">
                                Choose your preferred way to reach out. We typically respond within 24 hours.
                            </p>
                        </div>

                        {/* WhatsApp */}
                        <motion.a
                            href="https://wa.me/YOUR_NUMBER"
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="card bg-gradient-to-br from-success/10 to-success/5 border border-success/20 hover:border-success/40 transition-all cursor-pointer"
                        >
                            <div className="card-body flex-row items-center gap-4">
                                <div className="bg-success/20 p-4 rounded-2xl">
                                    <FaWhatsapp className="text-3xl text-success" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg">WhatsApp Community</h4>
                                    <p className="text-sm opacity-70">Join 500+ students</p>
                                    <p className="text-success font-semibold mt-1">Click to Join →</p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            href="tel:+94701234567"
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                        >
                            <div className="card-body flex-row items-center gap-4">
                                <div className="bg-primary/20 p-4 rounded-2xl">
                                    <FaPhone className="text-3xl text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg">Call Us</h4>
                                    <p className="text-sm opacity-70">Mon-Sat, 9 AM - 8 PM</p>
                                    <p className="text-primary font-semibold mt-1">+94 70 123 4567</p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:hello@coderoom.online"
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all cursor-pointer"
                        >
                            <div className="card-body flex-row items-center gap-4">
                                <div className="bg-secondary/20 p-4 rounded-2xl">
                                    <FaEnvelope className="text-3xl text-secondary" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg">Email Us</h4>
                                    <p className="text-sm opacity-70">We'll respond within 24h</p>
                                    <p className="text-secondary font-semibold mt-1">hello@coderoom.online</p>
                                </div>
                            </div>
                        </motion.a>

                        {/* Location */}
                        <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
                        >
                            <div className="card-body flex-row items-center gap-4">
                                <div className="bg-accent/20 p-4 rounded-2xl">
                                    <FaMapMarkerAlt className="text-3xl text-accent" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg">Visit Us</h4>
                                    <p className="text-sm opacity-70">Colombo, Sri Lanka</p>
                                    <p className="text-accent font-semibold mt-1">Get Directions →</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="card bg-base-100 shadow-2xl border border-base-300">
                            <div className="card-body">
                                <h3 className="card-title text-2xl mb-6">Send us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Full Name *</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            placeholder="John Doe" 
                                            className="input input-bordered focus:input-primary" 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Email *</span>
                                            </label>
                                            <input 
                                                type="email" 
                                                placeholder="john@example.com" 
                                                className="input input-bordered focus:input-primary"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                required
                                            />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Phone</span>
                                            </label>
                                            <input 
                                                type="tel" 
                                                placeholder="+94 70 123 4567" 
                                                className="input input-bordered focus:input-primary"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Interested Course</span>
                                        </label>
                                        <select 
                                            className="select select-bordered focus:select-primary"
                                            value={formData.course}
                                            onChange={(e) => setFormData({...formData, course: e.target.value})}
                                        >
                                            <option value="">Select a course</option>
                                            <option>Full Stack Web Development</option>
                                            <option>Frontend Mastery</option>
                                            <option>Backend Engineering</option>
                                            <option>Python Full Stack</option>
                                            <option>Mobile App Development</option>
                                            <option>DevOps & Cloud</option>
                                        </select>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Message *</span>
                                        </label>
                                        <textarea 
                                            className="textarea textarea-bordered h-32 focus:textarea-primary" 
                                            placeholder="Tell us about your goals and questions..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="form-control mt-6">
                                        <motion.button 
                                            type="submit"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="btn btn-primary btn-lg w-full gap-2"
                                        >
                                            <FaPaperPlane />
                                            Send Message
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
