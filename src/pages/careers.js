import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Careers from '@/components/sections/Careers';

const CareersPage = () => {

  return (
    <>
      <Head>
        <title>Careers - Building the Future</title>
        <meta name="description" content="Explore exciting career opportunities with our company and join our mission to build the future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Careers />
    </>
  );
};

export default CareersPage;