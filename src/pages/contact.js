import Head from 'next/head'
import Container from '../components/ui/Container'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Tareeq Al Noor Al Arabia Construction</title>
        <meta name="description" content="Get in touch with Tareeq Al Noor Al Arabia Construction for your construction needs. Request a quote, ask questions, or schedule a consultation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center py-16 sm:py-20 lg:py-28">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl">📞</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Get In <span className="text-blue-200">Touch</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4 mb-8 sm:mb-10">
                  Ready to discuss your construction project? We're here to help bring your vision to life with expert craftsmanship and reliable service.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                  <a href="#contact-form" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 w-full sm:w-auto">
                    <span className="mr-2">💬</span>
                    Start Conversation
                  </a>
                  <a href="tel:+1234567890" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto">
                    <span className="mr-2">📱</span>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Methods */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {[
                {
                  icon: '📞',
                  title: 'Phone',
                  primary: '+1 (555) 123-4567',
                  secondary: 'Mon-Fri 8AM-6PM',
                  action: 'Call Now',
                  href: 'tel:+15551234567'
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  primary: 'info@tareeqalnoor.com',
                  secondary: 'Response within 24 hours',
                  action: 'Send Email',
                  href: 'mailto:info@tareeqalnoor.com'
                },
                {
                  icon: '📍',
                  title: 'Office',
                  primary: '123 Construction Ave',
                  secondary: 'Riyadh, Saudi Arabia',
                  action: 'Get Directions',
                  href: '#map'
                }
              ].map((contact, index) => (
                <div key={index} className="group bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-4 sm:mb-6 text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {contact.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-1 sm:mb-2">
                    {contact.primary}
                  </p>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {contact.secondary}
                  </p>
                  
                  <a 
                    href={contact.href}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
                  >
                    {contact.action}
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <Contact />
        </section>

        {/* Map Section */}
        <section id="map" className="py-16 sm:py-20 lg:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Visit Our <span className="text-blue-600">Office</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Stop by our office to discuss your project in person or schedule a site visit. We're conveniently located in the heart of Riyadh.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center text-gray-600 relative group cursor-pointer">
                <div className="text-center z-10">
                  <div className="text-5xl sm:text-6xl lg:text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">🗺️</div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Interactive Map</p>
                  <p className="text-sm sm:text-base text-gray-500">Click to view directions</p>
                </div>
                
                {/* Overlay with office details */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
                    <h3 className="font-bold text-gray-900 mb-2">Tareeq Al Noor Al Arabia Construction</h3>
                    <p className="text-gray-600 text-sm">123 Construction Ave, Riyadh, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Find answers to common questions about our construction services and process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {[
                {
                  question: 'How do I get a quote for my construction project?',
                  answer: 'You can request a quote by filling out our contact form, calling us directly, or visiting our office. We\'ll schedule a consultation to discuss your project requirements and provide a detailed estimate.',
                  icon: '💰'
                },
                {
                  question: 'What types of construction projects do you handle?',
                  answer: 'We handle a wide range of projects including residential construction, commercial buildings, renovations, remodeling, roofing, and specialty construction services.',
                  icon: '🏗️'
                },
                {
                  question: 'Are you licensed and insured?',
                  answer: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers\' compensation coverage for all our projects.',
                  icon: '🛡️'
                },
                {
                  question: 'How long does a typical construction project take?',
                  answer: 'Project timelines vary depending on the scope and complexity. Small renovations may take weeks, while new construction can take several months. We provide detailed timelines during the planning phase.',
                  icon: '⏱️'
                },
                {
                  question: 'Do you handle permits and inspections?',
                  answer: 'Yes, we handle all necessary permits and coordinate with local authorities for required inspections throughout the construction process.',
                  icon: '📋'
                },
                {
                  question: 'What is your warranty policy?',
                  answer: 'We provide comprehensive warranties on our workmanship and materials. Specific warranty terms vary by project type and are detailed in your construction contract.',
                  icon: '✅'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Service Areas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-blue-600">Service Areas</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We proudly serve the following areas throughout Saudi Arabia with our comprehensive construction services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { area: 'Riyadh Central', icon: '🏙️', description: 'Downtown & Business District' },
                { area: 'Northern Districts', icon: '🏘️', description: 'Residential Communities' },
                { area: 'Eastern Province', icon: '🏭', description: 'Industrial & Commercial' },
                { area: 'Western Region', icon: '🏡', description: 'Suburban Neighborhoods' },
                { area: 'Southern Areas', icon: '🏢', description: 'Mixed-Use Developments' },
                { area: 'Outlying Counties', icon: '🌍', description: 'Extended Service Area' }
              ].map((location, index) => (
                <div key={index} className="group bg-gray-50 rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:bg-blue-50">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mb-4 sm:mb-6 text-2xl sm:text-3xl group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                    {location.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {location.area}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600">
                    {location.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 sm:mt-16 bg-blue-50 rounded-xl p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl mb-4">🚀</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Don't See Your Area?
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Contact us to discuss your project location. We may be able to accommodate projects outside our standard service areas.
              </p>
              <a 
                href="#contact-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </Container>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl">🚨</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Emergency <span className="text-blue-200">Services</span>
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Need immediate assistance? We offer 24/7 emergency construction services for urgent repairs and safety concerns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a 
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors duration-200 text-lg w-full sm:w-auto"
                >
                  <span className="mr-2">📞</span>
                  Emergency Line
                </a>
                <a 
                  href="mailto:emergency@tareeqalnoor.com"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-lg w-full sm:w-auto"
                >
                  <span className="mr-2">✉️</span>
                  Emergency Email
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}