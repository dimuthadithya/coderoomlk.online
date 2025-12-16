"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaMobile, FaCode, FaDatabase, FaArrowRight, FaFire } from "react-icons/fa";

const courses = [
  {
    title: "Full Stack Web Development",
    description: "Master MERN stack with React, Node.js, Express, and MongoDB. Build production-ready applications from scratch.",
    icon: <FaReact className="text-5xl" />,
    duration: "6 Months",
    level: "Beginner to Advanced",
    price: "Rs. 45,000",
    color: "primary",
    features: ["Live Classes", "Real Projects", "Job Support"],
    popular: true
  },
  {
    title: "Frontend Mastery",
    description: "Deep dive into React, Next.js, TypeScript, and modern UI libraries. Create stunning, responsive interfaces.",
    icon: <FaCode className="text-5xl" />,
    duration: "4 Months",
    level: "Intermediate",
    price: "Rs. 35,000",
    color: "secondary",
    features: ["React & Next.js", "TypeScript", "UI/UX Design"]
  },
  {
    title: "Backend Engineering",
    description: "Build scalable APIs with Node.js, databases, authentication, and deploy to cloud platforms.",
    icon: <FaNodeJs className="text-5xl" />,
    duration: "5 Months",
    level: "Intermediate",
    price: "Rs. 40,000",
    color: "accent",
    features: ["Node.js & Express", "PostgreSQL", "AWS Deploy"]
  },
  {
    title: "Python Full Stack",
    description: "Learn Python, Django, REST APIs, and build modern web applications with Python ecosystem.",
    icon: <FaPython className="text-5xl" />,
    duration: "5 Months",
    level: "Beginner",
    price: "Rs. 38,000",
    color: "info",
    features: ["Python & Django", "REST API", "Database Design"]
  },
  {
    title: "Mobile App Development",
    description: "Create cross-platform apps with React Native. Deploy to iOS and Android app stores.",
    icon: <FaMobile className="text-5xl" />,
    duration: "4 Months",
    level: "Intermediate",
    price: "Rs. 42,000",
    color: "success",
    features: ["React Native", "Expo", "Firebase"]
  },
  {
    title: "Database & DevOps",
    description: "Master databases, Docker, Kubernetes, CI/CD pipelines, and cloud infrastructure management.",
    icon: <FaDatabase className="text-5xl" />,
    duration: "3 Months",
    level: "Advanced",
    price: "Rs. 35,000",
    color: "warning",
    features: ["Docker", "Kubernetes", "CI/CD Pipelines"]
  },
];

export default function Courses() {
  return (
    <div className="py-24 bg-base-200 relative overflow-hidden" id="courses">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--p)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <FaFire className="text-primary" />
            <span className="text-sm font-semibold text-primary">Popular Courses</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-4">
            <span className="gradient-text">Launch Your Tech Career</span>
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Industry-focused curriculum designed by experts. Learn by building real-world projects.
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
              className="group"
            >
              <div className={`card glass-card hover:glow-card transition-all duration-300 h-full relative overflow-hidden ${
                course.popular ? 'ring-2 ring-primary' : ''
              }`}>
                {/* Popular badge */}
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="badge badge-primary gap-1 animate-pulse">
                      <FaFire /> Popular
                    </div>
                  </div>
                )}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="card-body relative z-10">
                  <div className={`text-${course.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {course.icon}
                  </div>
                  
                  <h3 className="card-title text-2xl mb-2 text-base-content">
                    {course.title}
                  </h3>
                  
                  <p className="text-base-content/70 mb-4 flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="flex gap-2 my-4 flex-wrap">
                    {course.features.map((feature, i) => (
                      <div key={i} className={`badge badge-${course.color} badge-outline badge-sm`}>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="divider my-2"></div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <div className="text-base-content/60 text-xs mb-1">Duration</div>
                      <div className="font-semibold text-base-content">{course.duration}</div>
                    </div>
                    <div>
                      <div className="text-base-content/60 text-xs mb-1">Level</div>
                      <div className="font-semibold text-base-content">{course.level}</div>
                    </div>
                  </div>

                  <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-base-content/10">
                    <div className={`text-2xl font-black text-${course.color}`}>
                      {course.price}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`btn btn-${course.color} btn-sm gap-2`}
                    >
                      Enroll <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card glass-card glow-card">
            <div className="card-body items-center text-center">
              <h3 className="text-3xl font-bold gradient-text mb-2">
                Can't find what you're looking for?
              </h3>
              <p className="text-lg text-base-content/70 mb-6">
                We offer custom training programs tailored for teams and individuals.
              </p>
              <motion.a
                href="#contact"
                className="btn btn-primary btn-lg gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Custom Course <FaArrowRight />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
