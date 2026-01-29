import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FaGoogle, FaFileAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Web Design Exam Help - CodeRoom',
  description:
    'Join our live Web Design exam help session. Fill the form to request topics and past papers help.',
  keywords:
    'exam help, web design, past papers, doubt clearing, live session, form',
  openGraph: {
    title: 'Web Design Exam Help - CodeRoom',
    description:
      'Fill the form to request help with Web Design topics and past papers.',
    url: 'https://coderoomlk.online/exam-help/web-design',
    siteName: 'CodeRoom.Online',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Exam Help Session',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function WebDesignExamHelpPage() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen flex flex-col items-center justify-center px-4 pt-40 pb-20 bg-base-100 relative overflow-hidden'>
        <div className='max-w-4xl w-full text-center space-y-10'>
          {/* Header */}
          <div className='space-y-4'>
            <h1 className='text-4xl md:text-6xl font-extrabold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent'>
              Web Design Exam Help
            </h1>
            <p className='text-xl md:text-2xl text-base-content/70 font-medium'>
              We are planning a Web Design Exam help session just for you!
            </p>
          </div>

          {/* Card */}
          <div className='card bg-base-200/50 backdrop-blur-md border border-base-300 shadow-2xl overflow-hidden max-w-2xl mx-auto'>
            <div className='card-body items-center text-center p-8 md:p-12 space-y-6'>
              <div className='w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-2'>
                <FaFileAlt className='text-4xl text-primary' />
              </div>

              <div className='space-y-4'>
                <h2 className='card-title text-3xl justify-center font-bold'>
                  Register for the Session
                </h2>
                <p className='text-lg text-base-content/80 leading-relaxed'>
                  Please register if you need any help. The session date and
                  time will be emailed to you later. If you have specific
                  requirements, please mention them when filling out the form.
                  Don&apos;t forget to share this among your batchmates!
                </p>
              </div>

              <div className='card-actions pt-6 w-full justify-center'>
                <Link
                  href='https://forms.gle/QeNsGM8KoHEUAkbAA'
                  target='_blank'
                  className='btn btn-primary btn-lg w-full md:w-auto md:px-12 shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300'
                >
                  <FaGoogle className='mr-2' />
                  Fill Request Form
                </Link>
              </div>
            </div>
          </div>

          <p className='text-sm text-base-content/50'>
            Your feedback shapes our sessions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
