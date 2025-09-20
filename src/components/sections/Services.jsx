// src/components/sections/ComprehensiveServices.jsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { 
  ChefHat, 
  Building2, 
  Wrench, 
  Wind, 
  Zap, 
  Layers, 
  Palette,
  Droplets,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Hammer,
  Paintbrush
} from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const ComprehensiveServices = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const router = useRouter();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'stainless-steel',
      icon: ChefHat,
      title: t('services.stainlessSteel.title'),
      description: t('services.stainlessSteel.description'),
      features: [
        t('services.stainlessSteel.feature1'),
        t('services.stainlessSteel.feature2'),
        t('services.stainlessSteel.feature3'),
        t('services.stainlessSteel.feature4')
      ],
      image: '/services/hood/hood1.jpg'
    },
    {
      id: 'aluminum-glass',
      icon: Building2,
      title: t('services.aluminumGlass.title'),
      description: t('services.aluminumGlass.description'),
      features: [
        t('services.aluminumGlass.feature1'),
        t('services.aluminumGlass.feature2'),
        t('services.aluminumGlass.feature3'),
        t('services.aluminumGlass.feature4')
      ],
      image: '/services/doors/door1.jpg'
    },
    {
      id: 'iron-fabrication',
      icon: Hammer,
      title: t('services.ironFabrication.title'),
      description: t('services.ironFabrication.description'),
      features: [
        t('services.ironFabrication.feature1'),
        t('services.ironFabrication.feature2'),
        t('services.ironFabrication.feature3'),
        t('services.ironFabrication.feature4')
      ],
      image: '/services/stands/stand1.jpg'
    },
    {
      id: 'wood-carpentry',
      icon: Wrench,
      title: t('services.woodCarpentry.title'),
      description: t('services.woodCarpentry.description'),
      features: [
        t('services.woodCarpentry.feature1'),
        t('services.woodCarpentry.feature2'),
        t('services.woodCarpentry.feature3'),
        t('services.woodCarpentry.feature4')
      ],
      image: '/services/tables/table1.jpg'
    },
    {
      id: 'hvac',
      icon: Wind,
      title: t('services.hvac.title'),
      description: t('services.hvac.description'),
      features: [
        t('services.hvac.feature1'),
        t('services.hvac.feature2'),
        t('services.hvac.feature3'),
        t('services.hvac.feature4')
      ],
      image: '/services/duct/duct1.jpg'
    },
    {
      id: 'electrical',
      icon: Zap,
      title: t('services.electrical.title'),
      description: t('services.electrical.description'),
      features: [
        t('services.electrical.feature1'),
        t('services.electrical.feature2'),
        t('services.electrical.feature3'),
        t('services.electrical.feature4')
      ],
      image: '/services/duct/duct2.jpg'
    },
    {
      id: 'gypsum-ceiling',
      icon: Layers,
      title: t('services.gypsumCeiling.title'),
      description: t('services.gypsumCeiling.description'),
      features: [
        t('services.gypsumCeiling.feature1'),
        t('services.gypsumCeiling.feature2'),
        t('services.gypsumCeiling.feature3'),
        t('services.gypsumCeiling.feature4')
      ],
      image: '/services/ring/ring1.jpg'
    },
    {
      id: 'tiles-flooring',
      icon: Palette,
      title: t('services.tilesFlooring.title'),
      description: t('services.tilesFlooring.description'),
      features: [
        t('services.tilesFlooring.feature1'),
        t('services.tilesFlooring.feature2'),
        t('services.tilesFlooring.feature3'),
        t('services.tilesFlooring.feature4')
      ],
      image: '/services/drains/drain1.jpg'
    },
    {
      id: 'waterproofing',
      icon: Droplets,
      title: t('services.waterproofing.title'),
      description: t('services.waterproofing.description'),
      features: [
        t('services.waterproofing.feature1'),
        t('services.waterproofing.feature2'),
        t('services.waterproofing.feature3'),
        t('services.waterproofing.feature4')
      ],
      image: '/services/sink/sink1.jpg'
    },
    {
      id: 'materials-supply',
      icon: ShoppingCart,
      title: t('services.materialsSupply.title'),
      description: t('services.materialsSupply.description'),
      features: [
        t('services.materialsSupply.feature1'),
        t('services.materialsSupply.feature2'),
        t('services.materialsSupply.feature3'),
        t('services.materialsSupply.feature4')
      ],
      image: '/services/baskets/basket1.jpg'
    }
  ];

  return (
    <div className="bg-white text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold m-6">
              {t('services.title')}
            </h1>
            <div className="w-24 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Services Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">10</div>
              <div className="text-gray-200 font-medium">{t('services.stats.totalServices')}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">500+</div>
              <div className="text-gray-200 font-medium">{t('services.stats.projectsCompleted')}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">15+</div>
              <div className="text-gray-200 font-medium">{t('services.stats.yearsExperience')}</div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">24/7</div>
              <div className="text-gray-200 font-medium">{t('services.stats.support')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                  
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/02496a/ffffff?text=Service+Image';
                      }}
                    />
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 bg-[#02496a] rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#02496a] group-hover:text-[#eaae07] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className={`flex items-start text-sm text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-5 h-5 bg-[#eaae07] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button 
                      onClick={() => router.push(`/services/${service.id}`)}
                      className={`w-full bg-[#02496a] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#035678] transition-all duration-300 flex items-center justify-center group-hover:shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <span>{t('common.learnMore')}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#02496a]">
              {t('services.process.title')}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: t('services.process.step1.title'), description: t('services.process.step1.description') },
              { step: '02', title: t('services.process.step2.title'), description: t('services.process.step2.description') },
              { step: '03', title: t('services.process.step3.title'), description: t('services.process.step3.description') },
              { step: '04', title: t('services.process.step4.title'), description: t('services.process.step4.description') }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {/* Connector Line */}
                {index < 3 && (
                  <div className={`hidden lg:block absolute top-8 w-full h-0.5 bg-[#eaae07] opacity-30 z-0 ${isRTL ? 'right-full' : 'left-full'}`}></div>
                )}
                
                <div className="relative z-10 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#02496a] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#02496a]">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#eaae07] rounded-2xl flex items-center justify-center">
              <Star className="w-10 h-10 text-[#02496a]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {t('services.cta.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button className="bg-[#eaae07] text-[#02496a] px-8 py-4 rounded-xl font-bold hover:bg-[#d49b06] transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t('services.cta.primaryButton')}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#02496a] transition-all duration-300 text-lg transform hover:-translate-y-1">
                {t('services.cta.secondaryButton')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServices;