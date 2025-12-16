"use client";
import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaProjectDiagram, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { icon: <FaUserGraduate />, count: "500+", label: "Students Trained" },
  { icon: <FaChalkboardTeacher />, count: "50+", label: "Expert Mentors" },
  { icon: <FaProjectDiagram />, count: "100+", label: "Real Projects" },
  { icon: <FaAward />, count: "100%", label: "Job Assistance" },
];

const Stats = () => {
  return (
    <div className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
             <h2 className="text-3xl font-bold text-primary">Our Impact</h2>
             <p className="text-base-content/70 mt-2">Driven by results and student success.</p>
        </motion.div>

        <div className="stats stats-vertical lg:stats-horizontal shadow-xl w-full bg-base-200">
          {stats.map((stat, index) => (
            <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat place-items-center"
            >
              <div className="stat-figure text-secondary text-3xl">
                {stat.icon}
              </div>
              <div className="stat-title">{stat.label}</div>
              <div className="stat-value text-primary">{stat.count}</div>
              <div className="stat-desc">Since 2023</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
