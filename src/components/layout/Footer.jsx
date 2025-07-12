import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Award,
  Shield,
  TrendingUp,
  CheckCircle,
  Play,
  Star,
  Users,
  ChevronUp,
  Send,
  Heart,
  Globe,
  Clock,
  Zap
} from 'lucide-react';
import Container from '../ui/Container';
import { COMPANY_INFO, SERVICES } from '../../utils/constants';
import { useTranslation } from '../../utils/i18n';

const Footer = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isNewsletterFocused, setIsNewsletterFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [currentYear] = useState(new Date().getFullYear());

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: t('footer.social.facebook'), color: 'hover:from-blue-600 hover:to-blue-700' },
    { icon: Twitter, href: '#', label: t('footer.social.twitter'), color: 'hover:from-sky-500 hover:to-sky-600' },
    { icon: Linkedin, href: '#', label: t('footer.social.linkedin'), color: 'hover:from-blue-700 hover:to-blue-800' },
    { icon: Instagram, href: '#', label: t('footer.social.instagram'), color: 'hover:from-pink-600 hover:to-purple-600' },
  ];

  const quickLinks = [
    { label: t('footer.links.about'), href: '/about' },
    { label: t('footer.links.services'), href: '/services' },
    { label: t('footer.links.portfolio'), href: '/portfolio' },
    { label: t('footer.links.blog'), href: '/blog' },
    { label: t('footer.links.careers'), href: '/careers' },
    { label: t('footer.links.contact'), href: '/contact' },
  ];

  const legalLinks = [
    { label: t('footer.links.privacy'), href: '/privacy' },
    { label: t('footer.links.terms'), href: '/terms' },
    { label: t('footer.links.cookies'), href: '/cookies' },
    { label: t('footer.links.refund'), href: '/refund' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
        />
        <div 
          className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute -bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            animationDelay: '4s'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-white/30 to-blue-300/30 rounded-full animate-pulse"
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
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Scroll to Top Button */}

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6">
                <Zap className="w-4 h-4" />
                <span>{t('footer.newsletter.badge')}</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                {t('footer.newsletter.title')}
              </h3>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('footer.newsletter.description')}
              </p>

              <div className="relative max-w-md mx-auto group">
                <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300 ${isNewsletterFocused ? 'opacity-50' : ''}`}></div>
                <div className="relative flex bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsNewsletterFocused(true)}
                    onBlur={() => setIsNewsletterFocused(false)}
                    placeholder={t('footer.newsletter.placeholder')}
                    className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group flex items-center"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20 border-t border-white/10">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                    <div className="relative w-14 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-1">
                      {t('company.name')}
                    </h3>
                    <p className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-base lg:text-lg font-bold">
                      {t('company.tagline')}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {t('footer.company.description')}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-white/10">
                  <div className="text-center group cursor-pointer">
                    <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                      {t('projectNumber')}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {t('footer.stats.projects')}
                    </div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                      {t('numberOfYears')}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {t('footer.stats.years')}
                    </div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                      {t('numberOfRating')}
                    </div>
                    <div className="text-xs text-gray-400 flex items-center justify-center gap-1">
                      <Star className="w-3 h-3" />
                      {t('footer.stats.rating')}
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      className={`relative group w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Services */}
              <div className="lg:col-span-3">
                <h4 className="font-black mb-6 lg:mb-8 text-xl lg:text-2xl text-white relative">
                  {t('footer.sections.services.title')}
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </h4>
                <ul className="space-y-4">
                  {SERVICES.slice(0, 6).map((service) => (
                    <li key={service.id}>
                      <Link 
                        href="/services" 
                        className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm lg:text-base p-2 rounded-lg hover:bg-white/5"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {service.title}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="lg:col-span-4">
                <h4 className="font-black mb-6 lg:mb-8 text-xl lg:text-2xl text-white relative">
                  {t('footer.sections.contact.title')}
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </h4>
                <div className="space-y-4">
                  <div className="group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative flex items-start space-x-4 p-4 lg:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-gray-400 text-sm font-medium mb-1">{t('footer.contact.phone')}</p>
                          <a 
                            href={`tel:${COMPANY_INFO.phone}`}
                            className="text-gray-200 hover:text-white transition-colors text-lg font-bold break-all"
                          >
                            {COMPANY_INFO.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative flex items-start space-x-4 p-4 lg:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-gray-400 text-sm font-medium mb-1">{t('footer.contact.email')}</p>
                          <a 
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="text-gray-200 hover:text-white transition-colors text-lg font-bold break-all"
                          >
                            {COMPANY_INFO.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative flex items-start space-x-4 p-4 lg:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-gray-400 text-sm font-medium mb-1">{t('footer.contact.location')}</p>
                          <p className="text-gray-200 text-lg font-bold">
                            {t('company.city')}, {t('company.country')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="group">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative flex items-start space-x-4 p-4 lg:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-gray-400 text-sm font-medium mb-1">{t('footer.contact.businessHours')}</p>
                          <p className="text-gray-200 text-lg font-bold">
                            {t('footer.contact.support247')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-gradient-to-r from-slate-900/50 via-gray-900/50 to-black/50 backdrop-blur-sm">
          <Container>
            <div className="py-8 lg:py-10">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <div className="text-center lg:text-left space-y-2">
                  <p className="text-gray-400 text-sm lg:text-base">
                    {t('footer.company.copyright', { currentYear, companyName: COMPANY_INFO.name })}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-xs lg:text-sm">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>{t('footer.company.subtitle')}</span>
                    <Globe className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 lg:gap-8">
                  {legalLinks.map(({ label, href }) => (
                    <Link 
                      key={label}
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors text-sm hover:underline decoration-2 underline-offset-4 decoration-blue-400"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;