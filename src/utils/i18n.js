// src/utils/i18n.js
import { useLanguage } from '../contexts/LanguageContext';

// Import translation files
import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';

// Translation files
const translations = {
  en: enTranslations,
  ar: arTranslations
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return { t };
};

export const translate = (key, language = 'en') => {
  return translations[language][key] || key;
};

export default translations;