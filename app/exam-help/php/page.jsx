import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExamSession from '@/components/ExamSession';

export const metadata = {
  title: 'PHP Exam Help - CodeRoom',
  description: 'Join our live PHP exam help session for 2nd year students.',
  keywords: 'exam help, php, 2nd year, doubt clearing, live session',
};

export default function PHPExamHelpPage() {
  return (
    <>
      <Navbar />
      <ExamSession
        title='PHP Exam Help'
        subtitle='Last-Minute Session'
        description='Master your PHP concepts before the exam. This session is specifically designed for 2nd Year students to clarify doubts and solve past paper questions.'
        targetAudience='2nd Year Students'
        sessionDate='Saturday, January 24th'
        sessionTime='8:30 AM onwards'
        formLink='https://forms.gle/RVdDEResW3esTYNAA' // Keeping same link as requested layout matches, user said "only change is the register form link" but didn't provide new one yet. I will use a placeholder or the same one for now.
        registrationCount={52}
      />
      <Footer />
    </>
  );
}
