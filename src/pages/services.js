import Head from 'next/head'
import Container from '../components/ui/Container'
import Services from '../components/sections/Services'
import Button from '../components/ui/Button'

export default function ServicesPage() {
  const detailedServices = [
    {
      title: 'Residential Construction',
      description: 'Complete home building services from foundation to finishing touches.',
      features: [
        'Custom home design and construction',
        'Single-family and multi-family homes',
        'Energy-efficient building practices',
        'Quality materials and craftsmanship',
        'Project management and coordination'
      ],
      image: '/images/residential-construction.jpg'
    },
    {
      title: 'Commercial Construction',
      description: 'Professional commercial building services for businesses of all sizes.',
      features: [
        'Office buildings and retail spaces',
        'Warehouses and industrial facilities',
        'Healthcare and educational facilities',
        'Restaurant and hospitality construction',
        'Code compliance and permitting'
      ],
      image: '/images/commercial-construction.jpg'
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our renovation expertise.',
      features: [
        'Kitchen and bathroom remodeling',
        'Home additions and extensions',
        'Interior and exterior renovations',
        'Historic building restoration',
        'Accessibility modifications'
      ],
      image: '/images/renovation-remodeling.jpg'
    },
    {
      title: 'Roofing Services',
      description: 'Comprehensive roofing solutions for residential and commercial properties.',
      features: [
        'New roof installation',
        'Roof repair and maintenance',
        'Storm damage restoration',
        'Gutter installation and repair',
        'Skylight installation'
      ],
      image: '/images/roofing-services.jpg'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Tareeq Al Noor Al ArabiaConstruction</title>
        <meta name="description" content="Comprehensive construction services including residential, commercial, renovation, and roofing. Quality craftsmanship and reliable service." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <Container>
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Comprehensive construction solutions tailored to your needs
              </p>
            </div>
          </Container>
        </section>

        <Services />

        {/* Detailed Services Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="space-y-20">
              {detailedServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="primary" size="lg">
                      Get Quote
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center text-gray-500">
                      Service Image
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a proven process to ensure your construction project is completed 
                on time, within budget, and to your satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We meet with you to understand your vision, requirements, and budget.'
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Our team creates detailed plans and obtains necessary permits.'
                },
                {
                  step: '03',
                  title: 'Construction',
                  description: 'We execute the project with skilled craftsmen and quality materials.'
                },
                {
                  step: '04',
                  title: 'Completion',
                  description: 'Final inspection and handover of your completed project.'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <Container>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. We're here to help 
                bring your construction vision to life.
              </p>
              <Button variant="secondary" size="lg">
                Get Free Quote
              </Button>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}