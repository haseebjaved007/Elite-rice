import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

const faqs = [
  {
    enQ: 'What is the minimum order quantity?',
    urQ: 'کم از کم کتنا آرڈر دے سکتے ہیں؟',
    enA: 'Our minimum order quantity for commercial Pakwan centers is 50kg (two standard sacks). We offer trial orders of 25kg for new partners.',
    urA: 'کمرشل پکوان سنٹرز کے لیے کم از کم آرڈر 50 کلو (دو بوریاں) ہے۔ نئے کسٹمرز کے لیے 25 کلو کا آزمائشی آرڈر بھی دستیاب ہے۔'
  },
  {
    enQ: 'Do you deliver directly to our kitchen?',
    urQ: 'کیا آپ براہ راست ہمارے کچن تک ڈیلیوری کرتے ہیں؟',
    enA: 'Yes! We offer direct-to-door delivery across major cities in Punjab. Our logistics team handles the unloading as well.',
    urA: 'جی ہاں! ہم پنجاب کے بڑے شہروں میں براہ راست آپ کے دروازے تک ڈیلیوری کرتے ہیں۔ ہماری ٹیم مال اتارنے کی بھی ذمہ دار ہے۔'
  },
  {
    enQ: 'Can I get my catering brand logo on the sacks?',
    urQ: 'کیا ہم بوریوں پر اپنے کیٹرنگ برانڈ کا لوگو چھپوا سکتے ہیں؟',
    enA: 'Absolutely. For recurring bulk orders (1+ Tonnes), we provide custom branded packaging at no extra cost to help you build your brand.',
    urA: 'بالکل۔ بڑے آرڈرز (1 ٹن سے زیادہ) کے لیے ہم آپ کے برانڈ کے نام والی پیکیجنگ فراہم کرتے ہیں تاکہ آپ کی شناخت بن سکے۔'
  },
  {
    enQ: 'What are your credit terms?',
    urQ: 'ادائیگی کا طریقہ کار اور ادھار کی سہولت کیا ہے؟',
    enA: 'We offer flexible 15-day and 30-day credit cycles for established partners after the first three cash-on-delivery transactions.',
    urA: 'پہلے تین آرڈرز نقد ادائیگی پر ہوتے ہیں، جس کے بعد ہم پرانے شراکت داروں کو 15 یا 30 دن کی ادھار کی سہولت فراہم کرتے ہیں۔'
  }
]

export default function Faq() {
  const { lang } = useLang()
  const isUr = lang === 'ur'
  const reduce = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main style={{ backgroundColor: '#1c3a13', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="page-wrap">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', direction: isUr ? 'rtl' : 'ltr' }}
        >
          <p className="t-mono" style={{ color: 'rgba(252,252,247,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
            {isUr ? 'عمومی سوالات' : 'FAQs'}
          </p>
          <h1 className="t-display" style={{ color: '#fcfcf7', marginBottom: '48px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
            {isUr ? 'آپ کے سوالات، ہمارے جوابات۔' : 'Frequently Asked Questions'}
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {faqs.map((q, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(252,252,247,0.1)', paddingBottom: '32px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#fcfcf7', marginBottom: '16px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
                  {isUr ? q.urQ : q.enQ}
                </h3>
                <p className="t-body" style={{ color: 'rgba(252,252,247,0.6)', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
                  {isUr ? q.urA : q.enA}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
