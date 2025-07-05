import React from 'react';
import { ArrowRight, Phone, Award, Building, Wrench, Shield, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} className="w-full h-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 w-full items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 shadow-sm">
                <Award className="w-4 h-4" />
                <span>Premium Construction Services in Jeddah</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Building Excellence in{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                    Saudi Arabia
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Your trusted partner for comprehensive construction, fabrication, and building solutions. 
                  From stainless steel kitchens to complete HVAC systems.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20">
                <div className="space-y-8">
                  
                  {/* Service Cards */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 hover:bg-blue-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">Premium Construction</h3>
                        <p className="text-sm text-gray-600">Industrial & Commercial Projects</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100 hover:bg-amber-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Wrench className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">Expert Fabrication</h3>
                        <p className="text-sm text-gray-600">Stainless Steel Specialists</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100 hover:bg-green-100 transition-colors duration-300">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">Quality Guarantee</h3>
                        <p className="text-sm text-gray-600">100% Satisfaction Promise</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Project Success Rate</span>
                      <span className="text-sm font-bold text-blue-600">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                           style={{width: '98%'}}></div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">5.0 (200+ reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl transform rotate-3 -z-10"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs text-gray-500">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;