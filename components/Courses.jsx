"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaTag, FaArrowRight } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    description: "Master MERN stack (MongoDB, Express, React, Node.js) and build modern web applications.",
    startDate: "Oct 15, 2025",
    duration: "6 Months",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "NodeJS", "MongoDB"],
    price: "Rs. 45,000"
  },
  {
    title: "Frontend Engineering",
    description: "Deep dive into HTML, CSS, JavaScript, React, and modern UI libraries like DaisyUI & Tailwind.",
    startDate: "Nov 01, 2025",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
    tags: ["UI/UX", "React", "Tailwind"],
    price: "Rs. 30,000"
  },
  {
    title: "Python for Web & Data",
    description: "Learn Python from scratch and use it for Django backend development and basic data analysis.",
    startDate: "Nov 20, 2025",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "Django", "SQL"],
    price: "Rs. 35,000"
  }
];

const Courses = () => {
  return (
    <div className="py-20 bg-base-200" id="courses">
       <div className="container mx-auto px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary inline-block">
                    Upcoming Courses
                </h2>
                <p className="mt-4 text-base-content/70">
                    Find the perfect path for your developer journey.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        className="card bg-base-100 shadow-xl overflow-hidden border border-base-300"
                    >
                        <figure className="h-48 relative">
                           <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                           <div className="absolute top-2 right-2 badge badge-secondary animate-pulse">Enrolling Now</div>
                        </figure>
                        <div className="card-body">
                             <h2 className="card-title text-primary">
                                {course.title}
                             </h2>
                             <p className="text-sm text-base-content/60">{course.description}</p>
                             
                             <div className="flex flex-wrap gap-2 my-3">
                                {course.tags.map(tag => (
                                    <span key={tag} className="badge badge-outline badge-sm"><FaTag className="inline mr-1 text-xs"/>{tag}</span>
                                ))}
                             </div>

                             <div className="flex justify-between items-center text-sm font-semibold mt-auto pt-4 border-t border-base-200">
                                <div>
                                    <span className="flex items-center gap-1 text-xs uppercase text-base-content/50"><FaCalendarAlt /> Starts On</span>
                                    {course.startDate}
                                </div>
                                <div>
                                    <span className="flex items-center gap-1 text-xs uppercase text-base-content/50"><FaClock /> Duration</span>
                                    {course.duration}
                                </div>
                             </div>
                             
                             <div className="card-actions justify-end mt-4 items-center">
                                <div className="text-xl font-bold mr-auto text-secondary">{course.price}</div>
                                <button className="btn btn-primary btn-sm group">
                                    Join Batch <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                                </button>
                             </div>
                        </div>
                    </motion.div>
                ))}
            </div>
       </div>
    </div>
  );
};

export default Courses;
