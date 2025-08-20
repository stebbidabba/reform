'use client'

import { useState, useEffect } from 'react'
import { getSectionByType } from '../lib/design'

export default function VideoHero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const heroSection = getSectionByType('home', 'hero')

  if (!heroSection) return null

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        onLoadStart={() => {
          console.log('Video loading started')
          setVideoLoaded(false)
        }}
        onCanPlay={() => {
          console.log('Video can play')
          setVideoLoaded(true)
        }}
        onError={(e) => {
          console.error('Video error:', e)
          setVideoError(true)
        }}
        onLoadedData={() => {
          console.log('Video data loaded')
        }}
      >
        <source src="/landingpage.mp4" type="video/mp4" />
        <p>Your browser doesn't support HTML5 video.</p>
      </video>

      {/* Fallback Image if video fails */}
      {videoError && (
        <img 
          src="/hero.jpg" 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Loading Overlay */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-xl">Hleður...</p>
          </div>
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          {heroSection.eyebrow}
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight text-balance mb-6">
          {heroSection.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
          {heroSection.subtitle}
        </p>

        {/* Bullets */}
        <ul className="space-y-4 mb-10 max-w-2xl mx-auto">
          {heroSection.bullets.map((bullet: string, index: number) => (
            <li key={index} className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/90 text-lg">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection(heroSection.ctaPrimary.href)}
            className="btn-primary text-lg px-10 py-5"
          >
            {heroSection.ctaPrimary.label}
          </button>
          <button
            onClick={() => scrollToSection(heroSection.ctaSecondary.href)}
            className="btn-ghost text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-primary"
          >
            {heroSection.ctaSecondary.label}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
