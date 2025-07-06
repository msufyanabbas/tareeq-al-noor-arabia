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
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Award,
  Users,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: ChefHat,
      title: "Stainless Steel Kitchen Fabrication",
      subtitle: "Home, Commercial & Industrial Solutions",
      description: "Premium quality stainless steel kitchens designed for durability and hygiene standards",
      features: ["Food Grade Materials", "Custom Design", "Easy Maintenance", "Lifetime Warranty"],
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
      features: ["Modern Designs", "Energy Efficient", "Weather Resistant", "Professional Install"],
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
      features: ["Heavy Duty", "Corrosion Resistant", "Custom Shapes", "Quick Installation"],
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
      features: ["Premium Wood", "Expert Craftsmanship", "Custom Furniture", "Eco-Friendly"],
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
      features: ["Energy Efficient", "Smart Controls", "Regular Maintenance", "24/7 Support"],
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
      features: ["Safety First", "Code Compliant", "Modern Systems", "Emergency Service"],
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
      features: ["Smooth Finish", "Fire Resistant", "Sound Insulation", "Quick Dry"],
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
      features: ["Slip Resistant", "Easy Clean", "Durable Finish", "Color Options"],
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
      features: ["100% Waterproof", "Energy Saving", "Long Lasting", "Professional Grade"],
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
      features: ["Quality Materials", "Competitive Prices", "Fast Delivery", "Expert Advice"],
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

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
        />
        <div 
          className="absolute top-1/2 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute -bottom-40 left-1/2 w-72 h-72 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            animationDelay: '4s'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-white/30 to-blue-300/30 rounded-full animate-pulse"
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
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Professional Services</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Our{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  Expertise
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              Premium Construction Solutions
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Comprehensive construction and fabrication services delivered with excellence and precision across Saudi Arabia
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20 max-w-2xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                <Award className="w-4 h-4" />
                Services
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                <Users className="w-4 h-4" />
                Projects
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Years
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
              
              {/* Service Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden group-hover:scale-105 transition-all duration-500">
                
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 ${service.bgColor} rounded-2xl shadow-lg backdrop-blur-sm border ${service.accentColor} border-opacity-50 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-8 h-8 ${service.iconColor} group-hover:animate-pulse`} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 mb-1">Quality</div>
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
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className={`text-base font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <button className="group/btn w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                {hoveredService === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 md:mt-32">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Project?
              </span>
            </h3>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Our team of experts is here to help bring your vision to life with premium construction solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center">
                  <Award className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  View Portfolio
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;