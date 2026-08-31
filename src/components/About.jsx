import React, { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

function AnimateIn({ children, delay = 0, style }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="container-grid">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 8rem)',
          alignItems: 'center',
        }}>
          {/* Left: Decorative visual panel */}
          <AnimateIn delay={0}>
            <div style={{ position: 'relative' }}>
              {/* Large number backdrop */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                left: '-1rem',
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(8rem, 15vw, 14rem)',
                fontWeight: 900,
                color: 'rgba(212,135,10,0.07)',
                lineHeight: 1,
                userSelect: 'none',
                zIndex: 0,
              }}>
                20
              </div>

              {/* Panel card */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: '#1A1A14',
                borderRadius: '4px',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#F5F0E8',
              }}>
                <div className="text-caption" style={{ color: '#D4870A', marginBottom: '1.5rem' }}>
                  Est. 2004 · قیام ۲۰۰۴
                </div>

                {/* Stylized wheat/rice field illustration */}
                <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', marginBottom: '2rem' }}>
                  {/* Sky */}
                  <rect width="340" height="200" rx="2" fill="#1A1A14" />
                  {/* Sun */}
                  <circle cx="280" cy="45" r="20" fill="#D4870A" opacity="0.85" />
                  <circle cx="280" cy="45" r="28" fill="#D4870A" opacity="0.15" />
                  {/* Fields - horizontal rows suggesting rice paddies */}
                  {[130, 145, 158, 170, 181, 191, 200].map((y, i) => (
                    <line key={i} x1="0" y1={y} x2="340" y2={y + i * 0.5}
                      stroke="#C4B49A" strokeWidth={i === 0 ? 2 : 1} opacity={0.15 + i * 0.05} />
                  ))}
                  {/* Rice stalks - left cluster */}
                  {[30, 50, 70, 90, 110].map((x, i) => (
                    <g key={i}>
                      <line x1={x} y1="200" x2={x + (i % 2 === 0 ? -5 : 5)} y2="110" stroke="#C4B49A" strokeWidth="2" opacity="0.6" />
                      <ellipse cx={x + (i % 2 === 0 ? -5 : 5)} cy="105" rx="4" ry="12" fill="#D4870A" opacity="0.7" transform={`rotate(${i % 2 === 0 ? -15 : 15} ${x + (i % 2 === 0 ? -5 : 5)} 105)`} />
                      {[-8, -4, 0, 4, 8].map((dy, j) => (
                        <ellipse key={j} cx={x + (i % 2 === 0 ? -5 : 5) + (j - 2) * 3} cy={105 + dy}
                          rx="2" ry="5" fill="#C4B49A" opacity="0.5"
                          transform={`rotate(${(j - 2) * 30} ${x + (i % 2 === 0 ? -5 : 5) + (j - 2) * 3} ${105 + dy})`} />
                      ))}
                    </g>
                  ))}
                  {/* Rice stalks - right cluster */}
                  {[220, 250, 280, 310].map((x, i) => (
                    <g key={i}>
                      <line x1={x} y1="200" x2={x + (i % 2 === 0 ? 4 : -4)} y2="95" stroke="#C4B49A" strokeWidth="2" opacity="0.5" />
                      <ellipse cx={x + (i % 2 === 0 ? 4 : -4)} cy="90" rx="3.5" ry="10" fill="#D4870A" opacity="0.6" transform={`rotate(${i % 2 === 0 ? 12 : -12} ${x + (i % 2 === 0 ? 4 : -4)} 90)`} />
                    </g>
                  ))}
                  {/* Water reflection */}
                  <rect x="0" y="170" width="340" height="30" fill="rgba(212,135,10,0.05)" />
                  {/* Elite Rice text overlay */}
                  <text x="170" y="68" textAnchor="middle"
                    fontFamily="Playfair Display, serif" fontSize="18" fontStyle="italic"
                    fill="#D4870A" opacity="0.9" fontWeight="600">
                    Elite Rice
                  </text>
                  <text x="170" y="88" textAnchor="middle"
                    fontFamily="Georgia, serif" fontSize="12"
                    fill="#C4B49A" opacity="0.7">
                    ایلیٹ رائس
                  </text>
                </svg>

                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.938rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.7, margin: 0 }}>
                  Rooted in the fertile plains of Punjab, harvested with care, 
                  delivered with pride.
                </p>
              </div>

              {/* Small floating stat card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  backgroundColor: '#D4870A',
                  borderRadius: '4px',
                  padding: '1.25rem 1.5rem',
                  zIndex: 2,
                }}
              >
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 900, color: '#F5F0E8', lineHeight: 1 }}>
                  100%
                </div>
                <div className="text-caption" style={{ color: 'rgba(245,240,232,0.8)', marginTop: '0.25rem' }}>
                  Natural · قدرتی
                </div>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right: Text content */}
          <div>
            <AnimateIn delay={0.15}>
              <span className="text-caption" style={{ color: '#D4870A', display: 'block', marginBottom: '1rem' }}>
                Our Story · ہماری کہانی
              </span>
            </AnimateIn>

            <AnimateIn delay={0.25}>
              <h2 className="text-h2" style={{ color: '#1A1A14', marginBottom: '1.5rem' }}>
                Twenty years of growing what Pakistan eats.
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="divider" />
            </AnimateIn>

            <AnimateIn delay={0.35}>
              <p className="text-body-lg" style={{ color: '#5A5446', marginBottom: '1.5rem' }}>
                Elite Rice began in the rice fields of Gujranwala, where a family of farmers 
                understood one truth: the quality of a meal begins before the kitchen. We work 
                directly with growers who follow traditional cultivation methods, ensuring every 
                grain that reaches your <em>dastarkhwan</em> carries the honest taste of real soil.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <p className="text-body" style={{ color: '#8B7D65', marginBottom: '2rem' }}>
                Today, we serve over 500 catering centers (pakwan services) across Pakistan — 
                from neighbourhood weddings to corporate events. Our clients trust us not because 
                we promise the best, but because every delivery proves it.
              </p>
            </AnimateIn>

            {/* Urdu paragraph */}
            <AnimateIn delay={0.45}>
              <div style={{
                borderLeft: '2px solid #D4870A',
                paddingLeft: '1.25rem',
                marginBottom: '2rem',
              }}>
                <p className="urdu" style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.05rem',
                  color: '#8B7D65',
                  lineHeight: 2,
                  margin: 0,
                }}>
                  ہم نے بیس سال پہلے گجرانوالہ کے کھیتوں سے آغاز کیا — اور آج پاکستان بھر کے پکوان سنٹروں کی میزوں تک پہنچتے ہیں۔ ہمارا وعدہ ایک ہی ہے: بہترین چاول، ہر بار۔
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <a href="#order" className="btn-primary" style={{ display: 'inline-flex' }}>
                Partner With Us · ہمارے ساتھ جڑیں
              </a>
            </AnimateIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container-grid > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
