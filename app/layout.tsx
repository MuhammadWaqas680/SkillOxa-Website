import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ProgressBar from '@/components/ProgressBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SkillOxa - Digital Agency & eLearning Platform',
    template: '%s | SkillOxa'
  },
  description: 'SkillOxa is a leading digital agency and eLearning platform offering WordPress development, SEO services, web development, UI/UX design, and comprehensive online courses.',
  keywords: ['digital agency', 'elearning', 'wordpress development', 'seo services', 'web development', 'ui ux design', 'online courses'],
  authors: [{ name: 'Waqas - eLearning Guru' }],
  creator: 'SkillOxa',
  publisher: 'SkillOxa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skilloxa.com',
    title: 'SkillOxa - Digital Agency & eLearning Platform',
    description: 'Transform your digital presence with SkillOxa. Expert services in web development, SEO, design, and comprehensive online learning courses.',
    siteName: 'SkillOxa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillOxa - Digital Agency & eLearning Platform',
    description: 'Transform your digital presence with SkillOxa. Expert services in web development, SEO, design, and comprehensive online learning courses.',
    creator: '@skilloxa',
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ProgressBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
