import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../App'

const cols = {
  en: {
    varieties: { title: 'Varieties', links: [
      { name: 'SK-01™ Super Kernel', href: '/#varieties' },
      { name: '1121-W™ White Sella', href: '/#varieties' },
      { name: 'ST-02™ Steam Basmati', href: '/#varieties' },
      { name: 'IRRI-9™ Long Grain', href: '/#varieties' },
      { name: 'SB-03™ Sella', href: '/#varieties' },
      { name: 'KN-04™ Kainat', href: '/#varieties' }
    ] },
    company: { title: 'Company', links: [
      { name: 'Our Story', href: '/about' },
      { name: 'Quality Promise', href: '/about' },
      { name: 'Farm Partners', href: '/about' },
      { name: 'Careers', href: '/#contact' },
      { name: 'Press', href: '/#contact' }
    ] },
    support: { title: 'Support', links: [
      { name: 'How to Order', href: '/faq' },
      { name: 'Delivery Info', href: '/delivery' },
      { name: 'Custom Packaging', href: '/faq' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Contact Us', href: '/#contact' }
    ] },
  },
  ur: {
    varieties: { title: 'اقسام', links: [
      { name: 'SK-01™ سپر کرنل', href: '/#varieties' },
      { name: '1121-W™ وائٹ سیلہ', href: '/#varieties' },
      { name: 'ST-02™ سٹیم باسمتی', href: '/#varieties' },
      { name: 'IRRI-9™', href: '/#varieties' },
      { name: 'SB-03™ سیلہ', href: '/#varieties' },
      { name: 'KN-04™ کائنات', href: '/#varieties' }
    ] },
    company: { title: 'کمپنی', links: [
      { name: 'ہماری کہانی', href: '/about' },
      { name: 'معیار کا وعدہ', href: '/about' },
      { name: 'کسان شراکت دار', href: '/about' },
      { name: 'ملازمت', href: '/#contact' },
      { name: 'پریس', href: '/#contact' }
    ] },
    support: { title: 'مدد', links: [
      { name: 'آرڈر کیسے کریں', href: '/faq' },
      { name: 'ڈیلیوری معلومات', href: '/delivery' },
      { name: 'کسٹم پیکیجنگ', href: '/faq' },
      { name: 'سوالات', href: '/faq' },
      { name: 'رابطہ', href: '/#contact' }
    ] },
  },
}

export default function Footer() {
  const { lang } = useLang()
  const isUr = lang === 'ur'
  const c = cols[lang] || cols.en

  return (
    <footer style={{ backgroundColor: '#1c3a13' }}>
      <div className="page-wrap" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
          direction: isUr ? 'rtl' : 'ltr',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 400, color: '#fcfcf7', letterSpacing: '-0.2px' }}>Elite Rice</span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e8c547', display: 'inline-block', marginBottom: '1px' }} />
            </div>
            <p style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '14px', fontWeight: 350, color: 'rgba(252,252,247,0.45)', lineHeight: isUr ? 2.2 : 1.65, maxWidth: '220px', marginBottom: '24px' }}>
              {isUr ? 'پاکستان کے بہترین پکوان سنٹروں کا بھروسہ مند چاول سپلائر۔ کھیت سے دسترخوان تک۔' : 'Pakistan\'s trusted rice partner for catering professionals. From field to dastarkhwan since 2003.'}
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {['FB', 'IG', 'WA', 'YT'].map((s) => (
                <a key={s} href="#" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 400, color: 'rgba(252,252,247,0.3)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fcfcf7')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(252,252,247,0.3)')}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(c).map(([key, col]) => (
            <div key={key}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500, color: 'rgba(252,252,247,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                {col.title}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '14px', fontWeight: 350, color: 'rgba(252,252,247,0.5)', textDecoration: 'none', lineHeight: isUr ? 2 : 1.4, transition: 'color 0.15s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fcfcf7')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(252,252,247,0.5)')}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(252,252,247,0.08)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          direction: isUr ? 'rtl' : 'ltr',
        }}>
          <p className="t-label" style={{ color: 'rgba(252,252,247,0.25)' }}>
            {isUr ? '© 2024 ایلیٹ رائس۔ جملہ حقوق محفوظ ہیں۔' : '© 2024 Elite Rice Pakistan. All rights reserved.'}
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {(isUr
              ? ['رازداری کی پالیسی', 'شرائط', 'رسائی']
              : ['Privacy Policy', 'Terms of Use', 'Accessibility']
            ).map((l) => (
              <a key={l} href="#" style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '12px', fontWeight: 400, color: 'rgba(252,252,247,0.25)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(252,252,247,0.6)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(252,252,247,0.25)')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .page-wrap > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          footer .page-wrap > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
