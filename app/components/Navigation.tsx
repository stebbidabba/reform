'use client'

import { useState, useEffect } from 'react'
import { getDesignData } from '../lib/design'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const designData = getDesignData()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container-content">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="REFORM Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="ml-3 text-2xl font-bold font-heading text-primary">
              {designData.navigation.brand}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Left side navigation items */}
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('#home')}
                className="text-fg hover:text-accent transition-colors duration-200 font-medium"
              >
                Heim
              </button>
              <button
                onClick={() => scrollToSection('#testimonials')}
                className="text-fg hover:text-accent transition-colors duration-200 font-medium"
              >
                Umsagnir
              </button>
              <button
                onClick={() => scrollToSection('#what-is-reform')}
                className="text-fg hover:text-accent transition-colors duration-200 font-medium"
              >
                Hvað er REFORM?
              </button>
              <Link href="/about" className="text-fg hover:text-accent transition-colors duration-200 font-medium">
                Um okkur
              </Link>
            </div>

            {/* Right side contact button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Hafa samband
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-fg hover:text-accent transition-colors duration-200"
            aria-label="Opna valmynd"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="py-4 space-y-4">
              <div className="px-4">
                <button
                  onClick={() => scrollToSection('#home')}
                  className="w-full text-left text-fg hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Heim
                </button>
              </div>
              <div className="px-4">
                <button
                  onClick={() => scrollToSection('#testimonials')}
                  className="w-full text-left text-fg hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Umsagnir
                </button>
              </div>
              <div className="px-4">
                <button
                  onClick={() => scrollToSection('#what-is-reform')}
                  className="w-full text-left text-fg hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Hvað er REFORM?
                </button>
              </div>
              <div className="px-4">
                <Link href="/about" className="w-full text-left text-fg hover:text-accent transition-colors duration-200 font-medium py-2 block">
                  Um okkur
                </Link>
              </div>
              <div className="px-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full btn-primary"
                >
                  Hafa samband
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
