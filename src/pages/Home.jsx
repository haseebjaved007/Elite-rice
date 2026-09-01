import React from 'react'
import Hero from '../components/Hero'
import RiceShowcase from '../components/RiceShowcase'
import GrainScience from '../components/GrainScience'
import OrderConfigurator from '../components/OrderConfigurator'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <RiceShowcase />
      <GrainScience />
      <OrderConfigurator />
      <Testimonials />
      <Contact />
    </main>
  )
}
