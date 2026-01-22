import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExamHelp from '@/components/ExamHelp';

export const metadata = {
  title: 'Exam Help - Last-Minute Doubt Clearing Session | CodeRoom',
  description:
    'Join our live exam help session on Google Meet. Get your questions answered before your exams. Only registered students receive the meeting link.',
  keywords:
    'exam help, doubt clearing, live session, google meet, exam preparation',
};

export default function ExamHelpPage() {
  return (
    <>
      <Navbar />
      <ExamHelp />
      <Footer />
    </>
  );
}
