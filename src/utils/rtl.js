// src/utils/rtl.js - RTL utility functions
import { useLanguage } from '../contexts/LanguageContext';

// Custom hook for RTL-aware positioning
export const useRTLPosition = () => {
  const { isRTL } = useLanguage();
  
  const getPosition = (left, right) => {
    return isRTL ? right : left;
  };
  
  const getMargin = (leftMargin, rightMargin) => {
    return isRTL ? rightMargin : leftMargin;
  };
  
  const getPadding = (leftPadding, rightPadding) => {
    return isRTL ? rightPadding : leftPadding;
  };
  
  const getDirection = () => {
    return isRTL ? 'rtl' : 'ltr';
  };
  
  const getTextAlign = (align = 'left') => {
    if (align === 'left') return isRTL ? 'right' : 'left';
    if (align === 'right') return isRTL ? 'left' : 'right';
    return align;
  };
  
  const getFlexDirection = (direction = 'row') => {
    if (direction === 'row') return isRTL ? 'row-reverse' : 'row';
    if (direction === 'row-reverse') return isRTL ? 'row' : 'row-reverse';
    return direction;
  };
  
  return {
    isRTL,
    getPosition,
    getMargin,
    getPadding,
    getDirection,
    getTextAlign,
    getFlexDirection,
  };
};

// RTL-aware class generator
export const rtlClass = (ltrClass, rtlClass) => {
  const { isRTL } = useLanguage();
  return isRTL ? rtlClass : ltrClass;
};

// Generate RTL-compatible Tailwind classes
export const generateRTLClasses = (classes) => {
  const { isRTL } = useLanguage();
  
  if (!isRTL) return classes;
  
  // Map of LTR to RTL class conversions
  const rtlMap = {
    // Margins
    'ml-': 'mr-',
    'mr-': 'ml-',
    'ml-auto': 'mr-auto',
    'mr-auto': 'ml-auto',
    
    // Paddings
    'pl-': 'pr-',
    'pr-': 'pl-',
    
    // Positioning
    'left-': 'right-',
    'right-': 'left-',
    
    // Text alignment
    'text-left': 'text-right',
    'text-right': 'text-left',
    
    // Flex direction
    'flex-row': 'flex-row-reverse',
    'flex-row-reverse': 'flex-row',
    
    // Space
    'space-x-': 'space-x-reverse space-x-',
    
    // Borders
    'border-l-': 'border-r-',
    'border-r-': 'border-l-',
    'border-l': 'border-r',
    'border-r': 'border-l',
    
    // Rounded corners
    'rounded-l-': 'rounded-r-',
    'rounded-r-': 'rounded-l-',
    'rounded-tl-': 'rounded-tr-',
    'rounded-tr-': 'rounded-tl-',
    'rounded-bl-': 'rounded-br-',
    'rounded-br-': 'rounded-bl-',
  };
  
  let rtlClasses = classes;
  
  Object.entries(rtlMap).forEach(([ltr, rtl]) => {
    const regex = new RegExp(`\\b${ltr.replace('-', '\\-')}`, 'g');
    rtlClasses = rtlClasses.replace(regex, rtl);
  });
  
  return rtlClasses;
};

// Animation direction helper
export const getAnimationDirection = (direction) => {
  const { isRTL } = useLanguage();
  
  const directionMap = {
    'fade-in-left': isRTL ? 'fade-in-right' : 'fade-in-left',
    'fade-in-right': isRTL ? 'fade-in-left' : 'fade-in-right',
    'slide-in-left': isRTL ? 'slide-in-right' : 'slide-in-left',
    'slide-in-right': isRTL ? 'slide-in-left' : 'slide-in-right',
  };
  
  return directionMap[direction] || direction;
};

// Icon rotation helper for RTL
export const getIconRotation = (icon, shouldRotate = true) => {
  const { isRTL } = useLanguage();
  
  if (!shouldRotate || !isRTL) return '';
  
  const rotationMap = {
    'ArrowRight': 'rotate-180',
    'ArrowLeft': 'rotate-180',
    'ChevronRight': 'rotate-180',
    'ChevronLeft': 'rotate-180',
  };
  
  return rotationMap[icon] || '';
};