import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import sack0 from '../assets/sack_0.jpg'
import sack1 from '../assets/sack_1.jpg'
import sack2 from '../assets/sack_2.jpg'
import sack3 from '../assets/sack_3.jpg'
import sack4 from '../assets/sack_4.jpg'
import sack5 from '../assets/sack_5.jpg'

const varieties = [
  { name: 'Super Kernel Basmati', sub: 'Extra Long Grain | Premium Quality', image: sack0 },
  { name: '1121 White Sella', sub: 'Extra Long Grain | Sella', image: sack1 },
  { name: 'Steam Basmati', sub: 'Extra Long Grain | Aromatic', image: sack2 },
  { name: 'IRRI-9 Long Grain', sub: 'Long Grain | Everyday', image: sack3 },
  { name: 'Sella Basmati', sub: 'Extra Long Grain | Sella', image: sack4 },
  { name: 'Kainat Basmati', sub: 'Extra Long Grain | Premium', image: sack5 },
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
                  src={v.image} 
                  alt={v.name} 
                  style={{ width: '100%', height: '300px', objectFit: 'contain', transform: 'scale(1.1)' }} 
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
