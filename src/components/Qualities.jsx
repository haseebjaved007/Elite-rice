import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion'

const qualities = [
  {
    id: 1,
    name: 'Super Kernel Basmati',
    ur: 'سوپر کرنل باسمتی',
    tag: 'PREMIUM',
    tagColor: '#D4870A',
    grainLength: 'Extra Long · 8.5mm+',
    aroma: 'Intense · تیز خوشبو',
    cook: 'Fluffy, non-sticky',
    use: 'Biryani, Pulao, Wedding Feasts',
    useUr: 'بریانی، پلاؤ، شادیوں کا کھانا',
    desc: 'The undisputed king of Pakistani rice. Each grain elongates to almost double when cooked — producing the fluffy, aromatic biryani your guests will remember.',
    descUr: 'پاکستانی چاول کا بادشاہ۔ پکانے پر ہر دانہ دُگنا لمبا ہو جاتا ہے۔',
    bgColor: 'rgba(212,135,10,0.06)',
    grainVizColor: '#C4A96A',
    longGrain: true,
  },
  {
    id: 2,
    name: '1121 White Sella',
    ur: '۱۱۲۱ سفید سیلہ',
    tag: 'BEST SELLER',
    tagColor: '#1A1A14',
    grainLength: 'Long · 7.8mm',
    aroma: 'Mild · ہلکی خوشبو',
    cook: 'Firm, separate grains',
    use: 'Bulk Catering, Daily Events',
    useUr: 'بڑے تقریبات، روزمرہ پکانا',
    desc: 'The backbone of every professional catering kitchen. Steam-treated for consistency — cooks perfectly every single time, even in large volumes.',
    descUr: 'پکوان سنٹر کا بھروسہ مند ساتھی۔ بڑی مقدار میں بھی مکمل پکتا ہے۔',
    bgColor: 'rgba(26,26,20,0.04)',
    grainVizColor: '#E2D8C8',
    longGrain: true,
  },
  {
    id: 3,
    name: 'Steam Basmati',
    ur: 'سٹیم باسمتی',
    tag: 'CONSISTENT',
    tagColor: '#5A5446',
    grainLength: 'Long · 7.5mm',
    aroma: 'Balanced · متوازن',
    cook: 'Never mushy',
    use: 'Zarda, Kheer, Mixed Rice',
    useUr: 'زردہ، کھیر، مکس رائس',
    desc: 'Steam processing locks in shape and aroma. Ideal for caterers who need reliable results across large batches — from zarda at weddings to everyday lunch service.',
    descUr: 'بھاپ کا عمل خوشبو اور شکل دونوں محفوظ رکھتا ہے۔',
    bgColor: 'rgba(196,180,154,0.1)',
    grainVizColor: '#D4B87A',
    longGrain: false,
  },
  {
    id: 4,
    name: 'IRRI-9 Short Grain',
    ur: 'آئی آر آر آئی ۹',
    tag: 'ECONOMICAL',
    tagColor: '#D4870A',
    grainLength: 'Medium · 5.5mm',
    aroma: 'Subtle · ہلکی',
    cook: 'Slightly sticky',
    use: 'Khichdi, Rice Pudding, Everyday',
    useUr: 'کھچڑی، چاول پڈنگ، روزمرہ',
    desc: 'Value without compromise. IRRI-9 is the everyday workhorse — nutritious, filling, and budget-friendly for high-volume operations like school or corporate kitchens.',
    descUr: 'کم قیمت لیکن پوری غذائیت۔ بڑے باورچی خانوں کا پسندیدہ چاول۔',
    bgColor: 'rgba(212,135,10,0.04)',
    grainVizColor: '#B8A878',
    longGrain: false,
  },
  {
    id: 5,
    name: 'Sella Basmati',
    ur: 'سیلہ باسمتی',
    tag: 'AROMATIC',
    tagColor: '#8B6914',
    grainLength: 'Extra Long · 8mm',
    aroma: 'Rich · بھرپور',
    cook: 'Golden, non-stick',
    use: 'Biryani, Fried Rice, Pilaf',
    useUr: 'بریانی، فرائیڈ رائس، پلاؤ',
    desc: 'Parboiled for a golden hue and unmatched firmness. Sella Basmati is preferred by biryani masters who need grains that hold their shape under the dum process.',
    descUr: 'سنہری رنگ اور پختہ دانہ — دم بریانی کے لیے سب سے بہتر۔',
    bgColor: 'rgba(139,105,20,0.06)',
    grainVizColor: '#C8922A',
    longGrain: true,
  },
  {
    id: 6,
    name: 'Kainat Basmati',
    ur: 'کائنات باسمتی',
    tag: 'PREMIUM SELECT',
    tagColor: '#D4870A',
    grainLength: 'Extra Long · 8.3mm',
    aroma: 'Floral · پھولوں جیسی',
    cook: 'Light, elongated',
    use: 'Fine Dining, VIP Catering',
    useUr: 'اعلیٰ تقریبات، وی آئی پی پکوان',
    desc: 'Named after the universe — because one taste expands everything. Kainat is our prestige variety for high-end catering where only the absolute finest will do.',
    descUr: 'کائنات — کیوں کہ ایک لقمہ پوری دنیا بدل دیتا ہے۔ اعلیٰ تقریبات کے لیے۔',
    bgColor: 'rgba(212,135,10,0.08)',
    grainVizColor: '#D4A050',
    longGrain: true,
  },
]

