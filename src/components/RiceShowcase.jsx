import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import sackImage from '../assets/product-sack-base.jpg'

const varieties = [
  { name: 'Super Kernel Basmati', sub: 'Extra Long Grain | Premium Quality', color: 50, filter: 'hue-rotate(-30deg) saturate(1.2)' }, // Gold/Greenish
  { name: '1121 White Sella', sub: 'Extra Long Grain | Sella', color: 0, filter: 'sepia(0.2)' }, // White/Cream
  { name: 'Steam Basmati', sub: 'Extra Long Grain | Aromatic', color: 210, filter: 'hue-rotate(180deg)' }, // Blue
  { name: 'IRRI-9 Long Grain', sub: 'Long Grain | Everyday', color: 120, filter: 'hue-rotate(80deg) saturate(1.5)' }, // Green
  { name: 'Sella Basmati', sub: 'Extra Long Grain | Sella', color: 0, filter: 'hue-rotate(-160deg) saturate(1.5)' }, // Reddish
  { name: 'Kainat Basmati', sub: 'Extra Long Grain | Premium', color: 270, filter: 'hue-rotate(240deg)' }, // Purple
]

export default function RiceShowcase() {
  return (
    <section style={{ backgroundColor: 'var(--c-dark)', padding: '100px 0' }}>
      <div className="page-wrap">
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 className="t-heading" style={{ color: 'var(--c-light)', marginBottom: '16px', fontSize: '42px' }}>
            Our Rice Varieties
          </h2>
          <p className="t-body" style={{ color: 'rgba(245,240,230,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            We offer a wide range of premium quality rice varieties to meet every culinary need.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {varieties.map((v, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ backgroundColor: 'var(--c-light)', borderRadius: '12px', padding: '24px', textAlign: 'center', boxShadow: '0 12px 24px rgba(0,0,0,0.2)' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', marginBottom: '24px', borderRadius: '8px' }}>
                <img 
                  src={sackImage} 
                  alt={v.name} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover', filter: v.filter, transform: 'scale(1.1)' }} 
                />
              </div>
              <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '22px', color: 'var(--c-dark)', marginBottom: '8px', fontWeight: 600 }}>
                {v.name}
              </h3>
              <p style={{ fontFamily: 'var(--f-sans)', fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                {v.sub}
              </p>
              <Link to="/contact" className="btn-primary" style={{ width: '100%', padding: '12px', borderRadius: '4px' }}>
                View Details <span style={{ marginLeft: '8px' }}>›</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/products" className="btn-outline" style={{ borderColor: 'var(--c-gold)', color: 'var(--c-gold)' }}>
            View All Products <span style={{ marginLeft: '8px' }}>→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
