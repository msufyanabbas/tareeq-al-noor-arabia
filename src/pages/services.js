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
      image: '/images/residential-construction.jpg',
      icon: '🏠'
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
      image: '/images/commercial-construction.jpg',
      icon: '🏢'
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
      image: '/images/renovation-remodeling.jpg',
      icon: '🔨'
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
      image: '/images/roofing-services.jpg',
      icon: '🏠'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Tareeq Al Noor Al Arabia Construction</title>
        <meta name="description" content="Comprehensive construction services including residential, commercial, renovation, and roofing. Quality craftsmanship and reliable service." />
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
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Our <span className="text-blue-200">Services</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                  Comprehensive construction solutions tailored to your needs with quality craftsmanship and reliable service
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Get Free Quote
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                    View Our Work
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <Services />
        </section>

        {/* Detailed Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                What We Do Best
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Our expertise spans across multiple construction disciplines, ensuring we can handle any project from start to finish.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {detailedServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`px-4 sm:px-6 lg:px-0 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl sm:text-3xl mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button variant="primary" size="lg" className="w-full sm:w-auto">
                        Get Quote
                      </Button>
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className={`px-4 sm:px-6 lg:px-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative group cursor-pointer">
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg sm:text-xl font-medium bg-white/20 backdrop-blur-sm">
                          {service.title} Image
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-blue-600">Process</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We follow a proven process to ensure your construction project is completed 
                on time, within budget, and to your satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We meet with you to understand your vision, requirements, and budget.',
                  icon: '💬'
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Our team creates detailed plans and obtains necessary permits.',
                  icon: '📋'
                },
                {
                  step: '03',
                  title: 'Construction',
                  description: 'We execute the project with skilled craftsmen and quality materials.',
                  icon: '🏗️'
                },
                {
                  step: '04',
                  title: 'Completion',
                  description: 'Final inspection and handover of your completed project.',
                  icon: '✅'
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      {process.step}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg sm:text-xl">
                      {process.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
                    {process.description}
                  </p>
                  
                  {/* Connection Line for larger screens */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-1/2 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {[
                { number: '500+', label: 'Projects Completed', icon: '🏆' },
                { number: '15+', label: 'Years Experience', icon: '⭐' },
                { number: '100+', label: 'Happy Clients', icon: '😊' },
                { number: '24/7', label: 'Support Available', icon: '🛠️' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg sm:text-xl text-gray-600 font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-2xl sm:text-3xl">
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Ready to Start Your <span className="text-blue-200">Project?</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Contact us today for a free consultation and quote. We're here to help 
                bring your construction vision to life with quality craftsmanship and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                  Get Free Quote
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Call Us Now
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}