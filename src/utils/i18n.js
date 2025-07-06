// src/utils/i18n.js
import { useLanguage } from '../contexts/LanguageContext';

// Import translation files
import enTranslations from '../locales/en.json';
import arTranslations from '../locales/ar.json';

const translations = {
  en: enTranslations,
  ar: arTranslations
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        // Fallback to English if key not found
        translation = translations.en;
        for (const fallbackKey of keys) {
          if (translation && typeof translation === 'object' && fallbackKey in translation) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key itself if not found
          }
        }
        break;
      }
    }
    
    return translation || key;
  };

  return { t };
};

// Helper function to get translation without hook (for use in non-component contexts)
export const getTranslation = (key, language = 'en') => {
  const keys = key.split('.');
  let translation = translations[language];
  
  for (const k of keys) {
    if (translation && typeof translation === 'object' && k in translation) {
      translation = translation[k];
    } else {
      // Fallback to English if key not found
      translation = translations.en;
      for (const fallbackKey of keys) {
        if (translation && typeof translation === 'object' && fallbackKey in translation) {
          translation = translation[fallbackKey];
        } else {
          return key; // Return key itself if not found
        }
      }
      break;
    }
  }
  
  return translation || key;
};