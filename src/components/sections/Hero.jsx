import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel slides data - just images
  const slides = [
    {
      id: 1,
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/slide-3-eng-mePJ6gV0p4cr6K88.jpg",
      alt: "Stainless steel kitchen"
    },
    {
      id: 2,
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/eng-slide-1-AQEZ2e2gzjHwy9VV.jpg",
      alt: "Modern glass building"
    },
    {
      id: 3,
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/eng-slide-2-YKblX8K9pMfGL0r5.jpg",
      alt: "Metal fabrication work"
    },
    {
      id: 4,
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/slide-4-eng-A3Q7DlkP10uV77oV.jpg",
      alt: "HVAC and electrical systems"
    },
    {
      id: 5,
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/slide-5-eng-Aq2JDGVWxEFwBo9L.jpg",
      alt: "Construction materials"
    },
    {
      id: 6,
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m6LDMak1J9CoP5xw/slide-6-eng-YbNJz4VLq5UQb0Q4.jpg",
      alt: "Construction materials"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000); // 4 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Image Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 z-30 group"
      >
        <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/30 transition-all duration-300 z-30 group"
      >
        <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center gap-2 px-4 py-3 bg-black/30 backdrop-blur-sm rounded-full">
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
      </div>

      {/* Auto-play Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <div 
          className="h-full bg-white/60 transition-all duration-100 ease-linear"
          style={{
            width: isAutoPlaying ? '100%' : '0%',
            transitionDuration: isAutoPlaying ? '4000ms' : '300ms'
          }}
        />
      </div>

    </section>
  );
};

export default Hero;