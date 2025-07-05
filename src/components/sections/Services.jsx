import React from 'react';
import { Building, Wrench, Shield, Lightbulb, Users, Award } from 'lucide-react';
import Container from '../ui/Container';
import ServiceCard from '../common/ServiceCard';
import { SERVICES } from '../../utils/constants';

const Services = () => {
  const serviceIcons = [
    <Building className="w-8 h-8" />,
    <Wrench className="w-8 h-8" />,
    <Shield className="w-8 h-8" />,
    <Lightbulb className="w-8 h-8" />,
    <Users className="w-8 h-8" />,
    <Award className="w-8 h-8" />
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and fabrication services delivered with excellence and precision across Saudi Arabia
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={serviceIcons[index]}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;