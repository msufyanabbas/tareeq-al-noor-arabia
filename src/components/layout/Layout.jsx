// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../../contexts/LanguageContext';

const Layout = ({ children }) => {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header />
      <main className="transition-all duration-300">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;