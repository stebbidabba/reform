import { getDesignData } from '../lib/design'
import Navigation from '../components/Navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const designData = getDesignData()

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container-content text-center">
          <h1 className="text-5xl font-bold font-heading text-fg mb-6">
            Um REFORM
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Við erum hópur ástræðra fagaðila sem trúa á að hver og einn geti náð markmiðum sínum með réttum leiðbeiningum og stuðningi.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-heading text-fg mb-6">
                Okkar markmið
              </h2>
              <p className="text-lg text-muted mb-6 leading-relaxed">
                REFORM er meira en bara þjálfun - við erum samfélag sem styður þig á leiðinni að heilbrigðari lífsstíl. 
                Við trúum á að hver og einn geti náð markmiðum sínum með réttum aðferðum og stöðugum stuðningi.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Með samþættum nálgun á hreyfingu, næringu og svefn hjálpum við þér að byggja upp sjálfstæði og 
                langvinnar venjur sem skila raunverulegum árangri.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-fg">Heilbrigð lífsstíll</h3>
                  <p className="text-muted">Fyrir alla og alla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Profiles - Expanded */}
      <section className="py-20 bg-gray-50">
        <div className="container-content">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-fg mb-6">
              Þjálfarar okkar
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Kynnstu þjálfurunum sem munu hjálpa þér að ná markmiðum þínum
            </p>
          </div>

          <div className="space-y-20">
            {/* Kolfinna Profile */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold font-heading text-fg mb-4">
                  Kolfinna
                </h3>
                <p className="text-xl text-accent font-medium mb-6">
                  Þjálfari · Hreyfing & Næring
                </p>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Kolfinna leggur áherslu á einfaldar lausnir sem passa inn í daglegt líf. 
                    Hún sameinar styrktarþjálfun, hreyfifærni og næringarfræðslu til að byggja upp 
                    sjálfstæði og stöðugar venjur.
                  </p>
                  <p>
                    Með yfir 8 ára reynslu í þjálfun og næringarfræði hefur Kolfinna hjálpað 
                    fjölmörgum að ná markmiðum sínum. Hún trúir á að hver og einn geti náð 
                    árangri með réttum aðferðum og stöðugum stuðningi.
                  </p>
                  <p>
                    Kolfinna sérhæfir sig í að aðlaga æfingar og næringaráætlanir að 
                    einstaklingsþörfum og lífsskilyrðum, allt frá byrjendum til áframhaldandi 
                    æfingamanna.
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-fg mb-3">Sérhæfingar:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Styrktarþjálfun</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Hreyfifærni</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Næringarfræðsla</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Æfingaáætlanir</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/kolfinna.png"
                    alt="Kolfinna - Þjálfari"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Jens Profile */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/jens.png"
                    alt="Jens - Þjálfari"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold font-heading text-fg mb-4">
                  Jens
                </h3>
                <p className="text-xl text-accent font-medium mb-6">
                  Þjálfari · Hreyfing & Svefn
                </p>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Jens vinnur markvisst með áætlun, eftirfylgni og svefnhegðun til að hámarka 
                    endurheimt og árangur. Skýr markmið, einfalt framkvæmdarskref – mælanlegur árangur.
                  </p>
                  <p>
                    Með bakgrunn í lífeðlisfræði og svefnrannsóknum hefur Jens sérhæfingu í að 
                    hjálpa fólki að bæta svefnhegðun og endurheimt. Hann trúir á að góður svefn 
                    sé lykillinn að heilbrigðum lífsstíl og árangri í æfingum.
                  </p>
                  <p>
                    Jens notar vísindalegar aðferðir til að mæla framvindu og aðlaga áætlanir 
                    að einstaklingsþörfum. Hann hjálpar þér að skilja hvernig líkami þinn vinnur 
                    og hvernig þú getur hámarkað árangur þinn.
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold text-fg mb-3">Sérhæfingar:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Svefnrannsóknir</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Endurheimt</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Lífeðlisfræði</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Æfingaáætlanir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-content">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-fg mb-6">
              Gildi okkar
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Það sem REFORM stendur fyrir og hvernig við hjálpum þér
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-fg mb-4">
                Vísindaleg nálgun
              </h3>
              <p className="text-muted leading-relaxed">
                Við byggjum á nýjustu rannsóknum og vísindalegum aðferðum til að tryggja 
                að þú náir bestum mögulegum árangri.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-fg mb-4">
                Persónuleg þjónusta
              </h3>
              <p className="text-muted leading-relaxed">
                Hver áætlun er sérsniðin að þínum markmiðum, tíma og aðstæðum. 
                Við erum hér til að styðja þig á hverjum skrefi.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-fg mb-4">
                Samfélag
              </h3>
              <p className="text-muted leading-relaxed">
                Vertu hluti af samfélagi sem styður þig og hvetur þig til að ná markmiðum þínum. 
                Saman náum við meira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/5">
        <div className="container-content text-center">
          <h2 className="text-4xl font-bold font-heading text-fg mb-6">
                Tilbúin að byrja?
          </h2>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Hafðu samband við okkur og við hjálpum þér að ná markmiðum þínum með 
            persónulegri áætlun sem passar þér.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="btn-primary">
              Hafðu samband
            </Link>
            <Link href="/#offer" className="btn-ghost">
              Sjá tilboðin
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
