'use client';
import React, { useState, useEffect } from 'react';
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

export default function ExamSession({
  title = 'Last-Minute Exam Help',
  subtitle = 'Exam Help',
  description = 'Get your questions answered in a live interactive session. Perfect for clarifying doubts before your exams.',
  targetAudience = 'All Students',
  sessionDate = 'Saturday, January 24th',
  sessionTime = '8:30 AM onwards',
  formLink = 'https://forms.gle/RVdDEResW3esTYNAA',
  registrationCount = 47,
}) {
  const [count, setCount] = useState(registrationCount);

  useEffect(() => {
    setCount(registrationCount);
  }, [registrationCount]);

  const sessionDetails = [
    {
      icon: <FaClock className='text-3xl' />,
      title: 'Session Date & Time',
      description: `${sessionDate} - ${sessionTime}`,
      color: 'primary',
    },
    {
      icon: <FaVideo className='text-3xl' />,
      title: 'Platform',
      description: 'Google Meet',
      color: 'secondary',
    },
    {
      icon: <FaUserGraduate className='text-3xl' />,
      title: 'Access',
      description: 'Only registered students receive meeting link',
      color: 'accent',
    },
    {
      icon: <FaExclamationTriangle className='text-3xl' />,
      title: 'Important',
      description: 'Live session - No recordings available',
      color: 'warning',
    },
  ];

  return (
    <main className='min-h-screen bg-base-100 relative overflow-hidden'>
      {/* Minimal static background decoration */}
      <div className='absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-base-200 to-transparent pointer-events-none'></div>

      {/* Hero Section */}
      <div className='relative pt-32 pb-20 overflow-hidden'>
        <div className='max-w-6xl mx-auto px-4 text-center relative z-10'>
          <div>
            <div className='inline-block px-4 py-1.5 mb-8 border border-base-content/10 rounded-full text-xs font-semibold tracking-widest uppercase opacity-60'>
              Live Exam Help Session • {targetAudience}
            </div>

            <h1 className='text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-base-content'>
              {title} <br />
              <span className='gradient-text'>{subtitle}</span>
            </h1>

            <p className='text-xl text-base-content/60 max-w-3xl mx-auto mb-10 leading-relaxed font-light'>
              {description}
              <br />
              <br />
              <span className='font-semibold text-primary'>
                {sessionDate} • {sessionTime}
              </span>
            </p>

            {/* Stats Row */}
            <div className='flex flex-wrap justify-center gap-6 mb-12'>
              <div className='bg-base-200/50 border border-base-content/10 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <FaUsers className='text-2xl text-primary' />
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-primary tabular-nums'>
                      {count}
                    </div>
                    <div className='text-xs opacity-60'>Students Joined</div>
                  </div>
                </div>
              </div>

              <div className='bg-base-200/50 border border-base-content/10 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-success rounded-full'></div>
                  <div className='text-left'>
                    <div className='text-sm font-bold'>100% Live</div>
                    <div className='text-xs opacity-60'>No Recordings</div>
                  </div>
                </div>
              </div>

              <div className='bg-base-200/50 border border-base-content/10 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <FaRocket className='text-2xl text-secondary' />
                  <div className='text-left'>
                    <div className='text-sm font-bold'>100% Free</div>
                    <div className='text-xs opacity-60'>Zero Cost</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <div className='space-y-4'>
              <div className='flex flex-col sm:flex-row gap-5 justify-center mb-4'>
                <a
                  href={formLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary btn-lg px-8 font-medium'
                >
                  <FaCheckCircle />
                  Register Now - It's Free!
                </a>
              </div>
              <p className='text-sm opacity-60 font-light'>
                <FaLightbulb className='inline mr-1' />
                Instant confirmation via email
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Session Details Section */}
      <div className='max-w-7xl mx-auto px-4 pb-24'>
        <div>
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
              <div
                key={index}
                className='bg-base-200/30 border border-base-content/10 p-6'
              >
                <div className={`text-${detail.color} mb-4`}>{detail.icon}</div>
                <h3 className='text-lg font-bold mb-2'>{detail.title}</h3>
                <p className='text-sm opacity-70 leading-relaxed'>
                  {detail.description}
                </p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className='bg-base-200/30 border border-base-content/10 p-8 border-l-4 border-l-primary'>
            <div className='text-center mb-8'>
              <FaQuestionCircle className='text-4xl text-primary mx-auto mb-4' />
              <h3 className='text-2xl font-bold'>How It Works</h3>
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
                  <div
                    key={idx}
                    className='flex items-start gap-4 bg-base-100/50 border border-base-content/5 p-4'
                  >
                    <div className='badge badge-primary font-bold w-8 h-8 flex items-center justify-center shrink-0'>
                      {item.step}
                    </div>
                    <p className='flex-1 pt-1 text-sm'>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className='space-y-4'>
                {[
                  {
                    step: '3',
                    text: `Join at ${sessionTime.split(' ')[0]} ${sessionTime.split(' ')[1] || ''}`, // Rough parse
                  },
                  {
                    step: '⚠️',
                    text: 'No recordings - Attend live!',
                    important: true,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 ${
                      item.important
                        ? 'bg-warning/10 border border-warning/30'
                        : 'bg-base-100/50 border border-base-content/5'
                    } p-4`}
                  >
                    <div
                      className={`badge ${
                        item.important ? 'badge-warning' : 'badge-secondary'
                      } font-bold w-8 h-8 flex items-center justify-center shrink-0`}
                    >
                      {item.step}
                    </div>
                    <p
                      className={`flex-1 pt-1 text-sm ${
                        item.important ? 'font-bold' : ''
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className='mt-16'>
            <div className='bg-gradient-to-r from-primary to-secondary text-primary-content p-8 md:p-12 relative overflow-hidden'>
              <div className='relative z-10 text-center'>
                <FaGraduationCap className='text-5xl mx-auto mb-4' />
                <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                  Don't Miss Out!
                </h3>
                <p className='text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed'>
                  Limited seats available. Register now to secure your spot and
                  get all your exam doubts cleared by experts!
                </p>
                <a
                  href={formLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-accent btn-lg px-10'
                >
                  <FaRocket />
                  Secure Your Spot Now
                </a>
                <p className='text-xs opacity-80 mt-6'>
                  ✓ Instant confirmation • ✓ Free of charge • ✓ Live Q&A session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
