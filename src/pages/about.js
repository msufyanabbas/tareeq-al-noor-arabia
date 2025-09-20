// src/pages/about.js
import React from 'react';
import Head from 'next/head';
import EnhancedAbout from '@/components/sections/About';
import { useTranslation } from '@/utils/i18n';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('nav.about')} - Tariq Al Nur Al Arabi</title>
        <meta name="description" content={t('about.subtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/about" />
      </Head>
      <EnhancedAbout />
    </>
  );
};

export default AboutPage;