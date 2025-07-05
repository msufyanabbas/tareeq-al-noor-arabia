import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { COMPANY_INFO } from '../../utils/constants';

const About = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              About {COMPANY_INFO.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              With over 15 years of experience in the construction industry, we've built 
              our reputation on delivering exceptional quality, reliability, and craftsmanship. 
              Our team of skilled professionals is dedicated to bringing your vision to life.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              From residential renovations to large-scale commercial projects, we handle 
              every aspect of construction with precision and care. Our commitment to 
              excellence and customer satisfaction has made us a trusted name in the industry.
            </p>
            
            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center p-4 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 sm:p-0">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">15+</div>
                <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Learn More About Us
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="bg-blue-600 rounded-lg p-6 sm:p-8 text-white shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose Us?</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>Licensed and Insured</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>Quality Craftsmanship</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>On-Time Delivery</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>Competitive Pricing</span>
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  <span>24/7 Support</span>
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