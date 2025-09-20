// src/components/sections/ProductsShowcase.jsx
import React, { useState } from 'react';
import { Home, Building2, Factory, Filter, Grid, List, Star, Award, Eye, ShoppingCart } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductsShowcase = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: t('products.categories.all'), icon: Grid },
    { id: 'residential', name: t('products.categories.residential'), icon: Home },
    { id: 'commercial', name: t('products.categories.commercial'), icon: Building2 },
    { id: 'industrial', name: t('products.categories.industrial'), icon: Factory }
  ];

  const products = [
    // Residential Products
    {
      id: 'aluminum-windows',
      category: 'residential',
      name: t('products.residential.aluminumWindows.name'),
      description: t('products.residential.aluminumWindows.description'),
      features: [
        t('products.residential.aluminumWindows.feature1'),
        t('products.residential.aluminumWindows.feature2'),
        t('products.residential.aluminumWindows.feature3'),
        t('products.residential.aluminumWindows.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: true
    },
    {
      id: 'aluminum-doors',
      category: 'residential',
      name: t('products.residential.aluminumDoors.name'),
      description: t('products.residential.aluminumDoors.description'),
      features: [
        t('products.residential.aluminumDoors.feature1'),
        t('products.residential.aluminumDoors.feature2'),
        t('products.residential.aluminumDoors.feature3'),
        t('products.residential.aluminumDoors.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'glass-railings',
      category: 'residential',
      name: t('products.residential.glassRailings.name'),
      description: t('products.residential.glassRailings.description'),
      features: [
        t('products.residential.glassRailings.feature1'),
        t('products.residential.glassRailings.feature2'),
        t('products.residential.glassRailings.feature3'),
        t('products.residential.glassRailings.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 'steel-doors',
      category: 'residential',
      name: t('products.residential.steelDoors.name'),
      description: t('products.residential.steelDoors.description'),
      features: [
        t('products.residential.steelDoors.feature1'),
        t('products.residential.steelDoors.feature2'),
        t('products.residential.steelDoors.feature3'),
        t('products.residential.steelDoors.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1558618047-3c8676c3d83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    
    // Commercial Products
    {
      id: 'curtain-walls',
      category: 'commercial',
      name: t('products.commercial.curtainWalls.name'),
      description: t('products.commercial.curtainWalls.description'),
      features: [
        t('products.commercial.curtainWalls.feature1'),
        t('products.commercial.curtainWalls.feature2'),
        t('products.commercial.curtainWalls.feature3'),
        t('products.commercial.curtainWalls.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 'fire-rated-doors',
      category: 'commercial',
      name: t('products.commercial.fireRatedDoors.name'),
      description: t('products.commercial.fireRatedDoors.description'),
      features: [
        t('products.commercial.fireRatedDoors.feature1'),
        t('products.commercial.fireRatedDoors.feature2'),
        t('products.commercial.fireRatedDoors.feature3'),
        t('products.commercial.fireRatedDoors.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'emergency-stairs',
      category: 'commercial',
      name: t('products.commercial.emergencyStairs.name'),
      description: t('products.commercial.emergencyStairs.description'),
      features: [
        t('products.commercial.emergencyStairs.feature1'),
        t('products.commercial.emergencyStairs.feature2'),
        t('products.commercial.emergencyStairs.feature3'),
        t('products.commercial.emergencyStairs.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'stainless-railings',
      category: 'commercial',
      name: t('products.commercial.stainlessRailings.name'),
      description: t('products.commercial.stainlessRailings.description'),
      features: [
        t('products.commercial.stainlessRailings.feature1'),
        t('products.commercial.stainlessRailings.feature2'),
        t('products.commercial.stainlessRailings.feature3'),
        t('products.commercial.stainlessRailings.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      popular: true
    },

    // Industrial Products
    {
      id: 'industrial-gates',
      category: 'industrial',
      name: t('products.industrial.industrialGates.name'),
      description: t('products.industrial.industrialGates.description'),
      features: [
        t('products.industrial.industrialGates.feature1'),
        t('products.industrial.industrialGates.feature2'),
        t('products.industrial.industrialGates.feature3'),
        t('products.industrial.industrialGates.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'metal-fencing',
      category: 'industrial',
      name: t('products.industrial.metalFencing.name'),
      description: t('products.industrial.metalFencing.description'),
      features: [
        t('products.industrial.metalFencing.feature1'),
        t('products.industrial.metalFencing.feature2'),
        t('products.industrial.metalFencing.feature3'),
        t('products.industrial.metalFencing.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1558618047-3c8676c3d83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sand-trap-louvers',
      category: 'industrial',
      name: t('products.industrial.sandTrapLouvers.name'),
      description: t('products.industrial.sandTrapLouvers.description'),
      features: [
        t('products.industrial.sandTrapLouvers.feature1'),
        t('products.industrial.sandTrapLouvers.feature2'),
        t('products.industrial.sandTrapLouvers.feature3'),
        t('products.industrial.sandTrapLouvers.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cage-ladders',
      category: 'industrial',
      name: t('products.industrial.cageLadders.name'),
      description: t('products.industrial.cageLadders.description'),
      features: [
        t('products.industrial.cageLadders.feature1'),
        t('products.industrial.cageLadders.feature2'),
        t('products.industrial.cageLadders.feature3'),
        t('products.industrial.cageLadders.feature4')
      ],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const ProductCard = ({ product }) => (
    <div className="group relative">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
        {/* Product Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.featured && (
              <span className="bg-[#eaae07] text-[#02496a] text-xs font-bold px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {product.popular && (
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors border border-white/20">
              <Eye className="w-5 h-5" />
            </button>
            <button className="bg-[#eaae07] text-[#02496a] p-3 rounded-full hover:bg-[#d49b06] transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#eaae07] mb-3 group-hover:text-white transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-200 text-sm mb-4 leading-relaxed">
            {product.description}
          </p>
          
          {/* Features */}
          <ul className="space-y-1 mb-6">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-start">
                <Star className="w-3 h-3 text-[#eaae07] mr-2 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Button */}
          <button className="w-full bg-[#eaae07] text-[#02496a] py-3 px-4 rounded-lg font-bold hover:bg-[#d49b06] transition-colors duration-300">
            {t('products.learnMore')}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#02496a] text-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center m-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('products.title')}
            </h1>
            <div className="w-24 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Product Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">50+</div>
              <div className="text-gray-200">{t('products.stats.totalProducts')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">3</div>
              <div className="text-gray-200">{t('products.stats.categories')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">15+</div>
              <div className="text-gray-200">{t('products.stats.yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#eaae07] mb-2">100%</div>
              <div className="text-gray-200">{t('products.stats.qualityGuarantee')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 border ${
                    activeCategory === category.id
                      ? 'bg-[#eaae07] text-[#02496a] border-[#eaae07]'
                      : 'bg-white/10 text-white hover:bg-white/20 border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-gray-200 font-medium">
                {filteredProducts.length} {t('products.resultsFound')}
              </span>
              <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-[#eaae07] text-[#02496a]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-[#eaae07] text-[#02496a]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 max-w-md mx-auto">
                <Filter className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-gray-300 mb-6">Try selecting a different category or view all products.</p>
                <button 
                  onClick={() => setActiveCategory('all')}
                  className="bg-[#eaae07] text-[#02496a] px-6 py-3 rounded-lg font-bold hover:bg-[#d49b06] transition-colors"
                >
                  View All Products
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#02496a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('products.quality.title')}
            </h2>
            <div className="w-16 h-1 bg-[#eaae07] mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('products.quality.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('products.quality.certification.title'),
                description: t('products.quality.certification.description')
              },
              {
                icon: Star,
                title: t('products.quality.materials.title'),
                description: t('products.quality.materials.description')
              },
              {
                icon: Factory,
                title: t('products.quality.manufacturing.title'),
                description: t('products.quality.manufacturing.description')
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 h-full">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#eaae07] rounded-full flex items-center justify-center">
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

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#035678]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('products.cta.title')}
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {t('products.cta.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button className="bg-[#eaae07] text-[#02496a] px-8 py-4 rounded-lg font-bold hover:bg-[#d49b06] transition-colors duration-300 text-lg">
                {t('products.cta.catalog')}
              </button>
              <button className="border-2 border-[#eaae07] text-[#eaae07] px-8 py-4 rounded-lg font-bold hover:bg-[#eaae07] hover:text-[#02496a] transition-colors duration-300 text-lg">
                {t('products.cta.quote')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsShowcase;