import Head from 'next/head'
import Hero from '../components/sections/Hero'
import ProductsShowcase from '@/components/sections/Products'
import EnhancedAbout from '@/components/sections/About'
import ComprehensiveServices from '@/components/sections/Services'
import Projects from '../components/sections/Projects'
import ContactSection from '@/components/sections/Contact'
import { useTranslation } from '@/utils/i18n'

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Tariq Al Nur Al Arabi - {t('footer.companyDescription')}</title>
        <meta name="description" content={t('footer.companyDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Tariq Al Nur Al Arabi" />
        <meta property="og:description" content={t('footer.companyDescription')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <main>
        <Hero />
        {/* <EnhancedAbout /> */}
        {/* <ComprehensiveServices /> */}
        {/* <ProductsShowcase /> */}
        {/* <Projects /> */}
        {/* <ContactSection /> */}
      </main>
    </>
  )
}