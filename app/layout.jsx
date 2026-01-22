import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://coderoomlk.online'),
  title: {
    default: 'CodeRoom.Online | Master Full Stack Development',
    template: '%s | CodeRoom.Online',
  },
  other: {
    'og:logo': 'https://coderoomlk.online/images/logo.png',
  },
  description:
    "Become a production-ready developer in 6 months. Join Sri Lanka's premium mentorship program for React, Next.js, and Modern Web Technologies lead by Dimuth Adithya.",
  keywords: [
    'Web Development',
    'Full Stack',
    'Sri Lanka',
    'React Course',
    'Next.js',
    'Dimuth Adithya',
    'Programming Mentorship',
    'SLIATE',
  ],
  authors: [{ name: 'Dimuth Adithya' }],
  creator: 'Dimuth Adithya',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coderoomlk.online',
    title: 'CodeRoom.Online | Master Full Stack Development',
    description:
      'Project-based learning, 1:1 mentorship, and career guidance for aspiring developers in Sri Lanka.',
    siteName: 'CodeRoom.Online',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'CodeRoom.Online Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeRoom.Online | Master Full Stack Development',
    description:
      'Join the next generation of developers. Specialized training in MERN Stack and Next.js.',
    creator: '@dimuthx353',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon-16x16.png',
    apple: '/favicon_io/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon_io/apple-touch-icon.png',
    },
  },
  manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='night' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
        <MicrosoftClarity />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
