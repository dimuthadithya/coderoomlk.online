'use client';
import React from 'react';
import {
  FaClock,
  FaVideo,
  FaUserGraduate,
  FaExclamationTriangle,
  FaCheckCircle,
  FaRocket,
  FaGraduationCap,
  FaLightbulb,
  FaArrowRight,
  FaWhatsapp,
} from 'react-icons/fa';

export default function ExamSession({
  title = 'Last-Minute Exam Help',
  subtitle = 'Exam Help',
  description = 'Get your questions answered in a live interactive session. Perfect for clarifying doubts before your exams.',
  targetAudience = 'All Students',
  sessionDate = 'Saturday, January 24th',
  sessionTime = '8:30 AM onwards',
  formLink = 'https://forms.gle/RVdDEResW3esTYNAA',
}) {
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

            {/* Stats Row - Clean Minimal Style */}
            <div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-12 text-sm font-medium text-base-content/70'>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></div>
                <span>
                  Live Session{' '}
                  <span className='opacity-60 font-normal ml-1'>
                    - No Recordings
                  </span>
                </span>
              </div>
              <div className='hidden md:block w-1 h-1 rounded-full bg-base-content/20'></div>
              <div className='flex items-center gap-2'>
                <div className='w-5 h-5 rounded-full bg-success/10 flex items-center justify-center'>
                  <FaCheckCircle className='text-success text-xs' />
                </div>
                <span>
                  100% Free{' '}
                  <span className='opacity-60 font-normal ml-1'>
                    - Zero Cost
                  </span>
                </span>
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
                  Register Now - It&apos;s Free!
                </a>
              </div>
              <p className='text-sm opacity-60 font-light'>
                <FaLightbulb className='inline mr-1' />
                Instant confirmation via email
              </p>
              <a
                href='https://wa.me/94785854468'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-medium opacity-40 hover:opacity-100 hover:text-success transition-all block mt-2'
              >
                <FaWhatsapp className='inline mr-1 text-lg' />
                Registration issues? WhatsApp +94 78 585 4468
              </a>
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

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-base-content/10 border-y border-base-content/10 mb-16'>
            {sessionDetails.map((detail, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center p-8 hover:bg-base-content/[0.02] transition-colors'
              >
                <div
                  className={`text-${detail.color} mb-5 opacity-90 scale-110`}
                >
                  {detail.icon}
                </div>
                <h3 className='text-xs font-bold uppercase tracking-widest opacity-50 mb-3'>
                  {detail.title}
                </h3>
                <p className='text-lg font-medium leading-relaxed max-w-[250px]'>
                  {detail.description}
                </p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className='my-24 font-sans'>
            <div className='text-center mb-16'>
              <h3 className='text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-3'>
                Process
              </h3>
              <h2 className='text-3xl font-bold'>
                Simple <span className='text-primary'>Steps</span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 relative'>
              {/* Connecting Line (Desktop) */}
              <div className='hidden md:block absolute top-[2.25rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent z-0'></div>

              {[
                {
                  id: '01',
                  title: 'Register Online',
                  text: 'Fill the simple form to book your seat instantly.',
                  icon: <FaCheckCircle />,
                },
                {
                  id: '02',
                  title: 'Get The Link',
                  text: 'Check your email for the exclusive Google Meet invite.',
                  icon: <FaVideo />,
                },
                {
                  id: '03',
                  title: 'Join Live',
                  text: 'Click the link at the scheduled time and learn!',
                  icon: <FaRocket />,
                },
              ].map((step, idx) => (
                <div key={idx} className='relative z-10 group px-4'>
                  <div className='flex flex-col items-center text-center'>
                    <div className='w-16 h-16 rounded-2xl bg-base-100 border border-base-content/10 shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center text-2xl text-primary mb-6 group-hover:-translate-y-2 transition-transform duration-500'>
                      {step.icon}
                    </div>
                    <div className='text-6xl font-black text-base-content/5 absolute -top-4 -z-10 select-none'>
                      {step.id}
                    </div>
                    <h4 className='text-lg font-bold mb-3'>{step.title}</h4>
                    <p className='text-sm opacity-60 leading-relaxed max-w-[200px]'>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section - Clean Style */}
          <div className='mt-24 mb-10'>
            <div className='bg-base-100 relative overflow-hidden rounded-3xl border border-base-content/5 p-10 md:p-16 text-center'>
              {/* Background Glows */}
              <div className='absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none'></div>
              <div className='absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none'></div>

              <div className='relative z-10 max-w-2xl mx-auto'>
                <FaGraduationCap className='text-5xl mx-auto mb-6 text-base-content/20' />
                <h2 className='text-3xl md:text-4xl font-black tracking-tight mb-6'>
                  Ready to Ace Your Exam?
                </h2>
                <p className='text-lg text-base-content/60 mb-10 leading-relaxed font-light'>
                  Don&apos;t let doubts hold you back. Join your peers and get
                  the clarity you need in this focused live session.
                </p>

                <div className='flex flex-col items-center gap-4'>
                  <a
                    href={formLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-primary px-8 h-14 min-h-[3.5rem] rounded-full text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all'
                  >
                    Reserver Your Seat — It&apos;s Free
                    <FaArrowRight className='ml-2' />
                  </a>
                  <div className='flex flex-col items-center gap-2 mt-4'>
                    <a
                      href='https://wa.me/94785854468'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-xs font-medium opacity-40 hover:opacity-100 hover:text-success transition-all flex items-center gap-1.5'
                    >
                      <FaWhatsapp className='text-lg' />
                      Need Help? Contact +94 78 585 4468
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
