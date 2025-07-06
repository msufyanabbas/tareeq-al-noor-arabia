import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  Award, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Phone,
  ArrowRight,
  Play,
  Building2,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Handshake
} from 'lucide-react';

const AboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isRTL, setIsRTL] = useState(false); // You can connect this to your language context
  
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

  // Team members data
  const teamMembers = [
    {
      name: "Ahmed Ali",
      role: "Chief Executive Officer",
      experience: "15+ Years Experience",
      description: "Leading the company with vision and strategic excellence in construction industry.",
      initial: "AA",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sarah Mohammed",
      role: "Project Manager",
      experience: "12+ Years Experience", 
      description: "Ensuring project delivery with precision and maintaining highest quality standards.",
      initial: "SM",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Khalid Ahmed",
      role: "Technical Director",
      experience: "18+ Years Experience",
      description: "Overseeing technical operations and innovation in construction methodologies.",
      initial: "KA",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Company values data
  const values = [
    {
      title: "Quality Excellence",
      description: "We deliver premium quality in every project, ensuring durability and superior craftsmanship.",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Integrity & Trust",
      description: "Building lasting relationships through honest communication and reliable service delivery.",
      icon: Handshake,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400"
    },
    {
      title: "Innovation",
      description: "Embracing cutting-edge technology and modern construction techniques for better results.",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400"
    },
    {
      title: "Safety First",
      description: "Prioritizing safety in all operations to protect our team and deliver secure constructions.",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Building the Future</title>
        <meta name="description" content="Learn about our company's mission, values, and expert team dedicated to delivering excellence in construction." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
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

          {/* Page Header Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-screen flex items-center justify-center py-16 md:py-20">
              <div className="text-center space-y-6 md:space-y-8">
                
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg">
                  <Building2 className="w-4 h-4" />
                  <span>About Our Company</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                    Building{' '}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                        Excellence
                      </span>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
                    </span>
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                    Through Innovation & Expertise
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Discover our journey, values, and the dedicated team that makes us the leading construction company in Jeddah. 
                  We're committed to building not just structures, but lasting relationships and sustainable futures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-full filter blur-3xl opacity-50"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                    <Target className="w-4 h-4" />
                    <span>Our Mission</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    Transforming{' '}
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Visions
                    </span>
                    <br />
                    Into Reality
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  With over 15 years of experience in the construction industry, we have established ourselves as 
                  the premier construction company in Jeddah. Our commitment to excellence, innovation, and customer 
                  satisfaction drives everything we do.
                </p>

                <div className="space-y-4">
                  {[
                    "Premium quality materials and craftsmanship",
                    "Innovative construction techniques and technology",
                    "Sustainable and environmentally conscious practices",
                    "24/7 customer support and project management"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Stats */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "500+", label: "Projects Completed", icon: CheckCircle, color: "from-blue-500 to-cyan-500" },
                    { number: "15+", label: "Years Experience", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
                    { number: "100%", label: "Client Satisfaction", icon: Star, color: "from-amber-500 to-orange-500" },
                    { number: "24/7", label: "Support Available", icon: Shield, color: "from-purple-500 to-pink-500" }
                  ].map((stat, index) => (
                    <div key={index} className="relative group">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full filter blur-3xl opacity-40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 mb-6">
                <Users className="w-4 h-4" />
                <span>Meet Our Team</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Expert{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Professionals
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Our experienced team of professionals brings decades of expertise and passion to every project, 
                ensuring exceptional results that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {teamMembers.map((member, index) => (
                <div key={index} className="relative group">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${member.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
                    {/* Avatar */}
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl`}>
                      <span className="text-xl font-black text-white">
                        {member.initial}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className={`bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-semibold mb-3`}>
                      {member.role}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 mb-4">
                      <Award className="w-3 h-3" />
                      {member.experience}
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full filter blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full filter blur-3xl opacity-40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 mb-6">
                <Heart className="w-4 h-4" />
                <span>Our Values</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Core{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Principles
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                These fundamental values guide our decisions, shape our culture, and define our commitment 
                to excellence in every aspect of our business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {values.map((value, index) => (
                <div key={index} className="relative group">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${value.bgColor} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                      <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl opacity-50"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Ready to Start Your{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Project?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Let's discuss your vision and turn it into reality. Contact us today for a consultation 
                  and discover how we can bring your construction dreams to life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Get Quote Now
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                    View Our Work
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;