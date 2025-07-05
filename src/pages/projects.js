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

  // Get unique categories from projects with proper translation keys
  const categories = [
    'All', 
    ...new Set(projects.map(project => {
      // Extract category from translation key if it exists
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
    }, 300) // Small delay for smooth transition

    return () => clearTimeout(timer)
  }, [selectedCategory])

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
    // Restore body scroll
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
      className={`group cursor-pointer transition-all duration-300 ${
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
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Project Image */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={project.image}
            alt={t(project.title)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback placeholder */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex items-center justify-center text-gray-600 text-lg font-medium" 
            style={{display: 'none'}}
            aria-label="Project placeholder image"
          >
            🏗️ {t(project.category)}
          </div>
          
          {/* Status Badge */}
          <div className={`absolute top-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium ${
            isRTL ? 'left-4' : 'right-4'
          }`}>
            <span className={`${
              t(project.status) === t('projects.status.completed') ? 'text-green-600' : 'text-blue-600'
            }`}>
              {t(project.status)}
            </span>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="p-6">
          <div className={`flex items-center justify-between mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
              {t(project.category)}
            </span>
            <span className={`text-sm text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
              {project.completionDate}
            </span>
          </div>
          
          <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t(project.title)}
          </h3>
          
          <p className={`text-gray-600 text-sm sm:text-base mb-4 leading-relaxed line-clamp-3 ${
            isRTL ? 'text-right' : 'text-left'
          }`}>
            {t(project.description)}
          </p>
          
          <div className={`flex flex-wrap gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {t(tag)}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          <div className={`flex items-center justify-between text-sm text-gray-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <span>{project.size}</span>
            <span className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
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
      
      <main className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center py-16 sm:py-20 lg:py-28">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  {t('ourProjects')} <span className="text-blue-200">{t('projectsPageHeroHighlight')}</span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                  {t('projectsPageHeroSubtitle')}
                </p>
                <div className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center px-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    {t('viewAllProjects')}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                    {t('startNewProject')}
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Projects Stats Section */}
        <section className="py-12 sm:py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {[
                { number: '500+', label: t('projectsCompleted'), icon: '🏆' },
                { number: '6', label: t('projectCategories'), icon: '🏗️' },
                { number: '100%', label: t('projectSuccess'), icon: '✅' },
                { number: '24/7', label: t('projectSupport'), icon: '🛠️' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg sm:text-xl text-gray-600 font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-2xl sm:text-3xl">
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Project Categories Filter */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <Container>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {t('projectCategories')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {t('projectCategoriesDescription')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md'
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category === 'All' ? t('allProjects') : t(`projects.categories.${category}`)}
                </button>
              ))}
            </div>
            
            {/* Results count */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <Container>
            {filteredProjects.length === 0 && !isLoading ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">Try selecting a different category or view all projects.</p>
                <Button 
                  onClick={() => setSelectedCategory('All')}
                  variant="primary"
                >
                  View All Projects
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => renderProjectCard(project, index))}
              </div>
            )}
          </Container>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <Container>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('whyChooseUs')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black/10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
          </div>
          
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {t('readyForYourProject')} <span className="text-blue-200">{t('projectCtaHighlight')}</span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                {t('projectsCtaDescription')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                  {t('startYourProject')}
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  {t('viewMoreProjects')}
                </Button>
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
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className={`absolute top-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-200 shadow-lg ${
                  isRTL ? 'left-4' : 'right-4'
                }`}
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Project Image */}
              <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={t(selectedProject.title)}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Details */}
              <div className="p-6 sm:p-8">
                <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {t(selectedProject.category)}
                  </span>
                  <span className={`text-sm text-gray-500 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {selectedProject.completionDate}
                  </span>
                </div>
                
                <h2 
                  id="modal-title"
                  className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {t(selectedProject.title)}
                </h2>
                
                <p className={`text-gray-600 text-base sm:text-lg mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(selectedProject.description)}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('projectDetails')}
                    </h4>
                    <div className="space-y-2">
                      <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-gray-600 font-medium w-20">{t('size')}:</span>
                        <span className="text-gray-900">{selectedProject.size}</span>
                      </div>
                      <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-gray-600 font-medium w-20">{t('location')}:</span>
                        <span className="text-gray-900">{selectedProject.location}</span>
                      </div>
                      <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-gray-600 font-medium w-20">{t('status')}:</span>
                        <span className={`font-medium ${
                          t(selectedProject.status) === t('projects.status.completed') ? 'text-green-600' : 'text-blue-600'
                        }`}>
                          {t(selectedProject.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('projectFeatures')}
                    </h4>
                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {t(tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    {t('getSimilarQuote')}
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {t('contactUs')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}