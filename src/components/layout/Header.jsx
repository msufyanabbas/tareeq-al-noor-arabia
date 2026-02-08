// src/components/layout/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Phone, ArrowRight, Globe, ChevronDown, Sparkles, ShoppingBag, Package } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../utils/i18n';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const { isRTL, currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

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
    setActiveDropdown(null);
  }, [router.pathname]);

  // Function to check if a navigation item is active
  const isActiveRoute = (href) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  // Close mobile menu when clicking outside - Fixed
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside menu container
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        // Also check if it's not the menu button itself
        if (!event.target.closest('[data-menu-button]')) {
          setIsMenuOpen(false);
        }
      }
      // Handle dropdown clicks
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, activeDropdown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Project submenu items
  const projectSubItems = [
    { name: t('nav.projectTypes.residential'), href: '/projects/residential' },
    { name: t('nav.projectTypes.commercial'), href: '/projects/commercial' },
    { name: t('nav.projectTypes.industrial'), href: '/projects/industrial' },
    { name: t('nav.projectTypes.infrastructure'), href: '/projects/infrastructure' },
    { name: t('nav.projectTypes.ongoing'), href: '/projects/ongoing' },
    { name: t('nav.projectTypes.completed'), href: '/projects/completed' },
  ];

  // Navigation items with translations
  const navigationItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    // { 
    //   name: t('nav.projects'), 
    //   href: '/projects', 
    //   hasDropdown: true,
    //   subItems: projectSubItems
    // },
    { name: t('nav.ourClients'), href: '/clients' },
    { name: t('nav.careers'), href: '/careers' },
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

  // Handle dropdown toggle
  const handleDropdownToggle = (itemName, event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Handle mobile menu toggle
  const handleMenuToggle = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns
  };

  return (
    <header 
      className={`fixed top-0 text-white left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#02496a] text-white shadow-xl border-b border-[#eaae07]' 
          : 'bg-[#02496a] text-white backdrop-blur-md'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Main header content */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          
          {/* Logo Section - Enhanced for Mobile */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center justify-center transition-all duration-500 flex-shrink-0 hover:scale-105">
                {/* Enhanced Logo Container with better mobile sizing */}
                <div className={`relative transition-all duration-500 rounded-full overflow-hidden shadow-lg ${
                  isScrolled 
                    ? 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20' 
                    : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'
                }`}>
                  <img 
                    src="/logo.png" 
                    alt="Tariq AlNur AlArabi - طريق النور العربي" 
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105 bg-white rounded-full"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Logo Text - Better mobile sizing */}
                  <div className="hidden w-full h-full items-center justify-center bg-white rounded-full text-[#02496a] font-bold border-2 border-[#eaae07]">
                    <span className={`text-center leading-tight px-1 ${
                      isScrolled ? 'text-xs' : 'text-xs sm:text-sm'
                    }`}>
                      {isRTL ? (
                        <>طريق النور<br />العربي</>
                      ) : (
                        <>TARIQ<br />AL NUR</>
                      )}
                    </span>
                  </div>
                </div>

                {/* Company Name - Now visible on mobile too */}
                <div className={`ml-2 md:ml-4 ${isRTL ? 'mr-2 md:mr-4 ml-0' : ''} min-w-0 flex-shrink`}>
                  <div className="text-white">
                    <div className={`font-bold leading-tight ${
                      isScrolled 
                        ? 'text-xs sm:text-sm md:text-base lg:text-lg' 
                        : 'text-sm sm:text-base md:text-lg lg:text-xl'
                    }`}>
                      {/* Full name on larger screens */}
                      <span className="hidden md:inline">
                        {isRTL ? 'طريق النور العربي' : 'TARIQ AL NUR AL ARABI'}
                      </span>
                      {/* Medium name on small/medium screens */}
                      <span className="hidden sm:inline md:hidden">
                        {isRTL ? 'طريق النور العربي' : 'TARIQ AL NUR AL ARABI'}
                      </span>
                      {/* Short name on mobile */}
                      <span className="sm:hidden">
                        {isRTL ? 'طريق النور' : 'TARIQ AL NUR'}
                      </span>
                    </div>
                    <div className={`text-[#eaae07] font-medium uppercase tracking-wider ${
                      isScrolled 
                        ? 'text-xs' 
                        : 'text-xs sm:text-xs md:text-sm'
                    }`}>
                      {/* Full subtitle on large screens */}
                      <span className="hidden lg:inline">
                        {isRTL ? 'البناء والتصنيع' : 'Construction & Fabrication'}
                      </span>
                      {/* Medium subtitle on medium screens */}
                      <span className="hidden sm:inline lg:hidden">
                        {isRTL ? 'بناء وتصنيع' : 'Construction'}
                      </span>
                      {/* Short subtitle on mobile */}
                      <span className="sm:hidden">
                        {isRTL ? 'بناء' : 'Build'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Modern clean design */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className={`flex items-center ${
              isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'
            }`}>
              {navigationItems.map((item, index) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <div key={item.name} className="relative group dropdown-container">
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button
                          onClick={(e) => handleDropdownToggle(item.name, e)}
                          className={`relative transition-all duration-300 py-3 px-2 text-sm font-medium flex items-center ${
                            getTextClasses(isActive 
                              ? 'text-white font-semibold' 
                              : 'text-white hover:text-[#eaae07]'
                            )
                          }`}
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'} transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                          }`} />
                          
                          {/* Active indicator */}
                          {isActive && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eaae07] rounded-full"></div>
                          )}
                          
                          {/* Hover indicator */}
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eaae07] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        {/* Dropdown Menu */}
                        {activeDropdown === item.name && (
                          <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50`}>
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                                  getTextClasses(isActiveRoute(subItem.href)
                                    ? 'text-[#02496a] bg-[#eaae07]/10 font-semibold'
                                    : 'text-gray-700 hover:text-[#02496a] hover:bg-gray-50'
                                  )
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative transition-all duration-300 py-3 px-2 text-sm font-medium flex items-center ${
                          getTextClasses(isActive 
                            ? 'text-white font-semibold' 
                            : 'text-white hover:text-[#eaae07]'
                          )
                        }`}
                      >
                        {item.name}
                        
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eaae07] rounded-full"></div>
                        )}
                        
                        {/* Hover indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eaae07] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* PROMINENT MATERIAL SUPPLY BUTTON */}
              <Link
                href="/material-supply"
                className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                  isActiveRoute('/material-supply')
                    ? 'bg-gradient-to-r from-[#eaae07] to-[#d49b06] shadow-lg scale-105'
                    : 'bg-gradient-to-r from-[#eaae07]/90 to-[#d49b06]/90 hover:from-[#eaae07] hover:to-[#d49b06] hover:shadow-lg hover:scale-105'
                }`}
              >
                {/* Animated background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative flex items-center gap-2 px-4 py-2.5">
                  <Package className="w-5 h-5 text-[#02496a]" />
                  <span className={`text-sm font-bold text-[#02496a] ${getTextClasses()}`}>
                    {isRTL ? 'توريد المواد' : 'Material Supply'}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#02496a] animate-pulse" />
                </div>

                {/* Pulse effect on active */}
                {isActiveRoute('/material-supply') && (
                  <div className="absolute inset-0 rounded-lg animate-ping opacity-20 bg-[#eaae07]"></div>
                )}
              </Link>
            </div>
          </div>

          {/* Desktop Right Side - Enhanced with better styling */}
          <div className={`hidden lg:flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
          }`}>
            {/* Language Switcher */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
            
            {/* Call to Action Button */}
            <Link 
              href="/contact" 
              className="bg-white/10 text-white border border-white/20 px-6 py-2 rounded-lg font-bold hover:bg-white/20 transition-colors duration-300 text-sm backdrop-blur-sm"
            >
              {t('common.contactUs')}
            </Link>
          </div>

          {/* Mobile Right Side - Language + Menu Button */}
          <div className={`lg:hidden flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'
          }`}>
            {/* Mobile Language Switcher - Fixed */}
            <div className="flex items-center">
              <div className="bg-white/10 rounded-lg p-1 backdrop-blur-sm">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              data-menu-button="true"
              className="p-2 text-white hover:text-[#eaae07] transition-colors duration-300 hover:bg-white/10 rounded-lg"
              onClick={handleMenuToggle}
              aria-label={t('header.toggleMenu')}
              aria-expanded={isMenuOpen}
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

        {/* Mobile Menu - Enhanced */}
        <div 
          ref={menuRef}
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-[#eaae07] shadow-xl rounded-b-lg mx-1 relative z-50">
            <div className="px-4 py-4">
              
              {/* PROMINENT MOBILE MATERIAL SUPPLY CARD - Placed at top */}
              <Link
                href="/material-supply"
                className={`block mb-4 relative group overflow-hidden rounded-xl transition-all duration-300 ${
                  isActiveRoute('/material-supply')
                    ? 'bg-gradient-to-r from-[#eaae07] to-[#d49b06] shadow-xl ring-2 ring-[#eaae07]/50'
                    : 'bg-gradient-to-r from-[#eaae07]/90 to-[#d49b06]/90 hover:from-[#eaae07] hover:to-[#d49b06] hover:shadow-lg'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#02496a] p-2.5 rounded-lg">
                        <Package className="w-6 h-6 text-[#eaae07]" />
                      </div>
                      <div>
                        <div className={`text-lg font-bold text-[#02496a] ${getHeadingClasses()}`}>
                          {isRTL ? 'توريد المواد' : 'Material Supply'}
                        </div>
                        <div className="text-sm text-[#02496a]/80 font-medium">
                          {isRTL ? 'اطلب مواد البناء الآن' : 'Order Construction Materials'}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Sparkles className="w-5 h-5 text-[#02496a] animate-pulse" />
                      <ArrowRight className={`w-4 h-4 text-[#02496a] ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>

                {/* Pulse effect on active */}
                {isActiveRoute('/material-supply') && (
                  <div className="absolute inset-0 rounded-xl animate-ping opacity-20 bg-[#eaae07]"></div>
                )}
              </Link>

              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-1 mb-4">
                {navigationItems.map((item, index) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={(e) => handleDropdownToggle(item.name, e)}
                            className={`w-full py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-between text-left ${
                              getTextClasses(isActive 
                                ? 'text-[#02496a] bg-[#eaae07]/10 font-semibold' 
                                : 'text-gray-700 hover:text-[#02496a] hover:bg-[#eaae07]/5'
                              )
                            }`}
                          >
                            <span className="text-base font-medium">
                              {item.name}
                            </span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                              activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                            }`} />
                          </button>
                          
                          {/* Mobile Submenu - Enhanced */}
                          {activeDropdown === item.name && (
                            <div className={`mt-1 ${isRTL ? 'mr-2' : 'ml-2'} space-y-1 border-l-2 ${isRTL ? 'border-r-2 border-l-0' : ''} border-[#eaae07] pl-4 ${isRTL ? 'pr-4 pl-0' : ''}`}>
                              {item.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`block py-2 px-3 rounded-lg transition-all duration-300 text-sm ${
                                    getTextClasses(isActiveRoute(subItem.href)
                                      ? 'text-[#02496a] bg-[#eaae07]/15 font-semibold'
                                      : 'text-gray-600 hover:text-[#02496a] hover:bg-[#eaae07]/5'
                                    )
                                  }`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                            getTextClasses(isActive 
                              ? 'text-[#02496a] bg-[#eaae07]/10 font-semibold' 
                              : 'text-gray-700 hover:text-[#02496a] hover:bg-[#eaae07]/5'
                            )
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-base font-medium">
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile CTA Button */}
              <div className="border-t border-gray-200 pt-4">
                <Link 
                  href="/contact" 
                  className="w-full bg-[#02496a] text-white border-2 border-[#02496a] py-3 px-4 rounded-lg font-bold hover:bg-[#023d54] transition-colors duration-300 text-center block text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('common.contactUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;