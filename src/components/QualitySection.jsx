import React from 'react'
import { motion } from 'framer-motion'
import riceBowlImg from '../assets/quality-elite-bowl.jpg'

export default function QualitySection() {
  const features = [
    { icon: '♕', title: 'Superior Quality', desc: 'Carefully selected grains for the best taste.' },
    { icon: '⚙️', title: 'Advanced Processing', desc: 'State-of-the-art milling and sorting.' },
    { icon: '🛡️', title: 'Hygienic Packaging', desc: 'Packed with care to ensure freshness.' },
    { icon: '🤝', title: 'Trusted by Pakwan Centers', desc: 'Proudly serving Pakwan Centers across Pakistan.' },
  ]

  return (
    <section style={{ backgroundColor: 'var(--c-light)', padding: '100px 0', overflow: 'hidden' }}>
      <div className="page-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="quality-grid">
          
          {/* Left Text & Features */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="t-heading" style={{ color: 'var(--c-dark)', fontSize: '42px', marginBottom: '16px' }}>
              Why Choose Elite Rice?
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--c-gold)', marginBottom: '24px' }} />
            <p className="t-body" style={{ color: '#555', marginBottom: '48px', maxWidth: '440px', fontSize: '18px' }}>
              We are committed to delivering purity, quality, and satisfaction in every grain.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {features.map((f, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '64px', height: '64px', margin: '0 auto 16px', 
                    border: '1px solid var(--c-gold)', borderRadius: '50%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '24px', color: 'var(--c-gold)' 
                  }}>
                    {f.icon}
                  </div>
                  <h4 style={{ fontFamily: 'var(--f-sans)', fontWeight: 700, fontSize: '15px', color: 'var(--c-dark)', marginBottom: '8px' }}>
                    {f.title}
                  </h4>
                  <p style={{ fontFamily: 'var(--f-sans)', fontSize: '13px', color: '#666', lineHeight: 1.4 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img 
              src={riceBowlImg} 
              alt="Perfectly Cooked Biryani Rice" 
              style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }} 
            />
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .quality-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
