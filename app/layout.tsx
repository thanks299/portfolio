import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agbeble Thanks - Portfolio',
  description: 'My Personal portfolio, a Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* Add EmailJS Script */}
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" strategy="beforeInteractive" />
        {/* Initialize EmailJS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                emailjs.init('nq0KDLApA5IZVhmzq');
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
