"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="py-24 bg-base-200" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge badge-accent badge-lg mb-4">Get In Touch</div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Start Your Journey Today</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Have questions? We're here to help you choose the right path.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/YOUR_NUMBER"
              whileHover={{ scale: 1.02, x: 5 }}
              className="card bg-gradient-to-br from-success/10 to-success/5 border-2 border-success/20 hover:border-success/40 transition-all cursor-pointer"
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
              className="card bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
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
              className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 transition-all cursor-pointer"
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
              className="card bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20"
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
            viewport={{ once: true }}
          >
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Full Name *</span>
                    </label>
                    <input type="text" placeholder="John Doe" className="input input-bordered focus:input-primary" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Email *</span>
                      </label>
                      <input type="email" placeholder="john@example.com" className="input input-bordered focus:input-primary" required />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">Phone</span>
                      </label>
                      <input type="tel" placeholder="+94 70 123 4567" className="input input-bordered focus:input-primary" />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Interested Course</span>
                    </label>
                    <select className="select select-bordered focus:select-primary">
                      <option value="">Select a course</option>
                      <option>Full Stack Web Development</option>
                      <option>Frontend Mastery</option>
                      <option>Backend Engineering</option>
                      <option>Python Full Stack</option>
                      <option>Mobile App Development</option>
                      <option>Database & DevOps</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Message *</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-32 focus:textarea-primary" placeholder="Tell us about your goals..." required></textarea>
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
}
