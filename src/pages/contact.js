import Head from 'next/head'
import Container from '../components/ui/Container'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Tareeq Al Noor Al ArabiaConstruction</title>
        <meta name="description" content="Get in touch with Tareeq Al Noor Al ArabiaConstruction for your construction needs. Request a quote, ask questions, or schedule a consultation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <Container>
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Ready to discuss your construction project? We're here to help.
              </p>
            </div>
          </Container>
        </section>

        <Contact />

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-600">
                Stop by our office to discuss your project in person or schedule a site visit.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Map integration would go here</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our construction services and process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: 'How do I get a quote for my construction project?',
                  answer: 'You can request a quote by filling out our contact form, calling us directly, or visiting our office. We\'ll schedule a consultation to discuss your project requirements and provide a detailed estimate.'
                },
                {
                  question: 'What types of construction projects do you handle?',
                  answer: 'We handle a wide range of projects including residential construction, commercial buildings, renovations, remodeling, roofing, and specialty construction services.'
                },
                {
                  question: 'Are you licensed and insured?',
                  answer: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers\' compensation coverage for all our projects.'
                },
                {
                  question: 'How long does a typical construction project take?',
                  answer: 'Project timelines vary depending on the scope and complexity. Small renovations may take weeks, while new construction can take several months. We provide detailed timelines during the planning phase.'
                },
                {
                  question: 'Do you handle permits and inspections?',
                  answer: 'Yes, we handle all necessary permits and coordinate with local authorities for required inspections throughout the construction process.'
                },
                {
                  question: 'What is your warranty policy?',
                  answer: 'We provide comprehensive warranties on our workmanship and materials. Specific warranty terms vary by project type and are detailed in your construction contract.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We proudly serve the following areas with our construction services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Downtown Metro Area',
                'Suburban Communities',
                'Industrial Districts',
                'Residential Neighborhoods',
                'Commercial Zones',
                'Surrounding Counties'
              ].map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{area}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don't see your area listed? Contact us to discuss your project location.
              </p>
              <p className="text-sm text-gray-500">
                We may be able to accommodate projects outside our standard service areas.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}