// Rice grain visualization component
function GrainViz({ color, longGrain, count = 8 }) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * 360
        const r = 25
        const cx = 40 + r * Math.cos((angle * Math.PI) / 180)
        const cy = 40 + r * Math.sin((angle * Math.PI) / 180)
        const rx = longGrain ? 3 : 4
        const ry = longGrain ? 9 : 6
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            fill={color}
            opacity="0.85"
            transform={`rotate(${angle + 90} ${cx} ${cy})`}
          />
        )
      })}
      <ellipse cx="40" cy="40" rx="4" ry="4" fill={color} opacity="0.4" />
    </svg>
  )
}

function QualityCard({ q, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      ref={ref}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onClick={() => setExpanded(e => !e)}
      style={{
        backgroundColor: '#F5F0E8',
        border: '1px solid rgba(196,180,154,0.4)',
        borderRadius: '4px',
        padding: '2rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(26,26,20,0.1)' }}
      aria-expanded={expanded}
    >
      {/* Background tint */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: q.bgColor, pointerEvents: 'none' }} />

      <div style={{ position: 'relative' }}>
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <GrainViz color={q.grainVizColor} longGrain={q.longGrain} />
          <span
            className="text-caption"
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '100px',
              backgroundColor: q.tagColor,
              color: q.tagColor === '#1A1A14' ? '#F5F0E8' : '#F5F0E8',
              fontSize: '0.688rem',
              letterSpacing: '0.08em',
            }}
          >
            {q.tag}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-h4" style={{ color: '#1A1A14', marginBottom: '0.25rem', fontFamily: 'Playfair Display, serif' }}>
          {q.name}
        </h3>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.875rem', color: '#C4B49A', direction: 'rtl', marginBottom: '1rem' }}>
          {q.ur}
        </p>

        {/* Specs grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { label: 'Grain Length', value: q.grainLength },
            { label: 'Aroma', value: q.aroma },
            { label: 'Cook Result', value: q.cook },
          ].map(spec => (
            <div key={spec.label} style={{ gridColumn: spec.label === 'Cook Result' ? '1 / -1' : undefined }}>
              <div className="text-caption" style={{ color: '#C4B49A', marginBottom: '0.125rem' }}>{spec.label}</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#1A1A14' }}>{spec.value}</div>
            </div>
          ))}
        </div>

        {/* Best for */}
        <div style={{
          padding: '0.625rem 0.875rem',
          backgroundColor: 'rgba(212,135,10,0.08)',
          borderLeft: '2px solid #D4870A',
          borderRadius: '0 2px 2px 0',
          marginBottom: '0.75rem',
        }}>
          <div className="text-caption" style={{ color: '#D4870A', marginBottom: '0.125rem' }}>Best For</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: '#1A1A14' }}>{q.use}</div>
        </div>

        {/* Expand toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.813rem', color: '#D4870A', fontWeight: 500 }}>
            {expanded ? 'Less ↑' : 'Details ↓'}
          </span>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(196,180,154,0.3)', marginTop: '0.75rem' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.938rem', color: '#5A5446', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                  {q.desc}
                </p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.875rem', color: '#C4B49A', direction: 'rtl', lineHeight: 1.8 }}>
                  {q.descUr}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Qualities() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()

  return (
    <section
      id="qualities"
      className="section-padding"
      style={{ backgroundColor: '#1A1A14' }}
    >
      <div className="container-grid">
        {/* Section header */}
        <div ref={titleRef} style={{ maxWidth: '680px', marginBottom: '4rem' }}>
          <motion.span
            className="text-caption"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ color: '#D4870A', display: 'block', marginBottom: '1rem' }}
          >
            Rice Varieties · اقسامِ چاول
          </motion.span>
          <motion.h2
            className="text-h2"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ color: '#F5F0E8', marginBottom: '1.25rem' }}
          >
            Six varieties. One standard: exceptional.
          </motion.h2>
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="divider" />
          </motion.div>
          <motion.p
            className="text-body-lg"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            style={{ color: 'rgba(245,240,232,0.65)', marginBottom: '0.5rem' }}
          >
            Every variety is selected, cleaned, and graded to strict standards before it reaches your kitchen. 
            Click any card to learn more.
          </motion.p>
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ fontFamily: 'Georgia, serif', fontSize: '0.938rem', color: 'rgba(196,180,154,0.6)', direction: 'rtl' }}
          >
            ہر قسم کو سخت معیار کے مطابق چنا، صاف کیا اور درجہ بندی کی گئی ہے۔
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {qualities.map((q, i) => (
            <QualityCard key={q.id} q={q} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #qualities .container-grid > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #qualities .container-grid > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
