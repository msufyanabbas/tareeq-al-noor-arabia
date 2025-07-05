import Head from 'next/head'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { useTranslation } from '../utils/i18n'
import { useLanguage } from '../contexts/LanguageContext'
import { useRTLPosition } from '../utils/rtl'

export default function ServicesPage() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const { getTextAlign } = useRTLPosition()

  // Get services from translation data
  const services = t('services') || []

const detailedServices = [
    {
      title: t('residentialConstructionTitle'),
      description: t('residentialConstructionDescription'),
      features: [
        t('residentialFeature1'),
        t('residentialFeature2'),
        t('residentialFeature3'),
        t('residentialFeature4'),
        t('residentialFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: '🏠'
    },
    {
      title: t('commercialConstructionTitle'),
      description: t('commercialConstructionDescription'),
      features: [
        t('commercialFeature1'),
        t('commercialFeature2'),
        t('commercialFeature3'),
        t('commercialFeature4'),
        t('commercialFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: '🏢'
    },
    {
      title: t('renovationRemodelingTitle'),
      description: t('renovationRemodelingDescription'),
      features: [
        t('renovationFeature1'),
        t('renovationFeature2'),
        t('renovationFeature3'),
        t('renovationFeature4'),
        t('renovationFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: '🔨'
    },
    {
      title: t('roofingServicesTitle'),
      description: t('roofingServicesDescription'),
      features: [
        t('roofingFeature1'),
        t('roofingFeature2'),
        t('roofingFeature3'),
        t('roofingFeature4'),
        t('roofingFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: '🏠'
    }
  ];

  return (
    <>
      <Head>
        <title>{t('servicesPageTitle')}</title>
        <meta name="description" content={t('servicesPageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
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
                  {t('ourServices')} <span className="text-blue-200">{t('servicesPageHeroHighlight')}</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                  {t('servicesPageHeroSubtitle')}
                </p>
                <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    {t('getFreeQuote')}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                    {t('viewOurWork')}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Overview - Replaced Services component with inline rendering */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('servicesTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('servicesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Array.isArray(services) && services.map((service, index) => (
                <div key={service.id || index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 group">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon || '🔧'}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    {service.features && Array.isArray(service.features) && (
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className={`flex items-center ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                            <div className={`w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <Button variant="primary" size="sm" className="w-full">
                      {t('getQuote')}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Detailed Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <Container>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('whatWeDoBest')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('whatWeDoBestDescription')}
              </p>
            </div>

            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {detailedServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`px-4 sm:px-6 lg:px-0 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className={`flex items-center mb-4 sm:mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl sm:text-3xl ${isRTL ? 'ml-4' : 'mr-4'}`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className={`text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                          <span className={`text-gray-700 text-sm sm:text-base ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                      <Button variant="primary" size="lg" className="w-full sm:w-auto">
                        {t('getQuote')}
                      </Button>
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        {t('learnMore')}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className={`px-4 sm:px-6 lg:px-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative group cursor-pointer">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback placeholder (hidden by default) */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center text-gray-600 text-lg font-medium" style={{display: 'none'}}>
                          {service.icon} {service.title}
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
                {t('ourProcess')} <span className="text-blue-600">{t('processHighlight')}</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('processDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: '01',
                  title: t('processStep1Title'),
                  description: t('processStep1Description'),
                  icon: '💬'
                },
                {
                  step: '02',
                  title: t('processStep2Title'),
                  description: t('processStep2Description'),
                  icon: '📋'
                },
                {
                  step: '03',
                  title: t('processStep3Title'),
                  description: t('processStep3Description'),
                  icon: '🏗️'
                },
                {
                  step: '04',
                  title: t('processStep4Title'),
                  description: t('processStep4Description'),
                  icon: '✅'
                }
              ].map((process, index) => (
                <div key={index} className="text-center group relative">
                  <div className="relative mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      {process.step}
                    </div>
                    <div className={`absolute -top-2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg sm:text-xl ${isRTL ? '-left-2' : '-right-2'}`}>
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
                    <div className={`hidden lg:block absolute top-8 w-full h-0.5 bg-blue-200 -z-10 ${isRTL ? 'right-1/2 transform -translate-x-1/2' : 'left-1/2 transform translate-x-1/2'}`}></div>
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
                { number: '500+', label: t('projectsCompleted'), icon: '🏆' },
                { number: '15+', label: t('yearsExperience'), icon: '⭐' },
                { number: '100+', label: t('happyClients'), icon: '😊' },
                { number: '24/7', label: t('supportAvailable'), icon: '🛠️' }
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
                {t('readyToStartProject')} <span className="text-blue-200">{t('projectHighlight')}</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                {t('servicesCtaDescription')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                  {t('getFreeQuote')}
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  {t('callUsNow')}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}