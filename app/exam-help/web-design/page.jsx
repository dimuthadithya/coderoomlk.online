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
      <ExamSession
        title='Web Design Exam Help'
        subtitle='Last-Minute Session'
        description='Get ready for your Web Design exam. This session focuses on HTML, CSS, and responsive design principles for 1st Year students.'
        targetAudience='1st Year Students'
        sessionDate='Saturday, January 24th'
        sessionTime='8:30 AM onwards'
        formLink='https://forms.gle/RVdDEResW3esTYNAA'
      />
      <Footer />
    </>
  );
}
