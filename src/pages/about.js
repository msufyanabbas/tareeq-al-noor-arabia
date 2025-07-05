import Head from 'next/head'
import Container from '../components/ui/Container'
import About from '../components/sections/About'
import { useTranslation } from '../utils/i18n'
import { useLanguage } from '../contexts/LanguageContext'
import { useRTLPosition } from '../utils/rtl'

export default function AboutPage() {
  const { t } = useTranslation()
  const { isRTL } = useLanguage()
  const { getTextAlign } = useRTLPosition()

  return (
    <>
      <Head>
        <title>{t('aboutPageTitle')}</title>
        <meta name="description" content={t('aboutPageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className={isRTL ? 'rtl' : 'ltr'}>
        {/* Page Header */}
        <Container.Section 
          spacing="lg" 
          background="transparent"
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          <Container size="lg" className="relative z-10">
            <Container.Stack spacing="sm" align="center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
                {t('aboutPageTitle')}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl text-center leading-relaxed">
                {t('aboutPageSubtitle')}
              </p>
            </Container.Stack>
          </Container>
          
          {/* Decorative Elements */}
          <div className={`absolute top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 ${isRTL ? 'right-0 translate-x-16' : 'left-0 -translate-x-16'}`}></div>
          <div className={`absolute bottom-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 ${isRTL ? 'left-0 -translate-x-24' : 'right-0 translate-x-24'}`}></div>
        </Container.Section>

        <About />

        {/* Team Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <Container>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('teamTitle')}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {t('teamDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  name: t('teamMember1Name'),
                  role: t('teamMember1Role'),
                  experience: t('teamMember1Experience'),
                  description: t('teamMember1Description'),
                  initial: isRTL ? 'م.ع' : 'AA'
                },
                {
                  name: t('teamMember2Name'),
                  role: t('teamMember2Role'),
                  experience: t('teamMember2Experience'),
                  description: t('teamMember2Description'),
                  initial: isRTL ? 'س.م' : 'SM'
                },
                {
                  name: t('teamMember3Name'),
                  role: t('teamMember3Role'),
                  experience: t('teamMember3Experience'),
                  description: t('teamMember3Description'),
                  initial: isRTL ? 'خ.أ' : 'KA'
                }
              ].map((member, index) => (
                <div key={index} className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mx-4 sm:mx-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-lg sm:text-xl font-bold text-blue-800">
                      {member.initial}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center mb-2 font-medium">{member.role}</p>
                  <p className="text-xs sm:text-sm text-gray-500 text-center mb-4 font-medium bg-gray-100 rounded-full py-1 px-3 inline-block">
                    {member.experience}
                  </p>
                  <p className={`text-gray-600 text-center text-sm sm:text-base leading-relaxed ${getTextAlign('center')}`}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-blue-50/30"></div>
          
          <Container>
            <div className="relative z-10 text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                {t('valuesTitle')}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {t('valuesDescription')}
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {[
                {
                  title: t('valueQuality'),
                  description: t('valueQualityDescription'),
                  icon: '🏆'
                },
                {
                  title: t('valueIntegrity'),
                  description: t('valueIntegrityDescription'),
                  icon: '🤝'
                },
                {
                  title: t('valueInnovation'),
                  description: t('valueInnovationDescription'),
                  icon: '💡'
                },
                {
                  title: t('valueSafety'),
                  description: t('valueSafetyDescription'),
                  icon: '🛡️'
                }
              ].map((value, index) => (
                <div key={index} className="group text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mx-4 sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  <p className={`text-gray-600 text-sm sm:text-base leading-relaxed ${getTextAlign('center')}`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
          
          {/* Decorative Elements */}
          <div className={`absolute top-10 w-32 h-32 bg-blue-100/20 rounded-full -translate-y-16 ${isRTL ? 'right-10 translate-x-16' : 'left-10 -translate-x-16'}`}></div>
          <div className={`absolute bottom-10 w-48 h-48 bg-blue-100/20 rounded-full translate-y-24 ${isRTL ? 'left-10 -translate-x-24' : 'right-10 translate-x-24'}`}></div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <Container>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                {t('ctaTitle')}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                {t('ctaDescription')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <button className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base">
                  {t('getQuote')}
                </button>
                <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 text-sm sm:text-base">
                  {t('viewOurWork')}
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}