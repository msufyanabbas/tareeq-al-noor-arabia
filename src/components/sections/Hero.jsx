// src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Comprehensive slides data with all company services
  const slides = [
     {
      id: 21,
      image: "https://images.pexels.com/photos/6474295/pexels-photo-6474295.jpeg?w=1920&q=80",
      category: isRTL ? "الجبس والأسقف" : "Gypsum & Ceiling",
      title: isRTL ? "تركيب أسقف مستعارة" : "False Ceiling Installation",
      subtitle: isRTL ? "أسقف وظيفية" : "Functional Ceilings",
      description: isRTL ? "أسقف زخرفية ووظيفية للمشاريع السكنية والتجارية." : "Decorative and functional ceilings for residential projects.",
      features: isRTL ? ["أسقف حديثة", "تركيب احترافي", "تصاميم مخصصة", "إضاءة متكاملة"] : ["Modern Ceilings", "Professional Installation", "Custom Designs", "Integrated Lighting"]
    },
    {
      id: 22,
      image: "https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg?w=1920&q=80",
      category: isRTL ? "الجبس والأسقف" : "Gypsum & Ceiling",
      title: isRTL ? "فواصل جبسية" : "Gypsum Partitions",
      subtitle: isRTL ? "جدران مرنة" : "Flexible Walls",
      description: isRTL ? "جدران تقسيم مرنة وجمالية للمكاتب والمنازل." : "Flexible and aesthetic partition walls for offices and homes.",
      features: isRTL ? ["تقسيمات مكاتب", "جدران خفيفة", "تركيب سريع", "عازل للصوت"] : ["Office Partitions", "Lightweight Walls", "Quick Installation", "Sound Insulation"]
    },
     {
      id: 19,
      image: "https://images.pexels.com/photos/8961339/pexels-photo-8961339.jpeg?w=1920&q=80",
      category: isRTL ? "الخشب والنجارة" : "Wood & Carpentry",
      title: isRTL ? "أبواب خشبية" : "Wooden Doors",
      subtitle: isRTL ? "حرفية تقليدية" : "Traditional Craft",
      description: isRTL ? "أبواب وإطارات وألواح خشبية مصنوعة بخبرة." : "Expertly crafted wooden doors, frames, and paneling.",
      features: isRTL ? ["أبواب صلبة", "إطارات مخصصة", "ألواح زخرفية", "تصميم كلاسيكي"] : ["Solid Doors", "Custom Frames", "Decorative Panels", "Classic Design"]
    },
    {
      id: 15,
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?w=1920&q=80",
      category: isRTL ? "الحديد والصلب" : "Iron & Steel",
      title: isRTL ? "أعمال لحام صناعية" : "Industrial Welding",
      subtitle: isRTL ? "لحام احترافي" : "Professional Welding",
      description: isRTL ? "خدمات لحام احترافية للهياكل واسعة النطاق ومكونات الآلات." : "Professional welding services for large-scale structures and machinery.",
      features: isRTL ? ["لحام معتمد", "تجميع دقيق", "اختبار جودة", "تطبيقات صناعية"] : ["Certified Welding", "Precision Assembly", "Quality Testing", "Industrial Applications"]
    },
      {
      id: 20,
      image: "https://images.pexels.com/photos/8820184/pexels-photo-8820184.jpeg?w=1920&q=80",
      category: isRTL ? "الخشب والنجارة" : "Wood & Carpentry",
      title: isRTL ? "كسوة خشبية" : "Wood Cladding",
      subtitle: isRTL ? "ألواح جدران" : "Wall Panels",
      description: isRTL ? "كسوة خشبية زخرفية وأعمال ألواح جدران للتصميمات الراقية." : "Decorative wood cladding and wall panel works for premium designs.",
      features: isRTL ? ["ألواح جدران", "كسوة خشبية", "تصاميم مخصصة", "تشطيبات فاخرة"] : ["Wall Panels", "Wood Cladding", "Custom Designs", "Luxury Finishes"]
    },

    // Wood Materials & Carpentry (5 images)
    {
      id: 16,
      image: "https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?w=1920&q=80",
      category: isRTL ? "الخشب والنجارة" : "Wood & Carpentry",
      title: isRTL ? "تصنيع أثاث مخصص" : "Custom Furniture",
      subtitle: isRTL ? "حلول خشبية راقية" : "Premium Wood",
      description: isRTL ? "تصنيع أثاث مخصص عالي الجودة للمشاريع السكنية والتجارية." : "High-quality custom furniture manufacturing for residential projects.",
      features: isRTL ? ["أثاث مخصص", "أخشاب صلبة", "براعة فنية", "تشطيبات راقية"] : ["Custom Furniture", "Hardwood Materials", "Expert Craftsmanship", "Premium Finishes"]
    },
    {
      id: 17,
      image: "https://images.pexels.com/photos/5974054/pexels-photo-5974054.jpeg?w=1920&q=80",
      category: isRTL ? "الخشب والنجارة" : "Wood & Carpentry",
      title: isRTL ? "تجهيزات خشبية" : "Wood Fit-Outs",
      subtitle: isRTL ? "حلول مكاتب" : "Office Solutions",
      description: isRTL ? "تجهيزات خشبية داخلية للمكاتب والمساحات التجارية." : "Interior wood fit-outs for offices and commercial spaces.",
      features: isRTL ? ["تجهيزات مكاتب", "جدران خشبية", "أرفف مخصصة", "تصميم احترافي"] : ["Office Fit-Outs", "Wood Paneling", "Custom Shelving", "Professional Design"]
    },
    {
      id: 11,
      image: "https://images.pexels.com/photos/4956912/pexels-photo-4956912.jpeg?w=1920&q=80",
      category: isRTL ? "الألمنيوم والزجاج" : "Aluminum & Glass",
      title: isRTL ? "هياكل ألمنيوم مخصصة" : "Custom Aluminum Structures",
      subtitle: isRTL ? "حلول مصممة خصيصاً" : "Tailored Solutions",
      description: isRTL ? "إطارات مصنوعة حسب الطلب للمشاريع الصناعية والتجارية." : "Tailor-made framework for industrial and commercial projects.",
      features: isRTL ? ["تصميم مخصص", "إطارات صناعية", "حلول معمارية", "تصنيع دقيق"] : ["Custom Design", "Industrial Frames", "Architectural Solutions", "Precision Fabrication"]
    },

    // Iron & Steel Fabrication (4 images)
    {
      id: 12,
      image: "https://images.pexels.com/photos/19408681/pexels-photo-19408681.jpeg?w=1920&q=80",
      category: isRTL ? "الحديد والصلب" : "Iron & Steel",
      title: isRTL ? "تصنيع الصلب الهيكلي" : "Structural Steel Fabrication",
      subtitle: isRTL ? "هياكل فائقة التحمل" : "Heavy-Duty Structures",
      description: isRTL ? "تصميم وتصنيع وتركيب العوارض والأعمدة والإطارات." : "Design, fabrication, and installation of beams and columns.",
      features: isRTL ? ["عوارض فولاذية", "إطارات صناعية", "تصميم هندسي", "تركيب آمن"] : ["Steel Beams", "Industrial Frames", "Engineering Design", "Safe Installation"]
    },
    {
      id: 13,
      image: "https://images.pexels.com/photos/36003990/pexels-photo-36003990.jpeg?w=1920&q=80",
      category: isRTL ? "الحديد والصلب" : "Iron & Steel",
      title: isRTL ? "مظلات حديدية" : "Iron Canopies",
      subtitle: isRTL ? "حلول ظل متينة" : "Durable Shade",
      description: isRTL ? "حلول ظل متينة وجذابة للمناطق الخارجية والممرات." : "Durable and visually appealing shading solutions for outdoor areas.",
      features: isRTL ? ["مظلات خارجية", "معلقات ظل", "تصميم جمالي", "مقاوم للطقس"] : ["Outdoor Canopies", "Shade Structures", "Aesthetic Design", "Weather Resistant"]
    },
    {
      id: 14,
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?w=1920&q=80",
      category: isRTL ? "الحديد والصلب" : "Iron & Steel",
      title: isRTL ? "هياكل صلب مخصصة" : "Custom Steel Structures",
      subtitle: isRTL ? "حلول حسب الطلب" : "Made-to-Order",
      description: isRTL ? "إطارات فولاذية مصنوعة حسب الطلب للمشاريع المعمارية." : "Tailor-made steel frameworks for architectural projects.",
      features: isRTL ? ["تصميم مخصص", "تصنيع دقيق", "تطبيقات متعددة", "مواد عالية الجودة"] : ["Custom Design", "Precision Fabrication", "Multiple Applications", "High-Quality Materials"]
    },
    // Stainless Steel Fabrication (6 images)
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80",
      category: isRTL ? "تصنيع الفولاذ" : "Stainless Steel",
      title: isRTL ? "مطابخ تجارية احترافية" : "Professional Commercial Kitchens",
      subtitle: isRTL ? "تصنيع كامل للمطابخ" : "Complete Kitchen Fabrication",
      description: isRTL ? "مطابخ من الفولاذ المقاوم للصدأ بحجم كامل للمطاعم والفنادق." : "Full-scale stainless steel kitchens for restaurants and hotels.",
      features: isRTL ? ["مواد صالحة للطعام", "حسب الطلب", "متينة وصحية", "تركيب احترافي"] : ["Food-Grade Materials", "Custom Design", "Durable & Hygienic", "Professional Installation"]
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/5532836/pexels-photo-5532836.jpeg?w=1920&q=80",
      category: isRTL ? "تصنيع الفولاذ" : "Stainless Steel",
      title: isRTL ? "أعمال الفولاذ الصناعية" : "Industrial Steel Works",
      subtitle: isRTL ? "معدات فائقة التحمل" : "Heavy-Duty Equipment",
      description: isRTL ? "تصنيع معدات صناعية فائقة التحمل وهياكل الآلات." : "Fabrication of heavy-duty industrial equipment and machinery.",
      features: isRTL ? ["تصنيع صناعي", "خزانات ومعدات", "تصميم هندسي", "مواد عالية الجودة"] : ["Industrial Fabrication", "Tanks & Equipment", "Engineering Design", "High-Quality Materials"]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/32177980/pexels-photo-32177980.png?w=1920&q=80",
      category: isRTL ? "تصنيع الفولاذ" : "Stainless Steel",
      title: isRTL ? "مطابخ منزلية مخصصة" : "Custom Home Kitchens",
      subtitle: isRTL ? "حلول سكنية حديثة" : "Modern Residential Solutions",
      description: isRTL ? "حلول مطابخ منزلية حديثة ومتينة مع خزائن مصممة خصيصاً." : "Modern and durable home kitchen solutions with custom cabinetry.",
      features: isRTL ? ["تصميم مخصص", "أسطح راقية", "حلول تخزين", "تشطيب متميز"] : ["Custom Design", "Premium Countertops", "Storage Solutions", "Premium Finish"]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/4092032/pexels-photo-4092032.jpeg?w=1920&q=80",
      category: isRTL ? "تصنيع الفولاذ" : "Stainless Steel",
      title: isRTL ? "أحواض وطاولات عمل" : "Sinks & Work Tables",
      subtitle: isRTL ? "أثاث مطابخ احترافي" : "Professional Kitchen Furniture",
      description: isRTL ? "أسطح عمل من الفولاذ المقاوم للصدأ وأحواض ووحدات." : "Stainless steel countertops, sinks, and shelving units.",
      features: isRTL ? ["طاولات عمل", "أحواض متعددة", "عربات متحركة", "أنظمة رفوف"] : ["Work Tables", "Multi-Compartment Sinks", "Mobile Trolleys", "Shelving Systems"]
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg?w=1920&q=80",
      category: isRTL ? "تصنيع الفولاذ" : "Stainless Steel",
      title: isRTL ? "تصنيع صالح للأغذية" : "Food-Grade Fabrication",
      subtitle: isRTL ? "امتثال لمعايير السلامة" : "Safety Standards Compliance",
      description: isRTL ? "ضمان الامتثال للنظافة مع معايير سلامة الأغذية الدولية." : "Ensuring hygiene compliance with international food safety standards.",
      features: isRTL ? ["معتمد NSF", "معايير صحية", "سهل التنظيف", "مقاوم للتآكل"] : ["NSF Certified", "Sanitary Standards", "Easy to Clean", "Corrosion Resistant"]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/33924060/pexels-photo-33924060.jpeg?w=1920&q=80",
      category: isRTL ? "تصنيع الفولاذ" : "Stainless Steel",
      title: isRTL ? "تصميم وتركيب مخصص" : "Custom Design & Installation",
      subtitle: isRTL ? "من المفهوم إلى الإنجاز" : "From Concept to Completion",
      description: isRTL ? "دعم تصميم ثلاثي الأبعاد وتصنيع دقيق وتركيب احترافي." : "3D design support, precise fabrication, and professional installation.",
      features: isRTL ? ["نماذج ثلاثية الأبعاد", "تصنيع دقيق", "تركيب خبير", "ضمان الجودة"] : ["3D Modeling", "Precise Fabrication", "Expert Installation", "Quality Assurance"]
    },

    // Aluminum & Glass Works (5 images)
    {
      id: 7,
      image: "https://images.pexels.com/photos/8527494/pexels-photo-8527494.jpeg?w=1920&q=80",
      category: isRTL ? "الألمنيوم والزجاج" : "Aluminum & Glass",
      title: isRTL ? "نوافذ وأبواب مخصصة" : "Custom Windows & Doors",
      subtitle: isRTL ? "حلول موفرة للطاقة" : "Energy-Efficient Solutions",
      description: isRTL ? "نوافذ وأبواب مصممة خصيصاً ومتينة وموفرة للطاقة." : "Custom-designed, durable, and energy-efficient windows and doors.",
      features: isRTL ? ["إطارات ألمنيوم", "زجاج مزدوج", "موفر للطاقة", "عازل للصوت"] : ["Aluminum Frames", "Double Glazing", "Energy Saving", "Sound Insulation"]
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/33903294/pexels-photo-33903294.jpeg?w=1920&q=80",
      category: isRTL ? "الألمنيوم والزجاج" : "Aluminum & Glass",
      title: isRTL ? "أنظمة الجدران الستارية" : "Curtain Wall Systems",
      subtitle: isRTL ? "واجهات حديثة" : "Modern Facades",
      description: isRTL ? "أنظمة عالية الأداء تجمع بين الجماليات والسلامة الهيكلية." : "High-performance systems combining aesthetics and structural integrity.",
      features: isRTL ? ["واجهات زجاجية", "أنظمة هيكلية", "عزل حراري", "تصميم معماري"] : ["Glass Facades", "Structural Systems", "Thermal Insulation", "Architectural Design"]
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/13181569/pexels-photo-13181569.jpeg?w=1920&q=80",
      category: isRTL ? "الألمنيوم والزجاج" : "Aluminum & Glass",
      title: isRTL ? "فواصل زجاجية" : "Glass Partitions",
      subtitle: isRTL ? "حلول تقسيم حديثة" : "Modern Partitioning",
      description: isRTL ? "حلول تقسيم حديثة للمكاتب والمساحات التجارية." : "Modern partitioning solutions for offices and commercial spaces.",
      features: isRTL ? ["فواصل مكاتب", "واجهات محلات", "أبواب زجاجية", "تصميم معاصر"] : ["Office Partitions", "Shop Facades", "Glass Doors", "Contemporary Design"]
    },
    {
      id: 10,
      image: "https://images.pexels.com/photos/18435276/pexels-photo-18435276.jpeg?w=1920&q=80",
      category: isRTL ? "الألمنيوم والزجاج" : "Aluminum & Glass",
      title: isRTL ? "تجهيز المكاتب" : "Office Fit-Out",
      subtitle: isRTL ? "مساحات عمل مفتوحة" : "Open Workspace",
      description: isRTL ? "جدران وأبواب ومرفقات زجاجية للمكاتب المعاصرة." : "Glass walls, doors, and enclosures for contemporary interiors.",
      features: isRTL ? ["جدران زجاجية", "غرف اجتماعات", "مساحات مفتوحة", "تصميم حديث"] : ["Glass Walls", "Meeting Rooms", "Open Spaces", "Modern Design"]
    },
    
    
    {
      id: 18,
      image: "https://images.pexels.com/photos/8142055/pexels-photo-8142055.jpeg?w=1920&q=80",
      category: isRTL ? "الخشب والنجارة" : "Wood & Carpentry",
      title: isRTL ? "خزائن وخزانات" : "Cabinets & Wardrobes",
      subtitle: isRTL ? "حلول تخزين" : "Storage Solutions",
      description: isRTL ? "خزائن مطبخ وخزانات وحلول تخزين مصنوعة حسب الطلب." : "Kitchen cabinets, wardrobes, and storage solutions made to order.",
      features: isRTL ? ["خزائن مخصصة", "حلول تخزين", "تشطيبات راقية", "تصميم وظيفي"] : ["Custom Cabinets", "Storage Solutions", "Premium Finishes", "Functional Design"]
    },
   
  

    // Gypsum & Ceiling Works (5 images)
   
    
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlideData = slides[currentSlide];

  // Get unique categories with shortened names
  const categories = [...new Set(slides.map(slide => slide.category))];

  return (
    <section className="relative h-screen overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Image Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80';
              }}
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${
              isRTL 
                ? 'from-transparent via-[#02496a]/30 to-[#02496a]/90' 
                : 'from-[#02496a]/90 via-[#02496a]/30 to-transparent'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 w-full">
            <div className={`max-w-md sm:max-w-lg lg:max-w-2xl ${isRTL ? 'mr-0 ml-auto text-right' : 'ml-0 mr-auto text-left'}`}>
            
              {/* Category Badge */}
              <div className="mb-2 sm:mb-3">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#02496a]/95 backdrop-blur-sm text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold border border-[#eaae07]/60 shadow-lg">
                  <div className="w-1.5 h-1.5 bg-[#eaae07] rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="truncate max-w-[150px] sm:max-w-none">{currentSlideData.category}</span>
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight drop-shadow-2xl">
                {currentSlideData.title}
              </h1>

              {/* Decorative Line */}
              <div className={`w-12 sm:w-16 lg:w-20 h-0.5 bg-[#eaae07] mb-2 sm:mb-3 lg:mb-4 ${isRTL ? 'mr-auto' : 'ml-0'}`}></div>

              {/* Subtitle */}
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/95 mb-2 sm:mb-3 lg:mb-4 leading-relaxed">
                {currentSlideData.subtitle}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-100 mb-3 sm:mb-4 lg:mb-6 leading-relaxed drop-shadow-lg">
                {currentSlideData.description}
              </p>

              {/* Features List */}
              <div className="mb-4 sm:mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {currentSlideData.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center bg-white/10 backdrop-blur-sm rounded-md px-2 sm:px-3 py-1.5 sm:py-2 border border-white/20 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-1.5 h-1.5 bg-[#eaae07] rounded-full flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}></div>
                      <span className="text-xs sm:text-sm text-white font-medium truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#02496a]/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#02496a] transition-all duration-300 z-30 group border border-[#eaae07]/60 ${
          isRTL ? 'right-2 sm:right-3 lg:right-4' : 'left-2 sm:left-3 lg:left-4'
        }`}
        aria-label={isRTL ? "السابق" : "Previous"}
      >
        <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#02496a]/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#02496a] transition-all duration-300 z-30 group border border-[#eaae07]/60 ${
          isRTL ? 'left-2 sm:left-3 lg:left-4' : 'right-2 sm:right-3 lg:right-4'
        }`}
        aria-label={isRTL ? "التالي" : "Next"}
      >
        <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 flex items-center justify-between gap-2">
          
          {/* Slide Counter */}
          <div className="bg-[#02496a]/95 backdrop-blur-sm rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-white text-xs border border-[#eaae07]/60 shadow-lg flex-shrink-0">
            <span className="font-bold text-[#eaae07]">{currentSlide + 1}</span>
            <span className="text-white/70 mx-0.5">/</span>
            <span className="text-white/90">{slides.length}</span>
          </div>

          {/* Dot Indicators */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-2 bg-[#02496a]/95 backdrop-blur-sm rounded-full border border-[#eaae07]/60 shadow-lg overflow-x-auto max-w-xs lg:max-w-md">
            {slides.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 flex-shrink-0 ${
                  index === currentSlide 
                    ? 'w-6 sm:w-7 h-1.5 bg-[#eaae07] rounded-full' 
                    : 'w-1.5 h-1.5 bg-white/50 rounded-full hover:bg-white/75'
                }`}
                aria-label={`${isRTL ? 'شريحة' : 'Slide'} ${index + 1}`}
              />
            ))}
            {slides.length > 8 && (
              <span className="text-white/70 text-xs px-1 flex-shrink-0">+{slides.length - 8}</span>
            )}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-[#02496a]/95 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#02496a] transition-all duration-300 border border-[#eaae07]/60 shadow-lg flex-shrink-0"
            aria-label={isAutoPlaying ? (isRTL ? 'إيقاف' : 'Pause') : (isRTL ? 'تشغيل' : 'Play')}
          >
            {isAutoPlaying ? (
              <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
            ) : (
              <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#02496a]/20 z-20">
        <div 
          className="h-full bg-[#eaae07] transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying ? '100%' : '0%',
            transitionDuration: isAutoPlaying ? '6000ms' : '300ms'
          }}
        />
      </div>

      {/* Category Sidebar - Redesigned for better responsiveness */}
      <div className={`absolute top-20 sm:top-24 z-30 hidden xl:block ${isRTL ? 'left-3 lg:left-4' : 'right-3 lg:right-4'}`}>
        <div className="bg-[#02496a]/95 backdrop-blur-md rounded-xl p-3 w-60 border border-[#eaae07]/60 shadow-2xl">
          <div className="text-white text-xs font-bold mb-3 px-2 flex items-center gap-2">
            <div className="w-1 h-4 bg-[#eaae07] rounded-full flex-shrink-0"></div>
            <span className="truncate">{isRTL ? 'فئات الخدمات' : 'Service Categories'}</span>
          </div>
          <div className="space-y-1.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-1 custom-scrollbar">
            {categories.map((category) => {
              const categorySlideCount = slides.filter(s => s.category === category).length;
              const isActive = currentSlideData.category === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    const slideIndex = slides.findIndex(slide => slide.category === category);
                    goToSlide(slideIndex);
                  }}
                  className={`block w-full px-3 py-2.5 rounded-lg text-xs transition-all duration-300 ${
                    isActive
                      ? 'bg-[#eaae07] text-[#02496a] font-bold shadow-lg scale-105' 
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  } ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="leading-tight flex-1 min-w-0 truncate">{category}</span>
                    <span className={`flex-shrink-0 text-xs font-semibold px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-[#02496a] text-[#eaae07]' : 'bg-white/20 text-white/70'
                    }`}>
                      {categorySlideCount}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #eaae07;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d49b06;
        }
      `}</style>

    </section>
  );
};

export default Hero;