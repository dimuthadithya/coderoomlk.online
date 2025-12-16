"use client";
import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="py-20 bg-base-200 relative overflow-hidden" id="contact">
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                        <p className="mb-8 text-base-content/70 text-lg">
                            Have questions about our courses? Want to join our community? We are here to help you start your journey.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow-sm">
                                <div className="bg-primary/20 p-3 rounded-full text-primary">
                                    <FaWhatsapp size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold">WhatsApp Community</h3>
                                    <p className="text-sm opacity-70">Join for updates & free resources</p>
                                    <a href="#" className="link link-primary">Join Group</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow-sm">
                                <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                                    <FaPhone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold">Call Us</h3>
                                    <p className="text-sm opacity-70">Mon-Fri from 9am to 6pm</p>
                                    <a href="tel:+94701234567" className="link link-hover">+94 70 123 4567</a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow-sm">
                                <div className="bg-accent/20 p-3 rounded-full text-accent">
                                    <FaEnvelope size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold">Email Us</h3>
                                    <p className="text-sm opacity-70">Drop us a line anytime</p>
                                    <a href="mailto:hello@coderoom.online" className="link link-hover">hello@coderoom.online</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                         initial={{ opacity: 0, x: 30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.6 }}
                         viewport={{ once: true }}
                         className="card bg-base-100 shadow-2xl"
                    >
                        <div className="card-body">
                            <h3 className="card-title text-2xl mb-4">Send us a Message</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="John Doe" className="input input-bordered w-full focus:input-primary" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:input-primary" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="I'm interested in..."></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
