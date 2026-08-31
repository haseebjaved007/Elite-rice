import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

const steps = [
  {
    id: 1,
    labelEn: 'Step 1 of 3',
    labelUr: 'مرحلہ ۱ از ۳',
    qEn: 'Which rice variety do you need?',
    qUr: 'آپ کو کس قسم کا چاول چاہیے؟',
    subEn: 'Select the variety that best suits your menu and volume requirements.',
    subUr: 'اپنے مینو اور مقدار کے مطابق قسم منتخب کریں۔',
    options: [
      { en: 'SK-01™ Super Kernel Basmati', ur: 'سپر کرنل باسمتی' },
      { en: '1121-W™ White Sella', ur: '۱۱۲۱ وائٹ سیلہ' },
      { en: 'ST-02™ Steam Basmati', ur: 'سٹیم باسمتی' },
      { en: 'IRRI-9™ Long Grain', ur: 'آئی آر آر آئی 9' },
      { en: 'SB-03™ Sella Basmati', ur: 'سیلہ باسمتی' },
      { en: 'KN-04™ Kainat Premium', ur: 'کائنات پریمیم' },
    ],
  },
  {
    id: 2,
    labelEn: 'Step 2 of 3',
    labelUr: 'مرحلہ ۲ از ۳',
    qEn: 'What volume do you need?',
    qUr: 'آپ کو کتنی مقدار چاہیے؟',
    subEn: 'We supply everything from 50kg trial orders to multi-tonne recurring contracts.',
    subUr: 'ہم ۵۰ کلو سے لے کر کئی ٹن تک سپلائی کرتے ہیں۔',
    options: [
      { en: '50–100 kg (Trial Order)', ur: '۵۰–۱۰۰ کلو (آزمائشی)' },
      { en: '100–500 kg (Regular Supply)', ur: '۱۰۰–۵۰۰ کلو (باقاعدہ)' },
      { en: '500 kg – 1 Tonne', ur: '۵۰۰ کلو – ۱ ٹن' },
      { en: '1–5 Tonnes (Bulk Contract)', ur: '۱–۵ ٹن (بلک)' },
      { en: '5+ Tonnes (Wholesale)', ur: '۵+ ٹن (ہول سیل)' },
    ],
  },
  {
    id: 3,
    labelEn: 'Step 3 of 3',
    labelUr: 'مرحلہ ۳ از ۳',
    qEn: 'How would you like it packed?',
    qUr: 'پیکیجنگ کیسی چاہیے؟',
    subEn: 'We offer custom packaging with your brand name or standard Elite Rice packaging.',
    subUr: 'آپ کے برانڈ نام کے ساتھ یا ایلیٹ رائس کی معیاری پیکیجنگ۔',
    options: [
      { en: '25kg Standard Sacks', ur: '۲۵ کلو معیاری بوری' },
      { en: '50kg Standard Sacks', ur: '۵۰ کلو معیاری بوری' },
      { en: 'Custom Branded (your logo)', ur: 'آپ کے لوگو کے ساتھ' },
      { en: 'Vacuum-sealed retail packs', ur: 'ویکیوم سیل ریٹیل پیک' },
    ],
  },
]

const stepVariants = {
  enter: (dir) => ({ x: dir * 40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ x: dir * -40, opacity: 0, transition: { duration: 0.28 } }),
}

