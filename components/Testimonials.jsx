"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Saman Perera",
    role: "Frontend Developer @ WSO2",
    text: "CodeRoom transformed my career. The hands-on projects and mentorship helped me land my dream job at WSO2. The instructors genuinely care about your success.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5
  },
  {
    name: "Nimali Fernando",
    role: "Full Stack Developer",
    text: "From zero coding knowledge to building full-stack applications in 6 months! The curriculum is perfectly structured. Best investment I've made in my career.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5
  },
  {
    name: "Kasun Jayasuriya",
    role: "Software Engineer @ Virtusa",
    text: "The community at CodeRoom is amazing. Real-time doubt clearing, code reviews, and networking opportunities made all the difference in my learning journey.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5
  },
  {
    name: "Tharushi Silva",
    role: "React Developer @ 99X",
    text: "The frontend course exceeded my expectations. Learning React, Next.js, and design principles together gave me a complete skillset. Now working on exciting projects!",
    avatar: "https://i.pravatar.cc/150?img=9",
    rating: 5
  },
  {
    name: "Ravindu Wickramasinghe",
    role: "Backend Engineer @ IFS",
    text: "Solid foundation in Node.js, databases, and cloud deployment. The real-world projects in my portfolio helped me stand out in interviews. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-base-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge badge-secondary badge-lg mb-4">Success Stories</div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Hear From Our Alumni</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Real stories from students who transformed their careers with CodeRoom
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card bg-base-200 shadow-xl"
            >
              <div className="card-body">
                <FaQuoteLeft className="text-3xl text-primary/30 mb-4" />
                
                <div className="flex gap-1 text-warning mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-base-content/80 italic mb-6">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <FaQuoteLeft className="text-3xl text-primary/30 mb-4" />
                    
                    <div className="flex gap-1 text-warning mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="text-base-content/80 italic mb-6">"{testimonial.text}"</p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={testimonial.avatar} alt={testimonial.name} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-base-content/60">{testimonial.role}</p>
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
          viewport={{ once: true }}
          className="stats stats-vertical lg:stats-horizontal shadow-xl w-full bg-base-200 mt-12"
        >
          <div className="stat place-items-center">
            <div className="stat-title">Average Rating</div>
            <div className="stat-value text-primary flex items-center gap-2">
              4.9 <FaStar className="text-2xl text-warning" />
            </div>
            <div className="stat-desc">From 500+ reviews</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Job Placement</div>
            <div className="stat-value text-secondary">95%</div>
            <div className="stat-desc">Within 3 months</div>
          </div>
          
          <div className="stat place-items-center">
            <div className="stat-title">Satisfaction</div>
            <div className="stat-value text-accent">98%</div>
            <div className="stat-desc">Would recommend</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
