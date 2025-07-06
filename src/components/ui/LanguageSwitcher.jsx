// src/components/ui/LanguageSwitcher.jsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ showText = true, className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 ${className}`}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe className="w-4 h-4 text-white" />
      {showText && (
        <span className="text-sm font-medium text-white">
          {language === 'en' ? 'العربية' : 'English'}
        </span>
      )}
    </button>
  );
};

export default LanguageSwitcher;