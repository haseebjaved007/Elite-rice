import React, { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const steps = [
  {
    num: '01',
    en: 'Choose Your Variety',
    ur: 'قسم کا انتخاب کریں',
    desc: 'Browse our six varieties and select the grain that fits your menu — whether it\'s a biryani feast or daily dal chawal.',
    descUr: 'اپنے مینو کے مطابق چاول کی قسم چنیں۔',
    icon: '🌾',
  },
  {
    num: '02',
    en: 'Tell Us Your Volume',
    ur: 'مقدار بتائیں',
    desc: 'Minimum order starts at 50kg. We accommodate orders up to multiple tonnes for large-scale events and regular supply contracts.',
    descUr: 'کم از کم آرڈر ۵۰ کلو سے شروع۔ بڑے آرڈر بھی قبول۔',
    icon: '⚖️',
  },
  {
    num: '03',
    en: 'We Confirm & Pack',
    ur: 'تصدیق اور پیکیجنگ',
    desc: 'Our team confirms your order within 2 hours, grades your batch fresh, and packs it to your specification — branded or plain.',
    descUr: '۲ گھنٹے میں تصدیق، تازہ درجہ بندی، اور آپ کی مرضی کی پیکیجنگ۔',
    icon: '📦',
  },
  {
    num: '04',
    en: 'Delivered to Your Door',
    ur: 'دروازے تک ڈیلیوری',
    desc: 'We deliver to major cities across Pakistan within 24–48 hours. Recurring clients get priority scheduling and dedicated account management.',
    descUr: '۲۴–۴۸ گھنٹوں میں ڈیلیوری۔ مستقل گاہکوں کو ترجیح۔',
    icon: '🚚',
  },
]

// Step card as its own component so we can safely call useInView
function StepCard({ step, index, reduce }) {
  const ref = useRef(null)
  const inV = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={inV ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      style={{
        paddingRight: '2rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Step number circle */}
      <motion.div
        whileHover={reduce ? {} : { scale: 1.1, backgroundColor: '#D4870A' }}
        transition={{ duration: 0.25 }}
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: '50%',
          backgroundColor: '#1A1A14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.75rem',
          flexDirection: 'column',
          cursor: 'default',
          transition: 'background-color 0.25s ease',
          border: '1.5px solid rgba(196,180,154,0.15)',
        }}
      >
        <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{step.icon}</span>
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.688rem', fontWeight: 600, color: '#D4870A', letterSpacing: '0.06em', marginTop: '0.125rem' }}>
          {step.num}
        </span>
      </motion.div>

      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, color: '#1A1A14', marginBottom: '0.25rem' }}>
        {step.en}
      </h3>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.813rem', color: '#C4B49A', direction: 'rtl', marginBottom: '0.75rem' }}>
        {step.ur}
      </p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.938rem', color: '#5A5446', lineHeight: 1.65 }}>
        {step.desc}
      </p>
      <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.813rem', color: '#C4B49A', direction: 'rtl', lineHeight: 1.8, marginTop: '0.5rem' }}>
        {step.descUr}
      </p>
    </motion.div>
  )
}

export default function HowToOrder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  return (
    <section
      id="order"
      className="section-padding"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="container-grid">
        <div ref={ref}>
          <motion.span
            className="text-caption"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            style={{ color: '#D4870A', display: 'block', marginBottom: '1rem' }}
          >
            How To Order · آرڈر کیسے کریں
          </motion.span>
          <motion.h2
            className="text-h2"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ color: '#1A1A14', marginBottom: '4rem', maxWidth: '560px' }}
          >
            Ordering is as easy as calling a trusted supplier should be.
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '2.5rem',
            left: '12.5%',
            width: '75%',
            height: '1px',
            backgroundColor: 'rgba(196,180,154,0.3)',
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} reduce={reduce} />
          ))}
        </div>

        {/* CTA bottom block */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            marginTop: '4rem',
            padding: '3rem',
            backgroundColor: '#1A1A14',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: '#F5F0E8', marginBottom: '0.5rem' }}>
              Ready to place your first order?
            </h3>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', color: '#C4B49A', direction: 'rtl' }}>
              کیا آپ اپنا پہلا آرڈر دینے کے لیے تیار ہیں؟
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us Now
            </motion.a>
            <motion.a
              href="tel:+923001234567"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(245,240,232,0.7)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.938rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              whileHover={{ color: '#D4870A' }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 2h4l1.5 4L6 8a11 11 0 005 5l2-2.5 4 1.5v4A1 1 0 0116 17C7.16 17 1 10.84 1 2a1 1 0 011-1h1z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              +92 300 1234 567
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #order .container-grid > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #order .container-grid > div:nth-child(2) > div:first-child {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          #order .container-grid > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
