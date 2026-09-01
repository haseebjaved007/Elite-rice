import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

export default function About() {
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
            {isUr ? 'ہماری کہانی' : 'Our Story'}
          </p>
          <h1 className="t-display" style={{ color: '#1c3a13', marginBottom: '48px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
            {isUr ? 'کھیت سے دسترخوان تک، ایک ایماندارانہ سفر۔' : 'From the fields of Punjab to your Dastarkhwan.'}
          </h1>

          <div className="t-body" style={{ color: '#333333', display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
            <p>
              {isUr
                ? 'ایلیٹ رائس کا آغاز پنجاب کے ایک چھوٹے سے گاؤں سے ہوا۔ ہمارے آباؤ اجداد جانتے تھے کہ چاول صرف ایک فصل نہیں، بلکہ محنت، مٹی کی خوشبو، اور رزق کی برکت کا نام ہے۔'
                : 'Elite Rice began in a small village in Punjab. Our forefathers understood that rice isn\'t just a crop—it is the culmination of hard work, the scent of the soil, and the blessing (Barakah) of sustenance.'}
            </p>
            <p>
              {isUr
                ? 'برسوں تک، ہم نے دیکھا کہ مڈل مین (آڑھتی) کسانوں کی محنت کا منافع لے جاتے اور صارفین تک پہنچتے پہنچتے چاول کی قیمت دگنی اور معیار کم ہو جاتا۔ ہم نے فیصلہ کیا کہ اس نظام کو بدلنا ہوگا۔'
                : 'For years, we watched middlemen take the profits of the farmers\' labor, while consumers received mixed-quality rice at double the price. We decided this system had to change.'}
            </p>
            <p>
              {isUr
                ? 'آج، ایلیٹ رائس سیدھا کھیت سے چاول اٹھاتا ہے، اسے اپنے جدید پلانٹ میں صاف کرتا ہے، اور براہ راست پکوان سنٹرز اور کیٹرنگ سروسز کو فراہم کرتا ہے۔ اس سے نہ صرف کسان کو اس کا حق ملتا ہے بلکہ آپ کو بھی بہترین معیار کی ضمانت ملتی ہے۔'
                : 'Today, Elite Rice sources directly from the farmers, processes the grain in our modern facility, and supplies directly to Pakwan centers and catering professionals. This ensures the farmer gets their rightful share, and you get guaranteed premium quality without the markup.'}
            </p>
            <div style={{ marginTop: '32px', padding: '32px', backgroundColor: 'rgba(232,197,71,0.1)', borderRadius: '16px', border: '1px solid rgba(232,197,71,0.3)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#1c3a13', marginBottom: '16px' }}>
                {isUr ? 'ہمارا وعدہ (Quality Promise)' : 'Our Quality Promise'}
              </h3>
              <p>
                {isUr
                  ? 'ہم کبھی چاول میں ملاوٹ نہیں کرتے۔ جو بوری آپ کھولتے ہیں، اس میں ہر دانہ وہی ہوتا ہے جس کا ہم نے آپ سے وعدہ کیا تھا۔ خالص، خوشبودار، اور پکنے میں لاجواب۔'
                  : 'We never mix our rice varieties. The sack you open contains exactly what we promised. Pure, aromatic, and exceptional in yield.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
