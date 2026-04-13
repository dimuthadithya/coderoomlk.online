import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact Us - CodeRoomLk',
  description:
    'Get in touch with our team for questions, support, or custom training.',
  openGraph: {
    title: 'Contact Us - CodeRoomLk',
    description:
      'Get in touch with our team for questions, support, or custom training.',
    url: 'https:coderoomlk.online/contact',
    siteName: 'CodeRoomLk',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact CodeRoomLk',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className='min-h-screen pt-20'>
      <Navbar />
      <div className='bg-base-100 min-h-screen'>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
