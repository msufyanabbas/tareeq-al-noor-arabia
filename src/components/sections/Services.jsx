import React from 'react';
import { Building, Wrench, Shield, Lightbulb, Users, Award } from 'lucide-react';
import Container from '../ui/Container';
import ServiceCard from '../common/ServiceCard';
import { SERVICES } from '../../utils/constants';

const Services = () => {
  const serviceIcons = [
    <Building className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    <Wrench className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
    <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
  ];

  return (
    <section 
      id="services" 
      className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <Container size="xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 
              id="services-heading"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Our Professional Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction and fabrication services delivered with excellence and precision across Saudi Arabia
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ServiceCard
                icon={serviceIcons[index]}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="max-w-2xl mx-auto">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
              Ready to discuss your project? Our team of experts is here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                Get Free Quote
              </button>
              <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-all duration-200">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Enhanced ServiceCard component for better responsiveness
const EnhancedServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  index,
  className = '' 
}) => {
  return (
    <div 
      className={`
        relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl 
        transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
        p-6 sm:p-7 lg:p-8 h-full
        border border-gray-100 hover:border-gray-200
        group cursor-pointer
        ${className}
      `}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Handle card interaction
        }
      }}
    >
      {/* Icon Section */}
      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors duration-300">
        <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
          {description}
        </p>

        {/* Features List */}
        {features && features.length > 0 && (
          <div className="pt-2 sm:pt-4">
            <ul className="space-y-1 sm:space-y-2">
              {features.slice(0, 3).map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className="flex items-start text-xs sm:text-sm text-gray-500"
                >
                  <span className="inline-block w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-xs sm:text-sm text-blue-600 font-medium pt-1">
                  +{features.length - 3} more services
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Hover Effect Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:to-blue-100/10 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Services;