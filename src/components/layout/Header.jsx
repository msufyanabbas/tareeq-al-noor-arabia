// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Building, Phone, ArrowRight, Globe, ChevronDown, Sparkles } from 'lucide-react';
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
  const { isRTL, currentLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  // Enhanced font classes for Arabic support
  const getTextClasses = (additionalClasses = '') => {
    const baseClasses = isRTL 
      ? 'font-tajawal font-medium tracking-wide' 
      : 'font-sans';
    return `${baseClasses} ${additionalClasses}`;
  };

  const getHeadingClasses = (additionalClasses = '') => {
    const baseClasses = isRTL 
      ? 'font-tajawal font-bold tracking-wide' 
      : 'font-sans font-bold';
    return `${baseClasses} ${additionalClasses}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Main header content */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          
          {/* Logo Section - Clean and minimal */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className={`flex items-center group ${
              isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
            }`}>
              <div className={`relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                isScrolled ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/5 backdrop-blur-sm'
              }`}>
                <Building className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className={getHeadingClasses("text-lg lg:text-xl text-white leading-tight")}>
                  {t('company.name')}
                </h1>
                <p className={getTextClasses("text-sm text-white/80 leading-tight")}>
                  {t('company.tagline')}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Clean glass effect */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className={`flex items-center ${
              isScrolled ? 'bg-white/10' : 'bg-white/5'
            } backdrop-blur-md rounded-full px-2 py-2 border border-white/10 ${
              isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'
            }`}>
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative transition-all duration-300 py-2 px-6 rounded-full whitespace-nowrap text-sm font-medium group ${
                      getTextClasses(isActive 
                        ? 'text-white bg-white/20 backdrop-blur-sm' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      )
                    }`}
                  >
                    {item.name}
                    {/* Subtle glow for active state */}
                    {isActive && (
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-sm -z-10"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Right Side - Minimal and clean */}
          <div className={`hidden lg:flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
          }`}>
            {/* Language Switcher */}
            <div className={`${
              isScrolled ? 'bg-white/10' : 'bg-white/5'
            } backdrop-blur-md rounded-full p-2 border border-white/10`}>
              <LanguageSwitcher />
            </div>
            
            {/* Contact Info - Minimal design */}
            <div className={`hidden xl:flex items-center ${
              isScrolled ? 'bg-white/10' : 'bg-white/5'
            } backdrop-blur-md rounded-full px-4 py-2 border border-white/10 ${
              isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
            }`}>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm">
                <div className={getTextClasses("text-white font-medium")}>
                  {t('company.phone')}
                </div>
                <p className={getTextClasses("text-xs text-white/80")}>
                  {t('header.available247')}
                </p>
              </div>
            </div>
            
            {/* CTA Button - Clean design */}
            <Button 
              size="sm" 
              className={`whitespace-nowrap bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 text-white backdrop-blur-md transition-all duration-300 text-sm px-6 ${
                isRTL ? 'font-tajawal font-medium' : ''
              } group`}
            >
              <span>{t('header.quote')}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform duration-300`} />
            </Button>
          </div>

          {/* Mobile Menu Button - Clean glass effect */}
          <div className={`lg:hidden flex items-center ${
            isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
          } flex-shrink-0`}>
            <div className={`${
              isScrolled ? 'bg-white/10' : 'bg-white/5'
            } backdrop-blur-md rounded-full p-2 border border-white/10`}>
              <LanguageSwitcher showText={false} />
            </div>
            <button
              className={`p-3 rounded-full ${
                isScrolled ? 'bg-white/10' : 'bg-white/5'
              } backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300 flex-shrink-0`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('header.toggleMenu')}
            >
              <div className="relative w-5 h-5">
                <Menu className={`w-5 h-5 absolute transition-all duration-300 text-white ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} />
                <X className={`w-5 h-5 absolute transition-all duration-300 text-white ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Clean overlay */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
            <div className="px-6 py-8">
              
              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-2 mb-8">
                {navigationItems.map((item) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`py-4 px-6 rounded-xl transition-all duration-300 ${
                        getTextClasses(isActive 
                          ? 'text-white bg-white/20 backdrop-blur-sm font-medium' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                        )
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">
                          {item.name}
                        </span>
                        {isActive && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile Contact & CTA Section */}
              <div className="border-t border-white/10 pt-8 space-y-4">
                {/* Contact Info */}
                <div className={`flex items-center ${
                  isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
                } bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={getTextClasses("text-white font-medium")}>
                      {t('company.phone')}
                    </p>
                    <p className={getTextClasses("text-sm text-white/80")}>
                      {t('header.available247')}
                    </p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className={`w-full justify-center bg-white/20 hover:bg-white/30 border border-white/30 hover:border-white/50 text-white backdrop-blur-md transition-all duration-300 group ${
                    isRTL ? 'font-tajawal font-medium' : ''
                  }`}
                >
                  <span>{t('header.getQuote')}</span>
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform duration-300`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;