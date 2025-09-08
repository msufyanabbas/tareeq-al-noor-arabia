import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle
} from 'lucide-react';
import Container from '../ui/Container';
import { useTranslation } from '../../utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: t('footer.home'), href: '/' },
    { label: t('footer.about'), href: '/about' },
    { label: t('footer.projects'), href: '/projects' },
    { label: t('footer.services'), href: '/services' },
    { label: t('footer.careers'), href: '/careers' },
    { label: t('footer.products'), href: '/products' },
    { label: t('footer.contact'), href: '/contact' }
  ];

  return (
    <footer className="bg-[#02496a] text-white">
      {/* WhatsApp Floating Button */}
      <div className={`fixed bottom-6 ${isRTL ? 'right-6' : 'left-6'} z-50`}>
        {/* <a 
          href="https://wa.me/966599606818" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        > */}
          {/* <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div> */}
        {/* </a> */}
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className={`text-3xl font-bold text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('footer.company')}
                </h3>
                <div className={`w-16 h-1 bg-yellow-400 mb-4 ${isRTL ? 'ml-auto' : 'mr-0'}`}></div>
                <p className={`text-gray-300 text-sm leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('footer.companyDescription')}
                </p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative">
                {t('footer.quickLinks')}
                <div
                  className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-16 h-1 bg-yellow-400`}
                ></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-gray-300 transition-colors text-sm hover:text-yellow-400 ${
                        isRTL ? 'text-right' : 'text-left'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - FIXED: Using translations instead of hardcoded text */}
            <div>
              <h4 className={`text-xl font-bold text-white mb-6 relative ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('footer.contact')}
                <div className={`absolute -bottom-2 ${isRTL ? 'right-0' : 'left-0'} w-16 h-1 bg-yellow-400`}></div>
              </h4>
              <div className="space-y-4">
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className={`text-gray-300 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('footer.city')}
                    </p>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <a 
                      href={`mailto:info@tariqalnur.com`}
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                    >
                      info@tariqalnur.com
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-start ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
                  <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <a 
                      href={`tel:${t('footer.phoneNumber')}`}
                      className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {t('footer.phoneNumber')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#035678] py-4">
        <Container>
          <div className={`flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <p className="text-sm">
                © {currentYear} {t('footer.company')}. {t('footer.allRightsReserved')}
              </p>
            </div>
            <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors text-sm">
                {t('footer.privacyPolicy')}
              </Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors text-sm">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;