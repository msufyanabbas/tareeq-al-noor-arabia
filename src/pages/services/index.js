import React from 'react';
import Head from 'next/head';
import ComprehensiveServices from '@/components/sections/Services';
import { useTranslation } from '@/utils/i18n';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('nav.services')} - Tariq Al Nur Al Arabi</title>
        <meta name="description" content={t('services.subtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/services" />
      </Head>
      <ComprehensiveServices />
    </>
  );
};

export default ServicesPage;