import { getSectionByType } from '../lib/design'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const headerSection = getSectionByType('about', 'section-header') as any
  const profilesSection = getSectionByType('about', 'profiles') as any

  if (!headerSection || !profilesSection) return null

  return (
    <div className="py-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading text-fg mb-6">
          {headerSection.title}
        </h2>
        <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
          {headerSection.subtitle}
        </p>
      </div>

      {/* Trainer Profiles */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {profilesSection.cards.map((trainer: any, index: number) => (
          <div key={index} className="card group">
            {/* Trainer Photo */}
            <div className="flex items-center mb-5">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md mr-4 group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={trainer.name === "Kolfinna" ? "/kolfinna.png" : "/jens.png"}
                  alt={`Mynd af ${trainer.name}`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-fg">
                  {trainer.name}
                </h3>
                <p className="text-accent font-medium">
                  {trainer.role}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted leading-relaxed">
              {trainer.bio}
            </p>
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <div className="text-center">
        <Link href="/about" className="btn-primary">
          Lestu meira um okkur
        </Link>
      </div>
    </div>
  )
}
