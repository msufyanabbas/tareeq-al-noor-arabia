// src/pages/material-supply.js
import React from 'react';
import Head from 'next/head';
import MaterialSupply from '@/components/sections/MaterialSupply';
import { useTranslation } from '@/utils/i18n';

const MaterialSupplyPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Material Supply - Tariq Al Nur Al Arabi</title>
        <meta 
          name="description" 
          content="Comprehensive material supply solutions for construction, industrial, and commercial projects. From pipes & valves to electrical systems and fabrication materials." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/material-supply" />
      </Head>
      <MaterialSupply />
    </>
  );
};

export default MaterialSupplyPage;