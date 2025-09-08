// src/components/ui/LanguageSwitcher.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../utils/i18n';

const LanguageSwitcher = ({ variant = 'header' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, switchLanguage, isRTL } = useLanguage();
  const { t } = useTranslation();
  const dropdownRef = useRef(null);

  // Available languages with their display names
  const languages = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'ar',
      name: 'Arabic',
      nativeName: 'العربية',
      flag: '🇸🇦'
    }
  ];

  // Get current language object
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode) => {
    switchLanguage(languageCode);
    setIsOpen(false);
  };

  // Different styles based on variant
  const getButtonStyles = () => {
    switch (variant) {
      case 'header':
        return `
          flex items-center space-x-2 px-3 py-2 rounded-lg 
          text-white hover:text-[#eaae07] hover:bg-white/10 
          transition-all duration-300 text-sm font-medium
          ${isRTL ? 'space-x-reverse' : ''}
        `;
      case 'mobile':
        return `
          flex items-center justify-between w-full px-4 py-3 
          text-gray-700 hover:text-[#035678] hover:bg-gray-50 
          rounded-lg transition-all duration-300
        `;
      case 'footer':
        return `
          flex items-center space-x-2 px-3 py-2 rounded-lg 
          text-gray-300 hover:text-white hover:bg-white/10 
          transition-all duration-300 text-sm
          ${isRTL ? 'space-x-reverse' : ''}
        `;
      default:
        return `
          flex items-center space-x-2 px-3 py-2 rounded-lg 
          border border-gray-300 hover:border-[#035678] 
          transition-all duration-300
          ${isRTL ? 'space-x-reverse' : ''}
        `;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonStyles()}
        aria-label={t('header.changeLanguage')}
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">
          {currentLang.nativeName}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full ${
          isRTL ? 'right-0' : 'left-0'
        } mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50`}>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`
                w-full flex items-center justify-between px-4 py-3 text-sm 
                transition-colors duration-200 hover:bg-gray-50
                ${currentLanguage === language.code 
                  ? 'text-[#035678] bg-blue-50 font-semibold' 
                  : 'text-gray-700'
                }
                ${isRTL ? 'text-right' : 'text-left'}
              `}
            >
              <div className={`flex items-center ${
                isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'
              }`}>
                <span className="text-lg">{language.flag}</span>
                <div>
                  <div className="font-medium">{language.nativeName}</div>
                  <div className="text-xs text-gray-500">{language.name}</div>
                </div>
              </div>
              {currentLanguage === language.code && (
                <Check className="w-4 h-4 text-[#035678]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;