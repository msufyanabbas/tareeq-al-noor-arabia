import { useState, useEffect } from 'react'
import Head from 'next/head'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { useTranslation } from '../utils/i18n'
import { useLanguage } from '../contexts/LanguageContext'
import { useRTLPosition } from '../utils/rtl'
import { 
  ChefHat, 
  Building2, 
  Wrench, 
  TreePine, 
  Wind, 
  Zap, 
  Layers, 
  Palette,
  Droplets,
  ShoppingCart,
  ArrowRight,
  Phone,
  Star,
  Play,
  Shield,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Target,
  Clock,
  Zap as Lightning
} from 'lucide-react'

export default function ServicesPage() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const { getTextAlign } = useRTLPosition()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeService, setActiveService] = useState(0)

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      icon: ChefHat,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      accentColor: "border-blue-400"
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
      icon: Building2,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      accentColor: "border-emerald-400"
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
      icon: Wrench,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      accentColor: "border-amber-400"
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
      icon: TreePine,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      accentColor: "border-purple-400"
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: t('processStep1Title'),
      description: t('processStep1Description'),
      icon: Phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: '02',
      title: t('processStep2Title'),
      description: t('processStep2Description'),
      icon: Target,
      color: "from-emerald-500 to-teal-500"
    },
    {
      step: '03',
      title: t('processStep3Title'),
      description: t('processStep3Description'),
      icon: Lightning,
      color: "from-amber-500 to-orange-500"
    },
    {
      step: '04',
      title: t('processStep4Title'),
      description: t('processStep4Description'),
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: '500+', label: t('projectsCompleted'), icon: Award, color: "from-blue-500 to-cyan-500" },
    { number: '15+', label: t('yearsExperience'), icon: Star, color: "from-emerald-500 to-teal-500" },
    { number: '100+', label: t('happyClients'), icon: Users, color: "from-amber-500 to-orange-500" },
    { number: '24/7', label: t('supportAvailable'), icon: Shield, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <>
      <Head>
        <title>{t('servicesPageTitle')}</title>
        <meta name="description" content={t('servicesPageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className={`min-h-screen bg-gradient-to-br from-slate-900 pt-10 via-gray-900 to-black ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        
        {/* Dynamic Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div 
            className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
            }}
          />
          <div 
            className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 rounded-full filter blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
              animationDelay: '2s'
            }}
          />
          <div 
            className="absolute -bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full filter blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
              animationDelay: '4s'
            }}
          />
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-white/40 to-blue-300/40 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid Pattern */}
        <div 
          className="fixed inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <Container className="relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-8">
                <Sparkles className="w-4 h-4" />
                <span>{t('ourServices')}</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6 mb-12">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  {t('ourServices')}{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                      {t('servicesPageHeroHighlight')}
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto">
                  {t('servicesPageHeroSubtitle')}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    {t('getFreeQuote')}
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    {t('viewOurWork')}
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                      <stat.icon className="w-4 h-4" />
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Services Overview */}
        <section className="relative py-20">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                {t('servicesTitle')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                {t('servicesSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.isArray(services) && services.map((service, index) => (
                <div 
                  key={service.id || index} 
                  className="group relative"
                  onMouseEnter={() => setActiveService(index)}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-8 h-full group-hover:bg-white/10 transition-all duration-500">
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl shadow-lg backdrop-blur-sm border border-blue-400/50 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-3xl">{service.icon || '🔧'}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      {service.features && Array.isArray(service.features) && (
                        <div className="space-y-2 pt-4">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <div key={featureIndex} className={`flex items-center ${isRTL ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                              <div className={`w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 group-hover:scale-105">
                        {t('getQuote')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Detailed Services Section */}
        <section className="relative py-20">
          <Container>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                {t('whatWeDoBest')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                {t('whatWeDoBestDescription')}
              </p>
            </div>

            <div className="space-y-24">
              {detailedServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    
                    {/* Header */}
                    <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-4 ${service.bgColor} rounded-2xl shadow-lg backdrop-blur-sm border ${service.accentColor} border-opacity-50`}>
                        <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <h3 className={`text-3xl lg:text-4xl font-black text-white ${isRTL ? 'text-right' : 'text-left'}`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className={`text-lg text-gray-300 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className={`text-gray-300 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                      <button className={`group relative overflow-hidden px-8 py-4 bg-gradient-to-r ${service.color} text-white font-bold rounded-2xl shadow-2xl hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300`}>
                        <div className="relative flex items-center justify-center">
                          <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                          {t('getQuote')}
                        </div>
                      </button>
                      <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                          {t('learnMore')}
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
                      
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback */}
                        <div className={`w-full h-full bg-gradient-to-br ${service.color} opacity-20 flex items-center justify-center text-white text-lg font-bold`} style={{display: 'none'}}>
                          <service.icon className="w-12 h-12 mr-4" />
                          {service.title}
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="relative py-20">
          <Container>
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                {t('ourProcess')} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t('processHighlight')}</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                {t('processDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center group relative">
                  
                  {/* Step Number and Icon */}
                  <div className="relative mb-8">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${process.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
                    
                    {/* Main Circle */}
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${process.color} text-white rounded-full mx-auto flex items-center justify-center text-2xl font-black shadow-2xl group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      {process.step}
                    </div>
                    
                    {/* Icon Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <process.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {process.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                  
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className={`hidden lg:block absolute top-10 w-full h-0.5 bg-gradient-to-r from-white/20 to-white/5 -z-10 ${isRTL ? 'right-1/2' : 'left-1/2'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Additional Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-emerald-600/20 backdrop-blur-sm"></div>
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
                {t('readyToStartProject')} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t('projectHighlight')}</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                {t('servicesCtaDescription')}
              </p>
              
              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center text-lg">
                    <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    {t('getFreeQuote')}
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center text-lg">
                    <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    {t('callUsNow')}
                  </div>
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}