// src/components/common/ServiceCard.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <Card className="p-4 sm:p-6 lg:p-8 group h-full flex flex-col">
      {/* Icon container - responsive sizing */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
          {icon}
        </div>
      </div>
      
      {/* Title - responsive text sizing */}
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
        {title}
      </h3>
      
      {/* Description - responsive text sizing and spacing */}
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
        {description}
      </p>
      
      {/* Features list - responsive spacing and text */}
      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Button - responsive sizing */}
      <Button 
        variant="secondary" 
        size="sm" 
        className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 text-xs sm:text-sm mt-auto"
      >
        Learn More
      </Button>
    </Card>
  );
};

export default ServiceCard;