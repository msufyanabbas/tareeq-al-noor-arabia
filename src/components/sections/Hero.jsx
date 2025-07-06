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

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      icon: ChefHat,
      title: "Stainless Steel Kitchen Fabrication",
      subtitle: "Home, Commercial & Industrial Solutions",
      description: "Premium quality stainless steel kitchens designed for durability and hygiene standards",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      accentColor: "border-blue-400",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building2,
      title: "Aluminium & Glass Work",
      subtitle: "Structure, Cladding, Windows & Doors",
      description: "Complete aluminium solutions including structures, cladding, and office installations",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      accentColor: "border-emerald-400",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Wrench,
      title: "Iron Shade & Fabrication",
      subtitle: "Custom Hangers & Structural Work",
      description: "Robust iron fabrication for shades, hangers, and structural components",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      accentColor: "border-amber-400",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: TreePine,
      title: "Wood Materials & Work",
      subtitle: "Premium Carpentry Solutions",
      description: "High-quality wood materials and expert craftsmanship for all your needs",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
      accentColor: "border-orange-400",
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Wind,
      title: "HVAC Complete Work",
      subtitle: "Exhaust & AC Duct Systems",
      description: "Comprehensive HVAC solutions for optimal climate control and air quality",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      accentColor: "border-cyan-400",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Zap,
      title: "Electrical Low Voltage",
      subtitle: "Professional Electrical Solutions",
      description: "Safe and efficient electrical installations for all your power needs",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-400",
      accentColor: "border-yellow-400",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Layers,
      title: "Gypsum Work",
      subtitle: "Interior Finishing Excellence",
      description: "Professional gypsum board installation and finishing services",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      accentColor: "border-purple-400",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Palette,
      title: "Tiles & Epoxy Work",
      subtitle: "Flooring & Surface Solutions",
      description: "Premium tiles installation and durable epoxy flooring applications",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
      accentColor: "border-pink-400",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Droplets,
      title: "Water & Heat Proofing",
      subtitle: "Protection & Insulation",
      description: "Complete waterproofing and thermal insulation solutions",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400",
      accentColor: "border-indigo-400",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: ShoppingCart,
      title: "Building Materials & Tools",
      subtitle: "Complete Construction Solutions",
      description: "One-stop shop for all building materials and professional power tools",
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 pt-10 to-black overflow-hidden">
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

      {/* Rating Badge - Fixed and Responsive */}
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center py-16 md:py-20">
          <div className="w-full">
            
            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg">
                  <Award className="w-4 h-4" />
                  <span>Premium Construction Services</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                    Building the{' '}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                        Future
                      </span>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                    One Project at a Time
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Your premier destination for comprehensive construction solutions in Jeddah. 
                  From industrial kitchens to complete building materials - we deliver excellence.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                  
                  <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                      Contact Us
                    </div>
                  </button>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left group cursor-pointer">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      500+
                    </div>
                    <div className="text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Projects Done
                    </div>
                  </div>
                  <div className="text-center lg:text-left group cursor-pointer">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      15+
                    </div>
                    <div className="text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center lg:text-left group cursor-pointer">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      100%
                    </div>
                    <div className="text-sm text-gray-400 flex items-center justify-center lg:justify-start gap-1">
                      <Shield className="w-4 h-4" />
                      Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Enhanced Carousel */}
              <div className="relative order-1 lg:order-2">
                
                {/* Service Counter */}
                <div className="absolute -top-6 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-2xl shadow-2xl z-30 border border-white/20">
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
                        <div className="text-right">
                          <div className="text-xs text-gray-400 mb-1">Service Quality</div>
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
                          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                            {currentService.title}
                          </h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${currentService.color} bg-clip-text text-transparent`}>
                            {currentService.subtitle}
                          </p>
                        </div>
                        
                        <p className="text-gray-200 leading-relaxed text-base">
                          {currentService.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 pt-4">
                          {['Premium Quality', 'Fast Delivery', '24/7 Support'].map((feature, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-300">Service Progress</span>
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
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20 z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
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