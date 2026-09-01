import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

export default function Delivery() {
  const { lang } = useLang()
  const isUr = lang === 'ur'
  const reduce = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ backgroundColor: '#fcfcf7', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="page-wrap">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', direction: isUr ? 'rtl' : 'ltr' }}
        >
          <p className="t-mono" style={{ color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
            {isUr ? 'ترسیل کی معلومات' : 'Delivery Information'}
          </p>
          <h1 className="t-display" style={{ color: '#1c3a13', marginBottom: '48px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
            {isUr ? '24 گھنٹے میں آپ کے دروازے پر۔' : 'At your doorstep in 24 hours.'}
          </h1>

          <div className="t-body" style={{ color: '#333333', display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
            <p>
              {isUr
                ? 'ہمارا لوجسٹکس کا نظام خاص طور پر پکوان سنٹرز کی ضروریات کو مدنظر رکھ کر بنایا گیا ہے۔ ہم سمجھتے ہیں کہ شادیوں اور تقریبات کے سیزن میں وقت پر چاول ملنا کتنا اہم ہے۔'
                : 'Our logistics system is purpose-built for the fast-paced catering industry. We understand that during peak wedding and event seasons, timely delivery is critical to your business.'}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '24px' }}>
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #eeeee9' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#1c3a13', marginBottom: '12px' }}>
                  {isUr ? 'تیز ترین ڈسپیچ' : 'Fast Dispatch'}
                </h3>
                <p className="t-body-sm" style={{ color: '#666666' }}>
                  {isUr 
                    ? 'آرڈر کنفرم ہونے کے بعد 24 گھنٹے کے اندر مال ہمارے ویئر ہاؤس سے ڈسپیچ کر دیا جاتا ہے۔'
                    : 'Once your order is confirmed, it is dispatched from our warehouse within 24 hours.'}
                </p>
              </div>
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #eeeee9' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#1c3a13', marginBottom: '12px' }}>
                  {isUr ? 'محفوظ پیکیجنگ' : 'Secure Transit'}
                </h3>
                <p className="t-body-sm" style={{ color: '#666666' }}>
                  {isUr 
                    ? 'نمی اور موسم سے بچاؤ کے لیے ہماری گاڑیاں مکمل طور پر کورڈ (Covered) اور محفوظ ہوتی ہیں۔'
                    : 'Our transit vehicles are fully covered and waterproof to protect the grain from moisture and weather.'}
                </p>
              </div>
            </div>
            
            <p style={{ marginTop: '24px' }}>
              {isUr
                ? 'ہم دیپالپور، لاہور، اور دیگر قریبی شہروں میں براہ راست ڈراپ آف کی سہولت فراہم کرتے ہیں۔ دوسرے شہروں کے لیے کارگو سروس کے ذریعے مال بھیجا جاتا ہے۔'
                : 'We offer direct drop-off services across Depalpur, Lahore, and surrounding cities. For other regions, we use trusted cargo partners.'}
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
