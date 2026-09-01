import React, { createContext, useContext, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import PromoBanner from './components/PromoBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RiceShowcase from './components/RiceShowcase'
import GrainScience from './components/GrainScience'
import OrderConfigurator from './components/OrderConfigurator'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const LangContext = createContext({ lang: 'en', setLang: () => {} })
export const useLang = () => useContext(LangContext)

export const OrderContext = createContext({ order: { variety: '', volume: '' }, setOrder: () => {} })
export const useOrder = () => useContext(OrderContext)

export default function App() {
  const [lang, setLang] = useState('en')
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState({ variety: '', volume: '' })

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <OrderContext.Provider value={{ order, setOrder }}>
        <CustomCursor />
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        {!loading && (
          <>
            <PromoBanner />
            <Navbar />
            <main>
              <Hero />
              <RiceShowcase />
              <GrainScience />
              <OrderConfigurator />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </OrderContext.Provider>
    </LangContext.Provider>
  )
}
