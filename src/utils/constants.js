export const COMPANY_INFO = {
  name: 'Tareeq Al Noor Al Arabia',
  tagline: 'Construction & Fabrication',
  phone: '+966 54 802 9209',
  secondaryPhone: '+966 54 802 9209',
  email: 'info@tareeqalnur.com',
  projectsEmail: 'projects@Tareeq Al Noor Al Arabia.sa',
    address: {
    street: "123 Construction Street",
    city: "Jeddah",
    country: "Saudi Arabia",
    state: "Jeddah Region",
    zip: "12345"
  },
  businessHours: {
    weekdays: 'Saturday - Thursday: 7:00 AM - 7:00 PM',
    friday: 'Friday: 1:00 PM - 6:00 PM',
    emergency: 'Emergency Service: 24/7'
  }
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '/contact' }
];

 export const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'A state-of-the-art office building with sustainable design features and modern amenities.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      completionDate: '2024',
      size: '50,000 sq ft',
      location: 'Jeddah, Saudi Arabia',
      status: 'Completed',
      tags: ['Sustainable', 'Modern', 'LEED Certified']
    },
    {
      id: 2,
      title: 'Luxury Residential Villa',
      category: 'Residential',
      description: 'Custom-built luxury home featuring contemporary architecture and premium finishes.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
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
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      completionDate: '2024',
      size: '120,000 sq ft',
      location: 'Jeddah, Saudi Arabia',
      status: 'Completed',
      tags: ['Logistics', 'Storage', 'Large-scale']
    },
    {
      id: 5,
      title: 'Residential Complex',
      category: 'Residential',
      description: 'Multi-family residential development with modern amenities and green spaces.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80',
      completionDate: '2024',
      size: '30,000 sq ft',
      location: 'Jeddah, Saudi Arabia',
      status: 'Completed',
      tags: ['Medical', 'Specialized', 'Patient-focused']
    }
  ];

export const SERVICES = [
  {
    id: 'stainless-steel',
    title: 'Stainless Steel Fabrication',
    description: 'Professional kitchen fabrication for home, commercial, and industrial applications with premium quality materials.',
    features: ['Home Kitchens', 'Commercial Kitchens', 'Industrial Applications', 'Custom Designs']
  },
  {
    id: 'aluminum-glass',
    title: 'Aluminum & Glass Work',
    description: 'Complete aluminum solutions including structures, cladding, windows, doors, and office installations.',
    features: ['Aluminum Structures', 'Window & Door Installation', 'Office Solutions', 'Cladding Systems']
  },
  {
    id: 'iron-fabrication',
    title: 'Iron & Steel Fabrication',
    description: 'Heavy-duty iron shade hangers and custom steel fabrication for industrial and commercial needs.',
    features: ['Shade Hangers', 'Steel Structures', 'Custom Fabrication', 'Industrial Solutions']
  },
  {
    id: 'hvac',
    title: 'HVAC Systems',
    description: 'Complete HVAC solutions including exhaust systems, AC ductwork, and ventilation installations.',
    features: ['AC Ductwork', 'Exhaust Systems', 'Ventilation', 'Maintenance']
  },
  {
    id: 'electrical',
    title: 'Electrical & Low Voltage',
    description: 'Professional electrical installations and low voltage systems for residential and commercial projects.',
    features: ['Electrical Installation', 'Low Voltage Systems', 'Maintenance', 'Emergency Services']
  },
  {
    id: 'construction',
    title: 'Complete Construction',
    description: 'Full construction services including gypsum work, tiling, epoxy flooring, and waterproofing solutions.',
    features: ['Gypsum Work', 'Tile Installation', 'Epoxy Flooring', 'Waterproofing']
  }
];

export const STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' }
];