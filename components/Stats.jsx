"use client";
import React from "react";
import { FaUserGraduate, FaBriefcase, FaTrophy, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { 
    icon: <FaUserGraduate className="text-4xl" />, 
    count: "500+", 
    label: "Students Trained",
    color: "text-primary"
  },
  { 
    icon: <FaBriefcase className="text-4xl" />, 
    count: "95%", 
    label: "Job Placement",
    color: "text-secondary"
  },
  { 
    icon: <FaTrophy className="text-4xl" />, 
    count: "100+", 
    label: "Projects Completed",
    color: "text-accent"
  },
  { 
    icon: <FaRocket className="text-4xl" />, 
    count: "50+", 
    label: "Hiring Partners",
    color: "text-warning"
  },
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </h2>
          <p className="text-base-content/70">Proven track record of student success</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-all"
            >
              <div className="card-body items-center text-center p-6">
                <div className={`${stat.color} mb-3`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-black ${stat.color}`}>
                  {stat.count}
                </div>
                <div className="text-sm font-semibold opacity-70 mt-2">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
