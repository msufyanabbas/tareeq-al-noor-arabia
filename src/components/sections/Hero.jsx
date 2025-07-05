import React from 'react';
import { ArrowRight, Phone, Award, Building, Wrench, Shield } from 'lucide-react';

// Mock components for demonstration
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", size = "md", className = "" }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500 shadow-md hover:shadow-lg"
  };
  
  const sizes = {
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

// Mock stats data
const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" }
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10 pt-16 pb-8 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-pulse">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Premium Construction Services in Jeddah
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Building Excellence in
              <span className="block sm:inline bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent"> Saudi Arabia</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Your trusted partner for comprehensive construction, fabrication, and building solutions. From stainless steel kitchens to complete HVAC systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Button size="lg" className="group w-full sm:w-auto">
                Get Free Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              {STATS.slice(0, 3).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative z-10 bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Premium Construction</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Industrial & Commercial</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Expert Fabrication</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Stainless Steel Specialists</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Quality Guarantee</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">100% Satisfaction</p>
                  </div>
                </div>
              </div>
              
              {/* Progress bars for visual interest */}
              <div className="mt-6 sm:mt-8 space-y-3">
                <div className="flex justify-between text-xs sm:text-sm text-gray-600">
                  <span>Project Success Rate</span>
                  <span>98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full animate-pulse" style={{width: '98%'}}></div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 opacity-10 -z-10"></div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-blue-200 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-8 sm:h-8 bg-amber-200 rounded-full opacity-60 animate-bounce delay-1000"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce mx-auto"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;