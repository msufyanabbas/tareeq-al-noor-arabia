// src/components/sections/ClientsPartnersSection.jsx
import React, { useState } from 'react';
import { 
  Star, 
  Award, 
  Users, 
  Building2, 
  CheckCircle, 
  TrendingUp,
  Globe,
  ShieldCheck,
  Handshake,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const ClientsPartnersSection = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  // Client companies data
  const clients = [
    {
      id: 'albaik',
      name: 'Al Baik',
      logo: '/clients/albaik.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.kitchenHvac'),
      year: '2020-2024',
      description: t('clients.descriptions.albaik'),
      website: 'https://albaik.com'
    },
    {
      id: 'kfc',
      name: 'KFC',
      logo: '/clients/kfc.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.kitchenHvac'),
      year: '2019-2024',
      description: t('clients.descriptions.kfc'),
      website: 'https://kfcarabia.com'
    },
    {
      id: 'famous-burger',
      name: 'Famous Burger',
      logo: '/clients/famous-burger.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.stainlessSteel'),
      year: '2021-2024',
      description: t('clients.descriptions.famousBurger'),
      website: '#'
    },
    {
      id: '2-bites',
      name: '2 Bites',
      logo: '/clients/2-bites.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.kitchenHvac'),
      year: '2022-2024',
      description: t('clients.descriptions.twoBites'),
      website: '#'
    },
    {
      id: 'hungry',
      name: 'Hungry',
      logo: '/clients/hungry.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.stainlessSteel'),
      year: '2020-2023',
      description: t('clients.descriptions.hungry'),
      website: '#'
    },
    {
      id: 'cabibo',
      name: 'Cabibo',
      logo: '/clients/cabibo.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.kitchenHvac'),
      year: '2021-2024',
      description: t('clients.descriptions.cabibo'),
      website: '#'
    },
    {
      id: 'century-burger',
      name: 'Century Burger',
      logo: '/clients/century-burger.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.stainlessSteel'),
      year: '2022-2024',
      description: t('clients.descriptions.centuryBurger'),
      website: '#'
    },
    {
      id: 'cafe-aroma',
      name: 'Cafe Aroma',
      logo: '/clients/cafe-aroma.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.kitchenHvac'),
      year: '2020-2024',
      description: t('clients.descriptions.cafeAroma'),
      website: '#'
    },
    {
      id: 'panda',
      name: 'Panda',
      logo: '/clients/panda.png',
      category: 'restaurant',
      sector: t('clients.sectors.foodBeverage'),
      projects: t('clients.projects.stainlessSteel'),
      year: '2019-2024',
      description: t('clients.descriptions.panda'),
      website: 'https://panda.com.sa'
    },
    {
      id: 'modon',
      name: 'Modon',
      logo: '/clients/modon.png',
      category: 'industrial',
      sector: t('clients.sectors.development'),
      projects: t('clients.projects.industrialHvac'),
      year: '2020-2024',
      description: t('clients.descriptions.modon'),
      website: 'https://modon.gov.sa'
    },
    {
      id: 'alkifa-contracting',
      name: 'Al Kifa Contracting',
      logo: '/clients/alkifa-contracting.png',
      category: 'industrial',
      sector: t('clients.sectors.construction'),
      projects: t('clients.projects.structuralAluminum'),
      year: '2018-2024',
      description: t('clients.descriptions.alkifaContracting'),
      website: '#'
    },
    {
      id: 'saudi-emaar',
      name: 'Saudi Emaar',
      logo: '/clients/saudi-emaar.png',
      category: 'commercial',
      sector: t('clients.sectors.realEstate'),
      projects: t('clients.projects.aluminumGlass'),
      year: '2021-2024',
      description: t('clients.descriptions.saudiEmaar'),
      website: '#'
    },
    {
      id: 'emaar',
      name: 'Emaar',
      logo: '/clients/emaar.png',
      category: 'commercial',
      sector: t('clients.sectors.realEstate'),
      projects: t('clients.projects.luxuryFabrication'),
      year: '2020-2024',
      description: t('clients.descriptions.emaar'),
      website: 'https://emaar.com'
    },
    {
      id: 'khayal',
      name: 'Khayal',
      logo: '/clients/khayal.png',
      category: 'commercial',
      sector: t('clients.sectors.entertainment'),
      projects: t('clients.projects.advancedConstruction'),
      year: '2022-2024',
      description: t('clients.descriptions.khayal'),
      website: '#'
    },
    {
      id: 'etmam',
      name: 'Etmam',
      logo: '/clients/etmam.png',
      category: 'government',
      sector: t('clients.sectors.services'),
      projects: t('clients.projects.hospitalInfrastructure'),
      year: '2020-2023',
      description: t('clients.descriptions.etmam'),
      website: '#'
    },
    {
      id: 'labeeb',
      name: 'Labeeb',
      logo: '/clients/labeeb.png',
      category: 'commercial',
      sector: t('clients.sectors.technology'),
      projects: t('clients.projects.dataCenterInfrastructure'),
      year: '2021-2024',
      description: t('clients.descriptions.labeeb'),
      website: '#'
    }
  ];

  const categories = [
    { id: 'all', name: t('clients.categories.all'), icon: Globe },
    { id: 'restaurant', name: t('clients.categories.restaurants'), icon: Building2 },
    { id: 'industrial', name: t('clients.categories.industrial'), icon: Award },
    { id: 'commercial', name: t('clients.categories.commercial'), icon: Users },
    { id: 'government', name: t('clients.categories.government'), icon: ShieldCheck }
  ];

  const filteredClients = activeCategory === 'all' 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  const stats = [
    {
      number: '50+',
      label: t('clients.stats.satisfiedClients'),
      icon: Users
    },
    {
      number: '200+',
      label: t('clients.stats.projectsCompleted'),
      icon: CheckCircle
    },
    {
      number: '15+',
      label: t('clients.stats.yearsExperience'),
      icon: TrendingUp
    },
    {
      number: '100%',
      label: t('clients.stats.clientSatisfaction'),
      icon: Star
    }
  ];

  return (
    <div className="bg-white text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('clients.title')}
            </h1>
            <div className="w-24 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {t('clients.subtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#eaae07] rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-[#02496a]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#eaae07] mb-2">{stat.number}</div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#02496a] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#02496a]">
              {t('clients.sectionTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clients.sectionSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredClients.map((client) => (
              <div key={client.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full transform hover:-translate-y-2">
                  
                  {/* Client Logo */}
                  <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain transition-all duration-500"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/200x80/02496a/ffffff?text=${encodeURIComponent(client.name)}`;
                      }}
                    />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'}`}>
                      <div className="w-8 h-8 bg-[#02496a] rounded-lg flex items-center justify-center">
                        {categories.find(cat => cat.id === client.category)?.icon && (
                          React.createElement(categories.find(cat => cat.id === client.category).icon, {
                            className: "w-4 h-4 text-white"
                          })
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#02496a] group-hover:text-[#eaae07] transition-colors duration-300">
                      {client.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">{t('clients.labels.sector')}:</span>
                        <span className="font-medium text-gray-800">{client.sector}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">{t('clients.labels.period')}:</span>
                        <span className="font-medium text-gray-800">{client.year}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[#02496a] mb-2 text-sm">
                        {t('clients.labels.projects')}:
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {client.projects}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {client.description}
                    </p>

                    {/* View More Button */}
                    <button className={`w-full bg-[#02496a] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#035678] transition-all duration-300 flex items-center justify-center group-hover:shadow-lg text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>{t('clients.viewDetails')}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className={`${isRTL ? 'order-2' : ''}`}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#02496a]">
                {t('clients.whyTrustUs.title')}
              </h2>
              <div className="w-16 h-1 bg-[#eaae07] mb-8"></div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: t('clients.whyTrustUs.quality.title'),
                    description: t('clients.whyTrustUs.quality.description')
                  },
                  {
                    icon: Star,
                    title: t('clients.whyTrustUs.experience.title'),
                    description: t('clients.whyTrustUs.experience.description')
                  },
                  {
                    icon: Handshake,
                    title: t('clients.whyTrustUs.partnership.title'),
                    description: t('clients.whyTrustUs.partnership.description')
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-[#02496a] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h3 className="text-xl font-bold mb-2 text-[#02496a]">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isRTL ? 'order-1' : ''}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#eaae07] rounded-3xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={t('clients.imageAlt')}
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="w-20 h-20 mx-auto mb-6 bg-[#eaae07] rounded-2xl flex items-center justify-center">
              <Handshake className="w-10 h-10 text-[#02496a]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('clients.cta.title')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {t('clients.cta.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <Link href={"/contact"} className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#02496a] transition-all duration-300 text-lg transform hover:-translate-y-1">
                {t('clients.cta.secondaryButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsPartnersSection;