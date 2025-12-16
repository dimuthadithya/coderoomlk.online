"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaUsers, FaArrowRight, FaFire } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    description: "Master the complete MERN stack and build production-ready applications from scratch.",
    startDate: "Jan 15, 2025",
    duration: "6 Months",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    price: "Rs. 45,000",
    students: 120,
    level: "Beginner to Advanced",
    hot: true
  },
  {
    title: "Frontend Mastery",
    description: "Deep dive into modern frontend with React, Next.js, TypeScript, and cutting-edge UI libraries.",
    startDate: "Feb 01, 2025",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    price: "Rs. 35,000",
    students: 95,
    level: "Intermediate",
    hot: false
  },
  {
    title: "Backend Engineering",
    description: "Build scalable APIs and microservices with Node.js, Express, databases, and cloud deployment.",
    startDate: "Feb 15, 2025",
    duration: "5 Months",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    tags: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    price: "Rs. 40,000",
    students: 78,
    level: "Intermediate to Advanced",
    hot: false
  },
  {
    title: "Python Full Stack",
    description: "Learn Python, Django, REST APIs, and build modern web applications with Python ecosystem.",
    startDate: "Mar 01, 2025",
    duration: "5 Months",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "Django", "PostgreSQL", "React"],
    price: "Rs. 38,000",
    students: 65,
    level: "Beginner to Advanced",
    hot: false
  },
  {
    title: "Mobile App Development",
    description: "Create cross-platform mobile apps with React Native and deploy to iOS and Android.",
    startDate: "Mar 15, 2025",
    duration: "4 Months",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tags: ["React Native", "Expo", "Firebase", "Redux"],
    price: "Rs. 42,000",
    students: 55,
    level: "Intermediate",
    hot: true
  },
  {
    title: "DevOps & Cloud",
    description: "Master CI/CD, Docker, Kubernetes, AWS, and modern DevOps practices for deployment.",
    startDate: "Apr 01, 2025",
    duration: "3 Months",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    price: "Rs. 35,000",
    students: 42,
    level: "Advanced",
    hot: false
  }
];

const Courses = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden" id="courses">
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
            <span className="badge badge-primary badge-lg gap-2">
              <FaFire className="text-warning" />
              Popular Courses
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Launch Your Tech Career
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Industry-focused curriculum designed by experts. Learn by building real projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 overflow-hidden h-full">
                {/* Image */}
                <figure className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-60"></div>
                  
                  {course.hot && (
                    <div className="absolute top-4 right-4 badge badge-error gap-1 shadow-lg">
                      <FaFire /> Hot
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 badge badge-primary badge-lg">
                    {course.level}
                  </div>
                </figure>

                <div className="card-body">
                  <h3 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-base-content/70 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 my-3">
                    {course.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="badge badge-outline badge-sm">
                        {tag}
                      </span>
                    ))}
                    {course.tags.length > 3 && (
                      <span className="badge badge-ghost badge-sm">
                        +{course.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-t border-base-300">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCalendarAlt className="text-primary" />
                      <div>
                        <div className="text-xs opacity-60">Starts</div>
                        <div className="font-semibold">{course.startDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaClock className="text-secondary" />
                      <div>
                        <div className="text-xs opacity-60">Duration</div>
                        <div className="font-semibold">{course.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm pb-3">
                    <FaUsers className="text-accent" />
                    <span className="opacity-70">{course.students} students enrolled</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="card-actions justify-between items-center pt-3 border-t border-base-300">
                    <div>
                      <div className="text-xs opacity-60">Course Fee</div>
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary gap-2"
                    >
                      Enroll Now
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
            <div className="card-body">
              <h3 className="text-2xl font-bold">Can't find what you're looking for?</h3>
              <p className="text-base-content/70">We offer custom training programs for teams and individuals.</p>
              <div className="card-actions justify-center mt-4">
                <a href="#contact" className="btn btn-primary btn-lg gap-2">
                  Request Custom Course
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
