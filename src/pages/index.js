import Head from 'next/head'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tareeq Al Noor Al Arabia Company - Professional Construction Services</title>
        <meta name="description" content="Professional construction services for residential and commercial projects. Quality craftsmanship, reliable service, and competitive pricing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}