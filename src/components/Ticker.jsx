import React from 'react'

const items = [
  'Super Kernel Basmati · سوپر کرنل باسمتی',
  'PK-386 Long Grain · لمبا دانہ',
  'IRRI-9 · آئی آر آر آئی ۹',
  'Sella Basmati · سیلہ باسمتی',
  '1121 White Sella · سفید سیلہ',
  'Steam Basmati · سٹیم باسمتی',
  'Brown Rice · براؤن رائس',
  'Parboiled Sella · پار بوائلڈ سیلہ',
  'Kainat · کائنات',
  'Shaheen Basmati · شاہین باسمتی',
  'Kissan Extra Long · کسان ایکسٹرا لانگ',
  'Guard Broken · گارڈ توٹا',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        backgroundColor: '#1A1A14',
        color: '#F5F0E8',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(212,135,10,0.2)',
        borderBottom: '1px solid rgba(212,135,10,0.2)',
      }}
      aria-label="Available rice varieties ticker"
    >
      {/* Top row - forward */}
      <div className="marquee-track" style={{ overflow: 'hidden', marginBottom: '0.5rem' }}>
        <div
          className="marquee-inner"
          style={{
            display: 'flex',
            gap: '3rem',
            width: 'max-content',
            animation: 'marquee 32s linear infinite',
          }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                whiteSpace: 'nowrap',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'rgba(245,240,232,0.75)',
                letterSpacing: '0.04em',
              }}
            >
              {item}
              <span style={{ color: '#D4870A', fontSize: '1.2em' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row - reverse with Urdu right-to-left feel */}
      <div className="marquee-track" style={{ overflow: 'hidden' }}>
        <div
          className="marquee-inner"
          style={{
            display: 'flex',
            gap: '3rem',
            width: 'max-content',
            animation: 'marquee-reverse 28s linear infinite',
          }}
        >
          {[...doubled].reverse().map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                whiteSpace: 'nowrap',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '0.875rem',
                color: 'rgba(212,135,10,0.6)',
                letterSpacing: '0.02em',
              }}
            >
              <span style={{ color: 'rgba(196,180,154,0.3)', fontSize: '1em' }}>◇</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
