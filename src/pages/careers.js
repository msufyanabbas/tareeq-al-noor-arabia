import React from 'react';
import Head from 'next/head';
import CareersSection from '@/components/sections/Careers';
import { useTranslation } from '@/utils/i18n';

const CareersPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('nav.careers')} - Tariq Al Nur Al Arabi</title>
        <meta name="description" content={t('careers.subtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/careers" />
      </Head>
      <CareersSection />
    </>
  );
};

export default CareersPage;