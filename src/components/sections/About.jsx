import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { COMPANY_INFO } from '../../utils/constants';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About {COMPANY_INFO.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the construction industry, we've built 
              our reputation on delivering exceptional quality, reliability, and craftsmanship. 
              Our team of skilled professionals is dedicated to bringing your vision to life.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From residential renovations to large-scale commercial projects, we handle 
              every aspect of construction with precision and care. Our commitment to 
              excellence and customer satisfaction has made us a trusted name in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </div>
          <div className="relative">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Licensed and Insured
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Quality Craftsmanship
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  On-Time Delivery
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Competitive Pricing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  24/7 Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;