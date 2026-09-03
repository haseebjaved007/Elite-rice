import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-sack-gold.jpg'

export default function Hero() {
  return (
    <section style={{ backgroundColor: 'var(--c-light)', position: 'relative', overflow: 'hidden' }}>
      <div className="pattern-bg" />
      
      <div className="page-wrap relative z-10" style={{ display: 'flex', minHeight: 'calc(100vh - 90px)', alignItems: 'center', padding: '60px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', width: '100%', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Text */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="t-mono" style={{ color: 'var(--c-gold)', marginBottom: '16px', fontSize: '13px' }}>
              PREMIUM QUALITY
            </p>
            <h1 className="t-display" style={{ color: 'var(--c-dark)', marginBottom: '24px', lineHeight: 1.1 }}>
              ELITE RICE
            </h1>
            <p className="t-body" style={{ color: 'var(--c-text-dark)', fontSize: '18px', maxWidth: '480px', marginBottom: '40px' }}>
              Providing the finest quality rice from the best mills to Pakwan Centers across Pakistan.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '60px', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn-primary" style={{ padding: '16px 32px' }}>
                Explore Products <span style={{ marginLeft: '12px' }}>→</span>
              </Link>
              <Link to="/contact" className="btn-outline" style={{ padding: '16px 32px' }}>
                Contact Us <span style={{ marginLeft: '12px' }}>✆</span>
              </Link>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { icon: '♕', text: 'Premium Quality' },
                { icon: '🍃', text: 'Pure & Natural' },
                { icon: '🛡️', text: 'Hygienically Packed' }
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--c-gold)', fontSize: '20px' }}>{b.icon}</span>
                  <span style={{ fontFamily: 'var(--f-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--c-dark)' }}>{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <img 
              src={heroImage} 
              alt="Elite Rice Premium Golden Sack" 
              style={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 24px 48px rgba(20,43,30,0.15)' }} 
            />
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div { align-items: center; justify-content: center; display: flex; flex-direction: column; }
          .t-display { font-size: 56px !important; }
        }
      `}</style>
    </section>
  )
}
