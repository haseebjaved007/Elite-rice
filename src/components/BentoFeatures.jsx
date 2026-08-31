import React, { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

function AnimateIn({ children, delay = 0, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const features = [
  {
    id: 'direct',
    size: 'large', // 2x2
    title: 'Farm-Direct Supply Chain',
    titleUr: 'کھیت سے براہ راست',
    body: 'We eliminate every unnecessary middleman between the farmer\'s field and your serving pot. This means fresher grain, lower cost, and a fair price for the growers who make it possible.',
    bodyUr: 'کسان سے براہ راست — تازہ تر دانہ، کم قیمت، اور زیادہ شفافیت۔',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#D4870A" strokeWidth="1.5" opacity="0.3" />
        <ellipse cx="24" cy="24" rx="6" ry="15" fill="#D4870A" opacity="0.8" transform="rotate(-20 24 24)" />
        <ellipse cx="14" cy="20" rx="4" ry="10" fill="#C4B49A" opacity="0.5" transform="rotate(-45 14 20)" />
        <ellipse cx="34" cy="20" rx="4" ry="10" fill="#C4B49A" opacity="0.5" transform="rotate(5 34 20)" />
        <path d="M8 36 Q24 28 40 36" stroke="#D4870A" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>
    ),
    bg: '#1A1A14',
    textColor: '#F5F0E8',
    accent: '#D4870A',
  },
  {
    id: 'grading',
    size: 'tall',
    title: 'Triple-Grade Quality Check',
    titleUr: 'تین مرحلہ معیاری جانچ',
    body: 'Every batch passes three quality stages: field inspection, mill sorting, and final moisture testing. Only what meets our benchmark ships out.',
    bodyUr: 'ہر بیچ تین مراحل سے گزرتا ہے۔ صرف بہترین آگے بھیجا جاتا ہے۔',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <polyline points="4,20 14,28 36,10" stroke="#D4870A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="20" r="18" stroke="#D4870A" strokeWidth="1.5" opacity="0.25" />
      </svg>
    ),
    bg: '#E2D8C8',
    textColor: '#1A1A14',
    accent: '#D4870A',
  },
  {
    id: 'bulk',
    size: 'wide',
    title: 'Bulk Orders for Pakwan Centers',
    titleUr: 'پکوان سنٹر کے لیے تھوک آرڈر',
    body: 'We specialize in large-volume catering orders — 50kg, 100kg, or a full tonne. Consistent supply for your busiest season, every season.',
    bodyUr: '۵۰ کلو سے ایک ٹن تک — ہر موسم میں مستقل فراہمی۔',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="20" width="32" height="16" rx="2" stroke="#D4870A" strokeWidth="1.5" />
        <path d="M12 20V14a8 8 0 0116 0v6" stroke="#D4870A" strokeWidth="1.5" fill="none" />
        <line x1="20" y1="26" x2="20" y2="30" stroke="#D4870A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bg: '#F5F0E8',
    textColor: '#1A1A14',
    accent: '#D4870A',
  },
  {
    id: 'delivery',
    size: 'small',
    title: 'City-Wide Delivery',
    titleUr: 'شہر بھر ڈیلیوری',
    body: 'Lahore, Karachi, Islamabad, Faisalabad — we deliver on schedule.',
    bodyUr: 'پورے پاکستان میں بروقت ڈیلیوری۔',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="14" r="8" stroke="#D4870A" strokeWidth="1.5" />
        <circle cx="18" cy="14" r="3" fill="#D4870A" />
        <path d="M18 22 Q6 28 18 34 Q30 28 18 22" fill="#D4870A" opacity="0.2" stroke="#D4870A" strokeWidth="1" />
      </svg>
    ),
    bg: '#D4870A',
    textColor: '#F5F0E8',
    accent: '#F5F0E8',
  },
  {
    id: 'custom',
    size: 'small',
    title: 'Custom Packaging',
    titleUr: 'مخصوص پیکیجنگ',
    body: 'Branded sacks or plain bulk — we accommodate your preference.',
    bodyUr: 'آپ کی پسند کے مطابق بوریاں یا بلک پیکیجنگ۔',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="4" width="24" height="28" rx="2" stroke="#1A1A14" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="26" y2="10" stroke="#1A1A14" strokeWidth="1.5" opacity="0.5" />
        <line x1="10" y1="15" x2="22" y2="15" stroke="#1A1A14" strokeWidth="1.5" opacity="0.3" />
        <line x1="10" y1="20" x2="18" y2="20" stroke="#1A1A14" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
    bg: '#E2D8C8',
    textColor: '#1A1A14',
    accent: '#1A1A14',
  },
]

function BentoCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={reduce ? {} : { y: -5, transition: { duration: 0.3 } }}
      style={{
        backgroundColor: feature.bg,
        borderRadius: '6px',
        padding: feature.size === 'large' ? '2.5rem' : '1.75rem',
        color: feature.textColor,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: feature.size === 'large' ? '320px' : feature.size === 'tall' ? '300px' : '200px',
        border: feature.bg === '#F5F0E8' ? '1px solid rgba(196,180,154,0.4)' : 'none',
      }}
    >
      {/* Background decoration */}
      {feature.size === 'large' && (
        <div style={{
          position: 'absolute',
          bottom: '-2rem',
          right: '-2rem',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'rgba(212,135,10,0.05)',
          pointerEvents: 'none',
        }} />
      )}

      <div>
        <div style={{ marginBottom: '1.25rem' }}>{feature.icon}</div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: feature.size === 'large' ? '1.6rem' : '1.2rem',
          fontWeight: 600,
          color: feature.textColor,
          marginBottom: '0.5rem',
          lineHeight: 1.2,
        }}>
          {feature.title}
        </h3>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.813rem', color: feature.bg === '#D4870A' ? 'rgba(245,240,232,0.7)' : '#C4B49A', direction: 'rtl', marginBottom: '1rem' }}>
          {feature.titleUr}
        </p>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: feature.size === 'large' ? '1rem' : '0.875rem',
          color: feature.bg === '#D4870A' ? 'rgba(245,240,232,0.85)' : feature.bg === '#1A1A14' ? 'rgba(245,240,232,0.6)' : '#5A5446',
          lineHeight: 1.65,
          marginBottom: '0.5rem',
        }}>
          {feature.body}
        </p>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.813rem',
          color: feature.bg === '#D4870A' ? 'rgba(245,240,232,0.6)' : feature.bg === '#1A1A14' ? 'rgba(196,180,154,0.5)' : '#C4B49A',
          direction: 'rtl',
          lineHeight: 1.8,
        }}>
          {feature.bodyUr}
        </p>
      </div>
    </motion.div>
  )
}

export default function BentoFeatures() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  return (
    <section
      id="features"
      className="section-padding"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="container-grid">
        <div ref={ref} style={{ maxWidth: '680px', marginBottom: '4rem' }}>
          <motion.span
            className="text-caption"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{ color: '#D4870A', display: 'block', marginBottom: '1rem' }}
          >
            Why Elite Rice · کیوں ایلیٹ رائس
          </motion.span>
          <motion.h2
            className="text-h2"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ color: '#1A1A14' }}
          >
            Built for the demands of professional catering.
          </motion.h2>
        </div>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '1.25rem',
        }}>
          {/* Large card - 2x2 */}
          <div style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}>
            <BentoCard feature={features[0]} index={0} />
          </div>
          {/* Tall card */}
          <div style={{ gridColumn: '3', gridRow: '1 / 3' }}>
            <BentoCard feature={features[1]} index={1} />
          </div>
          {/* Wide card */}
          <div style={{ gridColumn: '4', gridRow: '1' }}>
            <BentoCard feature={features[2]} index={2} />
          </div>
          {/* Small cards */}
          <div style={{ gridColumn: '4', gridRow: '2' }}>
            <BentoCard feature={features[3]} index={3} />
          </div>
        </div>

        {/* Second row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginTop: '1.25rem' }}>
          <BentoCard feature={features[4]} index={4} />
          <AnimateIn delay={0.1}>
            <div style={{
              backgroundColor: '#1A1A14',
              borderRadius: '6px',
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              minHeight: '160px',
            }}>
              <div style={{ flexShrink: 0 }}>
                <div className="stat-number">500+</div>
                <div className="text-caption" style={{ color: '#C4B49A', marginTop: '0.25rem' }}>Satisfied Clients</div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '0.75rem', color: '#8B7D65', direction: 'rtl' }}>مطمئن گاہک</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(196,180,154,0.2)', paddingLeft: '2rem' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.938rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65, margin: 0 }}>
                  From neighbourhood weddings to corporate lunch programs — our network of 500+ satisfied catering partners speaks louder than any promise.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #features .container-grid > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #features .container-grid > div:nth-child(2) > div {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
        @media (max-width: 640px) {
          #features .container-grid > div:nth-child(2),
          #features .container-grid > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}


