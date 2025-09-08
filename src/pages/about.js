import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import About from '@/components/sections/About';
import { useTranslation } from '@/utils/i18n';

const AboutPage = () => {
  const {t} = useTranslation();

  return (
    <>
      <Head>
        <title>{t('nav.about')}</title>
        <meta name="description" content="Learn about our company's mission, values, and expert team dedicated to delivering excellence in construction." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;