"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaMobile, FaCode, FaDatabase } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    description: "Master MERN stack with React, Node.js, Express, and MongoDB. Build production-ready applications.",
    icon: <FaReact className="text-4xl" />,
    duration: "6 Months",
    level: "Beginner to Advanced",
    price: "Rs. 45,000",
    color: "primary",
    features: ["Live Classes", "Real Projects", "Job Support"]
  },
  {
    title: "Frontend Mastery",
    description: "Deep dive into React, Next.js, TypeScript, and modern UI libraries. Create stunning interfaces.",
    icon: <FaCode className="text-4xl" />,
    duration: "4 Months",
    level: "Intermediate",
    price: "Rs. 35,000",
    color: "secondary",
    features: ["React & Next.js", "TypeScript", "UI/UX"]
  },
  {
    title: "Backend Engineering",
    description: "Build scalable APIs with Node.js, databases, authentication, and cloud deployment.",
    icon: <FaNodeJs className="text-4xl" />,
    duration: "5 Months",
    level: "Intermediate",
    price: "Rs. 40,000",
    color: "accent",
    features: ["Node.js", "PostgreSQL", "AWS"]
  },
  {
    title: "Python Full Stack",
    description: "Learn Python, Django, REST APIs, and build modern web applications from scratch.",
    icon: <FaPython className="text-4xl" />,
    duration: "5 Months",
    level: "Beginner",
    price: "Rs. 38,000",
    color: "info",
    features: ["Python", "Django", "REST API"]
  },
  {
    title: "Mobile App Development",
    description: "Create cross-platform apps with React Native. Deploy to iOS and Android.",
    icon: <FaMobile className="text-4xl" />,
    duration: "4 Months",
    level: "Intermediate",
    price: "Rs. 42,000",
    color: "success",
    features: ["React Native", "Expo", "Firebase"]
  },
  {
    title: "Database & DevOps",
    description: "Master databases, Docker, Kubernetes, CI/CD, and cloud infrastructure.",
    icon: <FaDatabase className="text-4xl" />,
    duration: "3 Months",
    level: "Advanced",
    price: "Rs. 35,000",
    color: "warning",
    features: ["Docker", "Kubernetes", "CI/CD"]
  },
];

export default function Courses() {
  return (
    <div className="py-24 bg-base-200" id="courses">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="badge badge-primary badge-lg mb-4">Our Courses</div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Launch Your Tech Career</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Industry-focused curriculum designed by experts. Learn by building real projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="card-body">
                <div className={`text-${course.color} mb-4`}>
                  {course.icon}
                </div>
                <h3 className="card-title text-2xl">{course.title}</h3>
                <p className="text-base-content/70">{course.description}</p>
                
                <div className="flex gap-2 my-4 flex-wrap">
                  {course.features.map((feature, i) => (
                    <div key={i} className={`badge badge-${course.color} badge-outline`}>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="divider"></div>

                <div className="flex justify-between items-center text-sm">
                  <div>
                    <div className="font-semibold">Duration</div>
                    <div className="text-base-content/60">{course.duration}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Level</div>
                    <div className="text-base-content/60">{course.level}</div>
                  </div>
                </div>

                <div className="card-actions justify-between items-center mt-4">
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`btn btn-${course.color}`}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-2xl">
            <div className="card-body">
              <h3 className="text-3xl font-bold">Can't find what you're looking for?</h3>
              <p className="text-lg opacity-90">We offer custom training programs for teams and individuals.</p>
              <div className="card-actions justify-center mt-4">
                <a href="#contact" className="btn btn-neutral btn-lg">
                  Request Custom Course
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
