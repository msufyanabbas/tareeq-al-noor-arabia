import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Send, CheckCircle, Star, Users, Shield, Award, TrendingUp } from 'lucide-react';

// Mock company info for demonstration
const COMPANY_INFO = {
  phone: '+966 54 802 9209',
  email: 'info@company.com',
  address: {
    street: '123 Construction Street',
    city: 'Jeddah',
    state: 'Saudi Arabia',
    zip: '21589'
  }
};

// Container component matching Hero style
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Contact Form Component with Hero styling
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-400/50 rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
        <div className="relative">
          <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400 mx-auto mb-6 animate-pulse" />
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">Message Sent Successfully!</h3>
          <p className="text-gray-300 text-lg sm:text-xl">We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-300">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 shadow-lg hover:bg-white/20 hover:border-white/30"
            placeholder="Your full name"
          />
        </div>
        
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-300">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 shadow-lg hover:bg-white/20 hover:border-white/30"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400 shadow-lg hover:bg-white/20 hover:border-white/30"
            placeholder="+966 XX XXX XXXX"
          />
        </div>
        
        <div className="space-y-3">
          <label className="block text-sm font-bold text-gray-300">
            Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white shadow-lg hover:bg-white/20 hover:border-white/30"
          >
            <option value="" className="bg-gray-900 text-white">Select a subject</option>
            <option value="construction" className="bg-gray-900 text-white">Construction Services</option>
            <option value="fabrication" className="bg-gray-900 text-white">Steel Fabrication</option>
            <option value="hvac" className="bg-gray-900 text-white">HVAC Installation</option>
            <option value="maintenance" className="bg-gray-900 text-white">Maintenance</option>
            <option value="other" className="bg-gray-900 text-white">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-bold text-gray-300">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
          className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-white placeholder-gray-400 shadow-lg hover:bg-white/20 hover:border-white/30"
          placeholder="Tell us about your project requirements, timeline, and any specific details..."
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="group relative overflow-hidden w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 disabled:transform-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center justify-center">
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Send Message
            </>
          )}
        </div>
      </button>
    </div>
  );
};

// Main Contact Component with Hero styling
const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effect (from Hero)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Dynamic Background (from Hero) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute -bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
            animationDelay: '4s'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-white/40 to-blue-300/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid Pattern (from Hero) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Rating Badge (from Hero) */}
      {/* <div className="fixed top-4 right-4 md:top-6 md:right-6 bg-white/10 backdrop-blur-md rounded-2xl p-3 md:p-4 border border-white/20 z-50 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current drop-shadow-sm" />
            ))}
          </div>
          <span className="text-white text-sm md:text-base font-bold">5.0</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <Users className="w-3 h-3 text-gray-300" />
          <span className="text-gray-300 text-xs md:text-sm">500+ Reviews</span>
        </div>
      </div> */}

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        {/* Header Section with Hero styling */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6">
            <Mail className="w-4 h-4" />
            <span>Contact Us Today</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading with Hero typography */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Get In{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                Touch
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-4">
            Building Connections That Last
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Ready to start your construction project? Contact us today for a free 
            consultation and quote. We're here to help bring your vision to life.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 h-full border border-white/10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-8 sm:mb-10">
                  Contact Information
                </h3>
                
                <div className="space-y-8 sm:space-y-10">
                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:from-blue-500/30 group-hover/item:to-purple-500/30 transition-all duration-300 shadow-lg border border-blue-400/50">
                      <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-2 text-lg sm:text-xl">Address</h4>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        {COMPANY_INFO.address.street}<br />
                        {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:from-emerald-500/30 group-hover/item:to-cyan-500/30 transition-all duration-300 shadow-lg border border-emerald-400/50">
                      <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-2 text-lg sm:text-xl">Phone</h4>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors text-base sm:text-lg font-medium">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:from-amber-500/30 group-hover/item:to-orange-500/30 transition-all duration-300 shadow-lg border border-amber-400/50">
                      <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-2 text-lg sm:text-xl">Email</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-blue-400 transition-colors text-base sm:text-lg font-medium break-all">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 group/item">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover/item:from-purple-500/30 group-hover/item:to-pink-500/30 transition-all duration-300 shadow-lg border border-purple-400/50">
                      <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white mb-2 text-lg sm:text-xl">Business Hours</h4>
                      <div className="text-gray-300 text-base sm:text-lg space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Services */}
                <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-400/50 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-7 h-7 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-3 text-lg sm:text-xl">Emergency Services</h4>
                      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        For construction emergencies, call our 24/7 emergency hotline: 
                        <br />
                        <a href="tel:+966555123HELP" className="font-bold text-red-400 hover:text-red-300 transition-colors text-lg">
                          +966 54 802 9209 HELP
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats matching Hero */}
                <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center group/stat cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform">
                      24h
                    </div>
                    <div className="text-sm sm:text-base text-gray-400 font-medium flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Response Time
                    </div>
                  </div>
                  <div className="text-center group/stat cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform">
                      100%
                    </div>
                    <div className="text-sm sm:text-base text-gray-400 font-medium flex items-center justify-center gap-1">
                      <Shield className="w-4 h-4" />
                      Satisfaction Rate
                    </div>
                  </div>
                  <div className="text-center group/stat cursor-pointer">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform">
                      500+
                    </div>
                    <div className="text-sm sm:text-base text-gray-400 font-medium flex items-center justify-center gap-1">
                      <Award className="w-4 h-4" />
                      Happy Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
              
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-white/10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">Send Us a Message</h3>
                <p className="text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA with Hero styling */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
            
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-10 max-w-5xl mx-auto border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Prefer to speak directly?
              </h3>
              <p className="text-gray-300 mb-8 text-base sm:text-lg">
                Our construction experts are standing by to discuss your project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="group/cta relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 text-base sm:text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3 group-hover/cta:scale-110 transition-transform" />
                    Call Now
                  </div>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="group/cta inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 hover:scale-105 text-base sm:text-lg"
                >
                  <Mail className="w-5 h-5 mr-3 group-hover/cta:scale-110 transition-transform" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;