import React, { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

const testimonials = [
  {
    quoteEn: `We switched to Elite Rice three years ago and haven't looked back. The 1121 White Sella is consistent batch after batch — our daig biryani is what our customers come back for.`,
    quoteUr: 'تین سال پہلے ایلیٹ رائس سے جڑے اور کبھی پچھتاوا نہیں ہوا۔ ۱۱۲۱ وائٹ سیلہ ہر بار یکساں معیار دیتا ہے۔',
    name: 'Haji Akram Caterers',
    detail: '1121-W™ · Lahore · 8 years customer',
    detailUr: '۱۱۲۱-W™ · لاہور · 8 سال سے گاہک',
    rating: 5,
  },
  {
    quoteEn: 'For large wedding functions, reliability is everything. Elite Rice delivers on time, every time — and the Super Kernel Basmati aroma alone gets compliments from guests.',
    quoteUr: 'بڑی شادیوں کے لیے وقت پر ڈیلیوری سب سے ضروری ہے۔ ایلیٹ رائس نے کبھی مایوس نہیں کیا۔',
    name: 'Al-Noor Banquet Hall',
    detail: 'SK-01™ · Karachi · 5 years customer',
    detailUr: 'SK-01™ · کراچی · 5 سال سے گاہک',
    rating: 5,
  },
  {
    quoteEn: 'The IRRI-9 is our daily workhorse. Great yield, zero breakage, and the price point makes sense for our volume. Straight talk: best value rice in the market.',
    quoteUr: 'IRRI-9 ہمارا روزانہ کا ساتھی ہے۔ بہترین پیداوار، صفر ٹوٹنا، اور قیمت بھی مناسب۔',
    name: 'Mehran Pakwan Center',
    detail: 'IRRI-9™ · Islamabad · 3 years customer',
    detailUr: 'IRRI-9™ · اسلام آباد · 3 سال سے گاہک',
    rating: 5,
  },
]

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  return (
    <motion.article
      ref={ref}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={reduce ? {} : { y: -4, transition: { duration: 0.25 } }}
      style={{
        backgroundColor: '#fcfcf7',
        borderRadius: '16px',
        padding: '28px',
        border: '1px solid #eeeee9',
        display: 'flex',
        flexDirection: 'column',
        direction: isUr ? 'rtl' : 'ltr',
      }}>
      {/* Stars */}
      <div style={{ display: 'flex', gap: '3px', marginBottom: '16px', flexDirection: isUr ? 'row-reverse' : 'row' }}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} style={{ color: '#e8c547', fontSize: '14px' }}>★</span>
        ))}
      </div>

      <blockquote style={{
        fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif',
        fontSize: '16px', fontWeight: 350, color: '#1c3a13',
        lineHeight: isUr ? 2.2 : 1.65, marginBottom: '20px', flex: 1,
      }}>
        "{isUr ? t.quoteUr : t.quoteEn}"
      </blockquote>

      <div style={{ borderTop: '1px solid #eeeee9', paddingTop: '16px' }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1c3a13', marginBottom: '3px' }}>
          {t.name}
        </div>
        <div className="t-mono" style={{ color: '#666666' }}>
          {isUr ? t.detailUr : t.detail}
        </div>
      </div>
    </motion.article>
  )
}

export default function Testimonials() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  return (
    <section id="story" style={{ backgroundColor: '#eeeee9', paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="page-wrap">
        <div ref={titleRef} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '56px', flexWrap: 'wrap', gap: '24px',
          direction: isUr ? 'rtl' : 'ltr',
        }}>
          <div>
            <motion.p className="t-mono"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              style={{ color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              {isUr ? 'پکوان سنٹروں کی آوازیں' : 'From Our Customers'}
            </motion.p>
            <motion.h2 className="t-heading"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ color: '#1c3a13', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
              {isUr ? 'ہمارے گاہک بولتے ہیں۔' : 'The pakwan centers speak.'}
            </motion.h2>
          </div>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ textAlign: isUr ? 'left' : 'right' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', fontWeight: 300, color: '#1c3a13', letterSpacing: '-0.4px' }}>4.9</div>
              <div className="t-label" style={{ color: '#666666' }}>{isUr ? 'اوسط ریٹنگ' : 'Avg. rating'}</div>
            </div>
            <div style={{ width: '1px', height: '40px', backgroundColor: '#c4c7c4' }} />
            <div style={{ textAlign: isUr ? 'left' : 'right' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '28px', fontWeight: 300, color: '#1c3a13', letterSpacing: '-0.4px' }}>500+</div>
              <div className="t-label" style={{ color: '#666666' }}>{isUr ? 'پکوان سنٹر' : 'Pakwan centers'}</div>
            </div>
          </motion.div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #story .page-wrap > div:nth-child(2) { grid-template-columns: repeat(2, 1fr) !important; }
          #story { padding-top: 72px !important; padding-bottom: 72px !important; }
        }
        @media (max-width: 640px) {
          #story .page-wrap > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #story { padding-top: 56px !important; padding-bottom: 56px !important; }
        }
      `}</style>
    </section>
  )
}
