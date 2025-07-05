// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Building, Phone, ArrowRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 10);
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
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <Container>
        <nav className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className={`flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'
          }`}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <Building className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="hidden xs:block">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                {COMPANY_INFO.name}
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block leading-tight">
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center ${
            isRTL ? 'space-x-reverse space-x-6 xl:space-x-reverse xl:space-x-8' : 'space-x-6 xl:space-x-8'
          }`}>
            {navigationItems.map((item) => {
              const isActive = isActiveRoute(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-200 relative py-2 px-3 rounded-lg ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {/* Active indicator - underline */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Language Switcher & Contact Info & CTA - Desktop */}
          <div className={`hidden xl:flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
          }`}>
            <LanguageSwitcher />
            <div className={`${isRTL ? 'text-left' : 'text-right'}`}>
              <p className={`text-sm font-medium text-gray-900 flex items-center ${
                isRTL ? 'flex-row-reverse' : ''
              }`}>
                <Phone className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                {COMPANY_INFO.phone}
              </p>
              <p className="text-xs text-gray-600">{t('available247')}</p>
            </div>
            <Button size="sm" className="whitespace-nowrap">
              {t('getQuote')}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
            </Button>
          </div>

          {/* Language Switcher & CTA - Large screens only */}
          <div className={`hidden lg:flex xl:hidden items-center ${
            isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
          }`}>
            <LanguageSwitcher showText={false} />
            <Button size="sm" className="whitespace-nowrap">
              {t('getQuote')}
            </Button>
          </div>

          {/* Mobile Language Switcher & Menu Button */}
          <div className={`lg:hidden flex items-center ${
            isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'
          }`}>
            <LanguageSwitcher showText={false} />
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('toggleMenu')}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 relative ${
                      isActive 
                        ? `text-blue-600 bg-blue-50 ${isRTL ? 'border-r-4 border-blue-600' : 'border-l-4 border-blue-600'}` 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      {isActive && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </span>
                  </Link>
                );
              })}
              
              {/* Mobile Contact & CTA */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center ${
                    isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'
                  }`}>
                    <Phone className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {COMPANY_INFO.phone}
                      </p>
                      <p className="text-xs text-gray-600">{t('available247')}</p>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="w-full">
                  {t('getQuote')}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} />
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