// src/utils/i18n.js
import { useLanguage } from '../contexts/LanguageContext';

// Translation files
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    
    // Header
    getQuote: 'Get Quote',
    available247: '24/7 Available',
    toggleMenu: 'Toggle menu',
    
    // Common
    learnMore: 'Learn More',
    readMore: 'Read More',
    viewAll: 'View All',
    contactUs: 'Contact Us',
    callNow: 'Call Now',
    
    // Hero Section
    heroTitle: 'Building Dreams, Creating Futures',
    heroSubtitle: 'Professional construction services for residential and commercial projects with quality craftsmanship and reliable service.',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Complete construction solutions for all your needs',
    
    // About
    aboutTitle: 'About Us',
    aboutSubtitle: 'Years of experience in construction excellence',
    
    // Projects
    projectsTitle: 'Our Projects',
    projectsSubtitle: 'Showcasing our finest work',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to start your project? Contact us today',
    
    // Footer
    footerDescription: 'Professional construction services with quality craftsmanship, reliable service, and competitive pricing.',
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
  },
  
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    projects: 'المشاريع',
    contact: 'اتصل بنا',
    
    // Header
    getQuote: 'احصل على عرض سعر',
    available247: 'متوفر على مدار الساعة',
    toggleMenu: 'تبديل القائمة',
    
    // Common
    learnMore: 'اعرف أكثر',
    readMore: 'اقرأ المزيد',
    viewAll: 'عرض الكل',
    contactUs: 'اتصل بنا',
    callNow: 'اتصل الآن',
    
    // Hero Section
    heroTitle: 'نبني الأحلام، نصنع المستقبل',
    heroSubtitle: 'خدمات البناء المهنية للمشاريع السكنية والتجارية مع الحرفية عالية الجودة والخدمة الموثوقة.',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول البناء الشاملة لجميع احتياجاتك',
    
    // About
    aboutTitle: 'من نحن',
    aboutSubtitle: 'سنوات من الخبرة في التميز في البناء',
    
    // Projects
    projectsTitle: 'مشاريعنا',
    projectsSubtitle: 'عرض لأفضل أعمالنا',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'جاهز لبدء مشروعك؟ اتصل بنا اليوم',
    
    // Footer
    footerDescription: 'خدمات البناء المهنية مع الحرفية عالية الجودة والخدمة الموثوقة والأسعار التنافسية.',
    quickLinks: 'روابط سريعة',
    ourServices: 'خدماتنا',
    followUs: 'تابعنا',
    allRightsReserved: 'جميع الحقوق محفوظة.',
  }
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