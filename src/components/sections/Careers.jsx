// src/components/sections/CareersSection.jsx
import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign, 
  GraduationCap,
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  FileText,
  Upload
} from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const CareersSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const benefits = [
    {
      icon: DollarSign,
      title: t('careers.benefits.salary.title'),
      description: t('careers.benefits.salary.description')
    },
    {
      icon: TrendingUp,
      title: t('careers.benefits.growth.title'),
      description: t('careers.benefits.growth.description')
    },
    {
      icon: GraduationCap,
      title: t('careers.benefits.training.title'),
      description: t('careers.benefits.training.description')
    },
    {
      icon: Users,
      title: t('careers.benefits.team.title'),
      description: t('careers.benefits.team.description')
    }
  ];

  const jobOpenings = [
    {
      id: 'stainless-steel-fabricator',
      title: 'Stainless Steel Fabricator',
      department: 'Production',
      location: 'Jeddah, Saudi Arabia',
      type: 'Full-time',
      experience: '3-5 years',
      salary: 'Competitive',
      description: 'We are looking for a skilled stainless steel fabricator to join our production team. The ideal candidate will have experience in commercial kitchen fabrication and custom metalwork.',
      requirements: [
        'Minimum 3 years experience in stainless steel fabrication',
        'Experience with commercial kitchen equipment',
        'Ability to read technical drawings',
        'Knowledge of welding techniques (TIG, MIG)',
        'Attention to detail and quality standards'
      ],
      responsibilities: [
        'Fabricate stainless steel products according to specifications',
        'Operate fabrication tools and machinery safely',
        'Ensure quality control standards are met',
        'Collaborate with design and installation teams',
        'Maintain clean and organized work environment'
      ]
    },
    {
      id: 'aluminum-specialist',
      title: 'Aluminum & Glass Specialist',
      department: 'Installation',
      location: 'Jeddah, Saudi Arabia',
      type: 'Full-time',
      experience: '2-4 years',
      salary: 'Competitive',
      description: 'Join our aluminum and glass installation team. We need an experienced professional who can handle complex aluminum structures and glass installations.',
      requirements: [
        'Experience in aluminum window and door installation',
        'Knowledge of glass handling and installation',
        'Understanding of building codes and regulations',
        'Physical ability to work at heights',
        'Valid Saudi driving license'
      ],
      responsibilities: [
        'Install aluminum windows, doors, and structures',
        'Handle glass installation and glazing',
        'Ensure installations meet safety standards',
        'Coordinate with project managers and clients',
        'Maintain installation tools and equipment'
      ]
    },
    {
      id: 'project-manager',
      title: 'Construction Project Manager',
      department: 'Management',
      location: 'Jeddah, Saudi Arabia',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'Competitive + Benefits',
      description: 'We are seeking an experienced project manager to oversee our construction projects from initiation to completion.',
      requirements: [
        'Bachelor\'s degree in Engineering or Construction Management',
        '5+ years of project management experience',
        'PMP certification preferred',
        'Strong communication and leadership skills',
        'Fluency in Arabic and English'
      ],
      responsibilities: [
        'Plan and oversee construction projects',
        'Coordinate with clients, suppliers, and team members',
        'Monitor project timelines and budgets',
        'Ensure quality and safety standards',
        'Prepare project reports and documentation'
      ]
    },
    {
      id: 'hvac-technician',
      title: 'HVAC Technician',
      department: 'Technical Services',
      location: 'Jeddah, Saudi Arabia',
      type: 'Full-time',
      experience: '2-3 years',
      salary: 'Competitive',
      description: 'Looking for a skilled HVAC technician to install, maintain, and repair heating, ventilation, and air conditioning systems.',
      requirements: [
        'HVAC certification or relevant training',
        'Experience with commercial HVAC systems',
        'Knowledge of refrigeration systems',
        'Troubleshooting and diagnostic skills',
        'Valid technical certification'
      ],
      responsibilities: [
        'Install and maintain HVAC systems',
        'Perform system diagnostics and repairs',
        'Conduct preventive maintenance',
        'Ensure compliance with safety regulations',
        'Provide technical support to clients'
      ]
    }
  ];

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    // Handle application submission
    console.log('Application submitted:', applicationData);
    setShowApplicationForm(false);
    // Reset form or show success message
  };

  return (
    <div className="bg-[#02496a] text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('careers.title')}
            </h1>
            <div className="w-24 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {t('careers.subtitle')}
            </p>
          </div>

          {/* Career Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">50+</div>
              <div className="text-gray-200">{t('careers.stats.employees')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">15+</div>
              <div className="text-gray-200">{t('careers.stats.departments')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">95%</div>
              <div className="text-gray-200">{t('careers.stats.retention')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">4</div>
              <div className="text-gray-200">{t('careers.stats.openPositions')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('careers.whyWorkWithUs.title')}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('careers.whyWorkWithUs.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#eaae07] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-[#02496a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#eaae07]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('careers.openPositions.title')}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('careers.openPositions.subtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-[#eaae07] mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-200 mb-4">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <p className="text-gray-200 leading-relaxed">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
                      {/* <button 
                        onClick={() => setSelectedPosition(job)}
                        className="bg-[#eaae07] text-[#02496a] px-6 py-3 rounded-lg font-bold hover:bg-[#d49b06] transition-colors duration-300"
                      >
                        View Details
                      </button> */}
                      <button 
                        // onClick={() => {
                        //   setApplicationData({...applicationData, position: job.title});
                        //   setShowApplicationForm(true);
                        // }}
                        className="border-2 border-[#eaae07] text-[#eaae07] px-6 py-3 rounded-lg font-bold hover:bg-[#eaae07] hover:text-[#02496a] transition-colors duration-300"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-[#035678] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#eaae07] mb-2">{selectedPosition.title}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                    <span>{selectedPosition.department}</span>
                    <span>•</span>
                    <span>{selectedPosition.location}</span>
                    <span>•</span>
                    <span>{selectedPosition.type}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPosition(null)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Job Description</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">{selectedPosition.description}</p>

                  <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedPosition.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-200">
                        <CheckCircle className="w-4 h-4 text-[#eaae07] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Responsibilities</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedPosition.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start text-gray-200">
                        <CheckCircle className="w-4 h-4 text-[#eaae07] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <h4 className="font-bold text-white mb-2">Position Details</h4>
                    <div className="space-y-2 text-sm text-gray-200">
                      <div className="flex justify-between">
                        <span>Experience Required:</span>
                        <span className="text-[#eaae07]">{selectedPosition.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Salary Range:</span>
                        <span className="text-[#eaae07]">{selectedPosition.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Employment Type:</span>
                        <span className="text-[#eaae07]">{selectedPosition.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-white/20">
                <button 
                  onClick={() => {
                    setApplicationData({...applicationData, position: selectedPosition.title});
                    setShowApplicationForm(true);
                    setSelectedPosition(null);
                  }}
                  className="flex-1 bg-[#eaae07] text-[#02496a] py-3 px-6 rounded-lg font-bold hover:bg-[#d49b06] transition-colors duration-300"
                >
                  Apply for This Position
                </button>
                <button 
                  onClick={() => setSelectedPosition(null)}
                  className="border-2 border-white/30 text-white py-3 px-6 rounded-lg font-bold hover:bg-white/10 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-[#035678] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#eaae07]">Apply for Position</h2>
                <button 
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-white p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
                        placeholder="Enter your full name"
                        value={applicationData.name}
                        onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
                        placeholder="Enter your email"
                        value={applicationData.email}
                        onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
                        placeholder="Enter your phone number"
                        value={applicationData.phone}
                        onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Position Applied For
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
                      value={applicationData.position}
                      onChange={(e) => setApplicationData({...applicationData, position: e.target.value})}
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none transition-all duration-200 backdrop-blur-sm"
                    value={applicationData.experience}
                    onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#eaae07] focus:border-transparent outline-none resize-vertical transition-all duration-200 backdrop-blur-sm"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    value={applicationData.message}
                    onChange={(e) => setApplicationData({...applicationData, message: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-white/20 rounded-xl p-6 text-center hover:border-[#eaae07] transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-300 mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-400">PDF, DOC, DOCX (Max. 5MB)</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setApplicationData({...applicationData, resume: e.target.files[0]})}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#eaae07] text-[#02496a] font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="border-2 border-white/30 text-white py-3 px-6 rounded-xl font-bold hover:bg-white/10 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Company Culture */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t('careers.culture.title')}
              </h2>
              <div className="w-16 h-1 bg-[#eaae07] mb-8"></div>
              <div className="space-y-6 text-gray-200 leading-relaxed">
                <p className="text-lg">
                  {t('careers.culture.paragraph1')}
                </p>
                <p className="text-lg">
                  {t('careers.culture.paragraph2')}
                </p>
                {/* <div className="pt-6">
                  <button className="bg-[#eaae07] text-[#02496a] px-8 py-4 rounded-lg font-bold hover:bg-[#d49b06] transition-colors duration-300">
                    {t('careers.culture.learnMore')}
                  </button>
                </div> */}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#eaae07] rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working together"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersSection;