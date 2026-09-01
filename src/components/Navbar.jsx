import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

const navLinks = [
  { en: 'Varieties', ur: 'اقسام', href: '/#varieties' },
  { en: 'Quality', ur: 'معیار', href: '/#quality' },
  { en: 'Order', ur: 'آرڈر', href: '/#order' },
  { en: 'Story', ur: 'کہانی', href: '/#story' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLang()
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={reduce ? { opacity: 1 } : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#fcfcf7',
        borderBottom: scrolled ? '1px solid #eeeee9' : '1px solid transparent',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div
        className="page-wrap"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}
      >
        {/* Wordmark */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
          <span className="nav-wordmark" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 400, color: '#1c3a13', letterSpacing: '-0.2px' }}>
            Elite Rice
          </span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e8c547', display: 'inline-block', marginBottom: '1px' }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desk-nav">
          {navLinks.map((link) => (
            <Link
              key={link.en}
              to={link.href}
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400, color: '#1c3a13', textDecoration: 'none', opacity: 0.65, transition: 'opacity 0.15s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.65')}
            >
              {lang === 'ur' ? link.ur : link.en}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="desk-nav">
          {/* Language toggle */}
          <motion.button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            whileHover={reduce ? {} : { scale: 1.04 }}
            whileTap={reduce ? {} : { scale: 0.96 }}
            style={{
              background: 'transparent',
              border: '1.5px solid #1c3a13',
              borderRadius: '1000px',
              padding: '7px 14px',
              fontFamily: lang === 'ur' ? 'Inter, sans-serif' : 'Noto Nastaliq Urdu, serif',
              fontSize: '13px',
              fontWeight: 400,
              color: '#1c3a13',
              cursor: 'pointer',
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
          >
            {lang === 'en' ? 'اردو' : 'English'}
          </motion.button>
          <motion.div
            as={Link}
            to="/#order"
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '14px', whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-flex' }}
            whileHover={reduce ? {} : { scale: 1.02 }}
            whileTap={reduce ? {} : { scale: 0.97 }}
          >
            {lang === 'ur' ? 'آرڈر' : 'Order Now'}
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          className="mob-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px', backgroundColor: '#1c3a13', transition: 'all 0.25s ease',
              transform: mobileOpen ? (i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none') : 'none',
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', borderTop: '1px solid #eeeee9', backgroundColor: '#fcfcf7' }}
          >
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navLinks.map((link) => (
                <Link key={link.en} to={link.href} onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 400, color: '#1c3a13', textDecoration: 'none' }}>
                  {lang === 'ur' ? link.ur : link.en}
                </Link>
              ))}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
                  style={{ background: 'transparent', border: '1.5px solid #1c3a13', borderRadius: '1000px', padding: '8px 16px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#1c3a13', cursor: 'pointer' }}>
                  {lang === 'en' ? 'اردو' : 'English'}
                </button>
                <Link to="/#order" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>{lang === 'ur' ? 'ابھی آرڈر کریں' : 'Order Now'}</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}
