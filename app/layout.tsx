import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'REFORM - Hreyfing · Næring · Svefn',
  description: 'REFORM - Hreyfing · Næring · Svefn. Við hjálpum þér að fjölga heilbrigðum árum við æviskeiðið með fræðslu, þjálfun og sterku samfélagi.',
  keywords: 'hreyfing, næring, svefn, þjálfun, heilsa, æfingar, mataræði',
  authors: [{ name: 'REFORM' }],
  creator: 'REFORM',
  publisher: 'REFORM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'REFORM - Hreyfing · Næring · Svefn',
    description: 'Við hjálpum þér að fjölga heilbrigðum árum við æviskeiðið með fræðslu, þjálfun og sterku samfélagi.',
    url: '/',
    siteName: 'REFORM',
    locale: 'is_IS',
    type: 'website',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'REFORM - Hreyfing · Næring · Svefn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REFORM - Hreyfing · Næring · Svefn',
    description: 'Við hjálpum þér að fjölga heilbrigðum árum við æviskeiðið með fræðslu, þjálfun og sterku samfélagi.',
    images: ['/og.jpg'],
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="is" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#111111" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "REFORM",
              "description": "REFORM - Hreyfing · Næring · Svefn. Við hjálpum þér að fjölga heilbrigðum árum við æviskeiðið með fræðslu, þjálfun og sterku samfélagi.",
              "url": process.env.SITE_URL || "http://localhost:3000",
              "logo": `${process.env.SITE_URL || "http://localhost:3000"}/logo.png`,
              "sameAs": [
                "https://www.instagram.com/reform"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Icelandic"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
