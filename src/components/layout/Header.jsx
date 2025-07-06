// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Phone, ArrowRight, Globe, ChevronDown, Sparkles } from 'lucide-react';
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
          ? 'bg-black/90 backdrop-blur-md shadow-2xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Main header content */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          
          {/* Logo Section - Enhanced with PNG */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center justify-center transition-all duration-500 flex-shrink-0 hover:scale-105 group-hover:drop-shadow-2xl">
                {/* PNG Logo Container */}
                <div className={`relative transition-all duration-500 ${
                  isScrolled 
                    ? 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24' 
                    : 'w-18 h-18 md:w-22 md:h-22 lg:w-28 lg:h-28'
                }`}>
                  <img 
                    src="/logo.png" 
                    alt="Tariq AlNur AlArabi - طريق النور العربي" 
                    className={`w-full h-full object-contain transition-all duration-500 ${
                      isScrolled 
                        ? 'filter brightness-110 contrast-110 drop-shadow-lg' 
                        : 'filter brightness-125 contrast-125 drop-shadow-2xl'
                    } group-hover:brightness-150 group-hover:scale-105`}
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Logo Text (hidden by default) */}
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-teal-600 to-teal-800 rounded-full text-white font-bold text-xs md:text-sm">
                    <span className="text-center leading-tight">
                      طريق النور<br />العربي
                    </span>
                  </div>
                  
                  {/* Enhanced glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-teal-300/20 to-teal-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                </div>
                
                {/* Company Name Text (Optional - can be hidden on mobile) */}
                <div className={`hidden md:flex flex-col ${isRTL ? 'mr-4' : 'ml-4'} transition-all duration-500`}>
                  <span className={`${getHeadingClasses()} text-white font-bold text-lg lg:text-xl leading-tight ${
                    isScrolled ? 'opacity-90' : 'opacity-100'
                  }`}>
                    {isRTL ? 'طريق النور العربي' : 'Tariq Al Nur Al Arabi'}
                  </span>
                  <span className={`${getTextClasses()} text-white/80 text-xs lg:text-sm leading-tight ${
                    isScrolled ? 'opacity-80' : 'opacity-90'
                  }`}>
                    {isRTL ? 'بناء التميز' : 'Building Excellence'}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Enhanced glass effect */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className={`flex items-center ${
              isScrolled ? 'bg-white/15 shadow-lg' : 'bg-white/10 shadow-2xl'
            } backdrop-blur-xl rounded-full px-3 py-3 border border-white/20 ${
              isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'
            } transition-all duration-500`}>
              {navigationItems.map((item, index) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative transition-all duration-500 py-3 px-6 rounded-full whitespace-nowrap text-sm font-medium group ${
                      getTextClasses(isActive 
                        ? 'text-white bg-white/25 backdrop-blur-sm shadow-lg scale-105' 
                        : 'text-white/90 hover:text-white hover:bg-white/15 hover:scale-105'
                      )
                    } ${index === 0 ? 'ml-0' : ''}`}
                  >
                    {item.name}
                    {/* Enhanced glow for active state */}
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-sm -z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-teal-300/20 rounded-full blur-md -z-20"></div>
                      </>
                    )}
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Right Side - Enhanced design */}
          <div className={`hidden lg:flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
          }`}>
            {/* Language Switcher */}
            <div className={`${
              isScrolled ? 'bg-white/15 shadow-lg' : 'bg-white/10 shadow-2xl'
            } backdrop-blur-xl rounded-full p-3 border border-white/20 transition-all duration-500 hover:bg-white/20`}>
              <LanguageSwitcher />
            </div>
            
            {/* Contact Info - Enhanced design */}
            <div className={`hidden xl:flex items-center ${
              isScrolled ? 'bg-white/15 shadow-lg' : 'bg-white/10 shadow-2xl'
            } backdrop-blur-xl rounded-full px-5 py-3 border border-white/20 ${
              isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
            } transition-all duration-500 hover:bg-white/20`}>
              <div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/20 rounded-full flex items-center justify-center shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm">
                <div className={getTextClasses("text-white font-semibold")}>
                  {t('company.phone')}
                </div>
                <p className={getTextClasses("text-xs text-white/80")}>
                  {t('header.available247')}
                </p>
              </div>
            </div>
            
            {/* CTA Button - Enhanced design */}
            <Button 
              size="sm" 
              className={`whitespace-nowrap bg-gradient-to-r from-white/25 to-white/20 hover:from-white/35 hover:to-white/30 border border-white/30 hover:border-white/50 text-white backdrop-blur-xl transition-all duration-500 text-sm px-8 py-3 shadow-lg hover:shadow-xl hover:scale-105 ${
                isRTL ? 'font-tajawal font-medium' : ''
              } group`}
            >
              <span className="font-semibold">{t('header.quote')}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform duration-300`} />
            </Button>
          </div>

          {/* Mobile Menu Button - Enhanced glass effect */}
          <div className={`lg:hidden flex items-center ${
            isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
          } flex-shrink-0`}>
            <div className={`${
              isScrolled ? 'bg-white/15 shadow-lg' : 'bg-white/10 shadow-2xl'
            } backdrop-blur-xl rounded-full p-3 border border-white/20 transition-all duration-500 hover:bg-white/20`}>
              <LanguageSwitcher showText={false} />
            </div>
            <button
              className={`p-4 rounded-full ${
                isScrolled ? 'bg-white/15 shadow-lg' : 'bg-white/10 shadow-2xl'
              } backdrop-blur-xl border border-white/20 hover:bg-white/25 transition-all duration-500 flex-shrink-0 hover:scale-105`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('header.toggleMenu')}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 text-white ${
                  isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 text-white ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Enhanced overlay */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-2xl border-t border-white/20 shadow-2xl">
            <div className="px-6 py-10">
              
              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-3 mb-10">
                {navigationItems.map((item, index) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`py-5 px-6 rounded-2xl transition-all duration-500 ${
                        getTextClasses(isActive 
                          ? 'text-white bg-white/25 backdrop-blur-sm font-semibold shadow-lg scale-105' 
                          : 'text-white/90 hover:text-white hover:bg-white/15 hover:scale-105'
                        )
                      } transform hover:translate-x-2`}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">
                          {item.name}
                        </span>
                        {isActive && (
                          <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full shadow-lg"></div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile Contact & CTA Section */}
              <div className="border-t border-white/20 pt-8 space-y-6">
                {/* Contact Info */}
                <div className={`flex items-center ${
                  isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
                } bg-white/15 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg`}>
                  <div className="w-14 h-14 bg-gradient-to-br from-white/30 to-white/20 rounded-2xl flex items-center justify-center shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className={getTextClasses("text-white font-semibold text-lg")}>
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
                  className={`w-full justify-center bg-gradient-to-r from-white/25 to-white/20 hover:from-white/35 hover:to-white/30 border border-white/30 hover:border-white/50 text-white backdrop-blur-xl transition-all duration-500 group shadow-lg hover:shadow-xl py-4 ${
                    isRTL ? 'font-tajawal font-medium' : ''
                  }`}
                >
                  <span className="font-semibold text-lg">{t('header.getQuote')}</span>
                  <ArrowRight className={`w-6 h-6 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'} group-hover:translate-x-1 transition-transform duration-300`} />
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