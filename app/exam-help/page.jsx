import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  FaLaptopCode,
  FaPhp,
  FaArrowRight,
  FaUserGraduate,
} from 'react-icons/fa';

export const metadata = {
  title: 'Exam Help Sessions - CodeRoom',
  description:
    'Select your exam help session. Available for 1st Year Web Design and 2nd Year PHP students.',
};

export default function ExamHelpSelectionPage() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-base-100 flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden'>
        {/* Background blobs */}
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2'></div>
        <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2'></div>

        <div className='max-w-5xl w-full text-center z-10'>
          <div className='inline-block px-4 py-1.5 mb-6 border border-base-content/10 rounded-full text-xs font-semibold tracking-widest uppercase opacity-60'>
            Exam Support
          </div>

          <h1 className='text-4xl md:text-6xl font-black mb-6'>
            Select Your <span className='gradient-text'>Exam Session</span>
          </h1>

          <p className='text-xl text-base-content/60 max-w-2xl mx-auto mb-16 leading-relaxed'>
            Choose the session relevant to your academic year. <br />
            Both sessions are designed to help you achieve the highest results.
          </p>

          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            {/* Web Design Card */}
            <Link href='/exam-help/web-design' className='group text-left'>
              <div className='h-full bg-base-100 border border-base-content/10 hover:border-primary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110'></div>

                <div className='w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-content transition-colors'>
                  <FaLaptopCode className='text-2xl' />
                </div>

                <div className='badge badge-primary badge-outline mb-4'>
                  1st Year Students
                </div>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-primary transition-colors'>
                  Web Design
                </h3>
                <p className='text-base-content/70 mb-8 leading-relaxed'>
                  Deep dive into HTML, CSS, and Responsive Design principles.
                  Perfect for building a strong foundation.
                </p>

                <div className='flex items-center text-sm font-bold text-primary'>
                  View Session Details{' '}
                  <FaArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>
            </Link>

            {/* PHP Card */}
            <Link href='/exam-help/php' className='group text-left'>
              <div className='h-full bg-base-100 border border-base-content/10 hover:border-secondary/50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110'></div>

                <div className='w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-secondary-content transition-colors'>
                  <FaPhp className='text-3xl' />
                </div>

                <div className='badge badge-secondary badge-outline mb-4'>
                  2nd Year Students
                </div>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-secondary transition-colors'>
                  PHP Development
                </h3>
                <p className='text-base-content/70 mb-8 leading-relaxed'>
                  Master server-side scripting, database connections, and
                  dynamic content generation.
                </p>

                <div className='flex items-center text-sm font-bold text-secondary'>
                  View Session Details{' '}
                  <FaArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
                </div>
              </div>
            </Link>
          </div>

          <div className='mt-16 flex items-center justify-center gap-2 opacity-60 text-sm'>
            <FaUserGraduate />
            <span>Dedicated support for all academic years</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
