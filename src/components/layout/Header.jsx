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
          
          {/* Logo Section - Enhanced with SVG */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center justify-center transition-all duration-500 flex-shrink-0 hover:scale-105 group-hover:drop-shadow-2xl">
                {/* SVG Logo Container */}
                <div className={`relative transition-all duration-500 ${
                  isScrolled 
                    ? 'w-48 h-16 md:w-56 md:h-20 lg:w-64 lg:h-24' 
                    : 'w-52 h-18 md:w-60 md:h-22 lg:w-72 lg:h-28'
                }`}>
                  <svg 
                    viewBox="0 0 400 180" 
                    className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 contrast-110 group-hover:brightness-125 transition-all duration-500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Enhanced gradients for better visibility */}
                      <linearGradient id="lanternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: isScrolled ? '#6B7280' : '#9CA3AF', stopOpacity: 1}} />
                        <stop offset="50%" style={{stopColor: isScrolled ? '#374151' : '#6B7280', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: isScrolled ? '#1F2937' : '#374151', stopOpacity: 1}} />
                      </linearGradient>
                      
                      <radialGradient id="lightGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style={{stopColor: '#FDE047', stopOpacity: 0.9}} />
                        <stop offset="100%" style={{stopColor: '#FDE047', stopOpacity: 0.3}} />
                      </radialGradient>
                      
                      <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.6"/>
                      </filter>
                      
                      {/* Text gradient for better visibility */}
                      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: isScrolled ? '#F9FAFB' : '#FFFFFF', stopOpacity: 1}} />
                        <stop offset="50%" style={{stopColor: isScrolled ? '#FFFFFF' : '#F3F4F6', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: isScrolled ? '#F9FAFB' : '#FFFFFF', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    
                    {/* Top curved text "TAREEQ AL NUR AL ARABIC" */}
                    <defs>
                      <path id="topArc" d="M 30 40 Q 200 10 370 40" stroke="none" fill="none"/>
                    </defs>
                    
                    <text 
                      fontFamily="Madisonian BC, serif" 
                      fontSize="16" 
                      fontWeight="bold" 
                      fill="url(#textGradient)" 
                      letterSpacing="1.5px"
                      filter="url(#dropshadow)"
                    >
                      <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                        TAREEQ AL NUR AL ARABIC
                      </textPath>
                    </text>
                    
                    {/* Central lantern arrangement */}
                    <g transform="translate(200, 100)">
                      
                      {/* Left lantern */}
                      <g transform="translate(-50, 0)">
                        <ellipse cx="0" cy="-28" rx="8" ry="4" fill="url(#lanternGradient)" filter="url(#dropshadow)"/>
                        <rect x="-1" y="-32" width="2" height="8" fill="url(#lanternGradient)"/>
                        <rect x="-8" y="-24" width="16" height="24" fill="url(#lanternGradient)" rx="2" filter="url(#dropshadow)"/>
                        <rect x="-6" y="-22" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="1" y="-22" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="-6" y="-12" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="1" y="-12" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <ellipse cx="0" cy="2" rx="9" ry="3" fill="url(#lanternGradient)" filter="url(#dropshadow)"/>
                        <rect x="-0.5" y="-38" width="1" height="14" fill="url(#lanternGradient)"/>
                        <circle cx="0" cy="-39" r="1.5" fill="url(#lanternGradient)"/>
                      </g>
                      
                      {/* Center lantern (larger) */}
                      <g transform="translate(0, -8)">
                        <ellipse cx="0" cy="-30" rx="10" ry="5" fill="url(#lanternGradient)" filter="url(#dropshadow)"/>
                        <rect x="-1" y="-35" width="2" height="10" fill="url(#lanternGradient)"/>
                        <rect x="-10" y="-25" width="20" height="30" fill="url(#lanternGradient)" rx="3" filter="url(#dropshadow)"/>
                        <rect x="-8" y="-23" width="6" height="10" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="2" y="-23" width="6" height="10" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="-8" y="-11" width="6" height="10" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="2" y="-11" width="6" height="10" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <ellipse cx="0" cy="7" rx="11" ry="4" fill="url(#lanternGradient)" filter="url(#dropshadow)"/>
                        <rect x="-0.5" y="-42" width="1" height="17" fill="url(#lanternGradient)"/>
                        <circle cx="0" cy="-43" r="1.5" fill="url(#lanternGradient)"/>
                      </g>
                      
                      {/* Right lantern */}
                      <g transform="translate(50, 0)">
                        <ellipse cx="0" cy="-28" rx="8" ry="4" fill="url(#lanternGradient)" filter="url(#dropshadow)"/>
                        <rect x="-1" y="-32" width="2" height="8" fill="url(#lanternGradient)"/>
                        <rect x="-8" y="-24" width="16" height="24" fill="url(#lanternGradient)" rx="2" filter="url(#dropshadow)"/>
                        <rect x="-6" y="-22" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="1" y="-22" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="-6" y="-12" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <rect x="1" y="-12" width="5" height="8" fill="rgba(253, 224, 71, 0.4)" rx="1"/>
                        <ellipse cx="0" cy="2" rx="9" ry="3" fill="url(#lanternGradient)" filter="url(#dropshadow)"/>
                        <rect x="-0.5" y="-38" width="1" height="14" fill="url(#lanternGradient)"/>
                        <circle cx="0" cy="-39" r="1.5" fill="url(#lanternGradient)"/>
                      </g>
                      
                      {/* Decorative elements */}
                      <g transform="translate(-80, 0)" fill="url(#lanternGradient)" opacity="0.9">
                        <path d="M 0 0 C -8 -8 -12 -4 -8 0 C -12 4 -8 8 0 0" />
                        <path d="M -4 0 C -8 -4 -10 -2 -8 0 C -10 2 -8 4 -4 0" />
                      </g>
                      
                      <g transform="translate(80, 0)" fill="url(#lanternGradient)" opacity="0.9">
                        <path d="M 0 0 C 8 -8 12 -4 8 0 C 12 4 8 8 0 0" />
                        <path d="M 4 0 C 8 -4 10 -2 8 0 C 10 2 8 4 4 0" />
                      </g>
                      
                      {/* Enhanced decorative stars */}
                      <g fill="url(#lanternGradient)" opacity="0.8">
                        <g transform="translate(-25, -8)">
                          <path d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z"/>
                        </g>
                        <g transform="translate(25, -8)">
                          <path d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z"/>
                        </g>
                        <g transform="translate(-15, 8)">
                          <path d="M 0 -2 L 0.5 -0.5 L 2 0 L 0.5 0.5 L 0 2 L -0.5 0.5 L -2 0 L -0.5 -0.5 Z"/>
                        </g>
                        <g transform="translate(15, 8)">
                          <path d="M 0 -2 L 0.5 -0.5 L 2 0 L 0.5 0.5 L 0 2 L -0.5 0.5 L -2 0 L -0.5 -0.5 Z"/>
                        </g>
                      </g>
                      
                      {/* Crescent moon elements */}
                      <g transform="translate(-35, 5)" fill="url(#lanternGradient)" opacity="0.7">
                        <path d="M 0 -6 C 2 -3 2 3 0 6 C 4 3 4 -3 0 -6 Z"/>
                      </g>
                      <g transform="translate(35, 5)" fill="url(#lanternGradient)" opacity="0.7">
                        <path d="M 0 -6 C -2 -3 -2 3 0 6 C -4 3 -4 -3 0 -6 Z"/>
                      </g>
                    </g>
                    
                    {/* Bottom tagline */}
                    <text 
                      x="200" 
                      y="145" 
                      fontFamily="Madisonian BC, serif" 
                      fontSize="14" 
                      fontWeight="600" 
                      fill="url(#textGradient)" 
                      textAnchor="middle" 
                      letterSpacing="4px"
                      filter="url(#dropshadow)"
                    >
                      BUILDING EXCELLENCE
                    </text>
                    
                    {/* Enhanced decorative line */}
                    <line x1="130" y1="155" x2="270" y2="155" stroke="url(#textGradient)" strokeWidth="1.5" opacity="0.7"/>
                    <circle cx="200" cy="155" r="2.5" fill="url(#textGradient)" opacity="0.8"/>
                  </svg>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-300/20 to-yellow-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
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
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 rounded-full blur-md -z-20"></div>
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
                          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full shadow-lg"></div>
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