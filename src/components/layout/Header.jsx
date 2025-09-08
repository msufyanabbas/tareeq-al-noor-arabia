// src/components/layout/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Phone, ArrowRight, Globe, ChevronDown, Sparkles, ShoppingBag } from 'lucide-react';
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, activeDropdown]);

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
    { 
      name: t('nav.projects'), 
      href: '/projects', 
      hasDropdown: true,
      subItems: projectSubItems
    },
    { name: t('nav.products'), href: '/products' },
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
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header 
      className={`fixed top-0 text-white left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#035678] text-white shadow-xl border-b border-[#eaae07]' 
          : 'bg-[#035678] text-white backdrop-blur-md'
      }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Main header content */}
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section - Keep Tariq Al Nur logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative flex items-center justify-center transition-all duration-500 flex-shrink-0 hover:scale-105">
                {/* PNG Logo Container */}
                <div className={`bg-white relative transition-all duration-500 ${
                  isScrolled 
                    ? 'w-12 h-12 md:w-16 md:h-16' 
                    : 'w-14 h-14 md:w-18 md:h-18'
                }`}>
                  <img 
                    src="/logo.png" 
                    alt="Tariq AlNur AlArabi - طريق النور العربي" 
                    className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback Logo Text (hidden by default) */}
                  <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-full text-white font-bold text-xs">
                    <span className="text-center leading-tight">
                      طريق النور<br />العربي
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Modern clean design */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className={`flex items-center ${
              isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'
            }`}>
              {navigationItems.map((item, index) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <div key={item.name} className="relative group dropdown-container">
                    {item.hasDropdown ? (
                      <div className="relative">
                        <button
                          onClick={(e) => handleDropdownToggle(item.name, e)}
                          className={`relative transition-all duration-300 py-2 px-1 text-sm font-medium flex items-center ${
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
                                    ? 'text-[#035678] bg-blue-50 font-semibold'
                                    : 'text-gray-700 hover:text-[#035678] hover:bg-gray-50'
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
                        className={`relative transition-all duration-300 py-2 px-1 text-sm font-medium flex items-center ${
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
            </div>
          </div>

          {/* Desktop Right Side - Modern blue design */}
          <div className={`hidden lg:flex items-center flex-shrink-0 ${
            isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'
          }`}>
            {/* Language Switcher */}
            <div className="flex items-center">
              <LanguageSwitcher />
            </div>
            
            {/* Shopping Bag Icon */}
            {/* <button className="relative p-2 text-white hover:text-[#eaae07] transition-colors duration-300">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#eaae07] text-[#035678] text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className={`lg:hidden flex items-center ${
            isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
          } flex-shrink-0`}>
            {/* Mobile Shopping Bag */}
            {/* <button className="relative p-2 text-white hover:text-[#eaae07] transition-colors duration-300">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#eaae07] text-[#035678] text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button> */}
            
            <button
              className="p-2 text-white hover:text-[#eaae07] transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t('header.toggleMenu')}
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

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-[#eaae07] shadow-lg">
            <div className="px-4 py-6">
              
              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-1 mb-6">
                {navigationItems.map((item, index) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={(e) => handleDropdownToggle(item.name, e)}
                            className={`w-full py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                              getTextClasses(isActive 
                                ? 'text-[#035678] bg-blue-50 font-semibold' 
                                : 'text-gray-700 hover:text-[#035678] hover:bg-gray-50'
                              )
                            }`}
                          >
                            <span className="text-base">
                              {item.name}
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-180' : 'rotate-0'
                            }`} />
                          </button>
                          
                          {/* Mobile Submenu */}
                          {activeDropdown === item.name && (
                            <div className={`mt-1 ${isRTL ? 'mr-4' : 'ml-4'} space-y-1`}>
                              {item.subItems?.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                                    getTextClasses(isActiveRoute(subItem.href)
                                      ? 'text-[#035678] bg-blue-100 font-semibold'
                                      : 'text-gray-600 hover:text-[#035678] hover:bg-gray-50'
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
                          className={`py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                            getTextClasses(isActive 
                              ? 'text-[#035678] bg-blue-50 font-semibold' 
                              : 'text-gray-700 hover:text-[#035678] hover:bg-gray-50'
                            )
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-base">
                            {item.name}
                          </span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className={getTextClasses("text-gray-700 font-medium")}>
                    {t('header.language')}
                  </span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;