import Head from 'next/head'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Products from '@/components/sections/Products'
import AboutTariqAlNurCard from '@/components/cards/AboutTariqAlNurCard'
import WhyUsCard from '@/components/cards/WhyUsCard'
import CareerCard from '@/components/cards/CareerCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tareeq Al Noor Al Arabi Company - Professional Construction Services</title>
        <meta name="description" content="Professional construction services for residential and commercial projects. Quality craftsmanship, reliable service, and competitive pricing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className='bg-[#035678]'>
        <Hero />
        <Products />
        <AboutTariqAlNurCard />
        <WhyUsCard />
        <CareerCard />
      </main>
    </>
  )
}