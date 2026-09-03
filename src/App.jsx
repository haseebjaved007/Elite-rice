import React, { createContext, useContext, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import PromoBanner from './components/PromoBanner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Quality from './pages/Quality'
import ContactUs from './pages/ContactUs'
import Faq from './pages/Faq'
import Delivery from './pages/Delivery'

export const LangContext = createContext({ lang: 'en', setLang: () => {} })
export const useLang = () => useContext(LangContext)

export const OrderContext = createContext({ order: { variety: '', volume: '' }, setOrder: () => {} })
export const useOrder = () => useContext(OrderContext)

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  const [lang, setLang] = useState('en')
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState({ variety: '', volume: '' })

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <OrderContext.Provider value={{ order, setOrder }}>
        <BrowserRouter>
          <ScrollManager />
          {/* CustomCursor is removed from luxury redesign for cleaner UX, or can be kept if wanted. I'll remove it since the CSS removed cursor: none for body. */}
          
          <AnimatePresence mode="wait">
            {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
          </AnimatePresence>

          {!loading && (
            <>
              {/* <PromoBanner /> Removing promo banner for cleaner luxury look */}
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/delivery" element={<Delivery />} />
              </Routes>
              <Footer />
            </>
          )}
        </BrowserRouter>
      </OrderContext.Provider>
    </LangContext.Provider>
  )
}

