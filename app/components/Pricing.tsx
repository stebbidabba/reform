'use client'

import { getSectionByType } from '../lib/design'

export default function Pricing() {
  const headerSection = getSectionByType('offer', 'section-header')
  const pricingSection = getSectionByType('offer', 'pricing-cards')

  if (!headerSection || !pricingSection) return null

  const scrollToContact = (planName: string) => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      
      // Prefill the plan selection in the contact form
      setTimeout(() => {
        const planSelect = document.querySelector('select[name="interest"]') as HTMLSelectElement
        if (planSelect) {
          planSelect.value = planName
          planSelect.dispatchEvent(new Event('change'))
        }
      }, 500)
    }
  }

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

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {pricingSection.plans.map((plan: any, index: number) => (
          <div 
            key={index} 
            className={`card relative ${
              plan.highlight 
                ? 'ring-2 ring-accent shadow-xl scale-105' 
                : ''
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Plan Name */}
            <h3 className="text-2xl font-bold font-heading text-fg mb-4 text-center">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-center mb-8">
              <span className="text-4xl font-bold text-fg">
                {plan.price}
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature: string, featureIndex: number) => (
                <li key={featureIndex} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-accent/20 text-accent rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-fg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => scrollToContact(plan.name)}
              className={`w-full py-4 px-6 rounded-2xl font-medium transition-all duration-300 hover:scale-105 ${
                plan.highlight
                  ? 'bg-accent text-white hover:bg-accent/90 shadow-lg'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {plan.cta.label}
            </button>
          </div>
        ))}
      </div>

      {/* Note */}
      {pricingSection.note && (
        <div className="text-center">
          <p className="text-muted italic">
            {pricingSection.note}
          </p>
        </div>
      )}
    </div>
  )
}
