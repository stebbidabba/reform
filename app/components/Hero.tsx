'use client'

import { getSectionByType } from '../lib/design'
import Image from 'next/image'

export default function Hero() {
  const heroSection = getSectionByType('home', 'hero')

  if (!heroSection) return null

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] pt-20">
      {/* Content */}
      <div className="space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
          {heroSection.eyebrow}
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-bold font-heading text-fg leading-tight text-balance">
          {heroSection.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted leading-relaxed max-w-2xl">
          {heroSection.subtitle}
        </p>

        {/* Bullets */}
        <ul className="space-y-4">
          {heroSection.bullets.map((bullet: string, index: number) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-fg">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => scrollToSection(heroSection.ctaPrimary.href)}
            className="btn-primary"
          >
            {heroSection.ctaPrimary.label}
          </button>
          <button
            onClick={() => scrollToSection(heroSection.ctaSecondary.href)}
            className="btn-ghost"
          >
            {heroSection.ctaSecondary.label}
          </button>
        </div>
      </div>

      {/* Media */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/design1.png"
            alt={heroSection.media.alt}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
      </div>
    </div>
  )
}
