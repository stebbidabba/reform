import { getSectionByType } from '../lib/design'

export default function WhatIsReform() {
  const featuresSection = getSectionByType('home', 'features-row')

  if (!featuresSection) return null

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      'chat-bubble-left-right': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      'sparkles': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      'trophy': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      'dumbbell': (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6v6m0 0v6m0-6h6m-6 0H3m16 0v6m0-6V6m0 6h-6m6 0h6" />
        </svg>
      ),
    }
    return icons[iconName] || icons['sparkles']
  }

  return (
    <div className="py-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold font-heading text-fg mb-6">
          Hvað er REFORM?
        </h2>
        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          REFORM er samþætt lausn fyrir hreyfingu, næringu og svefn sem hjálpar þér að byggja upp 
          heilbrigðar venjur og ná markmiðum þínum.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresSection.items.map((feature: any, index: number) => (
          <div key={index} className="card text-center group">
            {/* Icon */}
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              {getIcon(feature.icon)}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold font-heading text-fg mb-4">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-muted leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold font-heading text-fg mb-6">
            Við hjálpum þér að ná markmiðum þínum
          </h3>
          <p className="text-lg text-muted leading-relaxed mb-8">
            REFORM er ekki bara þjálfun - við erum samfélag sem styður þig á leiðinni að heilbrigðari lífsstíl. 
            Með samþættum nálgun á hreyfingu, næringu og svefn hjálpum við þér að byggja upp sjálfstæði og 
            langvinnar venjur sem skila raunverulegum árangri.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full text-lg font-medium">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Byggð á vísindalegum grundvelli
          </div>
        </div>
      </div>
    </div>
  )
}
