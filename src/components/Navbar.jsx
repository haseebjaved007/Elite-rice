import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{ backgroundColor: 'var(--c-dark)', borderBottom: '1px solid rgba(245, 240, 230, 0.1)' }}>
      <div className="page-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          {/* A simple pure CSS approximation of the luxury crown/mandala logo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--c-gold)' }}>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0L20 8L28 4L24 14H8L4 4L12 8L16 0Z" />
              <rect x="6" y="16" width="20" height="2" />
              <rect x="4" y="20" width="24" height="1" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--f-serif)', fontSize: '24px', fontWeight: 600, color: 'var(--c-light)', letterSpacing: '0.05em', lineHeight: 1 }}>ELITE</span>
            <span style={{ fontFamily: 'var(--f-sans)', fontSize: '9px', fontWeight: 600, color: 'var(--c-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '4px' }}>— RICE MILLS —</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desk-nav">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} style={{ fontFamily: 'var(--f-serif)', fontSize: '15px', color: 'var(--c-light)', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--c-gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--c-light)'}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link to="/contact" className="btn-gold desk-nav" style={{ padding: '12px 28px', borderRadius: '4px' }}>
            Get a Quote <span style={{ marginLeft: '8px', fontSize: '16px' }}>›</span>
          </Link>
          
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mob-btn" style={{ display: 'none', background: 'none', border: 'none', color: 'var(--c-gold)', padding: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden', backgroundColor: 'var(--c-darker)' }}>
            <div style={{ padding: '24px 40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setMobileOpen(false)} style={{ fontFamily: 'var(--f-serif)', fontSize: '18px', color: 'var(--c-light)', textDecoration: 'none' }}>
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="btn-gold" style={{ marginTop: '16px', justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) { .mob-btn { display: none !important; } }
        @media (max-width: 768px) { .desk-nav { display: none !important; } .mob-btn { display: block !important; } }
      `}</style>
    </header>
  )
}
