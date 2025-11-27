import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aureus-corporation.com'),
  title: {
    default: 'Aureus Corporation | Leading Business Solutions Provider',
    template: '%s | Aureus Corporation',
  },
  description: 'Aureus Corporation is a leading provider of innovative business solutions. We deliver excellence through cutting-edge technology and exceptional service since 2010.',
  keywords: [
    'business solutions',
    'corporate services',
    'professional consulting',
    'enterprise solutions',
    'strategic consulting',
    'digital transformation',
    'talent solutions',
    'aureus corporation',
  ],
  authors: [{ name: 'Aureus Corporation' }],
  creator: 'Aureus Corporation',
  publisher: 'Aureus Corporation',
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
    url: 'https://aureus-corporation.com',
    siteName: 'Aureus Corporation',
    title: 'Aureus Corporation | Leading Business Solutions Provider',
    description: 'Innovative business solutions and exceptional service since 2010.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aureus Corporation - Building Tomorrow\'s Success Today',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aureus Corporation | Leading Business Solutions Provider',
    description: 'Innovative business solutions and exceptional service since 2010.',
    images: ['/images/twitter-image.jpg'],
    creator: '@aureus_corp',
  },
  alternates: {
    canonical: 'https://aureus-corporation.com',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a1628" />
      </head>
      <body>{children}</body>
    </html>
  )
}
