import React from 'react'
import { useReducedMotion } from 'framer-motion'

const items = [
  'Free delivery on bulk orders above 500kg',
  'کھیت سے دسترخوان تک — Elite Rice',
  'Super Kernel Basmati · 1121 Sella · IRRI-9 · Steam Basmati',
  'Pakistan\'s premium catering rice supplier since 2003',
  'آرڈر کریں اور 24 گھنٹے میں ڈیلیوری پائیں',
  'Free delivery on bulk orders above 500kg',
  'کھیت سے دسترخوان تک — Elite Rice',
  'Super Kernel Basmati · 1121 Sella · IRRI-9 · Steam Basmati',
  'Pakistan\'s premium catering rice supplier since 2003',
  'آرڈر کریں اور 24 گھنٹے میں ڈیلیوری پائیں',
]

export default function PromoBanner() {
  const reduce = useReducedMotion()
  return (
    <div
      style={{
        backgroundColor: '#fcfcf7',
        borderBottom: '1px solid #eeeee9',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 60,
      }}
    >
      {reduce ? (
        <div className="page-wrap">
          <span className="t-label" style={{ color: '#1c3a13' }}>
            Free delivery on bulk orders above 500kg — Elite Rice
          </span>
        </div>
      ) : (
        <div className="marquee-track" style={{ width: '100%' }}>
          <div className="marquee-inner" style={{ alignItems: 'center' }}>
            {items.map((text, i) => (
              <span
                key={i}
                className="t-label"
                style={{
                  color: '#1c3a13',
                  paddingRight: '56px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  opacity: 0.8,
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#e8c547',
                    display: 'inline-block',
                    flexShrink: 0,
                  }}
                />
                {text}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
