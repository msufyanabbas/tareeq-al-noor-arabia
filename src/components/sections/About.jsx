import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  Users, 
  Clock, 
  Star,
  Target,
  Wrench,
  Building2,
  ChefHat,
  Zap,
  ArrowRight,
  Play
} from 'lucide-react';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);

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

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and comprehensively insured for your peace of mind",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Premium materials and skilled artisans delivering exceptional results",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines without compromising quality",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400"
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "Transparent pricing with no hidden costs or surprises",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400"
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Attention to detail in every aspect of your project",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
      iconColor: "text-indigo-400"
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: CheckCircle,
      color: "from-blue-400 to-purple-400"
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: TrendingUp,
      color: "from-emerald-400 to-cyan-400"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: Shield,
      color: "from-amber-400 to-orange-400"
    },
    {
      number: "50+",
      label: "Expert Team",
      icon: Users,
      color: "from-pink-400 to-rose-400"
    }
  ];

  const services = [
    { icon: ChefHat, name: "Kitchen Fabrication", color: "text-blue-400" },
    { icon: Building2, name: "Aluminium & Glass", color: "text-emerald-400" },
    { icon: Wrench, name: "Iron Work", color: "text-amber-400" },
    { icon: Zap, name: "Electrical Solutions", color: "text-purple-400" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden py-16 md:py-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            animationDelay: '5s'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-white/30 to-emerald-300/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-6">
            <Building2 className="w-4 h-4" />
            <span>About Our Company</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Crafting{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Excellence
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            Building Trust Through Superior Construction Solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Building Tomorrow's Infrastructure{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Today
                </span>
              </h3>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  With over 15 years of unwavering commitment to excellence, we've established ourselves as 
                  Jeddah's premier construction partner. Our journey began with a simple vision: to transform 
                  spaces through innovative design and uncompromising quality.
                </p>
                <p>
                  From state-of-the-art industrial kitchens to comprehensive building solutions, we've successfully 
                  delivered over 500 projects across residential, commercial, and industrial sectors. Our team of 
                  certified professionals combines traditional craftsmanship with cutting-edge technology.
                </p>
                <p>
                  Every project we undertake reflects our dedication to precision, sustainability, and customer 
                  satisfaction. We don't just build structures; we create lasting partnerships and deliver 
                  solutions that stand the test of time.
                </p>
              </div>
            </div>

            {/* Service Icons */}
            <div className="flex flex-wrap gap-4">
              {services.map((service, index) => (
                <div key={index} className="group flex items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <service.icon className={`w-5 h-5 ${service.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-gray-300 font-medium">{service.name}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  View Our Projects
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center">
                  <Users className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  Meet Our Team
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Features Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            
            {/* Features Container */}
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-2xl md:text-3xl font-bold text-white">Why Choose Us?</h4>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`group cursor-pointer p-4 rounded-2xl border transition-all duration-500 ${
                      activeFeature === index 
                        ? `${feature.bgColor} border-white/30 shadow-lg` 
                        : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${feature.bgColor} border border-white/20`}>
                        <feature.icon className={`w-5 h-5 ${feature.iconColor} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Track Record Speaks for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Itself
                </span>
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and customer satisfaction
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center cursor-pointer">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-white/10 to-white/20 rounded-xl">
                        <stat.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-gray-300 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg">
            <Target className="w-4 h-4" />
            <span>Our Mission</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight">
            "To transform spaces and exceed expectations through innovative construction solutions, 
            superior craftsmanship, and unwavering commitment to our clients' success."
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Every project is an opportunity to build lasting relationships and create exceptional value for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;