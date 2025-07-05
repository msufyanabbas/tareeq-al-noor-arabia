import React, { useState } from 'react';
import { Calendar, MapPin, Square, Eye, ExternalLink } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'A state-of-the-art office building with sustainable design features and modern amenities.',
      image: '/images/project-1.jpg',
      completionDate: '2024',
      size: '50,000 sq ft',
      location: 'Riyadh, Saudi Arabia',
      status: 'Completed',
      tags: ['Sustainable', 'Modern', 'LEED Certified']
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'Residential',
      description: 'Custom-built luxury home featuring contemporary architecture and premium finishes.',
      image: '/images/project-2.jpg',
      completionDate: '2023',
      size: '8,500 sq ft',
      location: 'Jeddah, Saudi Arabia',
      status: 'Completed',
      tags: ['Luxury', 'Custom', 'Contemporary']
    },
    {
      id: 3,
      title: 'Shopping Center Renovation',
      category: 'Commercial',
      description: 'Complete renovation of existing shopping center with modern retail spaces.',
      image: '/images/project-3.jpg',
      completionDate: '2023',
      size: '75,000 sq ft',
      location: 'Dammam, Saudi Arabia',
      status: 'Completed',
      tags: ['Renovation', 'Retail', 'Modern']
    },
    {
      id: 4,
      title: 'Industrial Warehouse',
      category: 'Industrial',
      description: 'Large-scale warehouse facility with advanced logistics and storage solutions.',
      image: '/images/project-4.jpg',
      completionDate: '2024',
      size: '120,000 sq ft',
      location: 'Riyadh, Saudi Arabia',
      status: 'Completed',
      tags: ['Logistics', 'Storage', 'Large-scale']
    },
    {
      id: 5,
      title: 'Residential Complex',
      category: 'Residential',
      description: 'Multi-family residential development with modern amenities and green spaces.',
      image: '/images/project-5.jpg',
      completionDate: '2023',
      size: '200 units',
      location: 'Mecca, Saudi Arabia',
      status: 'Completed',
      tags: ['Multi-family', 'Green Spaces', 'Amenities']
    },
    {
      id: 6,
      title: 'Healthcare Facility',
      category: 'Healthcare',
      description: 'Medical center with specialized equipment installations and patient-focused design.',
      image: '/images/project-6.jpg',
      completionDate: '2024',
      size: '30,000 sq ft',
      location: 'Riyadh, Saudi Arabia',
      status: 'Completed',
      tags: ['Medical', 'Specialized', 'Patient-focused']
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, filteredProjects.length));
  };

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50"
      aria-labelledby="projects-heading"
    >
      <Container size="xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 
              id="projects-heading"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Our Recent Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful construction projects that showcase 
              our expertise and commitment to excellence.
            </p>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProjects(6);
              }}
              className={`
                px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium 
                transition-all duration-200 hover:shadow-md transform hover:scale-105
                ${selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card 
                className="overflow-hidden h-full cursor-pointer transform transition-all duration-300 hover:scale-105"
                hover={true}
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-blue-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-green-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* View Actions */}
                  <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Placeholder Image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Square className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <p className="text-sm sm:text-base font-medium">Project Image</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        <span>Completed: {project.completionDate}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <Square className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        <span>{project.size}</span>
                      </div>
                      <div className="flex items-center text-xs sm:text-sm text-gray-500">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-auto"
                    icon={<Eye className="w-4 h-4" />}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Load More / View All Section */}
        <div className="text-center space-y-4 sm:space-y-6">
          {visibleProjects < filteredProjects.length && (
            <Button 
              variant="secondary" 
              size="lg"
              onClick={loadMore}
              className="mb-4"
            >
              Load More Projects ({filteredProjects.length - visibleProjects} remaining)
            </Button>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              className="w-full sm:w-auto"
            >
              View All Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;