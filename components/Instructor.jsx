"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaAward, FaCode, FaChalkboardTeacher } from "react-icons/fa";
import instructorData from "@/data/instructor.json";

// Map strings from JSON to React Components
const iconMap = {
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaAward: FaAward,
  FaCode: FaCode,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter
};

export default function Instructor() {
  const { name, title, image, bio, about, stats, skills, socials } = instructorData;

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image/Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10">
                <div className="glass-card p-4 rounded-3xl rotate-3 transition-transform hover:rotate-0 duration-500">
                    <img 
                      src={image}
                      alt={name} 
                      className="rounded-2xl w-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>
            {/* Decorative border behind */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -rotate-3 z-0 scale-105"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="badge badge-secondary mb-4">{title}</div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Meet <span className="gradient-text">{name}</span>
            </h2>
            <p className="text-xl text-base-content/70 mb-6 leading-relaxed">
              "{bio}"
            </p>
            <p className="text-base-content/60 mb-8">
              {about}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, idx) => {
                    const Icon = iconMap[stat.icon] || FaCode;
                    return (
                        <div key={idx} className="text-center p-4 bg-base-200 rounded-2xl">
                            <Icon className="text-3xl text-primary mx-auto mb-2" />
                            <div className="font-bold text-lg">{stat.value}</div>
                            <div className="text-xs opacity-60">{stat.label}</div>
                        </div>
                    );
                })}
            </div>

            {/* Skills Tags */}
            <div className="mb-8">
                <h4 className="font-bold mb-3 opacity-80">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span key={index} className="badge badge-outline badge-lg p-4 hover:bg-primary hover:text-white transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
                {socials.map((social, idx) => {
                    const Icon = iconMap[social.platform];
                    if (!Icon) return null;
                    return (
                        <a key={idx} href={social.url} className="btn btn-circle btn-ghost text-2xl hover:text-primary transition-colors">
                            <Icon />
                        </a>
                    );
                })}
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
