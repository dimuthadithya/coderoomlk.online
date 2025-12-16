import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://coderoom.online'),
  title: {
    default: 'CodeRoom.Online | Master Full Stack Development',
    template: '%s | CodeRoom.Online',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://coderoom.online',
    title: 'CodeRoom.Online | Master Full Stack Development',
    description:
      'Project-based learning, 1:1 mentorship, and career guidance for aspiring developers in Sri Lanka.',
    siteName: 'CodeRoom.Online',
    images: [
      {
        url: '/images/og-image.jpg',
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
    images: ['/images/og-image.jpg'],
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
      </body>
    </html>
  );
}
