import { useState, useEffect } from 'react'
import Head from 'next/head'
import Container from '../components/ui/Container'
import Contact from '../components/sections/Contact'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Users, 
  Shield, 
  CheckCircle,
  Award,
  Clock,
  FileText,
  Wrench,
  AlertTriangle,
  ChevronRight
} from 'lucide-react'

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <>
      <Head>
        <title>Contact Us - Tareeq Al Noor Al Arabia Construction</title>
        <meta name="description" content="Get in touch with Tareeq Al Noor Al Arabia Construction for your construction needs. Request a quote, ask questions, or schedule a consultation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 overflow-hidden">
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
              {[...Array(30)].map((_, i) => (
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
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          <Container className="relative z-10">
            <div className="flex items-center justify-center min-h-screen py-16 md:py-20">
              <div className="text-center max-w-4xl mx-auto">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6 sm:mb-8">
                  <Phone className="w-4 h-4" />
                  <span>Ready to Help 24/7</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                  Get In{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                      Touch
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4 mb-8 sm:mb-10">
                  Ready to discuss your construction project? We're here to help bring your vision to life with expert craftsmanship and reliable service.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                  <a 
                    href="#contact-form" 
                    className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Start Conversation
                      <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+966548029209" 
                    className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                      Call Now
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Methods */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5"></div>
          
          <Container className="relative z-10">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6">
                <Award className="w-4 h-4" />
                <span>Multiple Ways to Connect</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                Choose Your{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Connection
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We offer multiple convenient ways to reach us. Pick the method that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {[
                {
                  icon: Phone,
                  title: 'Phone',
                  primary: '+966 54 802 9209',
                  secondary: 'Mon-Fri 8AM-6PM',
                  action: 'Call Now',
                  href: 'tel:+966548029209',
                  color: 'from-blue-500 to-cyan-500',
                  bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
                  iconColor: 'text-blue-400',
                  accentColor: 'border-blue-400'
                },
                {
                  icon: Mail,
                  title: 'Email',
                  primary: 'info@tareeqalnur.com',
                  secondary: 'Response within 24 hours',
                  action: 'Send Email',
                  href: 'mailto:info@tareeqalnur.com',
                  color: 'from-emerald-500 to-teal-500',
                  bgColor: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
                  iconColor: 'text-emerald-400',
                  accentColor: 'border-emerald-400'
                },
                {
                  icon: MapPin,
                  title: 'Office',
                  primary: '123 Construction Ave',
                  secondary: 'Jeddah, Saudi Arabia',
                  action: 'Get Directions',
                  href: '#map',
                  color: 'from-amber-500 to-orange-500',
                  bgColor: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20',
                  iconColor: 'text-amber-400',
                  accentColor: 'border-amber-400'
                }
              ].map((contact, index) => (
                <div key={index} className="group relative">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${contact.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-6 sm:p-8 text-center h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 ${contact.bgColor} rounded-2xl mb-4 sm:mb-6 backdrop-blur-sm border ${contact.accentColor} border-opacity-50 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`w-8 h-8 ${contact.iconColor}`} />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {contact.title}
                    </h3>
                    
                    <p className="text-lg sm:text-xl text-gray-200 font-semibold mb-1 sm:mb-2">
                      {contact.primary}
                    </p>
                    
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                      {contact.secondary}
                    </p>
                    
                    <a 
                      href={contact.href}
                      className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${contact.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base`}
                    >
                      {contact.action}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 max-w-4xl mx-auto">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  Available
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  1hr
                </div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Response Time
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                  <Shield className="w-4 h-4" />
                  Satisfaction
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          <div className="relative z-10">
            <Contact />
          </div>
        </section>

        {/* Map Section */}
        <section id="map" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          <Container className="relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6">
                <MapPin className="w-4 h-4" />
                <span>Find Us Here</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                Visit Our{' '}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Office
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Stop by our office to discuss your project in person or schedule a site visit. We're conveniently located in the heart of Jeddah.
              </p>
            </div>

            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              
              {/* Map Container */}
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                <div className="aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4905345513744!2d46.68532797429982!3d24.713488745934375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f030894b2ca0b%3A0x4d7d6e4a2e0aa3e7!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1673123456789!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                
                {/* Office Information Card */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Tareeq Al Noor Al Arabia Construction
                      </h3>
                      <p className="text-gray-300 mb-1">123 Construction Ave</p>
                      <p className="text-gray-300 mb-4">Jeddah, Saudi Arabia</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <a
                        href="https://www.google.com/maps/dir//Jeddah+Saudi+Arabia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                      <a
                        href="tel:+966548029209"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 left-40 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6">
                <FileText className="w-4 h-4" />
                <span>Common Questions</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Find answers to common questions about our construction services and process.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {[
                {
                  question: 'How do I get a quote for my construction project?',
                  answer: 'You can request a quote by filling out our contact form, calling us directly, or visiting our office. We\'ll schedule a consultation to discuss your project requirements and provide a detailed estimate.',
                  icon: '💰',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  question: 'What types of construction projects do you handle?',
                  answer: 'We handle a wide range of projects including residential construction, commercial buildings, renovations, remodeling, roofing, and specialty construction services.',
                  icon: '🏗️',
                  color: 'from-emerald-500 to-teal-500'
                },
                {
                  question: 'Are you licensed and insured?',
                  answer: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers\' compensation coverage for all our projects.',
                  icon: '🛡️',
                  color: 'from-amber-500 to-orange-500'
                },
                {
                  question: 'How long does a typical construction project take?',
                  answer: 'Project timelines vary depending on the scope and complexity. Small renovations may take weeks, while new construction can take several months. We provide detailed timelines during the planning phase.',
                  icon: '⏱️',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  question: 'Do you handle permits and inspections?',
                  answer: 'Yes, we handle all necessary permits and coordinate with local authorities for required inspections throughout the construction process.',
                  icon: '📋',
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  question: 'What is your warranty policy?',
                  answer: 'We provide comprehensive warranties on our workmanship and materials. Specific warranty terms vary by project type and are detailed in your construction contract.',
                  icon: '✅',
                  color: 'from-teal-500 to-emerald-500'
                }
              ].map((faq, index) => (
                <div key={index} className="group relative">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${faq.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700`}></div>
                  
                  {/* FAQ Card */}
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${faq.color} bg-opacity-20 rounded-xl flex items-center justify-center text-xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                        {faq.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                          {faq.question}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Service Areas */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          <Container className="relative z-10">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6">
                <MapPin className="w-4 h-4" />
                <span>Coverage Areas</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                Our Service{' '}
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Areas
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                We proudly serve the following areas throughout Saudi Arabia with our comprehensive construction services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { area: 'Jeddah Central', icon: '🏙️', description: 'Downtown & Business District', color: 'from-blue-500 to-cyan-500' },
                { area: 'Northern Districts', icon: '🏘️', description: 'Residential Communities', color: 'from-emerald-500 to-teal-500' },
                { area: 'Eastern Province', icon: '🏭', description: 'Industrial & Commercial', color: 'from-amber-500 to-orange-500' },
                { area: 'Western Region', icon: '🏡', description: 'Suburban Neighborhoods', color: 'from-purple-500 to-pink-500' },
                { area: 'Southern Areas', icon: '🏢', description: 'Mixed-Use Developments', color: 'from-cyan-500 to-blue-500' },
                { area: 'Outlying Counties', icon: '🌍', description: 'Extended Service Area', color: 'from-teal-500 to-emerald-500' }
              ].map((location, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${location.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-6 sm:p-8 text-center h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${location.color} bg-opacity-20 rounded-2xl mb-4 sm:mb-6 text-2xl sm:text-3xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      {location.icon}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                      {location.area}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-300">
                      {location.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Don't See Your Area Card */}
            <div className="relative group mt-12 sm:mt-16">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-6 sm:p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 sm:mb-6 text-3xl sm:text-4xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Don't See Your Area?
                </h3>
                
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  Contact us to discuss your project location. We may be able to accommodate projects outside our standard service areas.
                </p>
                
                <a 
                  href="#contact-form"
                  className="group/btn relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 to-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform" />
                    Contact Us
                    <ChevronRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Animated Gradient Orbs */}
            <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-red-600/30 to-pink-600/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-white/40 to-red-300/40 rounded-full animate-pulse"
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
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto px-4">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6 sm:mb-8">
                <AlertTriangle className="w-4 h-4" />
                <span>24/7 Emergency Response</span>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Emergency Icon */}
              <div className="relative group mb-6 sm:mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full backdrop-blur-sm border border-red-400/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl sm:text-5xl animate-pulse">🚨</span>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
                Emergency{' '}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                Need immediate assistance? We offer 24/7 emergency construction services for urgent repairs and safety concerns.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a 
                  href="tel:+1234567890"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    Emergency Line
                  </div>
                </a>
                
                <a 
                  href="mailto:emergency@tareeqalnoor.com"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300 text-lg w-full sm:w-auto"
                >
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Emergency Email
                  </div>
                </a>
              </div>
              
              {/* Emergency Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
                {[
                  {
                    icon: Clock,
                    title: '24/7 Response',
                    description: 'Available round the clock',
                    color: 'from-red-500 to-pink-500'
                  },
                  {
                    icon: Shield,
                    title: 'Rapid Deployment',
                    description: 'Quick emergency teams',
                    color: 'from-orange-500 to-red-500'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Safety First',
                    description: 'Immediate hazard control',
                    color: 'from-amber-500 to-orange-500'
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
                    
                    {/* Card */}
                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl shadow-xl border border-white/10 p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} bg-opacity-20 rounded-xl mb-4 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}