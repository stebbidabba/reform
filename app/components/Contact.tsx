'use client'

import { useState, useEffect } from 'react'
import { getSectionByType } from '../lib/design'

export default function Contact() {
  const headerSection = getSectionByType('contact', 'section-header')
  const contactSection = getSectionByType('contact', 'contact-form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // Check for plan parameter in URL and prefill interest field
    const urlParams = new URLSearchParams(window.location.search)
    const plan = urlParams.get('plan')
    if (plan && ['Ræsing', 'Kjarni', 'Áfangar'].includes(plan)) {
      setFormData(prev => ({ ...prev, interest: plan }))
    }
  }, [])

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Nafn er nauðsynlegt'
      case 'email':
        if (!value.trim()) return 'Netfang er nauðsynlegt'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ógilt netfang'
        return ''
      case 'interest':
        return value ? '' : 'Vinsamlegast veldu áætlun'
      case 'message':
        return value.trim() ? '' : 'Skilaboð eru nauðsynleg'
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: { [key: string]: string } = {}
    Object.keys(formData).forEach(key => {
      if (key !== 'phone') { // Phone is optional
        const error = validateField(key, formData[key as keyof typeof formData])
        if (error) newErrors[key] = error
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1000)
  }

  if (!headerSection || !contactSection) return null

  return (
    <div className="py-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold font-heading text-fg mb-6">
          {headerSection.title}
        </h2>
        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          {headerSection.subtitle}
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        {isSuccess ? (
          <div className="card text-center bg-green-50 border-green-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Takk fyrir!
            </h3>
            <p className="text-green-700">
              {contactSection.successMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-fg mb-2">
                {contactSection.fields.find((f: any) => f.name === 'name')?.label} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 ${
                  errors.name ? 'border-red-300' : 'border-border'
                }`}
                placeholder="Sláðu inn nafn"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-fg mb-2">
                {contactSection.fields.find((f: any) => f.name === 'email')?.label} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 ${
                  errors.email ? 'border-red-300' : 'border-border'
                }`}
                placeholder="sladu@inn.netfang"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-fg mb-2">
                {contactSection.fields.find((f: any) => f.name === 'phone')?.label}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200"
                placeholder="+354 123 4567"
              />
            </div>

            {/* Interest */}
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-fg mb-2">
                {contactSection.fields.find((f: any) => f.name === 'interest')?.label} *
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 ${
                  errors.interest ? 'border-red-300' : 'border-border'
                }`}
              >
                <option value="">Veldu áætlun</option>
                {contactSection.fields.find((f: any) => f.name === 'interest')?.options.map((option: string) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.interest && (
                <p className="mt-1 text-sm text-red-600">{errors.interest}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-fg mb-2">
                {contactSection.fields.find((f: any) => f.name === 'message')?.label} *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-200 ${
                  errors.message ? 'border-red-300' : 'border-border'
                }`}
                placeholder="Segðu okkur meira um markmið þín..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sendir...' : 'Senda skilaboð'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
