// src/pages/products.js
import React from 'react';
import Head from 'next/head';
import ProductsShowcase from '@/components/sections/Products';
import { useTranslation } from '@/utils/i18n';

const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('nav.products')} - Tariq Al Nur Al Arabi</title>
        <meta name="description" content={t('products.subtitle')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/products" />
      </Head>
      <ProductsShowcase />
    </>
  );
};

export default ProductsPage;