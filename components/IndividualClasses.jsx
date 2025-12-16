"use client";
import { motion } from "framer-motion";
import { FaUserClock, FaRocket, FaChalkboardTeacher, FaWhatsapp } from "react-icons/fa";

export default function IndividualClasses() {
  const benefits = [
    {
      icon: <FaUserClock />,
      title: "Flexible Schedule",
      desc: "Learn at your own pace. Weekday evenings or weekends."
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Custom Curriculum",
      desc: "We tailor the syllabus to match your specific career goals or project needs."
    },
    {
      icon: <FaRocket />,
      title: "Career Acceleration",
      desc: "Direct help with your resume, portfolio, and mock interviews."
    }
  ];

  return (
    <div className="py-24 bg-base-100 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-neutral to-neutral-focus text-neutral-content rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl">
            
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                <div className="lg:w-1/2">
                    <div className="badge badge-warning text-warning-content mb-4 font-bold border-none">Premium Option</div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                        Need <span className="text-warning">1-on-1</span> Attention?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 leading-relaxed">
                        Struggling with a specific concept? Or need a fast-track to a job? 
                        Our **Individual Classes** offer 100% personalized mentorship focused entirely on YOU.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <a href="/contact" className="btn btn-warning btn-lg border-none text-neutral font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
                            Book a Session
                        </a>
                        <a href="https://wa.me/YOUR_NUMBER" className="btn btn-outline btn-lg text-white border-white/20 hover:bg-white/10 hover:border-white rounded-xl">
                            <FaWhatsapp className="text-xl" /> Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        {benefits.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ x: 10 }}
                                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-6"
                            >
                                <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center text-warning text-2xl shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-white mb-1">{item.title}</h4>
                                    <p className="text-white/60 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
