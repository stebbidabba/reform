import { getSectionByType } from '../lib/design'
import Image from 'next/image'

export default function Testimonials() {
  const headerSection = getSectionByType('testimonials', 'section-header')
  const testimonialsSection = getSectionByType('testimonials', 'testimonials')

  if (!headerSection || !testimonialsSection) return null

  return (
    <div className="py-20">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold font-heading text-fg mb-6">
          {headerSection.title}
        </h2>
        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          {headerSection.subtitle}
        </p>
      </div>

      {/* Featured Testimonial */}
      <div className="mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/testimonial1.png"
                  alt="Umsögn frá viðskiptavini"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-xl text-fg leading-relaxed mb-6 italic">
                "Þetta var akkúrat það sem ég þurfti á þessum tímapunkti til að koma mér af stað í hreyfingu. 
                Ég lærði að ég get gert styrktaræfingar heima án þess að það sé brjálað fyrirhöfn. 
                Fræðslan er mjög gagnleg og auðlesin og myndböndin ótrúlega skýr og gagnleg."
              </blockquote>
              <div className="text-accent font-semibold">
                Nafn ekki birt
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsSection.items.slice(1).map((testimonial: any, index: number) => (
          <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:scale-105">
            {/* Quote */}
            <div className="mb-6">
              <svg className="w-8 h-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21.12a.5.5 0 0 1-.5-.5v-7.5a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v7.5a.5.5 0 0 1-.5.5h-3.5zm-7.5 0a.5.5 0 0 1-.5-.5v-7.5a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v7.5a.5.5 0 0 1-.5.5h-3.5z"/>
              </svg>
              <p className="text-fg leading-relaxed">
                {testimonial.quote}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={testimonial.image === "/public/testimonial2.png" ? "/testimonial2.png" :
                       testimonial.image === "/public/testimonial3.png" ? "/testimonial3.png" :
                       "/testimonial4.png"}
                  alt={`Mynd af ${testimonial.author}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-fg">
                  {testimonial.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-20 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-full text-lg font-medium">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Fjölmargir viðskiptavinir hafa náð árangri með REFORM
        </div>
      </div>
    </div>
  )
}
