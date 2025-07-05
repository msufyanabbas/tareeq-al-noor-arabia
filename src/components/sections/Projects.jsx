import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'A state-of-the-art office building with sustainable design features and modern amenities.',
      image: '/images/project-1.jpg',
      completionDate: '2024',
      size: '50,000 sq ft'
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'Residential',
      description: 'Custom-built luxury home featuring contemporary architecture and premium finishes.',
      image: '/images/project-2.jpg',
      completionDate: '2023',
      size: '8,500 sq ft'
    },
    {
      id: 3,
      title: 'Shopping Center Renovation',
      category: 'Commercial',
      description: 'Complete renovation of existing shopping center with modern retail spaces.',
      image: '/images/project-3.jpg',
      completionDate: '2023',
      size: '75,000 sq ft'
    },
    {
      id: 4,
      title: 'Industrial Warehouse',
      category: 'Industrial',
      description: 'Large-scale warehouse facility with advanced logistics and storage solutions.',
      image: '/images/project-4.jpg',
      completionDate: '2024',
      size: '120,000 sq ft'
    },
    {
      id: 5,
      title: 'Residential Complex',
      category: 'Residential',
      description: 'Multi-family residential development with modern amenities and green spaces.',
      image: '/images/project-5.jpg',
      completionDate: '2023',
      size: '200 units'
    },
    {
      id: 6,
      title: 'Healthcare Facility',
      category: 'Healthcare',
      description: 'Medical center with specialized equipment installations and patient-focused design.',
      image: '/images/project-6.jpg',
      completionDate: '2024',
      size: '30,000 sq ft'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful construction projects that showcase 
            our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <span className="bg-blue-600 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-gray-500">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Completed: {project.completionDate}</span>
                  <span>{project.size}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Projects;