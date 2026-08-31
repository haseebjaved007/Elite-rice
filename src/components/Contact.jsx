import React, { useState, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', city: '', phone: '', variety: '', volume: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const fieldStyle = {
    width: '100%', backgroundColor: 'transparent',
    border: '1.5px solid rgba(252,252,247,0.2)',
    borderRadius: '8px', padding: '14px 18px',
    fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400,
    color: '#fcfcf7', outline: 'none', transition: 'border-color 0.2s ease',
    direction: isUr ? 'rtl' : 'ltr',
  }

  return (
    <section id="contact" style={{ backgroundColor: '#fcfcf7', paddingTop: '96px', paddingBottom: '96px', borderTop: '1px solid #eeeee9' }}>
      <div className="page-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          {/* Left: CTA text */}
          <div ref={ref} style={{ direction: isUr ? 'rtl' : 'ltr' }}>
            <motion.p className="t-mono"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              style={{ color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              {isUr ? 'رابطہ کریں' : 'Get in Touch'}
            </motion.p>
            <motion.h2 className="t-heading"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ color: '#1c3a13', marginBottom: '20px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
              {isUr ? 'آج ہی اپنا آرڈر شروع کریں۔' : 'Start your first order today.'}
            </motion.h2>
            <motion.p className="t-body"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.18 }}
              style={{ color: '#1c3a13', opacity: 0.65, marginBottom: '48px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
              {isUr
                ? 'ہم سے رابطہ کریں اور 24 گھنٹے میں قیمت اور ڈیلیوری شیڈول حاصل کریں۔ کم سے کم آرڈر 50 کلو۔'
                : 'Fill in your details and we\'ll send you a competitive quote and delivery timeline within 24 hours. Minimum order 50kg.'}
            </motion.p>

            {/* Contact details */}
            {[
              { icon: '◎', label: isUr ? 'فون' : 'Phone', value: '+92 300 1234 567' },
              { icon: '◈', label: isUr ? 'ای میل' : 'Email', value: 'orders@eliterice.pk' },
              { icon: '◇', label: isUr ? 'دفتر' : 'Office', value: isUr ? 'شیخوپورہ، پنجاب، پاکستان' : 'Sheikhupura, Punjab, Pakistan' },
            ].map((c, i) => (
              <motion.div key={i}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.28 + i * 0.08 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px', direction: isUr ? 'rtl' : 'ltr' }}>
                <span style={{ color: '#1c3a13', opacity: 0.35, fontSize: '16px', marginTop: '2px', flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div className="t-label" style={{ color: '#666666', marginBottom: '3px' }}>{c.label}</div>
                  <div className="t-body-sm" style={{ color: '#1c3a13', fontWeight: 400 }}>{c.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: form (on dark bg) */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ backgroundColor: '#1c3a13', borderRadius: '16px', padding: '40px' }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#e8c547', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '20px' }}>✓</div>
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', fontWeight: 350, color: '#fcfcf7', marginBottom: '10px' }}>
                  {isUr ? 'شکریہ!' : 'Enquiry received!'}
                </h3>
                <p className="t-caption" style={{ color: 'rgba(252,252,247,0.5)' }}>
                  {isUr ? 'ہم 24 گھنٹوں میں آپ سے رابطہ کریں گے۔' : 'We\'ll reach out within 24 hours with your quote.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', direction: isUr ? 'rtl' : 'ltr' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { key: 'name', en: 'Your name', ur: 'آپ کا نام' },
                    { key: 'business', en: 'Business name', ur: 'کاروبار کا نام' },
                  ].map((f) => (
                    <input key={f.key} type="text" placeholder={isUr ? f.ur : f.en} value={form[f.key]}
                      onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))}
                      style={fieldStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(232,197,71,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(252,252,247,0.2)')} />
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {[
                    { key: 'city', en: 'City', ur: 'شہر' },
                    { key: 'phone', en: 'Phone number', ur: 'فون نمبر' },
                  ].map((f) => (
                    <input key={f.key} type="text" placeholder={isUr ? f.ur : f.en} value={form[f.key]}
                      onChange={(e) => setForm((s) => ({ ...s, [f.key]: e.target.value }))}
                      style={fieldStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(232,197,71,0.6)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(252,252,247,0.2)')} />
                  ))}
                </div>
                <select value={form.variety} onChange={(e) => setForm((s) => ({ ...s, variety: e.target.value }))}
                  style={{ ...fieldStyle, cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(232,197,71,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(252,252,247,0.2)')}>
                  <option value="" style={{ backgroundColor: '#1c3a13' }}>{isUr ? 'چاول کی قسم منتخب کریں' : 'Select rice variety'}</option>
                  {['SK-01™ Super Kernel Basmati', '1121-W™ White Sella', 'ST-02™ Steam Basmati', 'IRRI-9™ Long Grain', 'SB-03™ Sella Basmati', 'KN-04™ Kainat Premium'].map((v) => (
                    <option key={v} value={v} style={{ backgroundColor: '#1c3a13' }}>{v}</option>
                  ))}
                </select>
                <select value={form.volume} onChange={(e) => setForm((s) => ({ ...s, volume: e.target.value }))}
                  style={{ ...fieldStyle, cursor: 'pointer' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(232,197,71,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(252,252,247,0.2)')}>
                  <option value="" style={{ backgroundColor: '#1c3a13' }}>{isUr ? 'مقدار منتخب کریں' : 'Select volume'}</option>
                  {['50–100 kg', '100–500 kg', '500 kg – 1 Tonne', '1–5 Tonnes', '5+ Tonnes'].map((v) => (
                    <option key={v} value={v} style={{ backgroundColor: '#1c3a13' }}>{v}</option>
                  ))}
                </select>
                <textarea value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder={isUr ? 'اضافی تفصیلات (اختیاری)' : 'Additional details (optional)'}
                  rows={3}
                  style={{ ...fieldStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'rgba(232,197,71,0.6)')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(252,252,247,0.2)')} />
                <motion.button type="submit" className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
                  whileHover={reduce ? {} : { scale: 1.01 }} whileTap={reduce ? {} : { scale: 0.98 }}>
                  {isUr ? 'قیمت کے لیے درخواست دیں' : 'Request a Quote'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .page-wrap > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #contact { padding-top: 64px !important; padding-bottom: 64px !important; }
        }
        @media (max-width: 600px) {
          #contact { padding-top: 48px !important; padding-bottom: 48px !important; }
          #contact form { padding: 24px !important; }
        }
        select option { color: #fcfcf7; }
      `}</style>
    </section>
  )
}
