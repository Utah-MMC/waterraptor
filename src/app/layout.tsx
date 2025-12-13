import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClawBackground from './components/ClawBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://waterraptor.com'),
  title: 'WaterRaptor.com - Professional Pond & Lake Management Services',
  description: 'Comprehensive pond and lake management services including harvesting, dredging, weed control, water quality management, and aquatic ecosystem maintenance. Professional amphibious equipment for healthy water bodies.',
  keywords: 'pond management, lake management, pond and lake management, aquatic ecosystem management, pond maintenance, lake maintenance, water quality management, aquatic vegetation control, pond dredging, lake restoration, amphibious pond services, Utah pond management',
  authors: [{ name: 'Water Raptor' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Professional Pond & Lake Management Services | Water Raptor',
    description: 'Comprehensive pond and lake management services including harvesting, dredging, weed control, and water quality management for healthy aquatic ecosystems.',
    type: 'website',
    url: 'https://waterraptor.com',
    images: [
      {
        url: 'https://waterraptor.com/images/image004.jpg',
        width: 1200,
        height: 630,
        alt: 'Water Raptor Professional Pond & Lake Management Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Pond & Lake Management Services',
    description: 'Comprehensive pond and lake management services for healthy aquatic ecosystems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="model-viewer-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && !window.customElements.get('model-viewer')) {
                const script = document.createElement('script');
                script.type = 'module';
                script.src = 'https://unpkg.com/@google/model-viewer@3.4.0/dist/model-viewer.min.js';
                script.onerror = function() {
                  console.warn('Model viewer failed to load, using fallback');
                };
                document.head.appendChild(script);
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} text-white`}>
        <ClawBackground>
          <Header />
          {children}
          <Footer />
        </ClawBackground>
      </body>
    </html>
  )
}
