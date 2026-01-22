import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExamSession from '@/components/ExamSession';

export const metadata = {
  title: 'Web Design Exam Help - CodeRoom',
  description:
    'Join our live Web Design exam help session for 1st year students.',
  keywords: 'exam help, web design, 1st year, doubt clearing, live session',
  openGraph: {
    title: 'Web Design Exam Help - CodeRoom',
    description:
      'Join our live Web Design exam help session for 1st year students.',
    url: 'https:coderoomlk.online/exam-help/web-design',
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
      <div className='min-h-[70vh] flex flex-col items-center justify-center p-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4'>
          Coming Soon
        </h1>
        <p className='text-xl text-base-content/70 max-w-lg'>
          The Web Design Exam Help session details are being finalized. Please
          check back later.
        </p>
      </div>
      <Footer />
    </>
  );
}
