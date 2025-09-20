// src/components/sections/EnhancedAbout.jsx
import React from 'react';
import { Award, Users, Target, TrendingUp, CheckCircle, Building2, Wrench, Shield } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const EnhancedAbout = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const stats = [
    { icon: Building2, value: '500+', label: t('stats.projectsCompleted') },
    { icon: Users, value: '15+', label: t('stats.yearsExperience') },
    { icon: Award, value: '100%', label: t('stats.clientSatisfaction') },
    { icon: Shield, value: '24/7', label: t('stats.support') }
  ];

  const values = [
    {
      icon: Target,
      title: t('values.excellence.title'),
      description: t('values.excellence.description')
    },
    {
      icon: Users,
      title: t('values.integrity.title'),
      description: t('values.integrity.description')
    },
    {
      icon: TrendingUp,
      title: t('values.innovation.title'),
      description: t('values.innovation.description')
    },
    {
      icon: CheckCircle,
      title: t('values.quality.title'),
      description: t('values.quality.description')
    }
  ];

  return (
    <div className="bg-[#02496a] text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#02496a] via-[#035678] to-[#02496a] opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m-16">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold m-4 ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
              {t('about.title')}
            </h1>
            <div className="w-24 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className={`text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
              {t('about.subtitle')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#eaae07] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-[#02496a]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#eaae07] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-200">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`${isRTL ? 'lg:order-2' : ''}`}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                {t('about.ourStory.title')}
              </h2>
              <div className="w-16 h-1 bg-[#eaae07] mb-8"></div>
              <div className="space-y-6 text-gray-200 leading-relaxed">
                <p className="text-lg">
                  {t('about.ourStory.paragraph1')}
                </p>
                <p className="text-lg">
                  {t('about.ourStory.paragraph2')}
                </p>
                <p className="text-lg">
                  {t('about.ourStory.paragraph3')}
                </p>
              </div>
            </div>
            <div className={`${isRTL ? 'lg:order-1' : ''}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#eaae07] rounded-3xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tariq Al Nur Al Arabi Building"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('about.values.title')}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#eaae07] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-[#02496a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#eaae07]">
                    {value.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 bg-[#eaae07] rounded-full flex items-center justify-center">
                <Target className="w-10 h-10 text-[#02496a]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                {t('about.vision.title')}
              </h3>
              <div className="w-16 h-1 bg-[#eaae07] mx-auto lg:mx-0 mb-6"></div>
              <p className="text-gray-200 text-lg leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>

            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 bg-[#eaae07] rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-[#02496a]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                {t('about.mission.title')}
              </h3>
              <div className="w-16 h-1 bg-[#eaae07] mx-auto lg:mx-0 mb-6"></div>
              <p className="text-gray-200 text-lg leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {t('about.cta.description')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link href={"/projects"} className="border-2 border-[#eaae07] text-[#eaae07] px-8 py-4 rounded-lg font-bold hover:bg-[#eaae07] hover:text-[#02496a] transition-colors duration-300 text-lg">
              {t('about.cta.secondaryButton')}
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default EnhancedAbout;