import React, { useState, useEffect } from 'react';
import TopCard from '../cards/TopCard';
import ServiceHistory from '../cards/ServiceHistory';

const About = () => {
  return (
      <section className="relative bg-[#035678]  py-12 sm:py-16 m-b-4 lg:py-20">
      <TopCard text={"Contact Us"} />
      <ServiceHistory />
      </section>
  );
};

export default About;