import React from 'react';
import Link from 'next/link';
import { Building, Phone, Mail, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import { COMPANY_INFO, SERVICES } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl font-bold truncate">{COMPANY_INFO.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm truncate">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Your trusted partner for comprehensive construction and fabrication services in Saudi Arabia. Building excellence with quality and precision.
            </p>
            
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="mt-6 sm:mt-0">
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href="/services" 
                    className="hover:text-white transition-colors block py-1 hover:pl-2 transition-all duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="mt-6 sm:mt-0">
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <li className="flex items-start sm:items-center">
                <Phone className="w-4 h-4 mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="break-all sm:break-normal">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start sm:items-center">
                <Mail className="w-4 h-4 mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="break-all sm:break-normal">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start sm:items-center">
                <MapPin className="w-4 h-4 mr-2 sm:mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="break-words">
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm leading-relaxed px-4 sm:px-0">
            &copy; 2024 {COMPANY_INFO.name}. All rights reserved.
            <span className="block sm:inline sm:before:content-['_|_'] sm:before:mx-2 mt-1 sm:mt-0">
              Professional Construction & Fabrication Services in Saudi Arabia
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;