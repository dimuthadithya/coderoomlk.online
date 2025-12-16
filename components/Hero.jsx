'use client';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <div
      className='hero min-h-[90vh] bg-base-100 relative overflow-hidden'
      id='home'
    >
      {/* Minimal static background decoration */}
      <div className='absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none'></div>

      <div className='hero-content flex-col-reverse lg:flex-row-reverse gap-16 max-w-7xl mx-auto px-4 relative z-10 py-20'>
        {/* Right side - Clean Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='lg:w-1/2 w-full'
        >
          <div className='card bg-base-100 border border-base-content/10 shadow-2xl overflow-hidden rounded-xl'>
            {/* Window Controls */}
            <div className='bg-base-200/50 px-4 py-3 border-b border-base-content/5 flex gap-2'>
              <div className='w-3 h-3 rounded-full bg-error/40'></div>
              <div className='w-3 h-3 rounded-full bg-warning/40'></div>
              <div className='w-3 h-3 rounded-full bg-success/40'></div>
            </div>

            {/* Code Content */}
            <div className='p-6 md:p-8 font-mono text-sm md:text-base leading-loose overflow-x-auto'>
              <div className='text-base-content/40 mb-4'>
                # Welcome to your future
              </div>
              <div className='text-primary'>
                const <span className='text-base-content'>student</span> ={' '}
                <span className='text-accent'>new Developer()</span>;
              </div>
              <div className='pl-4 mt-2'>
                <span className='text-secondary'>config</span> = &#123;
                <br />
                &nbsp;&nbsp;motivation:{' '}
                <span className='text-warning'>100%</span>,<br />
                &nbsp;&nbsp;stack: [<span className='text-success'>'MERN'</span>
                , <span className='text-success'>'Next.js'</span>],
                <br />
                &nbsp;&nbsp;hired: <span className='text-error'>false</span>
                <br />
                &#125;;
              </div>
              <div className='mt-4'>
                <span className='text-primary'>await</span>{' '}
                <span className='text-secondary'>CodeRoom</span>
                .transform(student);
              </div>
              <div className='pl-4 mt-2'>
                <span className='text-base-content/40'>// Result:</span>
                <br />
                student.hired = <span className='text-success'>true</span>; 🚀
              </div>
            </div>
          </div>
        </motion.div>

        {/* Left side - Minimalist Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='lg:w-1/2 text-center lg:text-left'
        >
          <div className='inline-block px-4 py-1.5 mb-8 border border-base-content/10 rounded-full text-xs font-semibold tracking-widest uppercase opacity-60'>
            Admissions Open for Batch 2025
          </div>

          <h1 className='text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-base-content'>
            Master the <br />
            <span className='gradient-text'>Modern Web.</span>
          </h1>

          <p className='text-xl text-base-content/60 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light'>
            No fluff. No outdated theories. Just practical, project-based
            engineering mentorship.
          </p>

          <div className='flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12'>
            <a
              href='/courses'
              className='btn btn-primary btn-lg rounded-xl px-8 font-medium shadow-lg hover:shadow-primary/20 transition-all'
            >
              Explore Courses
            </a>
            <a
              href='/contact'
              className='btn btn-ghost btn-lg rounded-xl px-8 font-medium border border-base-content/10 hover:bg-base-content/5'
            >
              Talk to Us <FaArrowRight className='text-sm opacity-60' />
            </a>
          </div>

          <div className='flex items-center gap-8 justify-center lg:justify-start text-sm font-medium opacity-50'>
            <span className='flex items-center gap-2'>✓ Live Mentorship</span>
            <span className='flex items-center gap-2'>✓ Career Guidance</span>
            <span className='flex items-center gap-2'>✓ Code Reviews</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
