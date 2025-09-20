import React from 'react';
import Head from 'next/head';
import ContactSection from '@/components/sections/Contact';
import { useTranslation } from '@/utils/i18n';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('nav.contact')} - Tariq Al Nur Al Arabi</title>
        <meta name="description" content={t('contact.subtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/contact" />
      </Head>
      <ContactSection />
    </>
  );
};

export default ContactPage;