// src/components/sections/ContactSection.jsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Building2, Globe } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
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
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ['+966 54 802 9209', '+966 50 079 9714'],
      action: 'tel:+966548029209'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ['info@tariqalnur.com', 'asad.manager@tariqalnur.com'],
      action: 'mailto:info@tariqalnur.com'
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      details: [
        'Mansour Al Kaatib Street',
        'Al Faisaliyah District',
        'Jeddah 23442, Saudi Arabia'
      ],
      action: null
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      details: [
        'Saturday - Thursday: 7:00 AM - 7:00 PM',
        'Friday: 1:00 PM - 6:00 PM',
        'Emergency Service: 24/7'
      ],
      action: null
    }
  ];

  const services = [
    'Stainless Steel Fabrication',
    'Aluminum & Glass Works', 
    'Iron Shade & Hanger Fabrication',
    'Wood Materials & Carpentry',
    'HVAC Systems',
    'Electrical Works',
    'Gypsum & Ceiling Work',
    'Tiles Work',
    'Epoxy Flooring',
    'Waterproofing & Heat Insulation',
    'Building Materials & Power Tools Supply'
  ];

  return (
    <div className="bg-[#02496a] text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold m-4">
              {t('contact.title')}
            </h1>
            <div className="w-24 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#eaae07] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-[#02496a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#eaae07]">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-200 leading-relaxed">
                        {info.action ? (
                          <a href={info.action} className="hover:text-[#eaae07] transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t('contact.form.title')}
              </h2>
              <div className="w-16 h-1 bg-[#eaae07] mb-8"></div>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                {t('contact.form.description')}
              </p>

              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
                  <h3 className="text-2xl font-bold mb-2 text-green-400">
                    {t('contact.form.successTitle')}
                  </h3>
                  <p className="text-gray-200">
                    {t('contact.form.successMessage')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <div className="relative">
                        <User className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm ${
                            isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
                          }`}
                          placeholder={t('contact.form.namePlaceholder')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <div className="relative">
                        <Mail className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm ${
                            isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
                          }`}
                          placeholder={t('contact.form.emailPlaceholder')}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        {t('contact.form.phone')} *
                      </label>
                      <div className="relative">
                        <Phone className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className={`w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm ${
                            isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
                          }`}
                          placeholder={t('contact.form.phonePlaceholder')}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <div className="relative">
                        <Building2 className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm ${
                            isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
                          }`}
                          placeholder={t('contact.form.companyPlaceholder')}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      {t('contact.form.service')} *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: isRTL ? 'left 0.75rem center' : 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="">{t('contact.form.servicePlaceholder')}</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                      <option value="other">{t('contact.form.serviceOther')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute top-3 w-5 h-5 text-gray-400 ${isRTL ? 'right-3' : 'left-3'}`} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`w-full py-3 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none resize-vertical transition-all duration-200 backdrop-blur-sm ${
                          isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'
                        }`}
                        placeholder={t('contact.form.messagePlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#eaae07] text-[#02496a] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#02496a] border-t-transparent rounded-full animate-spin"></div>
                        {t('contact.form.submitting')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Company Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-[#eaae07]">
                  {t('contact.companyInfo.title')}
                </h3>
                <div className="space-y-4 text-gray-200">
                  <p className="font-semibold text-white">
                    Tariq Al Nur Al Arabi (TNAC)
                  </p>
                  <p className="leading-relaxed">
                    {t('contact.companyInfo.description')}
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <h4 className="font-semibold text-white mb-2">
                      {t('contact.companyInfo.specialties')}
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Stainless Steel Kitchen Fabrication</li>
                      <li>• Aluminum & Glass Solutions</li>
                      <li>• Iron & Steel Fabrication</li>
                      <li>• HVAC & Electrical Systems</li>
                      <li>• Complete Construction Services</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-[#eaae07] mb-2">500+</div>
                  <div className="text-sm text-gray-200">Projects Completed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-[#eaae07] mb-2">15+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4 text-[#eaae07]">
                  {t('contact.businessHours.title')}
                </h3>
                <div className="space-y-2 text-gray-200">
                  <div className="flex justify-between">
                    <span>Saturday - Thursday:</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span>1:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-white/20">
                    <span className="text-[#eaae07] font-semibold">Emergency:</span>
                    <span className="text-[#eaae07] font-semibold">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section with Google Map */}
      <section className="py-16 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('contact.location.title')}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('contact.location.description')}
            </p>
          </div>

          {/* Google Map */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.3298885438676!2d39.16074437524849!3d21.549582680238298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01c84c8f2e7%3A0x8b8b8b8b8b8b8b8b!2sMansour%20Al%20Kaatib%20St%2C%20Al%20Faisaliyah%2C%20Jeddah%2023442%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1698765432123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tariq Al Nur Al Arabi Location - Jeddah, Saudi Arabia"
                className="w-full h-full"
              />
            </div>
            
            {/* Map Footer with Actions */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-white mb-1">Our Location</h3>
                <p className="text-gray-200 text-sm">
                  Mansour Al Kaatib Street, Al Faisaliyah District<br />
                  Jeddah 23442, Saudi Arabia
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <a 
                  href="https://maps.google.com/?q=Mansour+Al+Kaatib+Street,+Al+Faisaliyah+District,+Jeddah+23442,+Saudi+Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#eaae07] text-[#02496a] px-4 py-2 rounded-lg font-bold hover:bg-[#d49b06] transition-colors text-sm flex items-center gap-2 justify-center"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
                <a 
                  href="https://maps.google.com/maps?q=Mansour+Al+Kaatib+Street,+Al+Faisaliyah+District,+Jeddah+23442,+Saudi+Arabia&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 text-white px-4 py-2 rounded-lg font-bold hover:bg-white/30 transition-colors text-sm flex items-center gap-2 border border-white/30 justify-center"
                >
                  <Globe className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;