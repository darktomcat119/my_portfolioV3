/**
 * @fileoverview Root layout component for the portfolio application
 * Provides the main HTML structure, metadata, and global providers
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vladislav-portfolio.com'),
  title: {
    default: 'Vladislav Khmelnytsky - Senior Full-Stack Developer',
    template: '%s | Vladislav Khmelnytsky'
  },
  description: 'Senior Full-Stack Developer specializing in MERN Stack, Laravel, AI Automation, and DevOps. 8+ years of experience building scalable web applications.',
  keywords: [
    'Full-Stack Developer',
    'MERN Stack',
    'Laravel',
    'AI Automation',
    'DevOps',
    'React',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'OpenAI',
    'Kubernetes',
    'AWS'
  ],
  authors: [{ name: 'Vladislav Khmelnytsky' }],
  creator: 'Vladislav Khmelnytsky',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Vladislav Khmelnytsky - Senior Full-Stack Developer',
    description: 'Senior Full-Stack Developer specializing in MERN Stack, Laravel, AI Automation, and DevOps.',
    siteName: 'Vladislav Khmelnytsky Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vladislav Khmelnytsky - Senior Full-Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vladislav Khmelnytsky - Senior Full-Stack Developer',
    description: 'Senior Full-Stack Developer specializing in MERN Stack, Laravel, AI Automation, and DevOps.',
    images: ['/og-image.jpg'],
    creator: '@courage119'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
