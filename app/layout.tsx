import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agbeble Thanks - Portfolio',
  description: 'My Personal portfolio, a Full Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Ensures a responsive layout */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-white min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}