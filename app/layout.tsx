import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GPTech Studio - Web Development & Digital Marketing',
  description: 'Servizi professionali di sviluppo web e campagne pubblicitarie per motori di ricerca e social media. Trasforma la tua presenza digitale con soluzioni innovative.',
  keywords: ['web development', 'sviluppo web', 'digital marketing', 'campagne ads', 'SEO', 'social media marketing'],
  authors: [{ name: 'GPTech Studio' }],
  openGraph: {
    title: 'GPTech Studio - Web Development & Digital Marketing',
    description: 'Servizi professionali di sviluppo web e campagne pubblicitarie digitali',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPTech Studio - Web Development & Digital Marketing',
    description: 'Servizi professionali di sviluppo web e campagne pubblicitarie digitali',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
