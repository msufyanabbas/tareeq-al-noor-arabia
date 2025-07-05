import React from 'react';
import Link from 'next/link';
import { Building, Phone, Mail, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import { COMPANY_INFO, SERVICES } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
                <p className="text-gray-400 text-sm">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for comprehensive construction and fabrication services in Saudi Arabia. Building excellence with quality and precision.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/services" className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {COMPANY_INFO.phone}
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {COMPANY_INFO.email}
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {COMPANY_INFO.name}. All rights reserved. | Professional Construction & Fabrication Services in Saudi Arabia</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;