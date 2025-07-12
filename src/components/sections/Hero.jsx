import React, { useState, useEffect } from 'react';
import { 
  ChefHat, 
  Building2, 
  Wrench, 
  TreePine, 
  Wind, 
  Zap, 
  Layers, 
  Palette,
  Droplets,
  ShoppingCart,
  ArrowRight,
  Phone,
  Star,
  Play,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../utils/i18n';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // Enhanced font classes for Arabic support
  const getTextClasses = (additionalClasses = '') => {
    const baseClasses = isRTL 
      ? 'font-tajawal font-medium tracking-wide' 
      : 'font-sans';
    return `${baseClasses} ${additionalClasses}`;
  };

  const getHeadingClasses = (additionalClasses = '') => {
    const baseClasses = isRTL 
      ? 'font-tajawal font-bold tracking-wide' 
      : 'font-sans font-bold';
    return `${baseClasses} ${additionalClasses}`;
  };

  const services = [
    {
      icon: ChefHat,
      title: t('hero.services.kitchenFab.title'),
      subtitle: t('hero.services.kitchenFab.subtitle'),
      description: t('hero.services.kitchenFab.description'),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      accentColor: "border-blue-400",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building2,
      title: t('hero.services.aluminiumGlass.title'),
      subtitle: t('hero.services.aluminiumGlass.subtitle'),
      description: t('hero.services.aluminiumGlass.description'),
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      accentColor: "border-emerald-400",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Wrench,
      title: t('hero.services.ironFab.title'),
      subtitle: t('hero.services.ironFab.subtitle'),
      description: t('hero.services.ironFab.description'),
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      accentColor: "border-amber-400",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: TreePine,
      title: t('hero.services.woodWork.title'),
      subtitle: t('hero.services.woodWork.subtitle'),
      description: t('hero.services.woodWork.description'),
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      accentColor: "border-orange-400",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Wind,
      title: t('hero.services.hvac.title'),
      subtitle: t('hero.services.hvac.subtitle'),
      description: t('hero.services.hvac.description'),
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      accentColor: "border-cyan-400",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Zap,
      title: t('hero.services.electrical.title'),
      subtitle: t('hero.services.electrical.subtitle'),
      description: t('hero.services.electrical.description'),
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-400",
      accentColor: "border-yellow-400",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Layers,
      title: t('hero.services.gypsum.title'),
      subtitle: t('hero.services.gypsum.subtitle'),
      description: t('hero.services.gypsum.description'),
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      accentColor: "border-purple-400",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Palette,
      title: t('hero.services.tilesEpoxy.title'),
      subtitle: t('hero.services.tilesEpoxy.subtitle'),
      description: t('hero.services.tilesEpoxy.description'),
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
      accentColor: "border-pink-400",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Droplets,
      title: t('hero.services.waterproofing.title'),
      subtitle: t('hero.services.waterproofing.subtitle'),
      description: t('hero.services.waterproofing.description'),
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
      accentColor: "border-indigo-400",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: ShoppingCart,
      title: t('hero.services.materials.title'),
      subtitle: t('hero.services.materials.subtitle'),
      description: t('hero.services.materials.description'),
      color: "from-teal-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
      iconColor: "text-teal-400",
      accentColor: "border-teal-400",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Mouse tracking for parallax effect
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

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const currentService = services[currentSlide];

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 pt-10 to-black overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Dynamic Background */}
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

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center py-16 md:py-20">
          <div className="w-full">
            
            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Content */}
              <div className={`space-y-6 md:space-y-8 text-center lg:text-${isRTL ? 'right' : 'left'} order-2 lg:order-1`}>
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg">
                  <Award className="w-4 h-4" />
                  <span className={getTextClasses()}>{t('hero.trustBadge')}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className={`${getHeadingClasses()} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight`}>
                    {t('hero.mainTitle')}{' '}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                        {t('hero.futureText')}
                      </span>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
                    </span>
                  </h1>
                  <p className={`${getTextClasses()} text-xl sm:text-2xl md:text-3xl text-gray-300 font-light`}>
                    {t('hero.subtitle')}
                  </p>
                </div>

                {/* Description */}
                <p className={`${getTextClasses()} text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0`}>
                  {t('hero.description')}
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-${isRTL ? 'end' : 'start'}`}>
                  <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      <span className={getTextClasses('font-bold')}>{t('hero.ctaGetStarted')}</span>
                      <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-3 rotate-180' : 'ml-3'} group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
                    </div>
                  </button>
                  
                  <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                      <span className={getTextClasses('font-bold')}>{t('hero.ctaContact')}</span>
                    </div>
                  </button>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left group cursor-pointer">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      500+
                    </div>
                    <div className={`${getTextClasses()} text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-1`}>
                      <CheckCircle className="w-4 h-4" />
                      {t('hero.stats.projectsDone')}
                    </div>
                  </div>
                  <div className="text-center lg:text-left group cursor-pointer">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      15+
                    </div>
                    <div className={`${getTextClasses()} text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-1`}>
                      <TrendingUp className="w-4 h-4" />
                      {t('hero.stats.yearsExperience')}
                    </div>
                  </div>
                  <div className="text-center lg:text-left group cursor-pointer">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      100%
                    </div>
                    <div className={`${getTextClasses()} text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-1`}>
                      <Shield className="w-4 h-4" />
                      {t('hero.stats.satisfaction')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Enhanced Carousel */}
              <div className="relative order-1 lg:order-2">
                
                {/* Service Counter */}
                <div className={`absolute -top-6 ${isRTL ? '-left-1' : '-right-1'} bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-2xl shadow-2xl z-30 border border-white/20`}>
                  <div className="text-sm font-bold">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Main Carousel Card */}
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${currentService.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700`}></div>
                  
                  {/* Card Container */}
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                    
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={currentService.image} 
                        alt={currentService.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90"></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-20`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-10 h-[500px] md:h-[550px] flex flex-col">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 ${currentService.bgColor} rounded-2xl shadow-lg backdrop-blur-sm border ${currentService.accentColor} border-opacity-50`}>
                          <currentService.icon className={`w-8 h-8 ${currentService.iconColor}`} />
                        </div>
                        <div className={`text-${isRTL ? 'left' : 'right'}`}>
                          <div className={`${getTextClasses()} text-xs text-gray-400 mb-1`}>
                            {t('hero.serviceQuality')}
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Service Info */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className={`${getHeadingClasses()} text-2xl md:text-3xl text-white leading-tight mb-2`}>
                            {currentService.title}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
                            {currentService.subtitle}
                          </p>
                        </div>
                        
                        <p className={`${getTextClasses()} text-gray-200 leading-relaxed text-base`}>
                          {currentService.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {[
                            t('hero.features.premiumQuality'),
                            t('hero.features.fastDelivery'),
                            t('hero.features.support247')
                          ].map((feature, idx) => (
                            <span 
                              key={idx} 
                              className={`${getTextClasses()} px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20`}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`${getTextClasses()} text-sm font-medium text-gray-300`}>
                            {t('hero.serviceProgress')}
                          </span>
                          <span className="text-sm font-bold text-white">
                            {Math.round((currentSlide + 1) / services.length * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
                          <div 
                            className={`bg-gradient-to-r ${currentService.color} h-2 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{width: `${((currentSlide + 1) / services.length) * 100}%`}}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 ${isRTL ? 'translate-x-6' : '-translate-x-6'} w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 z-20`}
                >
                  <ChevronLeft className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide 
                          ? `w-10 h-3 bg-gradient-to-r ${currentService.color} rounded-full shadow-lg` 
                          : 'w-3 h-3 bg-white/30 rounded-full hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-gradient-to-b from-white/80 to-transparent rounded-full animate-pulse"></div>
          </div>
          <span className="text-xs text-gray-400 font-medium">Explore More</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;