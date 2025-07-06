// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsappButton';
import { useLanguage } from '../../contexts/LanguageContext';

const Layout = ({ children }) => {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-transparent ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      <main className="transition-all duration-300">{children}</main>
      <Footer />
      <WhatsAppButton 
        phoneNumber="+966548029209" 
        message="Hello! I'm interested in your services." 
      />
    </div>
  );
};

export default Layout;