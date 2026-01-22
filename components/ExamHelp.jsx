'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaClock,
  FaVideo,
  FaUserGraduate,
  FaExclamationTriangle,
  FaCheckCircle,
  FaUsers,
  FaRocket,
  FaGraduationCap,
  FaLightbulb,
  FaQuestionCircle,
} from 'react-icons/fa';

export default function ExamHelp() {
  const [registrationCount, setRegistrationCount] = useState(0);

  useEffect(() => {
    // Simulated registration count - you can replace this with actual API call
    const baseCount = 47;
    setRegistrationCount(baseCount);
  }, []);

  const sessionDetails = [
    {
      icon: <FaClock className='text-4xl' />,
      title: 'Session Date & Time',
      description: 'Saturday, January 24th - 8:30 AM onwards',
      color: 'primary',
    },
    {
      icon: <FaVideo className='text-4xl' />,
      title: 'Platform',
      description: 'Google Meet',
      color: 'secondary',
    },
    {
      icon: <FaUserGraduate className='text-4xl' />,
      title: 'Access',
      description: 'Only registered students receive meeting link',
      color: 'accent',
    },
    {
      icon: <FaExclamationTriangle className='text-4xl' />,
      title: 'Important',
      description: 'Live session - No recordings available',
      color: 'warning',
    },
  ];

  return (
    <main className='min-h-screen bg-base-100 relative overflow-hidden'>
      {/* Minimal static background decoration matching other pages */}
      <div className='absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-base-200 to-transparent pointer-events-none'></div>

      {/* Hero Section */}
      <div className='relative pt-32 pb-20 overflow-hidden'>
        <div className='max-w-6xl mx-auto px-4 text-center relative z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge matching site style */}
            <div className='inline-block px-4 py-1.5 mb-8 border border-base-content/10 rounded-full text-xs font-semibold tracking-widest uppercase opacity-60'>
              Live Exam Help Session
            </div>

            <h1 className='text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-base-content'>
              Last-Minute <br />
              <span className='gradient-text'>Exam Help</span>
            </h1>

            <p className='text-xl text-base-content/60 max-w-3xl mx-auto mb-10 leading-relaxed font-light'>
              Get your questions answered in a live interactive session.
              <br />
              <span className='font-semibold text-primary'>
                Saturday, January 24th • 8:30 AM
              </span>
              <br />
              Perfect for clarifying doubts before your exams.
            </p>

            {/* Stats Row */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
              {/* Registration Count */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className='glass-card rounded-3xl px-6 py-4'
              >
                <div className='flex items-center gap-3'>
                  <FaUsers className='text-3xl text-primary' />
                  <div className='text-left'>
                    <div className='text-3xl font-black text-primary tabular-nums'>
                      {registrationCount}
                    </div>
                    <div className='text-sm opacity-60 font-medium'>
                      Students Joined
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Live Indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
                className='glass-card rounded-3xl px-6 py-4'
              >
                <div className='flex items-center gap-3'>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className='w-4 h-4 bg-success rounded-full shadow-lg shadow-success/50'></div>
                  </motion.div>
                  <div className='text-left'>
                    <div className='text-sm font-bold'>100% Live</div>
                    <div className='text-xs opacity-60'>No Recordings</div>
                  </div>
                </div>
              </motion.div>

              {/* Free Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
                className='glass-card rounded-3xl px-6 py-4'
              >
                <div className='flex items-center gap-3'>
                  <FaRocket className='text-3xl text-secondary' />
                  <div className='text-left'>
                    <div className='text-sm font-bold'>100% Free</div>
                    <div className='text-xs opacity-60'>Zero Cost</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Register Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='space-y-4'
            >
              <div className='flex flex-col sm:flex-row gap-5 justify-center mb-4'>
                <motion.a
                  href='https://forms.gle/RVdDEResW3esTYNAA'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='btn btn-primary btn-lg rounded-xl px-8 font-medium shadow-lg hover:shadow-primary/20 transition-all'
                >
                  <FaCheckCircle className='text-xl' />
                  Register Now - It's Free!
                </motion.a>
              </div>
              <p className='text-sm opacity-60 font-light'>
                <FaLightbulb className='inline mr-1' />
                Instant confirmation via email
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Session Details Section */}
      <div className='max-w-7xl mx-auto px-4 pb-24'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-black mb-6'>
              Session <span className='gradient-text'>Details</span>
            </h2>
            <p className='text-xl text-base-content/70'>
              Everything you need to know about the live session
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
            {sessionDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className='glass-card p-6 rounded-3xl glow-card'
              >
                <div className={`text-${detail.color} mb-4`}>{detail.icon}</div>
                <h3 className='text-xl font-bold mb-2'>{detail.title}</h3>
                <p className='text-sm opacity-70 leading-relaxed'>
                  {detail.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* How It Works Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='glass-card p-8 rounded-3xl border-t-4 border-primary'
          >
            <div className='text-center mb-8'>
              <FaQuestionCircle className='text-5xl text-primary mx-auto mb-4' />
              <h3 className='text-3xl font-bold'>How It Works</h3>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='space-y-4'>
                {[
                  {
                    step: '1',
                    text: 'Fill out the registration form',
                  },
                  {
                    step: '2',
                    text: 'Receive Google Meet link via email',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className='flex items-start gap-4 bg-base-200/50 p-4 rounded-xl'
                  >
                    <div className='badge badge-primary badge-lg font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0'>
                      {item.step}
                    </div>
                    <p className='flex-1 pt-2 font-medium'>{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className='space-y-4'>
                {[
                  {
                    step: '3',
                    text: 'Join at 8:30 AM sharp',
                  },
                  {
                    step: '⚠️',
                    text: 'No recordings - Attend live!',
                    important: true,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    className={`flex items-start gap-4 ${
                      item.important
                        ? 'bg-warning/10 border-2 border-warning/30'
                        : 'bg-base-200/50'
                    } p-4 rounded-xl`}
                  >
                    <div
                      className={`badge ${
                        item.important ? 'badge-warning' : 'badge-secondary'
                      } badge-lg font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0`}
                    >
                      {item.step}
                    </div>
                    <p
                      className={`flex-1 pt-2 ${item.important ? 'font-bold' : 'font-medium'}`}
                    >
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className='mt-16'
          >
            <div className='bg-gradient-to-r from-primary to-secondary text-primary-content p-8 md:p-12 rounded-3xl relative overflow-hidden'>
              <div className='relative z-10 text-center'>
                <FaGraduationCap className='text-6xl mx-auto mb-4 opacity-90' />
                <h3 className='text-3xl md:text-4xl font-black mb-4'>
                  Don't Miss Out!
                </h3>
                <p className='text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed'>
                  Limited seats available. Register now to secure your spot and
                  get all your exam doubts cleared by experts!
                </p>
                <motion.a
                  href='https://forms.gle/RVdDEResW3esTYNAA'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='btn btn-accent btn-lg text-lg px-12 rounded-xl shadow-xl'
                >
                  <FaRocket className='text-xl' />
                  Secure Your Spot Now
                </motion.a>
                <p className='text-sm opacity-80 mt-6'>
                  ✓ Instant confirmation • ✓ Free of charge • ✓ Live Q&A session
                </p>
              </div>
              <FaRocket className='absolute bottom-4 right-4 text-8xl opacity-10 transform -rotate-12' />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
