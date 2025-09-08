// src/contexts/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isRTL, setIsRTL] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // RTL languages list
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

  // Available languages
  const availableLanguages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
  ];

  useEffect(() => {
    // Load saved language from localStorage on mount
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && availableLanguages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Detect browser language as fallback
      const browserLanguage = navigator.language.split('-')[0];
      const supportedLanguage = availableLanguages.find(lang => lang.code === browserLanguage);
      if (supportedLanguage) {
        setCurrentLanguage(supportedLanguage.code);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Check if current language is RTL
    const isCurrentRTL = rtlLanguages.includes(currentLanguage);
    setIsRTL(isCurrentRTL);
    
    // Set document direction and lang attributes
    document.documentElement.setAttribute('dir', isCurrentRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Add RTL/LTR class to body for additional styling if needed
    if (isCurrentRTL) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }

    // Update document title direction for better SEO
    const titleElements = document.querySelectorAll('title, meta[name="description"]');
    titleElements.forEach(element => {
      if (isCurrentRTL) {
        element.setAttribute('dir', 'rtl');
      } else {
        element.setAttribute('dir', 'ltr');
      }
    });
  }, [currentLanguage]);

  const switchLanguage = (language) => {
    if (availableLanguages.some(lang => lang.code === language)) {
      setCurrentLanguage(language);
      localStorage.setItem('preferred-language', language);
      
      // Trigger a custom event for other components to listen to
      window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language, isRTL: rtlLanguages.includes(language) } 
      }));
    }
  };

  const toggleLanguage = () => {
    const currentIndex = availableLanguages.findIndex(lang => lang.code === currentLanguage);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    switchLanguage(availableLanguages[nextIndex].code);
  };

  const getCurrentLanguageInfo = () => {
    return availableLanguages.find(lang => lang.code === currentLanguage) || availableLanguages[0];
  };

  const value = {
    currentLanguage,
    isRTL,
    isLoading,
    availableLanguages,
    rtlLanguages,
    switchLanguage,
    toggleLanguage,
    getCurrentLanguageInfo
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};