export default function OrderConfigurator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [selections, setSelections] = useState({})
  const [done, setDone] = useState(false)

  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  const step = steps[currentStep]

  const handleNext = () => {
    if (currentStep < steps.length - 1) { setDirection(1); setCurrentStep((s) => s + 1) }
    else setDone(true)
  }
  const handleBack = () => { setDirection(-1); setCurrentStep((s) => s - 1) }

  return (
    <section id="order" style={{ backgroundColor: '#1c3a13', paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="page-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Left: intro */}
          <div ref={titleRef} style={{ direction: isUr ? 'rtl' : 'ltr' }}>
            <motion.p className="t-mono"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              style={{ color: 'rgba(252,252,247,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
              {isUr ? 'آرڈر کنفیگریٹر' : 'Order Configurator'}
            </motion.p>
            <motion.h2 className="t-heading-lg"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ color: '#fcfcf7', marginBottom: '20px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
              {isUr ? 'آپ کا آرڈر، آپ کی مرضی سے۔' : 'Build your order in 3 steps.'}
            </motion.h2>
            <motion.p className="t-body"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.18 }}
              style={{ color: 'rgba(252,252,247,0.55)', marginBottom: '40px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
              {isUr
                ? 'قسم، مقدار، اور پیکیجنگ منتخب کریں — ہم 24 گھنٹے میں تصدیق اور قیمت بھیجیں گے۔'
                : 'Select your variety, volume, and packaging — we confirm your quote within 24 hours.'}
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{ display: 'flex', gap: '8px' }}>
              {steps.map((_, i) => (
                <div key={i} style={{
                  height: '3px', borderRadius: '1000px', flex: 1,
                  backgroundColor: i <= (done ? steps.length - 1 : currentStep) ? '#e8c547' : 'rgba(252,252,247,0.18)',
                  transition: 'background-color 0.4s ease',
                }} />
              ))}
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.38 }}
              style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '◎', en: '24hr quote turnaround', ur: '۲۴ گھنٹے میں قیمت' },
                { icon: '◈', en: 'Dedicated account manager', ur: 'ذاتی اکاؤنٹ مینیجر' },
                { icon: '◇', en: 'City-wide delivery across Pakistan', ur: 'پاکستان بھر میں ڈیلیوری' },
              ].map((b) => (
                <div key={b.en} style={{ display: 'flex', alignItems: 'center', gap: '12px', direction: isUr ? 'rtl' : 'ltr' }}>
                  <span style={{ color: '#e8c547', opacity: 0.7, fontSize: '14px' }}>{b.icon}</span>
                  <span className="t-caption" style={{ color: 'rgba(252,252,247,0.5)', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
                    {isUr ? b.ur : b.en}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: quiz card */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 32 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}>
            <div style={{
              backgroundColor: 'rgba(252,252,247,0.05)',
              border: '1px solid rgba(252,252,247,0.1)',
              borderRadius: '16px',
              padding: '36px',
              minHeight: '440px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <AnimatePresence mode="wait" custom={direction}>
                {done ? (
                  <motion.div key="done"
                    initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ textAlign: 'center', margin: 'auto' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#e8c547', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '22px' }}>✓</div>
                    <h3 style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '20px', fontWeight: 350, color: '#fcfcf7', marginBottom: '12px' }}>
                      {isUr ? 'آپ کا آرڈر تیار ہے۔' : 'Your order is configured.'}
                    </h3>
                    <p className="t-caption" style={{ color: 'rgba(252,252,247,0.5)', marginBottom: '32px' }}>
                      {isUr ? 'ہم 24 گھنٹے میں قیمت کے ساتھ رابطہ کریں گے۔' : 'Our team will reach out with a detailed quote within 24 hours.'}
                    </p>
                    <motion.a href="#contact" className="btn-primary"
                      style={{ backgroundColor: '#e8c547', color: '#1c3a13', display: 'inline-flex' }}
                      whileHover={reduce ? {} : { scale: 1.02 }} whileTap={reduce ? {} : { scale: 0.97 }}>
                      {isUr ? 'تفصیلات بھیجیں →' : 'Send My Details →'}
                    </motion.a>
                  </motion.div>
                ) : (
                  <motion.div key={currentStep}
                    custom={direction}
                    variants={reduce ? {} : stepVariants}
                    initial="enter" animate="center" exit="exit"
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', direction: isUr ? 'rtl' : 'ltr' }}>
                    <p className="t-mono" style={{ color: 'rgba(252,252,247,0.35)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                      {isUr ? step.labelUr : step.labelEn}
                    </p>
                    <h3 style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '18px', fontWeight: 350, color: '#fcfcf7', lineHeight: 1.35, marginBottom: '8px', letterSpacing: '-0.15px' }}>
                      {isUr ? step.qUr : step.qEn}
                    </h3>
                    <p className="t-caption" style={{ color: 'rgba(252,252,247,0.4)', marginBottom: '24px' }}>
                      {isUr ? step.subUr : step.subEn}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                      {step.options.map((opt) => {
                        const label = isUr ? opt.ur : opt.en
                        const selected = selections[currentStep] === opt.en
                        return (
                          <motion.button key={opt.en}
                            onClick={() => setSelections((s) => ({ ...s, [currentStep]: opt.en }))}
                            whileHover={reduce ? {} : { scale: 1.01 }}
                            whileTap={reduce ? {} : { scale: 0.99 }}
                            style={{
                              background: selected ? 'rgba(232,197,71,0.12)' : 'transparent',
                              border: selected ? '1.5px solid #e8c547' : '1.5px solid rgba(252,252,247,0.15)',
                              borderRadius: '8px', padding: '12px 16px', cursor: 'pointer',
                              textAlign: isUr ? 'right' : 'left',
                              fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif',
                              fontSize: '14px', fontWeight: 400,
                              color: selected ? '#e8c547' : 'rgba(252,252,247,0.7)',
                              transition: 'all 0.2s ease',
                            }}>
                            {label}
                          </motion.button>
                        )
                      })}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
                      {currentStep > 0 ? (
                        <button onClick={handleBack} style={{ background: 'none', border: 'none', color: 'rgba(252,252,247,0.35)', fontFamily: 'Inter, sans-serif', fontSize: '14px', cursor: 'pointer', padding: '8px 0' }}>
                          ← {isUr ? 'واپس' : 'Back'}
                        </button>
                      ) : <span />}
                      <motion.button onClick={handleNext} disabled={!selections[currentStep]}
                        className="btn-primary"
                        style={{ opacity: selections[currentStep] ? 1 : 0.35, cursor: selections[currentStep] ? 'pointer' : 'not-allowed', padding: '12px 24px', fontSize: '14px' }}
                        whileHover={reduce || !selections[currentStep] ? {} : { scale: 1.02 }}
                        whileTap={reduce || !selections[currentStep] ? {} : { scale: 0.97 }}>
                        {currentStep === steps.length - 1
                          ? (isUr ? 'آرڈر بھیجیں →' : 'Submit Order →')
                          : (isUr ? 'جاری رکھیں →' : 'Continue →')}
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #order .page-wrap > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #order { padding-top: 72px !important; padding-bottom: 72px !important; }
        }
        @media (max-width: 600px) {
          #order { padding-top: 56px !important; padding-bottom: 56px !important; }
        }
      `}</style>
    </section>
  )
}
