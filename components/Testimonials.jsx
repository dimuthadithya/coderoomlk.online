"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaLinkedin } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const testimonials = [
  {
    name: "Saman Perera",
    role: "Frontend Developer @ WSO2",
    text: "CodeRoom completely transformed my career trajectory. The hands-on projects and mentorship helped me land my dream job. The instructors genuinely care about your success.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    company: "WSO2"
  },
  {
    name: "Nimali Fernando",
    role: "Full Stack Developer",
    text: "From zero coding knowledge to building full-stack applications in 6 months! The curriculum is perfectly structured and the support is incredible. Best investment I've made.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    company: "Freelancer"
  },
  {
    name: "Kasun Jayasuriya",
    role: "Software Engineer @ Virtusa",
    text: "The community at CodeRoom is amazing. Real-time doubt clearing, code reviews, and networking opportunities made all the difference. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    company: "Virtusa"
  },
  {
    name: "Dilshan Aponso",
    role: "React Developer @ hSenid",
    text: "Industry-relevant curriculum with Next.js, TypeScript, and modern tools. The job preparation and interview coaching helped me get placed within a month of completion.",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    company: "hSenid"
  },
  {
    name: "Tharushi Silva",
    role: "UI/UX Developer",
    text: "The frontend course exceeded my expectations. Learning React, Tailwind, and design principles together gave me a complete skillset. Now working on exciting projects!",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    company: "99X"
  },
  {
    name: "Ravindu Wickramasinghe",
    role: "Backend Engineer",
    text: "Solid foundation in Node.js, databases, and cloud deployment. The real-world projects in the portfolio helped me stand out in interviews. Worth every penny!",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 4,
    company: "IFS"
  }
];

const Testimonials = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(244,114,182,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="badge badge-secondary badge-lg gap-2">
              <FaStar className="text-warning" />
              Student Success Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Hear From Our Alumni
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Real stories from students who transformed their careers with CodeRoom
          </p>
        </motion.div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <FaQuoteLeft className="text-3xl text-primary/30 mb-4" />
                
                <div className="flex gap-1 text-warning mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < t.rating ? "" : "text-base-300"} />
                  ))}
                </div>

                <p className="text-base-content/80 mb-6 italic">"{t.text}"</p>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-base-300">
                  <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={t.avatar} alt={t.name} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <p className="text-sm text-secondary">{t.role}</p>
                    <p className="text-xs opacity-60">{t.company}</p>
                  </div>
                  <FaLinkedin className="text-2xl text-primary opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Swiper */}
        <div className="lg:hidden">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCards, Pagination, Autoplay]}
            className="max-w-sm mx-auto pb-12"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 shadow-2xl border border-base-300 min-h-[400px]">
                  <div className="card-body">
                    <FaQuoteLeft className="text-3xl text-primary/30 mb-4" />
                    
                    <div className="flex gap-1 text-warning mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < t.rating ? "" : "text-base-300"} />
                      ))}
                    </div>

                    <p className="text-base-content/80 mb-6 italic">"{t.text}"</p>

                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-base-300">
                      <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={t.avatar} alt={t.name} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{t.name}</h3>
                        <p className="text-sm text-secondary">{t.role}</p>
                        <p className="text-xs opacity-60">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="stats stats-vertical lg:stats-horizontal shadow-xl w-full bg-base-100 border border-base-300 mt-12"
        >
          <div className="stat place-items-center">
            <div className="stat-title">Average Rating</div>
            <div className="stat-value text-primary flex items-center gap-2">
              4.9 <FaStar className="text-3xl text-warning" />
            </div>
            <div className="stat-desc">From 500+ reviews</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Job Placement</div>
            <div className="stat-value text-secondary">95%</div>
            <div className="stat-desc">Within 3 months</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Satisfaction Rate</div>
            <div className="stat-value text-accent">98%</div>
            <div className="stat-desc">Would recommend</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
