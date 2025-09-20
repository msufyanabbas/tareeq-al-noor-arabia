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

  // Comprehensive slides data with categorized images and descriptions
  const slides = [
    // Hood/Kitchen Equipment (5 images)
    {
      id: 1,
      image: "/services/hood/hood1.jpg",
      category: isRTL ? "معدات المطابخ" : "Kitchen Equipment",
      title: isRTL ? "شفاطات المطابخ المهنية" : "Professional Kitchen Hoods",
      subtitle: isRTL ? "أنظمة العادم التجارية" : "Commercial Exhaust Systems",
      description: isRTL ? "شفاطات مطابخ من الستانلس ستيل مخصصة مصممة للتهوية المثلى والامتثال للوائح الصحية." : "Custom stainless steel kitchen hoods designed for optimal ventilation and compliance with health regulations.",
      features: isRTL ? ["بناء من الستانلس ستيل", "أحجام مخصصة", "موفر للطاقة", "صيانة سهلة"] : ["Stainless Steel Construction", "Custom Sizing", "Energy Efficient", "Easy Maintenance"]
    },
    {
      id: 2,
      image: "/services/hood/hood2.jpg",
      category: isRTL ? "معدات المطابخ" : "Kitchen Equipment",
      title: isRTL ? "أنظمة الشفاطات الصناعية" : "Industrial Hood Systems",
      subtitle: isRTL ? "تهوية فائقة التحمل" : "Heavy-Duty Ventilation",
      description: isRTL ? "أنظمة شفاطات قوية للمطابخ الصناعية والمطاعم ومنشآت معالجة الأغذية." : "Robust hood systems for industrial kitchens, restaurants, and food processing facilities.",
      features: isRTL ? ["استخلاص عالي الحجم", "متوافق مع السلامة من الحرائق", "مواد متينة", "تركيب مهني"] : ["High-Volume Extraction", "Fire Safety Compliant", "Durable Materials", "Professional Installation"]
    },
    {
      id: 3,
      image: "/services/hood/hood3.jpg",
      category: isRTL ? "معدات المطابخ" : "Kitchen Equipment",
      title: isRTL ? "حلول الشفاطات المخصصة" : "Custom Hood Solutions",
      subtitle: isRTL ? "تصميم تهوية مصمم خصيصاً" : "Tailored Ventilation Design",
      description: isRTL ? "تصاميم شفاطات مطابخ مخصصة تتكامل بسلاسة مع تخطيط مطبخك التجاري." : "Bespoke kitchen hood designs that integrate seamlessly with your commercial kitchen layout.",
      features: isRTL ? ["تصميم مخصص", "ملائمة مثالية", "جاذبية جمالية", "أداء مثالي"] : ["Custom Design", "Perfect Fit", "Aesthetic Appeal", "Optimal Performance"]
    },
    {
      id: 4,
      image: "/services/hood/hood4.jpg",
      category: isRTL ? "معدات المطابخ" : "Kitchen Equipment",
      title: isRTL ? "تكنولوجيا الشفاطات الحديثة" : "Modern Hood Technology",
      subtitle: isRTL ? "أنظمة تهوية متقدمة" : "Advanced Ventilation Systems",
      description: isRTL ? "شفاطات مطابخ حديثة مع أنظمة تحكم ذكية وتشغيل موفر للطاقة." : "State-of-the-art kitchen hoods with smart controls and energy-efficient operation.",
      features: isRTL ? ["أنظمة تحكم ذكية", "توفير الطاقة", "تشغيل هادئ", "مراقبة عن بُعد"] : ["Smart Controls", "Energy Saving", "Quiet Operation", "Remote Monitoring"]
    },
    {
      id: 5,
      image: "/services/hood/hood5.jpg",
      category: isRTL ? "معدات المطابخ" : "Kitchen Equipment",
      title: isRTL ? "تركيب الشفاطات الكامل" : "Complete Hood Installation",
      subtitle: isRTL ? "إعداد وخدمة مهنية" : "Professional Setup & Service",
      description: isRTL ? "خدمة كاملة للتركيب والصيانة لأنظمة تهوية المطابخ التجارية." : "Full-service installation and maintenance of commercial kitchen ventilation systems.",
      features: isRTL ? ["تركيب خبير", "ضمان الجودة", "دعم ما بعد البيع", "ضمان شامل"] : ["Expert Installation", "Quality Assurance", "After-Sales Support", "Warranty Included"]
    },

    // Tables (2 images)
    {
      id: 6,
      image: "/services/tables/table1.jpg",
      category: isRTL ? "أثاث المطابخ" : "Kitchen Furniture",
      title: isRTL ? "طاولات عمل من الستانلس ستيل" : "Stainless Steel Work Tables",
      subtitle: isRTL ? "أسطح مطابخ مهنية" : "Professional Kitchen Surfaces",
      description: isRTL ? "طاولات عمل متينة من الستانلس ستيل مثالية للمطابخ التجارية ومناطق تحضير الطعام." : "Durable stainless steel work tables perfect for commercial kitchens and food preparation areas.",
      features: isRTL ? ["فولاذ درجة غذائية", "سهل التنظيف", "ارتفاع قابل للتعديل", "أحجام متنوعة"] : ["Food-Grade Steel", "Easy to Clean", "Adjustable Height", "Various Sizes"]
    },
    {
      id: 7,
      image: "/services/tables/table2.jpg",
      category: isRTL ? "أثاث المطابخ" : "Kitchen Furniture",
      title: isRTL ? "طاولات مطابخ مخصصة" : "Custom Kitchen Tables",
      subtitle: isRTL ? "حلول مصنوعة حسب الطلب" : "Made-to-Order Solutions",
      description: isRTL ? "طاولات عمل مصممة خصيصاً تناسب تخطيط مطبخك المحدد والاحتياجات التشغيلية." : "Custom-designed work tables tailored to your specific kitchen layout and operational needs.",
      features: isRTL ? ["أبعاد مخصصة", "أرفف متعددة", "خيارات حركة", "تخزين متكامل"] : ["Custom Dimensions", "Multiple Shelves", "Mobility Options", "Integrated Storage"]
    },

    // Sinks (2 images)
    {
      id: 8,
      image: "/services/sink/sink1.jpg",
      category: isRTL ? "معدات الصرف الصحي" : "Sanitation Equipment",
      title: isRTL ? "أحواض المطابخ التجارية" : "Commercial Kitchen Sinks",
      subtitle: isRTL ? "محطات غسيل مهنية" : "Professional Washing Stations",
      description: isRTL ? "أحواض فائقة التحمل من الستانلس ستيل مصممة لعمليات المطابخ التجارية عالية الحجم." : "Heavy-duty stainless steel sinks designed for high-volume commercial kitchen operations.",
      features: isRTL ? ["حجرات متعددة", "أحواض عميقة", "واقيات الرذاذ", "ألواح تصريف"] : ["Multiple Compartments", "Deep Basins", "Splash Guards", "Drain Boards"]
    },
    {
      id: 9,
      image: "/services/sink/sink2.jpg",
      category: isRTL ? "معدات الصرف الصحي" : "Sanitation Equipment",
      title: isRTL ? "أنظمة أحواض متخصصة" : "Specialized Sink Systems",
      subtitle: isRTL ? "حلول غسيل مخصصة" : "Custom Washing Solutions",
      description: isRTL ? "تكوينات أحواض متخصصة لغسيل الأطباق وتحضير الطعام ومتطلبات الصرف الصحي." : "Specialized sink configurations for dishwashing, food prep, and sanitation requirements.",
      features: isRTL ? ["رشاشات الشطف المسبق", "موزعات الصابون", "جاهز للماء الساخن", "معتمد NSF"] : ["Pre-Rinse Sprays", "Soap Dispensers", "Hot Water Ready", "NSF Certified"]
    },

    // Stands (3 images)
    {
      id: 10,
      image: "/services/stands/stand1.jpg",
      category: isRTL ? "معدات الدعم" : "Support Equipment",
      title: isRTL ? "حوامل المعدات" : "Equipment Stands",
      subtitle: isRTL ? "حلول منصات مستقرة" : "Stable Platform Solutions",
      description: isRTL ? "حوامل قوية من الستانلس ستيل لدعم معدات المطابخ الثقيلة والآلات." : "Robust stainless steel stands for supporting heavy kitchen equipment and machinery.",
      features: isRTL ? ["دعم فائق التحمل", "أرجل قابلة للتعديل", "مقاوم للتآكل", "تجميع سهل"] : ["Heavy-Duty Support", "Adjustable Legs", "Corrosion Resistant", "Easy Assembly"]
    },
    {
      id: 11,
      image: "/services/stands/stand2.jpg",
      category: isRTL ? "معدات الدعم" : "Support Equipment",
      title: isRTL ? "قواعد معدات مخصصة" : "Custom Equipment Bases",
      subtitle: isRTL ? "أنظمة دعم مصممة خصيصاً" : "Tailored Support Systems",
      description: isRTL ? "حوامل مصممة هندسياً خصيصاً لتناسب متطلبات معداتك المحددة تماماً." : "Custom-engineered stands designed to perfectly fit your specific equipment requirements.",
      features: isRTL ? ["ملائمة مثالية", "مقنن للحمولة", "تخميد الاهتزاز", "خيارات حركة"] : ["Perfect Fit", "Load Rated", "Vibration Dampening", "Mobility Options"]
    },
    {
      id: 12,
      image: "/services/stands/stand3.jpg",
      category: isRTL ? "معدات الدعم" : "Support Equipment",
      title: isRTL ? "حوامل معدات متحركة" : "Mobile Equipment Stands",
      subtitle: isRTL ? "وضعية مرنة" : "Flexible Positioning",
      description: isRTL ? "حوامل متحركة مع عجلات قفل لوضعية معدات مرنة وتنظيف سهل." : "Mobile stands with locking casters for flexible equipment positioning and easy cleaning.",
      features: isRTL ? ["عجلات قفل", "حركة سهلة", "منصة مستقرة", "إعداد سريع"] : ["Locking Casters", "Easy Movement", "Stable Platform", "Quick Setup"]
    },

    // Duct (3 images)
    {
      id: 13,
      image: "/services/duct/duct1.jpg",
      category: isRTL ? "أنظمة التكييف" : "HVAC Systems",
      title: isRTL ? "أنابيب التهوية" : "Ventilation Ductwork",
      subtitle: isRTL ? "أنظمة توزيع الهواء" : "Air Distribution Systems",
      description: isRTL ? "أنابيب مصنعة بدقة لتوزيع الهواء بكفاءة في المنشآت التجارية والصناعية." : "Precision-fabricated ductwork for efficient air distribution in commercial and industrial facilities.",
      features: isRTL ? ["تصنيع مخصص", "تدفق هواء مثالي", "خيارات عزل", "تركيب سهل"] : ["Custom Fabrication", "Optimal Airflow", "Insulated Options", "Easy Installation"]
    },
    {
      id: 14,
      image: "/services/duct/duct2.jpg",
      category: isRTL ? "أنظمة التكييف" : "HVAC Systems",
      title: isRTL ? "أنظمة الأنابيب الصناعية" : "Industrial Duct Systems",
      subtitle: isRTL ? "تعامل مع الهواء فائق التحمل" : "Heavy-Duty Air Handling",
      description: isRTL ? "حلول أنابيب قوية للتطبيقات الصناعية التي تتطلب حركة هواء عالية الحجم." : "Robust ductwork solutions for industrial applications requiring high-volume air movement.",
      features: isRTL ? ["سعة عالية الحجم", "بناء مقوى", "مقاوم للحرارة", "صيانة قليلة"] : ["High-Volume Capacity", "Reinforced Construction", "Temperature Resistant", "Low Maintenance"]
    },
    {
      id: 15,
      image: "/services/duct/duct3.jpg",
      category: isRTL ? "أنظمة التكييف" : "HVAC Systems",
      title: isRTL ? "تصنيع أنابيب متخصصة" : "Specialty Duct Fabrication",
      subtitle: isRTL ? "حلول هواء مخصصة" : "Custom Air Solutions",
      description: isRTL ? "أنابيب متخصصة للتطبيقات الفريدة بما في ذلك الغرف النظيفة وتهوية العمليات." : "Specialized ductwork for unique applications including clean rooms and process ventilation.",
      features: isRTL ? ["جاهز للغرف النظيفة", "طلاءات خاصة", "وصلات دقيقة", "اختبار الجودة"] : ["Clean Room Ready", "Special Coatings", "Precision Joints", "Quality Testing"]
    },

    // Doors (2 images)
    {
      id: 16,
      image: "/services/doors/door1.jpg",
      category: isRTL ? "حلول الوصول" : "Access Solutions",
      title: isRTL ? "الأبواب الصناعية" : "Industrial Doors",
      subtitle: isRTL ? "تحكم في الوصول فائق التحمل" : "Heavy-Duty Access Control",
      description: isRTL ? "أبواب صناعية متينة مصممة للبيئات التجارية والصناعية عالية الحركة." : "Durable industrial doors designed for high-traffic commercial and industrial environments.",
      features: isRTL ? ["مكونات فائقة التحمل", "ميزات الأمان", "مقاوم للطقس", "أحجام مخصصة"] : ["Heavy-Duty Hardware", "Security Features", "Weather Resistant", "Custom Sizing"]
    },
    {
      id: 17,
      image: "/services/doors/door2.jpg",
      category: isRTL ? "حلول الوصول" : "Access Solutions",
      title: isRTL ? "أنظمة أبواب متخصصة" : "Specialized Door Systems",
      subtitle: isRTL ? "حلول وصول مخصصة" : "Custom Access Solutions",
      description: isRTL ? "أنظمة أبواب مخصصة تشمل مقاومة الحريق والعزل وأبواب الوصول المتخصصة." : "Custom door systems including fire-rated, insulated, and specialized access doors.",
      features: isRTL ? ["خيارات مقاومة الحريق", "عزل متوفر", "أقفال أمان", "تركيب مهني"] : ["Fire Rated Options", "Insulation Available", "Security Locks", "Professional Installation"]
    },

    // Drains (2 images)
    {
      id: 18,
      image: "/services/drains/drain1.jpg",
      category: isRTL ? "أنظمة الصرف" : "Drainage Systems",
      title: isRTL ? "حلول تصريف الأرضيات" : "Floor Drainage Solutions",
      subtitle: isRTL ? "إدارة مياه فعالة" : "Efficient Water Management",
      description: isRTL ? "مصارف أرضيات وأنظمة صرف ذات جودة مهنية للاستخدام في المطابخ التجارية والصناعية." : "Professional-grade floor drains and drainage systems for commercial kitchen and industrial use.",
      features: isRTL ? ["مواد آمنة للطعام", "تنظيف سهل", "مكافحة الروائح", "سعة تدفق عالية"] : ["Food-Safe Materials", "Easy Cleaning", "Odor Control", "High Flow Capacity"]
    },
    {
      id: 19,
      image: "/services/drains/drain2.jpg",
      category: isRTL ? "أنظمة الصرف" : "Drainage Systems",
      title: isRTL ? "أنظمة تصريف مخصصة" : "Custom Drain Systems",
      subtitle: isRTL ? "حلول تصريف مصممة خصيصاً" : "Tailored Drainage Solutions",
      description: isRTL ? "أنظمة تصريف مصممة خصيصاً لتلبية متطلبات المنشآت المحددة والرموز المحلية." : "Custom-designed drainage systems to meet specific facility requirements and local codes.",
      features: isRTL ? ["متوافق مع الرموز", "شبكات مخصصة", "مصائد الرواسب", "وصول الصيانة"] : ["Code Compliant", "Custom Grating", "Sediment Traps", "Maintenance Access"]
    },

    // Baskets (2 images)
    {
      id: 20,
      image: "/services/baskets/basket1.jpg",
      category: isRTL ? "حلول التخزين" : "Storage Solutions",
      title: isRTL ? "سلال تخزين سلكية" : "Wire Storage Baskets",
      subtitle: isRTL ? "أنظمة تخزين منظمة" : "Organized Storage Systems",
      description: isRTL ? "سلال سلكية متينة للتخزين المنظم في المطابخ التجارية والمنشآت الصناعية." : "Durable wire baskets for organized storage in commercial kitchens and industrial facilities.",
      features: isRTL ? ["سلك ستانلس ستيل", "تصميم قابل للتكديس", "وصول سهل", "تخزين مهوى"] : ["Stainless Steel Wire", "Stackable Design", "Easy Access", "Ventilated Storage"]
    },
    {
      id: 21,
      image: "/services/baskets/basket2.jpg",
      category: isRTL ? "حلول التخزين" : "Storage Solutions",
      title: isRTL ? "سلال تخزين مخصصة" : "Custom Storage Baskets",
      subtitle: isRTL ? "تنظيم مصمم خصيصاً" : "Tailored Organization",
      description: isRTL ? "سلال تخزين بأحجام مخصصة مصممة لزيادة كفاءة المساحة وتدفق العمل التشغيلي." : "Custom-sized storage baskets designed to maximize space efficiency and operational workflow.",
      features: isRTL ? ["أبعاد مخصصة", "خيارات متحركة", "مناطق التسمية", "تنظيف سهل"] : ["Custom Dimensions", "Mobile Options", "Label Areas", "Easy Cleaning"]
    },

    // Ring (2 images)
    {
      id: 22,
      image: "/services/ring/ring1.jpg",
      category: isRTL ? "المكونات الهيكلية" : "Structural Components",
      title: isRTL ? "تصنيع الحلقات المعدنية" : "Metal Ring Fabrication",
      subtitle: isRTL ? "مكونات دائرية بدقة" : "Precision Circular Components",
      description: isRTL ? "حلقات معدنية مصنعة بدقة للتطبيقات الصناعية والمكونات الهيكلية." : "Precision-fabricated metal rings for industrial applications and structural components.",
      features: isRTL ? ["أبعاد دقيقة", "مواد متنوعة", "بناء ملحوم", "أحجام مخصصة"] : ["Precise Dimensions", "Various Materials", "Welded Construction", "Custom Sizing"]
    },
    {
      id: 23,
      image: "/services/ring/ring2.jpg",
      category: isRTL ? "المكونات الهيكلية" : "Structural Components",
      title: isRTL ? "أنظمة حلقات متخصصة" : "Specialized Ring Systems",
      subtitle: isRTL ? "حلول دائرية مخصصة" : "Custom Circular Solutions",
      description: isRTL ? "مكونات حلقات متخصصة للتطبيقات الفريدة بما في ذلك الهياكل الداعمة وأنظمة التركيب." : "Specialized ring components for unique applications including support structures and mounting systems.",
      features: isRTL ? ["دعم هندسي", "حسابات الحمولة", "حماية من التآكل", "ضمان الجودة"] : ["Engineering Support", "Load Calculations", "Corrosion Protection", "Quality Assurance"]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // 5 seconds per slide for more reading time
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

  return (
    <section className="relative h-screen overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      
      {/* Image Container with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder or alternative image
                e.target.src = 'https://via.placeholder.com/1920x1080/02496a/ffffff?text=Tariq+Al+Nur+Al+Arabi';
              }}
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${
              isRTL 
                ? 'from-transparent via-black/20 to-black/70' 
                : 'from-black/70 via-black/20 to-transparent'
            }`}></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className={`max-w-2xl ${isRTL ? 'mr-4 ml-auto text-right' : 'ml-4 mr-auto text-left'} lg:${isRTL ? 'mr-8' : 'ml-8'}`}>
            
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block bg-[#02496a]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                  {currentSlideData.category}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                {currentSlideData.title}
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-6 leading-relaxed">
                {currentSlideData.subtitle}
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                {currentSlideData.description}
              </p>

              {/* Features List */}
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-3">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className={`flex items-center text-white ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-2 h-2 bg-white rounded-full flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <button className="bg-[#02496a] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#035678] transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/30">
                  {isRTL ? 'اعرف المزيد' : 'Learn More'}
                </button>
                <button className="bg-[#02496a]/80 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#02496a] transition-all duration-300 border border-white/30">
                  {isRTL ? 'احصل على عرض سعر' : 'Get Quote'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-[#02496a]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#02496a] transition-all duration-300 z-30 group border border-white/30 ${
          isRTL ? 'right-6' : 'left-6'
        }`}
      >
        <ChevronLeft className={`w-6 h-6 text-white group-hover:scale-110 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-[#02496a]/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-[#02496a] transition-all duration-300 z-30 group border border-white/30 ${
          isRTL ? 'left-6' : 'right-6'
        }`}
      >
        <ChevronRight className={`w-6 h-6 text-white group-hover:scale-110 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Slide Counter */}
          <div className="bg-[#02496a]/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm border border-white/30">
            <span className="font-semibold">{currentSlide + 1}</span>
            <span className="text-white/70"> / {slides.length}</span>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#02496a]/90 backdrop-blur-sm rounded-full border border-white/30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 h-2 bg-white rounded-full' 
                    : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="w-10 h-10 bg-[#02496a]/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#02496a] transition-all duration-300 border border-white/30"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Auto-play Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#02496a]/20 z-20">
        <div 
          className="h-full bg-white/80 transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying ? '100%' : '0%',
            transitionDuration: isAutoPlaying ? '5000ms' : '300ms'
          }}
        />
      </div>

      {/* Category Navigation (Optional) */}
      <div className={`absolute top-24 z-30 hidden lg:block ${isRTL ? 'left-6' : 'right-6'}`}>
        <div className="bg-[#02496a]/90 backdrop-blur-sm rounded-lg p-2 max-w-xs border border-white/30">
          <div className="text-white text-sm font-semibold mb-2 px-2">
            {isRTL ? 'الفئات' : 'Categories'}
          </div>
          <div className="space-y-1 max-h-96 overflow-y-auto">
            {[...new Set(slides.map(slide => slide.category))].map((category, index) => (
              <button
                key={category}
                onClick={() => {
                  const slideIndex = slides.findIndex(slide => slide.category === category);
                  goToSlide(slideIndex);
                }}
                className={`block w-full px-3 py-2 rounded text-sm transition-colors ${
                  currentSlideData.category === category 
                    ? 'bg-white text-[#02496a] font-semibold' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                } ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;