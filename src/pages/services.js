import { useState, useEffect } from 'react'
import Head from 'next/head'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { useTranslation } from '../utils/i18n'
import { useLanguage } from '../contexts/LanguageContext'
import { useRTLPosition } from '../utils/rtl'
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
  Phone,
  Star,
  Play,
  Shield,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Target,
  Clock,
  Zap as Lightning
} from 'lucide-react'
import Services from '@/components/sections/Services'

export default function ServicesPage() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const { getTextAlign } = useRTLPosition()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeService, setActiveService] = useState(0)

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Get services from translation data
  const services = t('services') || []

  const detailedServices = [
    {
      title: t('residentialConstructionTitle'),
      description: t('residentialConstructionDescription'),
      features: [
        t('residentialFeature1'),
        t('residentialFeature2'),
        t('residentialFeature3'),
        t('residentialFeature4'),
        t('residentialFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: ChefHat,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      accentColor: "border-blue-400"
    },
    {
      title: t('commercialConstructionTitle'),
      description: t('commercialConstructionDescription'),
      features: [
        t('commercialFeature1'),
        t('commercialFeature2'),
        t('commercialFeature3'),
        t('commercialFeature4'),
        t('commercialFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: Building2,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      accentColor: "border-emerald-400"
    },
    {
      title: t('renovationRemodelingTitle'),
      description: t('renovationRemodelingDescription'),
      features: [
        t('renovationFeature1'),
        t('renovationFeature2'),
        t('renovationFeature3'),
        t('renovationFeature4'),
        t('renovationFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: Wrench,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      accentColor: "border-amber-400"
    },
    {
      title: t('roofingServicesTitle'),
      description: t('roofingServicesDescription'),
      features: [
        t('roofingFeature1'),
        t('roofingFeature2'),
        t('roofingFeature3'),
        t('roofingFeature4'),
        t('roofingFeature5')
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=entropy&auto=format&q=75',
      icon: TreePine,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      accentColor: "border-purple-400"
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: t('processStep1Title'),
      description: t('processStep1Description'),
      icon: Phone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: '02',
      title: t('processStep2Title'),
      description: t('processStep2Description'),
      icon: Target,
      color: "from-emerald-500 to-teal-500"
    },
    {
      step: '03',
      title: t('processStep3Title'),
      description: t('processStep3Description'),
      icon: Lightning,
      color: "from-amber-500 to-orange-500"
    },
    {
      step: '04',
      title: t('processStep4Title'),
      description: t('processStep4Description'),
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: '500+', label: t('projectsCompleted'), icon: Award, color: "from-blue-500 to-cyan-500" },
    { number: '15+', label: t('yearsExperience'), icon: Star, color: "from-emerald-500 to-teal-500" },
    { number: '100+', label: t('happyClients'), icon: Users, color: "from-amber-500 to-orange-500" },
    { number: '24/7', label: t('supportAvailable'), icon: Shield, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <>
      <Head>
        <title>{t('servicesPageTitle')}</title>
        <meta name="description" content={t('servicesPageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Services />
    </>
  )
}