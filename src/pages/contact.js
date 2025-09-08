import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Contact from '@/components/sections/Contact';

const ContactPage = () => {

  return (
    <>
      <Head>
        <title>Contact Us - Building the Future</title>
        <meta name="description" content="Get in touch with our team to discuss your project requirements and discover how we can help you build the future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Contact/>
    </>
  );
};

export default ContactPage;