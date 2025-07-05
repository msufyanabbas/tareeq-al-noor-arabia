import React from 'react';
import { CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <Card className="p-8 group">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button variant="secondary" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
        Learn More
      </Button>
    </Card>
  );
};

export default ServiceCard;