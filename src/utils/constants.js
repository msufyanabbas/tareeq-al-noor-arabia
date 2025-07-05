export const COMPANY_INFO = {
  name: 'Tareeq Al Noor Al Arabia',
  tagline: 'Construction & Fabrication',
  phone: '+966 50 123 4567',
  secondaryPhone: '+966 55 987 6543',
  email: 'info@Tareeq Al Noor Al Arabia.sa',
  projectsEmail: 'projects@Tareeq Al Noor Al Arabia.sa',
  address: {
    district: 'Al Salamah District',
    city: 'Jeddah',
    country: 'Saudi Arabia'
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