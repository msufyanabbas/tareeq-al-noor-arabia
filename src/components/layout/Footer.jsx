import React from 'react';
import Link from 'next/link';
import { Building, Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Container from '../ui/Container';
import { COMPANY_INFO, SERVICES } from '../../utils/constants';
import { useTranslation } from '../../utils/i18n';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.02)_50%,transparent_100%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <div className="lg:col-span-5">
                <div className="mb-6 lg:mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Building className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                        {COMPANY_INFO.name}
                      </h3>
                      <p className="text-blue-300 text-sm lg:text-base font-medium">
                        {COMPANY_INFO.tagline}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-sm lg:text-base leading-relaxed">
                    {t('footer.company.description')}
                  </p>
                  
                  {/* Social Media Links */}
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, href: '#', label: 'Facebook' },
                      { icon: Twitter, href: '#', label: 'Twitter' },
                      { icon: Linkedin, href: '#', label: 'LinkedIn' },
                      { icon: Instagram, href: '#', label: 'Instagram' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                        aria-label={label}
                      >
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Services & Quick Links Container */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12">
                
                {/* Services */}
                <div>
                  <h4 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white relative">
                    {t('footer.sections.services.title')}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  </h4>
                  <ul className="space-y-3 lg:space-y-4">
                    {SERVICES.slice(0, 6).map((service) => (
                      <li key={service.id}>
                        <Link 
                          href="/services" 
                          className="group flex items-center text-gray-300 hover:text-white transition-all duration-200 text-sm lg:text-base"
                        >
                          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-200" />
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {service.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Quick Links */}
                <div>
                  <h4 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white relative">
                    Quick Links
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  </h4>
                  <ul className="space-y-3 lg:space-y-4">
                    {[
                      { label: 'About Us', href: '/about' },
                      { label: 'Services', href: '/services' },
                      { label: 'Portfolio', href: '/portfolio' },
                      { label: 'Blog', href: '/blog' },
                      { label: 'Careers', href: '/careers' },
                      { label: 'Contact', href: '/contact' },
                    ].map(({ label, href }) => (
                      <li key={label}>
                        <Link 
                          href={href}
                          className="group flex items-center text-gray-300 hover:text-white transition-all duration-200 text-sm lg:text-base"
                        >
                          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 mr-2 text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-200" />
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
              
              {/* Contact Info - Now Given Proper Space */}
              <div className="lg:col-span-4">
                <h4 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white relative">
                  {t('footer.sections.contact.title')}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                </h4>
                <div className="space-y-4 lg:space-y-6">
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 lg:p-5 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-sm lg:text-base font-medium mb-2">Phone</p>
                        <a 
                          href={`tel:${COMPANY_INFO.phone}`}
                          className="text-gray-200 hover:text-white transition-colors text-base lg:text-lg font-medium break-all"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 lg:p-5 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-sm lg:text-base font-medium mb-2">Email</p>
                        <a 
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="text-gray-200 hover:text-white transition-colors text-base lg:text-lg font-medium break-all"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-start space-x-4 p-4 lg:p-5 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-400 text-sm lg:text-base font-medium mb-2">Location</p>
                        <p className="text-gray-200 text-base lg:text-lg font-medium break-words">
                          {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </Container>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
          <Container>
            <div className="py-6 lg:py-8">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                <div className="text-center lg:text-left">
                  <p className="text-gray-400 text-sm lg:text-base">
                    {t('footer.company.copyright').replace('{companyName}', COMPANY_INFO.name)}
                  </p>
                  <p className="text-gray-500 text-xs lg:text-sm mt-1">
                    {t('footer.company.subtitle')}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-6 lg:space-x-8 text-sm">
                  <Link 
                    href="/privacy" 
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms" 
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Terms of Service
                  </Link>
                  <Link 
                    href="/cookies" 
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    Cookie Policy
                  </Link>
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