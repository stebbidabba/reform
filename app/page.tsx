import { getDesignData } from './lib/design'
import Navigation from './components/Navigation'
import VideoHero from './components/VideoHero'
import Testimonials from './components/Testimonials'
import WhatIsReform from './components/WhatIsReform'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  const designData = getDesignData()

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Video Hero Section */}
      <section id="home">
        <VideoHero />
      </section>

      {/* Testimonials Section - First to catch attention */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-content">
          <Testimonials />
        </div>
      </section>

      {/* What is REFORM Section */}
      <section id="what-is-reform" className="section-padding">
        <div className="container-content">
          <WhatIsReform />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-content">
          <About />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-heading text-fg mb-6">
              Hafa samband
            </h2>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              Til að byrja ferlið þitt með REFORM, hafðu samband við okkur í gegnum Instagram 
              eða sendu okkur línu og við svarum fljótt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/reform.is"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                </svg>
                Fylgdu okkur á Instagram
              </a>
              <a
                href="mailto:info@reform.is"
                className="btn-ghost inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Sendu okkur línu
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
