// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Building, Phone, ArrowRight, Globe, ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../utils/i18n';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  // Function to check if a navigation item is active
  const isActiveRoute = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Navigation items with translations
  const navigationItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('projects'), href: '/projects' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <Container>
        <nav className={`flex items-center justify-between h-16 md:h-18 lg:h-20 px-4 sm:px-6 ${
          isRTL ? 'flex-row-reverse' : ''
        }`}>
          
          {/* Logo Section - Responsive */}
          <Link href="/" className={`flex items-center flex-shrink-0 group ${
            isRTL ? 'space-x-reverse space-x-2 sm:space-x-3' : 'space-x-2 sm:space-x-3'
          }`}>
            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 ${
              isScrolled ? 'scale-90' : ''
            }`}>
              <Building className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight transition-all duration-300 ${
                isScrolled ? 'text-base sm:text-lg lg:text-xl' : ''
              }`}>
                {COMPANY_INFO.name}
              </h1>
              <p className={`text-xs sm:text-sm text-gray-600 leading-tight transition-all duration-300 ${
                isScrolled ? 'text-xs opacity-80' : ''
              }`}>
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Centered with better spacing */}
          <div className={`hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8 ${
            isRTL ? 'space-x-reverse space-x-1 xl:space-x-2' : 'space-x-1 xl:space-x-2'
          }`}>
            {navigationItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 py-2 px-3 xl:px-4 rounded-lg whitespace-nowrap text-sm xl:text-base group ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50/80' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'
                  }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    isActive ? 'w-6' : 'w-0 group-hover:w-4'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Side - Contact Info & CTA */}
          <div className={`hidden xl:flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
          }`}>
            <LanguageSwitcher />
            
            {/* Contact Info */}
            <div className={`${isRTL ? 'text-right border-r border-gray-200 pr-4' : 'text-left border-l border-gray-200 pl-4'}`}>
              <div className={`flex items-center text-sm font-medium text-gray-900 ${
                isRTL ? 'flex-row-reverse' : ''
              }`}>
                <Phone className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'} text-blue-600`} />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5">{t('available247')}</p>
            </div>
            
            {/* CTA Button */}
            <Button size="sm" className="whitespace-nowrap shadow-sm hover:shadow-md transition-all duration-300">
              <span className="hidden 2xl:inline">{t('getQuote')}</span>
              <span className="2xl:hidden">{t('quote')}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>

          {/* Medium screens - Condensed version */}
          <div className={`hidden lg:flex xl:hidden items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
          }`}>
            <LanguageSwitcher showText={false} />
            <Button size="sm" className="whitespace-nowrap">
              <Phone className="w-4 h-4" />
              <span className="hidden 2xl:inline ml-2">{t('call')}</span>
            </Button>
            <Button size="sm" variant="outline" className="whitespace-nowrap">
              {t('quote')}
            </Button>
          </div>

          {/* Mobile - Right side controls */}
          <div className={`lg:hidden flex items-center ${
            isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'
          }`}>
            <LanguageSwitcher showText={false} />
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('toggleMenu')}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Enhanced with animations */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-4 sm:px-6 py-4">
              
              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-1 mb-6">
                {navigationItems.map((item, index) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 relative transform ${
                        isActive 
                          ? `text-blue-600 bg-blue-50 ${isRTL ? 'border-r-4 border-blue-600' : 'border-l-4 border-blue-600'} scale-[1.02]` 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:scale-[1.01]'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center">
                          {item.name}
                        </span>
                        {isActive && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile Contact & CTA Section */}
              <div className="border-t border-gray-200 pt-4 space-y-4">
                {/* Contact Info */}
                <div className={`flex items-center ${
                  isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
                } bg-gray-50 rounded-lg p-3`}>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {COMPANY_INFO.phone}
                    </p>
                    <p className="text-xs text-gray-600">{t('available247')}</p>
                  </div>
                  <Button size="sm" variant="outline" className="flex-shrink-0">
                    {t('call')}
                  </Button>
                </div>
                
                {/* CTA Button */}
                <Button size="md" className="w-full justify-center shadow-sm">
                  {t('getQuote')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;