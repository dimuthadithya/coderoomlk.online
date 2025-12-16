"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    name: "Saman Perera",
    role: "Frontend Developer",
    text: "CodeRoom transformed my career. The mentors are incredibly supportive and the project-based learning approach is exactly what I needed.",
    avatar: "https://i.pravatar.cc/150?img=11",
    rating: 5
  },
  {
    name: "Nimali Fernando",
    role: "Freelancer",
    text: "I went from knowing zero code to building my own freelance websites in just 4 months. Highly recommend their web dev course!",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5
  },
  {
    name: "Kasun Jayasuriya",
    role: "Junior Software Engineer",
    text: "The community at CodeRoom is amazing. You're never learning alone. The feedback on assignments is detailed and helps you grow fast.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4
  },
  {
    name: "Dilshan Aponso",
    role: "React Developer",
    text: "Best investment I made for my future. The curriculum is up-to-date with industry standards like Next.js and Tailwind.",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-base-100" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-base-content/70">Don't just take our word for it. Hear from our alumni.</p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-full max-w-4xl py-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="w-80 md:w-96 bg-base-200 p-8 rounded-2xl shadow-xl border border-base-300 relative">
               <FaQuoteLeft className="text-4xl text-primary/20 absolute top-4 left-4" />
               <div className="flex flex-col items-center text-center mt-4">
                  <div className="avatar mb-4">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={t.avatar} alt={t.name} />
                    </div>
                  </div>
                  <div className="flex gap-1 text-warning mb-4">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < t.rating ? "" : "text-base-300"} />
                    ))}
                  </div>
                  <p className="italic text-base-content/80 mb-6">"{t.text}"</p>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <span className="text-sm text-secondary">{t.role}</span>
               </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
