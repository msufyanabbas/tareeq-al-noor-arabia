// src/components/sections/MaterialSupply.jsx
import React, { useState } from 'react';
import { 
  Package, 
  Settings, 
  Wrench, 
  Zap, 
  Flame, 
  Wind,
  CheckCircle,
  ShoppingCart,
  TrendingUp,
  Shield,
  Clock,
  Award,
  ChevronRight,
  Hammer,
  Box,
  Gauge,
  Cable,
  Pipette,
  Factory
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const MaterialSupply = () => {
  const { isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('pipes');

  // Stats
  const stats = [
    { icon: Package, value: '5000+', label: isRTL ? 'منتج متاح' : 'Products Available' },
    { icon: TrendingUp, value: '98%', label: isRTL ? 'معدل التوفر' : 'Availability Rate' },
    { icon: Clock, value: '24/7', label: isRTL ? 'دعم العملاء' : 'Customer Support' },
    { icon: Award, value: 'ISO', label: isRTL ? 'جودة معتمدة' : 'Certified Quality' }
  ];

  // Main Categories
  const categories = [
    {
      id: 'pipes',
      icon: Pipette,
      title: isRTL ? 'الأنابيب والأنابيب' : 'Pipes & Tubes',
      description: isRTL 
        ? 'مجموعة واسعة من الأنابيب المصنوعة من الفولاذ المقاوم للصدأ والكربون والنحاس والنيكل'
        : 'Wide range of pipes made from stainless steel, carbon steel, copper nickel, and more',
      items: [
        'Stainless Steel',
        'Carbon Steel',
        'Cooper Nickel',
        'RTR (Ready to Run)',
        'PVC & UPVC',
        'Alloy Steel',
        'GRP (Glass Reinforced Plastic)',
        'HDPE (High-Density Polyethylene)'
      ],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80'
    },
    {
      id: 'valves',
      icon: Settings,
      title: isRTL ? 'الصمامات' : 'Valves',
      description: isRTL
        ? 'صمامات عالية الجودة لجميع التطبيقات الصناعية والتجارية'
        : 'High-quality valves for all industrial and commercial applications',
      items: [
        'Stainless Steel Valves',
        'Carbon Steel Valves',
        'Bronze Valves',
        'Cast Valves',
        'Alloy Steel Valves',
        'Brass Valves',
        'Cast Iron Valves',
        'Ductile Iron Valves'
      ],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80'
    },
    {
      id: 'fittings',
      icon: Box,
      title: isRTL ? 'التركيبات' : 'Fittings & Flanges',
      description: isRTL
        ? 'تركيبات مزورة، لحامات بعقب، وشفاهات لجميع احتياجات الأنابيب'
        : 'Forged fittings, butt welds, and flanges for all piping needs',
      items: [
        'Forged Fittings (SS, CS, CN, PVC, UPVC, Monel, Alloy, PPR)',
        'Butt Welds (SS, CS, Alloy, HDPE)',
        'Flanges (SS, CS, Alloy, Cooper Nickel)',
        'Compression Fittings',
        'High Pressure Fittings',
        'Brass Fittings',
        'Flange Adapters'
      ],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
    },
    {
      id: 'instruments',
      icon: Gauge,
      title: isRTL ? 'الأدوات والمعدات' : 'Instruments & Tools',
      description: isRTL
        ? 'مجموعة شاملة من الأدوات والمعدات للمشاريع الصناعية'
        : 'Comprehensive range of tools and equipment for industrial projects',
      items: [
        'Gauges & Measuring Instruments',
        'Power Tools & Hand Tools',
        'Dimensional & Lifting Tools',
        'Generators & Air Compressors',
        'PRV (Pressure Relief Valves)',
        'High Pressure Equipment',
        'Auto Claves & HP Hoses',
        'Bearings & Bleed Valves'
      ],
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80'
    }
  ];

  // Fabrication Services
  const fabricationServices = [
    {
      icon: Factory,
      title: isRTL ? 'تصنيع الفولاذ المقاوم للصدأ' : 'Stainless Steel Fabrication',
      description: isRTL
        ? 'تصنيع عالي الجودة للمطابخ التجارية والصناعية والسكنية'
        : 'High-quality fabrication for commercial, industrial, and residential kitchens',
      services: [
        isRTL ? 'تصنيع المطابخ التجارية' : 'Commercial Kitchen Fabrication',
        isRTL ? 'أعمال الفولاذ الصناعي' : 'Industrial Stainless Steel Works',
        isRTL ? 'المطابخ المنزلية المخصصة' : 'Custom Home Kitchens',
        isRTL ? 'حلول صالحة للأغذية' : 'Food-Grade Solutions',
        isRTL ? 'التصميم والتركيب' : 'Custom Design & Installation'
      ],
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80'
    },
    {
      icon: Package,
      title: isRTL ? 'أعمال الألمنيوم والزجاج' : 'Aluminum & Glass Works',
      description: isRTL
        ? 'حلول حديثة ومتينة للنوافذ والأبواب والواجهات'
        : 'Modern, durable solutions for windows, doors, and curtain walls',
      services: [
        isRTL ? 'النوافذ والأبواب المخصصة' : 'Windows & Doors',
        isRTL ? 'أنظمة الجدران الستارية' : 'Curtain Wall Systems',
        isRTL ? 'الفواصل الزجاجية' : 'Glass Partitions & Shopfronts',
        isRTL ? 'أعمال زجاج المكاتب' : 'Office Fit-Out Glass Works',
        isRTL ? 'هياكل الألمنيوم المخصصة' : 'Custom Aluminum Structures'
      ],
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80'
    },
    {
      icon: Hammer,
      title: isRTL ? 'تصنيع الحديد والصلب' : 'Iron & Steel Fabrication',
      description: isRTL
        ? 'تصنيع هيكلي للمشاريع الصناعية والتجارية'
        : 'Structural fabrication for industrial and commercial projects',
      services: [
        isRTL ? 'تصنيع الصلب الهيكلي' : 'Structural Steel Fabrication',
        isRTL ? 'مظلات حديدية' : 'Iron Shade Hangers & Canopies',
        isRTL ? 'هياكل صلب مخصصة' : 'Custom Steel Structures',
        isRTL ? 'أعمال اللحام الصناعية' : 'Welding & Industrial Works'
      ],
      image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80'
    },
    {
      icon: Box,
      title: isRTL ? 'مواد الخشب والنجارة' : 'Wood Materials & Carpentry',
      description: isRTL
        ? 'أعمال خشبية مخصصة وعالية الجودة'
        : 'Custom, high-quality woodwork solutions',
      services: [
        isRTL ? 'تصنيع الأثاث المخصص' : 'Custom Furniture Manufacturing',
        isRTL ? 'التجهيزات الداخلية الخشبية' : 'Interior Wood Fit-Outs',
        isRTL ? 'خزائن المطبخ والخزائن' : 'Kitchen Cabinets & Wardrobes',
        isRTL ? 'الأبواب والإطارات الخشبية' : 'Wooden Doors & Frames',
        isRTL ? 'خدمات التشطيب' : 'Polishing & Finishing Services'
      ],
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80'
    },
    {
      icon: Settings,
      title: isRTL ? 'أعمال الجبس والأسقف' : 'Gypsum & Ceiling Works',
      description: isRTL
        ? 'حلول الأسقف الزخرفية والوظيفية'
        : 'Decorative and functional ceiling solutions',
      services: [
        isRTL ? 'تركيب الأسقف المستعارة' : 'False Ceiling Installation',
        isRTL ? 'فواصل الجبس' : 'Gypsum Partitions',
        isRTL ? 'تصاميم أسقف زخرفية' : 'Decorative Ceiling Designs',
        isRTL ? 'الأسقف الصوتية والعازلة' : 'Acoustic & Insulated Ceilings',
        isRTL ? 'التشطيب والتفصيل' : 'Finishing & Detailing'
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
    },
    {
      icon: Wind,
      title: isRTL ? 'أنظمة التكييف' : 'HVAC Systems',
      description: isRTL
        ? 'حلول شاملة للتدفئة والتهوية وتكييف الهواء'
        : 'Complete heating, ventilation, and air conditioning solutions',
      services: [
        isRTL ? 'تصنيع وتركيب مجاري الهواء' : 'AC Duct Fabrication & Installation',
        isRTL ? 'أنظمة العادم والتهوية' : 'Exhaust & Ventilation Systems',
        isRTL ? 'صيانة وخدمة التكييف' : 'HVAC Maintenance & Servicing',
        isRTL ? 'تركيب الديفيوزرز والشبكات' : 'Dampers, Diffusers & Grilles'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
    },
    {
      icon: Zap,
      title: isRTL ? 'الأنظمة الكهربائية' : 'Electrical & Low Voltage Systems',
      description: isRTL
        ? 'حلول كهربائية شاملة وأنظمة الجهد المنخفض'
        : 'Comprehensive electrical and low voltage engineering solutions',
      services: [
        isRTL ? 'الأسلاك والتركيبات الكهربائية' : 'Electrical Wiring & Installations',
        isRTL ? 'أنظمة الجهد المنخفض والـ ELV' : 'Low Voltage & ELV Systems',
        isRTL ? 'أنظمة الإنذار من الحريق' : 'Fire Alarm & Safety Systems',
        isRTL ? 'أنظمة الطاقة الطارئة والاحتياطية' : 'Emergency & Backup Power Systems'
      ],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80'
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Shield,
      title: isRTL ? 'جودة معتمدة' : 'Certified Quality',
      description: isRTL
        ? 'جميع المواد تلبي المعايير الدولية والمحلية'
        : 'All materials meet international and local standards'
    },
    {
      icon: TrendingUp,
      title: isRTL ? 'مخزون واسع' : 'Extensive Inventory',
      description: isRTL
        ? 'أكثر من 5000 منتج متاح للتسليم الفوري'
        : 'Over 5,000 products available for immediate delivery'
    },
    {
      icon: Clock,
      title: isRTL ? 'توصيل سريع' : 'Fast Delivery',
      description: isRTL
        ? 'شبكة لوجستية فعالة في جميع أنحاء المملكة'
        : 'Efficient logistics network across the Kingdom'
    },
    {
      icon: Award,
      title: isRTL ? 'دعم خبير' : 'Expert Support',
      description: isRTL
        ? 'فريق فني متخصص لمساعدتك في اختيار المواد'
        : 'Specialized technical team to help you select materials'
    }
  ];

  return (
    <div className="bg-[#02496a] text-white">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#02496a] via-[#035678] to-[#02496a] opacity-90"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#eaae07] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#eaae07] rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 text-[#eaae07]" />
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
                {isRTL ? 'توريد المواد' : 'Material Supply'}
              </h1>
            </div>
            <div className="w-24 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className={`text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-left'} md:text-center`}>
              {isRTL 
                ? 'مزود رائد لحلول التداول والهندسة المتكاملة، نقدم مواد عالية الجودة ومعدات وخدمات تصنيع'
                : 'Leading provider of integrated trading and engineering solutions, delivering high-quality materials, equipment, and fabrication services'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#eaae07] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-[#02496a]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#eaae07] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-200">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Categories */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {isRTL ? 'مواد البناء والصناعة' : 'Construction & Industrial Materials'}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {isRTL
                ? 'مجموعة شاملة من المواد للمشاريع السكنية والتجارية والصناعية'
                : 'Comprehensive range of materials for residential, commercial, and industrial projects'}
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={category.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 && !isRTL ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 && !isRTL ? 'lg:col-start-2' : ''} ${isRTL && index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#eaae07] rounded-3xl transform rotate-3"></div>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isRTL && index % 2 === 0 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#eaae07] rounded-full flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-8 h-8 text-[#02496a]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors duration-300">
                        <CheckCircle className="w-5 h-5 text-[#eaae07] flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrication Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {isRTL ? 'خدمات التصنيع والهندسة' : 'Fabrication & Engineering Services'}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {isRTL
                ? 'حلول تصنيع كاملة مع الخبرة الفنية وخدمات البناء الشاملة'
                : 'Complete fabrication solutions with technical expertise and end-to-end construction services'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricationServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 border border-white/20 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02496a] to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-[#eaae07] rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-[#02496a]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-[#eaae07]">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mt-auto">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight className={`w-5 h-5 text-[#eaae07] flex-shrink-0 mt-0.5 ${isRTL ? 'rotate-180' : ''}`} />
                          <span className="text-sm text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {isRTL ? 'لماذا تختار طريق النور العربي؟' : 'Why Choose Tariq Al Nur Al Arabi?'}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#eaae07] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-[#02496a]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#eaae07]">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#eaae07] rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingCart className="w-16 h-16 text-[#eaae07] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {isRTL ? 'جاهز لطلب المواد؟' : 'Ready to Order Materials?'}
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            {isRTL
              ? 'تواصل مع فريقنا للحصول على عرض أسعار مخصص والاستشارات الفنية'
              : 'Contact our team for customized quotes and technical consultations'}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <Link 
              href="/contact" 
              className="bg-[#eaae07] text-[#02496a] px-8 py-4 rounded-lg font-bold hover:bg-[#d49b06] transition-colors duration-300 text-lg inline-flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {isRTL ? 'اطلب الآن' : 'Request Quote'}
            </Link>
            <a 
              href="tel:+966595888864" 
              className="border-2 border-[#eaae07] text-[#eaae07] px-8 py-4 rounded-lg font-bold hover:bg-[#eaae07] hover:text-[#02496a] transition-colors duration-300 text-lg inline-flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              {isRTL ? 'اتصل بنا' : 'Call Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialSupply;