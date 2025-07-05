import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, AlertTriangle, Send, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';

// Container component
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Contact Form Component
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
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 sm:p-10 text-center">
        <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3">Message Sent Successfully!</h3>
        <p className="text-green-700 text-base sm:text-lg">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 shadow-sm hover:border-gray-300"
            placeholder="Your full name"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 shadow-sm hover:border-gray-300"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 shadow-sm hover:border-gray-300"
            placeholder="+966 XX XXX XXXX"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Subject *
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 shadow-sm hover:border-gray-300"
          >
            <option value="">Select a subject</option>
            <option value="construction">Construction Services</option>
            <option value="fabrication">Steel Fabrication</option>
            <option value="hvac">HVAC Installation</option>
            <option value="maintenance">Maintenance</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
          className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-gray-900 placeholder-gray-400 shadow-sm hover:border-gray-300"
          placeholder="Tell us about your project requirements, timeline, and any specific details..."
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-3" />
            Send Message
          </>
        )}
      </button>
    </div>
  );
};

// Main Contact Component
const Contact = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
      </div>

      <Container className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-100">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us Today
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your construction project? Contact us today for a free 
            consultation and quote. We're here to help bring your vision to life.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 h-full border border-white/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
                Contact Information
              </h3>
              
              <div className="space-y-8 sm:space-y-10">
                <div className="flex items-start space-x-5 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-200 shadow-sm">
                    <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl">Address</h4>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      {COMPANY_INFO.address.street}<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-200 shadow-sm">
                    <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl">Phone</h4>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors text-base sm:text-lg font-medium">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-200 shadow-sm">
                    <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl">Email</h4>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-blue-600 transition-colors text-base sm:text-lg font-medium break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-amber-200 group-hover:to-amber-300 transition-all duration-200 shadow-sm">
                    <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg sm:text-xl">Business Hours</h4>
                    <div className="text-gray-600 text-base sm:text-lg space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Services */}
              <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-7 h-7 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg sm:text-xl">Emergency Services</h4>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      For construction emergencies, call our 24/7 emergency hotline: 
                      <br />
                      <a href="tel:+966555123HELP" className="font-bold text-red-600 hover:text-red-700 transition-colors text-lg">
                        +966 54 802 9209 HELP
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">24h</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-white/20">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h3>
              <p className="text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 max-w-5xl mx-auto border border-white/20">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Prefer to speak directly?
            </h3>
            <p className="text-gray-600 mb-8 text-base sm:text-lg">
              Our construction experts are standing by to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base sm:text-lg"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;