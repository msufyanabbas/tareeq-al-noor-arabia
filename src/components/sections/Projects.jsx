// src/components/sections/Projects.jsx
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Square, 
  Eye, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Play,
  ArrowRight,
  Phone,
  Filter,
  Grid,
  List,
  Search
} from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [viewMode, setViewMode] = useState('grid');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchTerm, setSearchTerm] = useState('');

  // Sample projects data - replace with your actual data
  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Kitchen Complex",
      category: "Commercial Kitchen",
      description: "Complete stainless steel kitchen fabrication for 5-star hotel with state-of-the-art equipment and hygiene standards.",
      completionDate: "Dec 2023",
      size: "2,500 sqft",
      location: "Jeddah, Saudi Arabia",
      status: "Completed",
      tags: ["Stainless Steel", "Commercial", "Hospitality"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Modern Office Building",
      category: "Aluminium & Glass",
      description: "Premium aluminium and glass work for modern office complex with energy-efficient solutions.",
      completionDate: "Jan 2024",
      size: "15,000 sqft",
      location: "Riyadh, Saudi Arabia",
      status: "Completed",
      tags: ["Aluminium", "Glass", "Commercial"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      category: "Iron Fabrication",
      description: "Custom iron fabrication for large-scale warehouse including structural components and safety features.",
      completionDate: "Nov 2023",
      size: "8,000 sqft",
      location: "Dammam, Saudi Arabia",
      status: "Completed",
      tags: ["Iron", "Structural", "Industrial"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Luxury Villa Interior",
      category: "Wood Work",
      description: "Premium wood work and carpentry for luxury villa including custom furniture and interior elements.",
      completionDate: "Feb 2024",
      size: "3,200 sqft",
      location: "Mecca, Saudi Arabia",
      status: "Completed",
      tags: ["Wood", "Luxury", "Interior"],
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Shopping Mall HVAC System",
      category: "HVAC",
      description: "Complete HVAC installation for large shopping mall with energy-efficient climate control systems.",
      completionDate: "Mar 2024",
      size: "25,000 sqft",
      location: "Jeddah, Saudi Arabia",
      status: "In Progress",
      tags: ["HVAC", "Commercial", "Energy Efficient"],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Corporate Office Renovation",
      category: "Gypsum Work",
      description: "Complete office renovation with modern gypsum work and interior finishing solutions.",
      completionDate: "Apr 2024",
      size: "5,500 sqft",
      location: "Riyadh, Saudi Arabia",
      status: "Completed",
      tags: ["Gypsum", "Office", "Modern"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

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

  const filteredProjects = selectedCategory === 'All' 
    ? projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : projects.filter(project => 
        project.category === selectedCategory &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         project.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
  };

  const ProjectCard = ({ project, index }) => (
    <div
      className="group relative"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
      
      {/* Card Container */}
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden h-full transform transition-all duration-500 hover:scale-105">
        
        {/* Project Image */}
        <div className="relative aspect-video bg-gray-800/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm px-4 py-2 rounded-full font-bold shadow-lg border border-white/20 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className={`text-white text-xs sm:text-sm px-4 py-2 rounded-full font-bold shadow-lg border backdrop-blur-sm ${
              project.status === 'Completed' 
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 border-emerald-400/50' 
                : 'bg-gradient-to-r from-amber-600 to-orange-600 border-amber-400/50'
            }`}>
              {project.status}
            </span>
          </div>

          {/* View Actions */}
          <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20 hover:scale-110">
              <Eye className="w-5 h-5" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20 hover:scale-110">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          {/* Project Image */}
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 sm:p-8 flex flex-col h-full">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>

            {/* Project Details */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <Calendar className="w-4 h-4 mr-3 text-blue-400" />
                <span>Completed: {project.completionDate}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Square className="w-4 h-4 mr-3 text-emerald-400" />
                <span>{project.size}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button className="group/btn mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 border border-white/20">
            <div className="flex items-center justify-center">
              <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              View Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden py-16 md:py-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div 
          className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
            animationDelay: '4s'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
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
        <div className="text-center mb-16 md:mb-20">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg mb-8">
            <Award className="w-5 h-5" />
            <span>Our Success Stories</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Our Recent{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  Projects
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full"></div>
              </span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              Excellence in Every Build
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of successful construction projects that showcase 
              our expertise, innovation, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Projects Done
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Years Experience
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                <Star className="w-4 h-4" />
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
  <input
    type="text"
    placeholder="Search for Projects..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
  />
</div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
                className={`
                  px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 border backdrop-blur-sm
                  ${selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg border-white/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/20'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 mb-16 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Load More / CTA Section */}
        <div className="text-center space-y-8">
          {visibleProjects < filteredProjects.length && (
            <button 
              onClick={loadMore}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="flex items-center justify-center">
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Load More Projects ({filteredProjects.length - visibleProjects} remaining)
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          )}
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-white/20">
              <div className="flex items-center justify-center">
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                View All Projects
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button className="group w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Request Quote
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;