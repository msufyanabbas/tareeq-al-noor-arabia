// src/components/layout/EnhancedFooter.jsx
import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ExternalLink,
  Award,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';
import { useTranslation } from '../../utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const EnhancedFooter = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: t('footer.home'), href: '/' },
    { label: t('footer.about'), href: '/about' },
    { label: t('footer.services'), href: '/services' },
    { label: t('nav.ourClients'), href: '/clients' },
    // { label: t('footer.projects'), href: '/projects' },
    { label: t('footer.careers'), href: '/careers' },
    { label: t('footer.contact'), href: '/contact' }
  ];

  const services = [
    'Stainless Steel Fabrication',
    'Aluminum & Glass Works',
    'Iron & Steel Fabrication',
    'HVAC Systems',
    'Electrical Works',
    'Complete Construction'
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '15+', label: 'Years Experience' },
    { icon: Shield, value: '100%', label: 'Quality Guarantee' },
    { icon: TrendingUp, value: '24/7', label: 'Support Available' }
  ];

  return (
    <footer className="bg-[#02496a] text-white relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#035678] rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#035678] rounded-full opacity-10"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section - Company Info & Stats */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            
            {/* Company Information */}
            <div className={`${isRTL ? 'lg:order-2' : ''}`}>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {t('footer.company')}
                </h2>
                <div className="w-16 h-1 bg-[#eaae07] mb-6"></div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  {t('footer.companyDescription')}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                    <div className="w-10 h-10 bg-[#eaae07] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#02496a]" />
                    </div>
                    <div>
                      <a 
                        href={`tel:${t('footer.phoneNumber').replace(/\s/g, '')}`}
                        className="text-gray-200 hover:text-[#eaae07] transition-colors text-lg font-medium"
                      >
                        {t('footer.phoneNumber')}
                      </a>
                    </div>
                  </div>
                  
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                    <div className="w-10 h-10 bg-[#eaae07] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#02496a]" />
                    </div>
                    <div>
                      <a 
                        href="mailto:info@tariqalnur.com"
                        className="text-gray-200 hover:text-[#eaae07] transition-colors text-lg font-medium"
                      >
                        info@tariqalnur.com
                      </a>
                    </div>
                  </div>
                  
                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                    <div className="w-10 h-10 bg-[#eaae07] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-[#02496a]" />
                    </div>
                    <div>
                      <p className="text-gray-200 text-lg">
                        {t('footer.district')}<br />
                        {t('footer.city')}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                    <div className="w-10 h-10 bg-[#eaae07] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5 text-[#02496a]" />
                    </div>
                    <div>
                      <p className="text-gray-200 text-lg">
                        Saturday - Thursday: 7:00 AM - 7:00 PM<br />
                        Friday: 1:00 PM - 6:00 PM<br />
                        <span className="text-[#eaae07] font-semibold">Emergency: 24/7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className={`${isRTL ? 'lg:order-1' : ''}`}>
              <h3 className="text-2xl font-bold text-white mb-8">
                {t('careers.ourAchievements')}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#eaae07] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-[#02496a]" />
                      </div>
                      <div className="text-3xl font-bold text-[#eaae07] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-200">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                {t('footer.quickLinks')}
                <div className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-16 h-1 bg-[#eaae07]`}></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`text-gray-200 hover:text-[#eaae07] transition-colors text-lg flex items-center ${
                        isRTL ? 'text-right' : 'text-left'
                      }`}
                    >
                      {link.label}
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className={`text-xl font-bold text-white mb-6 relative ${isRTL ? 'text-right' : 'text-left'}`}>
                Our Services
                <div className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-16 h-1 bg-[#eaae07]`}></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className={`text-gray-200 text-lg ${isRTL ? 'text-right' : 'text-left'}`}>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications & Quality */}
            <div>
              <h4 className={`text-xl font-bold text-white mb-6 relative ${isRTL ? 'text-right' : 'text-left'}`}>
                Quality & Standards
                <div className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-16 h-1 bg-[#eaae07]`}></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-200">
                  <Award className="w-5 h-5 text-[#eaae07] mr-3" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <Shield className="w-5 h-5 text-[#eaae07] mr-3" />
                  <span>Safety Standards Compliance</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <Users className="w-5 h-5 text-[#eaae07] mr-3" />
                  <span>Skilled Workforce</span>
                </div>
                <div className="flex items-center text-gray-200">
                  <TrendingUp className="w-5 h-5 text-[#eaae07] mr-3" />
                  <span>Continuous Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-[#035678] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <p className="text-gray-200 text-lg">
                © {currentYear} {t('footer.company')}. {t('footer.allRightsReserved')}
              </p>
            </div>
            {/* <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link href="/privacy" className="hover:text-[#eaae07] transition-colors text-lg text-gray-200">
                {t('footer.privacyPolicy')}
              </Link>
              <Link href="/terms" className="hover:text-[#eaae07] transition-colors text-lg text-gray-200">
                {t('footer.termsOfService')}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;