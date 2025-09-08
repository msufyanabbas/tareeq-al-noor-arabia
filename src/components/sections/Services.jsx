import React, { useState, useEffect } from 'react';
import { 
  ChefHat, 
  Building2, 
  Wrench, 
  TreePine, 
  Wind, 
  Zap, 
  Layers, 
  Palette,
  Droplets,
  ShoppingCart,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Award,
  Users,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../utils/i18n';
import TopCard from '../cards/TopCard';
import ServiceHistory from '../cards/ServiceHistory';

const Services = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="relative bg-[#035678]  py-12 sm:py-16 m-b-4 lg:py-20">
      <TopCard text={"Services"} />
      <ServiceHistory />
      </section>
  );
};

export default Services;