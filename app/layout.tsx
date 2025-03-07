import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Feridojo - Expertos en Bombas de Agua y Gasfitería",
  description: "Especialistas en instalación, mantención y reparación de bombas de agua. Servicio profesional de gasfitería en Chile con más de 15 años de experiencia.",
  keywords: "bombas de agua, gasfitería, plomería, mantención de bombas, reparación de bombas, instalación de bombas, servicios de plomería Chile",
  authors: [{ name: 'Feridojo' }],
  creator: 'Feridojo',
  publisher: 'Feridojo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://feridojo.cl',
    siteName: 'Feridojo',
    title: 'Feridojo - Expertos en Bombas de Agua y Gasfitería',
    description: 'Especialistas en instalación, mantención y reparación de bombas de agua. Servicio profesional de gasfitería en Chile.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Feridojo - Servicios de Gasfitería y Bombas de Agua',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feridojo - Expertos en Bombas de Agua y Gasfitería',
    description: 'Especialistas en instalación, mantención y reparación de bombas de agua. Servicio profesional de gasfitería en Chile.',
    images: ['/og-image.jpg'],
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
    <html lang="es">
      <head>
        <link rel="canonical" href="https://feridojo.cl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Feridojo",
              "image": "https://feridojo.cl/FERIDOJO LOGO 1.svg",
              "@id": "https://feridojo.cl",
              "url": "https://feridojo.cl",
              "telephone": "+56955668961",
              "email": "info@feridojo.cl",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.4569400,
                "longitude": -70.6482700
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://facebook.com/feridojo",
                "https://instagram.com/feridojo"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'