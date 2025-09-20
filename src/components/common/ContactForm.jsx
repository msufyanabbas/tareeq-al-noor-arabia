// src/components/common/ContactForm.jsx
import { useState } from 'react';

// Mock Button component
const Button = ({ children, className = '', type = 'button', ...props }) => (
  <button
    type={type}
    className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Mock Card component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg border border-gray-200 ${className}`}>
    {children}
  </div>
);

// Mock services data
const SERVICES = [
  { id: 'web-development', title: 'Web Development' },
  { id: 'mobile-app', title: 'Mobile App Development' },
  { id: 'ui-ux-design', title: 'UI/UX Design' },
  { id: 'digital-marketing', title: 'Digital Marketing' },
  { id: 'seo-services', title: 'SEO Services' },
  { id: 'consulting', title: 'IT Consulting' }
];

const ContactForm = () => {
  const [language, setLanguage] = useState('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const t = translations[language];
  const isRTL = language === 'ar';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert(t.form.success);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Language Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/80 transition-all duration-200 shadow-sm"
          >
            <span className="text-sm font-medium text-gray-700">
              {language === 'en' ? 'العربية' : 'English'}
            </span>
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
              <span className="text-xs text-white font-bold">
                {language === 'en' ? 'ع' : 'EN'}
              </span>
            </div>
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 sm:px-8 sm:py-12 text-white">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-center">
              {t.title}
            </h1>
            <p className="text-blue-100 text-sm sm:text-base text-center max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="space-y-6 sm:space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:bg-gray-100 focus:bg-white text-sm sm:text-base"
                    placeholder={t.form.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:bg-gray-100 focus:bg-white text-sm sm:text-base"
                    placeholder={t.form.emailPlaceholder}
                  />
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:bg-gray-100 focus:bg-white text-sm sm:text-base"
                    placeholder={t.form.phonePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.form.service}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:bg-gray-100 focus:bg-white text-sm sm:text-base appearance-none bg-no-repeat bg-right pr-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: `${isRTL ? 'left 0.75rem' : 'right 0.75rem'} center`,
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option value="">{t.form.servicePlaceholder}</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id}>
                        {t.services[service.id]}
                      </option>
                    ))}
                    <option value="other">{t.services.other}</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-vertical transition-all duration-200 hover:bg-gray-100 focus:bg-white text-sm sm:text-base"
                  placeholder={t.form.messagePlaceholder}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                  >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t.form.submitting}
                    </span>
                  ) : (
                    t.form.submit
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24h Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;