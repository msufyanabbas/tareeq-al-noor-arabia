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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center sm:text-left">
            Request a Quote
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {/* Name and Email Row - Stack on mobile, side-by-side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Phone and Service Row - Stack on mobile, side-by-side on larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base transition-colors"
                  placeholder="+966 50 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Field - Full width */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-vertical text-sm sm:text-base transition-colors"
                placeholder="Please describe your project requirements..."
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full text-sm sm:text-base py-3 sm:py-4 mt-6 sm:mt-8"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;