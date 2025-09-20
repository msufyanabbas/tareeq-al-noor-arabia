// pages/services/[slug].js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { 
  ChefHat, 
  Building2, 
  Wrench, 
  Wind, 
  Zap, 
  Layers, 
  Palette,
  Droplets,
  ShoppingCart,
  CheckCircle,
  ArrowLeft,
  Star,
  Award,
  Hammer,
  X,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Service data structure with multiple images
  const servicesData = {
    'stainless-steel': {
      id: 'stainless-steel',
      icon: ChefHat,
      title: 'Stainless Steel Fabrication',
      subtitle: 'Premium Commercial Kitchen Equipment & Custom Fabrication',
      description: 'We specialize in high-quality stainless steel fabrication for commercial kitchens, restaurants, and industrial applications. Our expert craftsmen create durable, hygienic, and aesthetically pleasing stainless steel solutions that meet the highest industry standards.',
      detailedDescription: `Our stainless steel fabrication services encompass a wide range of commercial and industrial applications. We work with grade 304 and 316 stainless steel to ensure maximum durability and corrosion resistance. From kitchen equipment to custom architectural elements, our team delivers precision-engineered solutions.

Our fabrication process includes cutting, forming, welding, and finishing using state-of-the-art equipment. We maintain strict quality control standards and ensure all products meet food safety regulations and building codes.`,
      features: [
        'Commercial kitchen equipment fabrication',
        'Custom stainless steel countertops and work surfaces',
        'Exhaust hoods and ventilation systems',
        'Storage solutions and shelving systems',
        'Food service equipment and fixtures',
        'Architectural stainless steel elements'
      ],
      benefits: [
        'Corrosion resistant and long-lasting',
        'Easy to clean and maintain',
        'Meets food safety standards',
        'Custom designs to fit your space',
        'Professional installation service',
        'Competitive pricing and quick turnaround'
      ],
      images: [
        '/services/hood/hood1.jpg',
        '/services/hood/hood2.jpg',
        '/services/hood/hood3.jpg',
        '/services/sink/sink1.jpg',
        '/services/sink/sink2.jpg',
        '/services/tables/table1.jpg',
        '/services/tables/table2.jpg'
      ],
      specifications: {
        'Material Grade': 'SS 304/316',
        'Thickness': '1mm - 6mm',
        'Finish': 'Brushed, Mirror, Satin',
        'Installation': 'Professional Team',
        'Warranty': '2-5 Years',
        'Delivery': '7-14 Days'
      }
    },
    'aluminum-glass': {
      id: 'aluminum-glass',
      icon: Building2,
      title: 'Aluminum & Glass Systems',
      subtitle: 'Modern Windows, Doors & Curtain Wall Solutions',
      description: 'Professional aluminum and glass installation services for residential and commercial buildings. We provide energy-efficient windows, doors, and curtain wall systems with superior craftsmanship and attention to detail.',
      detailedDescription: `Our aluminum and glass systems combine functionality with aesthetic appeal. We use high-grade aluminum profiles and energy-efficient glass to create solutions that enhance building performance while providing natural light and ventilation.

We specialize in thermal break technology, double glazing, and custom designs that meet architectural requirements. Our installation team ensures proper sealing, alignment, and weatherproofing for long-lasting performance.`,
      features: [
        'Aluminum windows and doors',
        'Glass curtain wall systems',
        'Shopfront and commercial glazing',
        'Residential window replacement',
        'Custom aluminum structures',
        'Energy-efficient glazing solutions'
      ],
      benefits: [
        'Energy efficient thermal performance',
        'Low maintenance requirements',
        'Enhanced security features',
        'Weather resistant construction',
        'Modern aesthetic appeal',
        'Professional installation guarantee'
      ],
      images: [
        '/services/doors/door1.jpg',
        '/services/doors/door2.jpg',
        '/services/doors/door3.jpg',
        '/services/ring/ring1.jpg',
        '/services/ring/ring2.jpg'
      ],
      specifications: {
        'Profile System': 'Thermal Break',
        'Glass Type': 'Double/Triple Glazed',
        'Frame Material': 'Aluminum Alloy',
        'Security': 'Multi-point Locking',
        'Warranty': '10 Years',
        'Installation': '3-7 Days'
      }
    },
    'iron-fabrication': {
      id: 'iron-fabrication',
      icon: Hammer,
      title: 'Iron Fabrication & Metalwork',
      subtitle: 'Custom Steel Structures & Decorative Ironwork',
      description: 'Expert iron fabrication services for structural and decorative applications. We create custom steel frameworks, railings, gates, and architectural metalwork with precision welding and finishing techniques.',
      detailedDescription: `Our iron fabrication workshop is equipped with modern welding equipment and cutting tools to handle projects of all sizes. We work with mild steel, carbon steel, and specialized alloys to create both functional and decorative metalwork.

From structural frameworks to ornate decorative pieces, our skilled craftsmen combine traditional techniques with modern technology to deliver exceptional results that stand the test of time.`,
      features: [
        'Structural steel frameworks',
        'Decorative railings and balustrades',
        'Security gates and barriers',
        'Custom metalwork and sculptures',
        'Industrial equipment frames',
        'Repair and restoration services'
      ],
      benefits: [
        'High strength and durability',
        'Custom design capabilities',
        'Professional welding standards',
        'Corrosion protection coating',
        'Competitive pricing',
        'On-site installation available'
      ],
      images: [
        '/services/stands/stand1.jpg',
        '/services/stands/stand2.jpg',
        '/services/stands/stand3.jpg'
      ],
      specifications: {
        'Material': 'Mild Steel/Carbon Steel',
        'Welding': 'MIG/TIG/Arc',
        'Coating': 'Primer + Paint/Galvanized',
        'Thickness': '2mm - 20mm',
        'Warranty': '3 Years',
        'Installation': '5-10 Days'
      }
    },
    'wood-carpentry': {
      id: 'wood-carpentry',
      icon: Wrench,
      title: 'Wood Carpentry & Custom Furniture',
      subtitle: 'Handcrafted Wooden Solutions & Fine Carpentry',
      description: 'Professional carpentry services specializing in custom furniture, built-in storage, and architectural woodwork. We use premium hardwoods and modern techniques to create beautiful, functional wooden solutions.',
      detailedDescription: `Our carpentry workshop combines traditional woodworking skills with modern precision tools to create exceptional wooden products. We source quality hardwoods and engineered materials to ensure durability and beauty in every project.

From kitchen cabinets to custom furniture, our carpenters pay attention to every detail, ensuring perfect joints, smooth finishes, and long-lasting construction that enhances your space.`,
      features: [
        'Custom kitchen cabinets',
        'Built-in wardrobes and storage',
        'Wooden furniture design and build',
        'Architectural millwork',
        'Wooden flooring installation',
        'Furniture repair and restoration'
      ],
      benefits: [
        'Premium hardwood materials',
        'Custom design and sizing',
        'Expert craftsmanship',
        'Durable construction methods',
        'Beautiful natural finishes',
        'Professional installation service'
      ],
      images: [
        '/services/tables/table1.jpg',
        '/services/tables/table2.jpg'
      ],
      specifications: {
        'Materials': 'Hardwood/Engineered Wood',
        'Finish': 'Lacquer/Oil/Stain',
        'Joinery': 'Dovetail/Mortise & Tenon',
        'Hardware': 'Premium Quality',
        'Warranty': '5 Years',
        'Production': '10-20 Days'
      }
    },
    'hvac': {
      id: 'hvac',
      icon: Wind,
      title: 'HVAC Systems & Ventilation',
      subtitle: 'Complete Heating, Ventilation & Air Conditioning Solutions',
      description: 'Comprehensive HVAC services including installation, maintenance, and repair of heating, ventilation, and air conditioning systems for residential and commercial properties.',
      detailedDescription: `Our HVAC specialists provide complete climate control solutions designed for optimal comfort and energy efficiency. We install and service all types of heating and cooling systems, from traditional split units to advanced VRF systems.

Our team stays current with the latest technology and energy-efficient solutions to help reduce operating costs while maintaining perfect indoor air quality and temperature control.`,
      features: [
        'Central air conditioning systems',
        'Ductwork design and installation',
        'Ventilation and exhaust systems',
        'Heat pump installation',
        'Preventive maintenance programs',
        'Emergency repair services'
      ],
      benefits: [
        'Energy efficient operation',
        'Improved indoor air quality',
        'Professional system design',
        'Regular maintenance programs',
        '24/7 emergency service',
        'Warranty on all installations'
      ],
      images: [
        '/services/duct/duct1.jpg',
        '/services/duct/duct2.jpg',
        '/services/duct/duct3.jpg'
      ],
      specifications: {
        'System Types': 'Split/VRF/Central',
        'Capacity': '1-100 Tons',
        'Efficiency': 'High SEER Rating',
        'Controls': 'Digital/Smart',
        'Warranty': '5-10 Years',
        'Installation': '1-5 Days'
      }
    },
    'electrical': {
      id: 'electrical',
      icon: Zap,
      title: 'Electrical Installation & Maintenance',
      subtitle: 'Professional Electrical Services & Power Solutions',
      description: 'Licensed electrical contractors providing safe, reliable electrical installation and maintenance services for residential, commercial, and industrial applications.',
      detailedDescription: `Our certified electricians handle all aspects of electrical work, from basic wiring to complex industrial installations. We prioritize safety, code compliance, and energy efficiency in every project.

Whether you need new electrical installations, upgrades, or troubleshooting, our team uses quality materials and follows strict safety protocols to ensure reliable, long-lasting electrical systems.`,
      features: [
        'Electrical panel installation and upgrades',
        'Wiring and rewiring services',
        'Lighting design and installation',
        'Power distribution systems',
        'Emergency electrical repairs',
        'Electrical safety inspections'
      ],
      benefits: [
        'Licensed and insured technicians',
        'Code compliant installations',
        'Energy efficient solutions',
        'Emergency service available',
        'Quality materials and workmanship',
        'Comprehensive warranty coverage'
      ],
      images: [
        '/services/duct/duct2.jpg',
        '/services/duct/duct3.jpg'
      ],
      specifications: {
        'Voltage': '110V-440V',
        'Certification': 'Licensed Electricians',
        'Code Compliance': 'NEC Standards',
        'Materials': 'Premium Grade',
        'Warranty': '2-5 Years',
        'Response Time': '24 Hours'
      }
    },
    'gypsum-ceiling': {
      id: 'gypsum-ceiling',
      icon: Layers,
      title: 'Gypsum Ceiling & Drywall',
      subtitle: 'Modern Ceiling Solutions & Interior Finishing',
      description: 'Professional gypsum ceiling installation and drywall services. We create smooth, durable interior surfaces with modern designs and perfect finishing for residential and commercial spaces.',
      detailedDescription: `Our gypsum ceiling specialists create beautiful, functional ceiling systems that enhance interior spaces. We use high-quality gypsum boards and modern suspension systems to achieve smooth, level surfaces with integrated lighting and HVAC solutions.

From simple flat ceilings to complex multi-level designs with coves and architectural features, our team delivers professional results that meet both aesthetic and functional requirements.`,
      features: [
        'False ceiling installation',
        'Drywall partitions and walls',
        'Acoustic ceiling solutions',
        'Decorative ceiling designs',
        'Texture and paint finishing',
        'Insulation and soundproofing'
      ],
      benefits: [
        'Smooth, professional finish',
        'Improved acoustics',
        'Easy maintenance',
        'Fire resistant materials',
        'Quick installation process',
        'Cost effective solution'
      ],
      images: [
        '/services/ring/ring1.jpg',
        '/services/ring/ring2.jpg'
      ],
      specifications: {
        'Board Thickness': '9mm-15mm',
        'Grid System': 'Metal Suspension',
        'Fire Rating': 'Class A',
        'Finish': 'Smooth/Textured',
        'Warranty': '3 Years',
        'Installation': '2-5 Days'
      }
    },
    'tiles-flooring': {
      id: 'tiles-flooring',
      icon: Palette,
      title: 'Tiles & Flooring Solutions',
      subtitle: 'Premium Flooring Installation & Tile Work',
      description: 'Expert tile and flooring installation services offering a wide range of materials including ceramic, porcelain, natural stone, and luxury vinyl for all types of spaces.',
      detailedDescription: `Our flooring specialists provide complete tile and flooring solutions from selection to installation. We work with premium materials and use professional installation techniques to ensure beautiful, long-lasting results.

Our team has expertise in working with various substrates and challenging layouts, ensuring proper preparation, alignment, and finishing for floors that look great and perform well for years to come.`,
      features: [
        'Ceramic and porcelain tile installation',
        'Natural stone flooring',
        'Luxury vinyl and laminate',
        'Hardwood floor installation',
        'Waterproofing and preparation',
        'Custom patterns and designs'
      ],
      benefits: [
        'Wide selection of materials',
        'Professional installation',
        'Proper surface preparation',
        'Water resistant solutions',
        'Durable and beautiful results',
        'Maintenance guidance provided'
      ],
      images: [
        '/services/drains/drain1.jpg',
        '/services/drains/drain2.jpg'
      ],
      specifications: {
        'Tile Types': 'Ceramic/Porcelain/Stone',
        'Sizes': '12"x12" to 48"x48"',
        'Preparation': 'Leveling/Waterproofing',
        'Adhesive': 'Premium Grade',
        'Warranty': '5 Years',
        'Installation': '3-7 Days'
      }
    },
    'waterproofing': {
      id: 'waterproofing',
      icon: Droplets,
      title: 'Waterproofing & Sealing',
      subtitle: 'Complete Water Protection Solutions',
      description: 'Professional waterproofing services to protect your property from water damage. We provide comprehensive solutions for basements, roofs, bathrooms, and exterior surfaces.',
      detailedDescription: `Our waterproofing specialists use advanced materials and proven techniques to create effective barriers against water infiltration. We address both preventive waterproofing for new construction and remedial solutions for existing water problems.

From membrane systems to liquid-applied coatings, we select the appropriate waterproofing method based on the specific requirements of each project, ensuring long-term protection against water damage.`,
      features: [
        'Basement waterproofing systems',
        'Roof and terrace waterproofing',
        'Bathroom and wet area sealing',
        'Foundation waterproofing',
        'Expansion joint sealing',
        'Water damage repair and prevention'
      ],
      benefits: [
        'Long-term water protection',
        'Prevents structural damage',
        'Improves indoor air quality',
        'Increases property value',
        'Professional application',
        'Comprehensive warranty'
      ],
      images: [
        '/services/sink/sink1.jpg',
        '/services/sink/sink2.jpg'
      ],
      specifications: {
        'Systems': 'Membrane/Liquid Applied',
        'Materials': 'Polymer/Bitumen',
        'Application': 'Professional Team',
        'Testing': 'Water Pressure Test',
        'Warranty': '10-15 Years',
        'Curing Time': '24-48 Hours'
      }
    },
    'materials-supply': {
      id: 'materials-supply',
      icon: ShoppingCart,
      title: 'Construction Materials Supply',
      subtitle: 'Quality Building Materials & Equipment',
      description: 'Comprehensive supply of construction materials and equipment. We source premium materials from trusted manufacturers and provide reliable delivery services to support your projects.',
      detailedDescription: `Our materials supply division stocks a comprehensive range of construction materials, tools, and equipment. We maintain relationships with leading manufacturers to ensure availability of quality products at competitive prices.

From basic building supplies to specialized equipment, we provide procurement services that save time and ensure project continuity. Our logistics team coordinates delivery to meet project schedules.`,
      features: [
        'Steel and metal products',
        'Electrical supplies and fixtures',
        'Plumbing materials and fittings',
        'HVAC components and equipment',
        'Tools and construction equipment',
        'Delivery and logistics services'
      ],
      benefits: [
        'Quality assured products',
        'Competitive pricing',
        'Reliable delivery service',
        'Technical support available',
        'Bulk order discounts',
        'Project procurement management'
      ],
      images: [
        '/services/baskets/basket1.jpg',
        '/services/baskets/basket2.jpg'
      ],
      specifications: {
        'Suppliers': 'Certified Manufacturers',
        'Quality': 'Standard Compliant',
        'Delivery': '24-48 Hours',
        'Storage': 'Climate Controlled',
        'Support': 'Technical Assistance',
        'Payment': 'Flexible Terms'
      }
    }
  };

  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button 
            onClick={() => router.push('/services')}
            className="bg-[#02496a] text-white px-6 py-3 rounded-lg hover:bg-[#035678] transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  return (
    <>
      <Head>
        <title>{service.title} - Tariq Al Nur Al Arabi</title>
        <meta name="description" content={service.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`/services/${slug}`} />
      </Head>

      <div className="bg-white text-gray-900" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <button 
              onClick={() => router.push('/services')}
              className={`flex items-center text-white/80 hover:text-white mb-8 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`w-5 h-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              <span>Back to Services</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center my-6">
                  <div className="w-16 h-16 bg-[#eaae07] rounded-2xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-[#02496a]" />
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                      {service.title}
                    </h1>
                    <p className="text-xl text-[#eaae07]">{service.subtitle}</p>
                  </div>
                </div>
                <div className="w-24 h-1 bg-[#eaae07] mb-8"></div>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#02496a] transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.images[selectedImageIndex]}
                    alt={service.title}
                    className="w-full h-96 object-cover cursor-pointer"
                    onClick={() => setIsGalleryOpen(true)}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/02496a/ffffff?text=Service+Image';
                    }}
                  />
                </div>
                {service.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-2">
                      {service.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === selectedImageIndex ? 'bg-[#eaae07]' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <img
                src={service.images[selectedImageIndex]}
                alt={service.title}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x600/02496a/ffffff?text=Service+Image';
                }}
              />
              
              <button
                onClick={nextImage}
                className="absolute right-4 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                {selectedImageIndex + 1} / {service.images.length}
              </div>
            </div>
          </div>
        )}

        {/* Image Thumbnails */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {service.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                    index === selectedImageIndex 
                      ? 'ring-4 ring-[#eaae07] transform scale-105' 
                      : 'hover:transform hover:scale-105'
                  }`}
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setIsGalleryOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x200/02496a/ffffff?text=Image';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6 text-[#02496a]">About This Service</h2>
                <div className="prose prose-lg text-gray-700 mb-8">
                  {service.detailedDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#02496a]">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#eaae07] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#02496a]">Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-5 h-5 text-[#eaae07] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specifications Sidebar */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-[#02496a]">Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(service.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-600">{key}:</span>
                        <span className="text-[#02496a] font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Card */}
                <div className="bg-[#02496a] text-white rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <Award className="w-12 h-12 mx-auto mb-4 text-[#eaae07]" />
                    <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
                    <p className="text-gray-200">Contact us for a free consultation and quote</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-[#eaae07]" />
                      <span>+966 12 123 4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-[#eaae07]" />
                      <span>info@tariqalnur.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3 text-[#eaae07]" />
                      <span>Jeddah, Saudi Arabia</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-[#eaae07]" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#02496a]">Related Services</h2>
              <div className="w-16 h-1 bg-[#eaae07] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.values(servicesData)
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                <div 
                  key={relatedService.id} 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => router.push(`/services/${relatedService.id}`)}
                >
                  <div className="relative h-48">
                    <img
                      src={relatedService.images[0]}
                      alt={relatedService.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/02496a/ffffff?text=Service+Image';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-[#02496a] rounded-xl flex items-center justify-center">
                        <relatedService.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-[#02496a]">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedService.description}
                    </p>
                    <div className="flex items-center text-[#eaae07] font-semibold text-sm">
                      <span>Learn More</span>
                      <ArrowLeft className={`w-4 h-4 ml-2 ${isRTL ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
      
      </div>
    </>
  );
};

export default ServiceDetailPage;