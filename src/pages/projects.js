import Head from 'next/head'
import { useState, useEffect } from 'react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { useTranslation } from '../utils/i18n'
import { useLanguage } from '../contexts/LanguageContext'
import { useRTLPosition } from '../utils/rtl'
import { projects } from '../utils/constants'

export default function ProjectsPage() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const { getTextAlign } = useRTLPosition()
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isLoading, setIsLoading] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  // Get unique categories from projects with proper translation keys
  const categories = [
    'All', 
    ...new Set(projects.map(project => {
      const categoryKey = project.category.replace('projects.categories.', '')
      return categoryKey
    }))
  ]

  // Filter projects based on selected category with loading state
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const filtered = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => {
            const categoryKey = project.category.replace('projects.categories.', '')
            return categoryKey === selectedCategory
          })
      setFilteredProjects(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedCategory])

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
  }

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeProjectModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      return () => document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isModalOpen])

  // Clean up body scroll on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const renderProjectCard = (project, index) => (
    <div 
      key={project.id} 
      className={`group cursor-pointer transition-all duration-500 ${
        isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}
      onClick={() => openProjectModal(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openProjectModal(project)
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${t(project.title)}`}
    >
      {/* Consistent Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
      
      <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105">
        {/* Project Image */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={project.image}
            alt={t(project.title)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Consistent Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/70 transition-all duration-500"></div>
          
          {/* Fallback placeholder */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 backdrop-blur-sm flex items-center justify-center text-white text-lg font-medium" 
            style={{display: 'none'}}
            aria-label="Project placeholder image"
          >
            🏗️ {t(project.category)}
          </div>
          
          {/* Status Badge */}
          <div className={`absolute top-4 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium border border-white/20 ${
            isRTL ? 'left-4' : 'right-4'
          }`}>
            <span className={`${
              t(project.status) === t('projects.status.completed') 
                ? 'text-emerald-400' 
                : 'text-blue-400'
            }`}>
              {t(project.status)}
            </span>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm">
          <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30">
              {t(project.category)}
            </span>
            <span className={`text-sm text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>
              {project.completionDate}
            </span>
          </div>
          
          <h3 className={`text-xl sm:text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t(project.title)}
          </h3>
          
          <p className={`text-gray-300 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3 ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t(project.description)}
          </p>
          
          <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span key={tagIndex} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">
                {t(tag)}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className={`flex items-center justify-between text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span>{project.size}</span>
            <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300">
              {t('learnMore')} →
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <title>{t('projectsPageTitle')}</title>
        <meta name="description" content={t('projectsPageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/projects" />
      </Head>
      
      <main className={`min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        
        {/* Consistent Dynamic Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Animated Gradient Orbs */}
          <div 
            className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full filter blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
            }}
          />
          <div 
            className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-600/30 to-cyan-600/30 rounded-full filter blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
              animationDelay: '2s'
            }}
          />
          <div 
            className="absolute -bottom-40 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-600/30 to-orange-600/30 rounded-full filter blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
              animationDelay: '4s'
            }}
          />
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-white/40 to-blue-300/40 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Grid Pattern */}
        <div 
          className="fixed inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <Container className="relative z-10">
            <div className="text-center py-16 sm:py-20 lg:py-28">
              <div className="max-w-4xl mx-auto">
                {/* Consistent Trust Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 shadow-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Premium Construction Projects</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                  {t('ourProjects')} <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">{t('projectsPageHeroHighlight')}</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                  {t('projectsPageHeroSubtitle')}
                </p>
                
                <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      {t('viewAllProjects')}
                    </div>
                  </button>
                  <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300">
                    {t('startNewProject')}
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Projects Stats Section */}
        <section className="py-12 sm:py-16 relative">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {[
                { number: '500+', label: t('projectsCompleted'), icon: '🏆' },
                { number: '6', label: t('projectCategories'), icon: '🏗️' },
                { number: '100%', label: t('projectSuccess'), icon: '✅' },
                { number: '24/7', label: t('projectSupport'), icon: '🛠️' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    {/* Consistent Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-white/10 shadow-xl">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-lg sm:text-xl text-gray-300 font-medium mb-2">
                        {stat.label}
                      </div>
                      <div className="text-2xl sm:text-3xl">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Project Categories Filter */}
        <section className="py-8 sm:py-12 relative">
          <Container>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t('projectCategories')}
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
                {t('projectCategoriesDescription')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-sm sm:text-base font-medium transition-all duration-300 backdrop-blur-sm border ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/50 transform scale-105 border-blue-400/50'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white shadow-lg border-white/20'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category === 'All' ? t('allProjects') : t(`projects.categories.${category}`)}
                </button>
              ))}
            </div>
            
            {/* Results count */}
            <div className="text-center mt-6">
              <p className="text-gray-400">
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </span>
                ) : (
                  `${filteredProjects.length} ${filteredProjects.length === 1 ? 'project' : 'projects'} found`
                )}
              </p>
            </div>
          </Container>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 lg:py-20 relative">
          <Container>
            {filteredProjects.length === 0 && !isLoading ? (
              <div className="text-center py-16">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
                  <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
                    <p className="text-gray-300 mb-6">Try selecting a different category or view all projects.</p>
                    <button 
                      onClick={() => setSelectedCategory('All')}
                      className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        View All Projects
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => renderProjectCard(project, index))}
              </div>
            )}
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative">
          <Container>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {t('whyChooseUs')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                {t('whyChooseUsDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {[
                {
                  icon: '🏆',
                  title: t('qualityAssurance'),
                  description: t('qualityAssuranceDescription')
                },
                {
                  icon: '⚡',
                  title: t('timelyDelivery'),
                  description: t('timelyDeliveryDescription')
                },
                {
                  icon: '💎',
                  title: t('premiumMaterials'),
                  description: t('premiumMaterialsDescription')
                },
                {
                  icon: '🤝',
                  title: t('expertTeam'),
                  description: t('expertTeamDescription')
                },
                {
                  icon: '📞',
                  title: t('customerSupport'),
                  description: t('customerSupportDescription')
                },
                {
                  icon: '✅',
                  title: t('guaranteedResults'),
                  description: t('guaranteedResultsDescription')
                }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    {/* Consistent Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mx-auto flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed px-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto px-4">
              <div className="relative">
                {/* Consistent Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                    {t('readyForYourProject')} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t('projectCtaHighlight')}</span>
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                    {t('projectsCtaDescription')}
                  </p>
                  <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        {t('startYourProject')}
                      </div>
                    </button>
                    <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300 text-lg">
                      {t('viewMoreProjects')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Enhanced Project Modal */}
      {selectedProject && isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" 
          onClick={closeProjectModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Consistent Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-50"></div>
            
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className={`absolute top-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 shadow-lg border border-white/20 ${
                  isRTL ? 'left-4' : 'right-4'
                }`}
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Project Image */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={selectedProject.image}
                  alt={t(selectedProject.title)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60"></div>
              </div>
              
              {/* Project Details */}
              <div className="p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm">
  <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium rounded-full border border-blue-400/30">
      {t(selectedProject.category)}
    </span>
    <span className={`text-sm text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>
      {selectedProject.completionDate}
    </span>
  </div>
  
  <h2 
    id="modal-title"
    className={`text-2xl sm:text-3xl font-bold text-white mb-4 ${isRTL ? 'text-right' : 'text-left'}`}
  >
    {t(selectedProject.title)}
  </h2>
  
  <p className={`text-gray-300 text-base sm:text-lg mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
    {t(selectedProject.description)}
  </p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
    <div>
      <h4 className={`font-semibold text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('projectDetails')}
      </h4>
      <div className="space-y-2">
        <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-gray-400 font-medium w-20">{t('size')}:</span>
          <span className="text-white">{selectedProject.size}</span>
        </div>
        <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-gray-400 font-medium w-20">{t('location')}:</span>
          <span className="text-white">{selectedProject.location}</span>
        </div>
        <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="text-gray-400 font-medium w-20">{t('status')}:</span>
          <span className={`font-medium ${
            t(selectedProject.status) === t('projects.status.completed') ? 'text-emerald-400' : 'text-blue-400'
          }`}>
            {t(selectedProject.status)}
          </span>
        </div>
      </div>
    </div>
    
    <div>
      <h4 className={`font-semibold text-white mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
        {t('projectFeatures')}
      </h4>
      <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
        {selectedProject.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20">
            {t(tag)}
          </span>
        ))}
      </div>
    </div>
  </div>
  
  <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
    <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        {t('getSimilarQuote')}
      </div>
    </button>
    <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
      {t('contactUs')}
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}