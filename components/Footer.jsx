'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaHeart,
  FaWhatsapp,
  FaMedium,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showQR, setShowQR] = useState(false);

  return (
    <footer className='bg-base-100 border-t border-base-content/10 pt-16 pb-8'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
        {/* Brand Column */}
        <div className='space-y-6'>
          <Link href='/' className='inline-flex items-center gap-3'>
            <img
              src='/images/logo.png'
              alt='CodeRoom Logo'
              className='h-12 w-12 rounded-full object-cover'
            />
            <span className='text-2xl font-black tracking-tight'>
              <span className='gradient-text'>CodeRoom</span>
              <span className='text-accent'>.Online</span>
            </span>
          </Link>
          <p className='text-base-content/60 leading-relaxed max-w-xs'>
            Empowering the next generation of developers with world-class
            education, mentorship, and career guidance.
          </p>
          <div className='flex gap-4'>
            {/* Socials - Clean & Uniform */}
            {[
              { Icon: FaGithub, href: 'https://github.com/dimuthadithya' },
              {
                Icon: FaLinkedin,
                href: 'https://www.linkedin.com/in/dimuth-adithya',
              },
              { Icon: FaMedium, href: 'https://medium.com/@dimuthadithya' },
              {
                Icon: FaYoutube,
                href: 'https://www.youtube.com/channel/UCUwhddEzMtZyjnEGcBOcrGA',
              },
              { Icon: FaTwitter, href: 'https://twitter.com/dimuthx353' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-base-content/40 hover:text-primary transition-colors'
              >
                <item.Icon className='text-xl' />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className='font-bold text-lg mb-6'>Quick Links</h6>
          <nav className='flex flex-col gap-3 text-base-content/60'>
            <Link href='/' className='hover:text-primary transition-colors'>
              Home
            </Link>
            <Link
              href='/courses'
              className='hover:text-primary transition-colors'
            >
              All Courses
            </Link>
            <Link
              href='/#testimonials'
              className='hover:text-primary transition-colors'
            >
              Success Stories
            </Link>
            <Link
              href='/contact'
              className='hover:text-primary transition-colors'
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Popular Courses */}
        <div>
          <h6 className='font-bold text-lg mb-6'>Trending Courses</h6>
          <nav className='flex flex-col gap-3 text-base-content/60'>
            <Link
              href='/courses'
              className='hover:text-primary transition-colors'
            >
              Full Stack Web Dev
            </Link>
            <Link
              href='/courses'
              className='hover:text-primary transition-colors'
            >
              Next.js Mastery
            </Link>
            <Link
              href='/courses'
              className='hover:text-primary transition-colors'
            >
              Python & Django
            </Link>
            <Link
              href='/courses'
              className='hover:text-primary transition-colors'
            >
              DevOps Engineering
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h6 className='font-bold text-lg mb-6'>Get in Touch</h6>
          <nav className='flex flex-col gap-4 text-base-content/60'>
            <a
              href='mailto:hello@coderoom.online'
              className='hover:text-primary transition-colors'
            >
              hello@coderoom.online
            </a>
            <a
              href='tel:+94785854468'
              className='hover:text-primary transition-colors'
            >
              +94 78 585 4468
            </a>
            <div className='flex flex-col gap-2 mt-2'>
              <a
                href='https://chat.whatsapp.com/Lvkuo7WmBDK3h2TxFS7xmd'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-base-content font-medium hover:text-green-500 transition-colors'
              >
                <FaWhatsapp className='text-lg' /> Join WhatsApp Group
              </a>
              <div
                className='bg-white p-2 w-fit rounded-lg shadow-sm cursor-pointer hover:scale-105 transition-transform'
                onClick={() => setShowQR(true)}
              >
                <img
                  src='/images/qr.png'
                  alt='WhatsApp Community QR'
                  className='w-24 h-24'
                />
              </div>
            </div>
            <p className='opacity-50 mt-2'>Kegalle, Sri Lanka</p>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='max-w-7xl mx-auto px-4 pt-8 border-t border-base-content/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/40'>
        <p>© {currentYear} CodeRoom.Online. All rights reserved.</p>
        <div className='flex gap-6'>
          <a href='#' className='hover:text-base-content/80'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-base-content/80'>
            Terms of Service
            {/* QR Code Modal */}
            {showQR && (
              <div
                className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4'
                onClick={() => setShowQR(false)}
              >
                <div
                  className='bg-white p-4 rounded-2xl max-w-md w-full relative animate-in fade-in zoom-in duration-200'
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowQR(false)}
                    className='absolute top-2 right-2 btn btn-circle btn-sm btn-ghost text-black'
                  >
                    ✕
                  </button>
                  <h3 className='text-center text-black font-bold text-xl mb-4'>
                    Join Community
                  </h3>
                  <div className='w-full bg-white flex items-center justify-center overflow-hidden'>
                    <img
                      src='/images/qr.png'
                      alt='WhatsApp Community QR Large'
                      className='max-w-full max-h-[60vh] w-auto h-auto object-contain'
                    />
                  </div>
                  <p className='text-center text-gray-500 mt-4 text-sm'>
                    Scan with WhatsApp to join
                  </p>
                </div>
              </div>
            )}
          </a>
        </div>
      </div>
    </footer>
  );
}
