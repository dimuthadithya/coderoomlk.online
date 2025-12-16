'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials'; // Reusing success stories
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaClock,
  FaVideo,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaWhatsapp,
} from 'react-icons/fa';

export default function CourseRegistration() {
  return (
    <main className='min-h-screen bg-base-100'>
      <Navbar />

      {/* 1. HERO SECTION */}
      <div className='relative pt-32 pb-20 overflow-hidden'>
        {/* Background Gradients */}
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10'>
          <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]'></div>
          <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]'></div>
        </div>

        <div className='max-w-7xl mx-auto px-4 text-center'>
          <div className='badge badge-accent badge-outline mb-4 font-bold'>
            New Batch Enrolling Now
          </div>
          <h1 className='text-5xl md:text-7xl font-black mb-6 tracking-tight'>
            Master <span className='gradient-text'>Full Stack</span>{' '}
            <br className='hidden md:block' /> Web Development
          </h1>
          <p className='text-xl opacity-70 max-w-2xl mx-auto mb-10 leading-relaxed'>
            Become a production-ready developer in 6 months. Live specialized
            training on React, Next.js, and Modern Backend Architecture.
          </p>

          <div className='flex flex-col md:flex-row justify-center gap-4 mb-16'>
            <a
              href='#register'
              className='btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-primary/50 transition-all'
            >
              Register Now
            </a>
            <a href='#curriculum' className='btn btn-ghost btn-lg rounded-full'>
              View Curriculum
            </a>
          </div>

          {/* Quick Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
            {[
              { icon: FaCalendarAlt, label: 'Start Date', val: 'Coming Soon' },
              { icon: FaClock, label: 'Duration', val: '6 Months' },
              { icon: FaVideo, label: 'Mode', val: 'Live Online' },
              {
                icon: FaChalkboardTeacher,
                label: 'Language',
                val: 'Sinhala/English',
              },
            ].map((item, i) => (
              <div
                key={i}
                className='glass-card p-4 rounded-2xl flex flex-col items-center'
              >
                <item.icon className='text-2xl text-primary mb-2' />
                <div className='font-bold text-lg'>{item.val}</div>
                <div className='text-xs opacity-60'>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. CURRICULUM PLACEHOLDER */}
      <section className='py-20 bg-base-200/50' id='curriculum'>
        <div className='max-w-5xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>What You Will Learn</h2>
            <p className='opacity-70'>
              A comprehensive curriculum designed for 2025's job market.
            </p>
          </div>

          <div className='grid gap-6'>
            {/* Module Placeholder */}
            {[1, 2, 3, 4, 5, 6].map((m) => (
              <div
                key={m}
                className='collapse collapse-arrow bg-base-100 border border-base-content/10 rounded-xl'
              >
                <input
                  type='radio'
                  name='my-accordion-2'
                  defaultChecked={m === 1}
                />
                <div className='collapse-title text-xl font-medium flex items-center gap-4'>
                  <span className='badge badge-neutral'>Module 0{m}</span>
                  <span>Course Content Loading...</span>
                </div>
                <div className='collapse-content'>
                  <p className='opacity-70'>
                    Detailed syllabus will be updated soon.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SUCCESS STORIES (Reused) */}
      <Testimonials />

      {/* 4. REGISTRATION FORM */}
      <section className='py-24 relative' id='register'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='glass-card p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-base-100 to-base-200'>
            <div className='text-center mb-10'>
              <h2 className='text-4xl font-black mb-4'>Secure Your Spot</h2>
              <p className='opacity-70'>
                Limited seats available for the upcoming batch. Fill out the
                form below to join the waitlist.
              </p>
            </div>

            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Full Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='John Doe'
                    className='input input-bordered w-full'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email Address</span>
                  </label>
                  <input
                    type='email'
                    placeholder='john@example.com'
                    className='input input-bordered w-full'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>WhatsApp Number</span>
                  </label>
                  <input
                    type='tel'
                    placeholder='+94 7...'
                    className='input input-bordered w-full'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Current Status</span>
                  </label>
                  <select
                    className='select select-bordered w-full'
                    defaultValue='default'
                  >
                    <option disabled value='default'>
                      Select one
                    </option>
                    <option>Student</option>
                    <option>Working Professional</option>
                    <option>Freelancer</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className='form-control mt-6'>
                <button className='btn btn-primary btn-lg w-full text-lg'>
                  Register Interest <FaCheckCircle />
                </button>
                <p className='text-xs text-center mt-4 opacity-50'>
                  We will simple contact you via WhatsApp for the next steps.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
