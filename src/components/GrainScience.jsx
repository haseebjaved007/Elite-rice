import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

/* ── Path-drawing grain stalk SVG ────────────────────────────────────────── */
function GrainStalksDrawing({ inView }) {
  const reduce = useReducedMotion()

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay) => ({
      pathLength: 1, opacity: 1,
      transition: { pathLength: { duration: 1.8, ease: 'easeInOut', delay }, opacity: { duration: 0.4, delay } },
    }),
  }
  const headVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay) => ({
      scale: 1, opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
    }),
  }

  const animate = (inView && !reduce) ? 'visible' : 'hidden'

  return (
    <svg viewBox="0 0 480 520" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: '480px' }}>

      {/* Main stalks — paths that draw themselves */}
      {[
        { d: 'M 200 480 L 200 200', delay: 0, width: 1.5, op: 0.3 },
        { d: 'M 120 480 L 128 250', delay: 0.1, width: 1.2, op: 0.25 },
        { d: 'M 280 480 L 272 220', delay: 0.15, width: 1.2, op: 0.25 },
        { d: 'M 80 480 L 90 300', delay: 0.2, width: 1, op: 0.2 },
        { d: 'M 320 480 L 312 295', delay: 0.25, width: 1, op: 0.2 },
        { d: 'M 360 480 L 350 320', delay: 0.3, width: 0.9, op: 0.18 },
        { d: 'M 40 480 L 52 330', delay: 0.35, width: 0.8, op: 0.15 },
        { d: 'M 400 480 L 388 310', delay: 0.4, width: 0.9, op: 0.18 },
        { d: 'M 440 480 L 424 340', delay: 0.45, width: 0.7, op: 0.14 },
      ].map((p, i) => (
        <motion.path key={i} d={p.d}
          stroke="#1c3a13" strokeWidth={p.width} strokeLinecap="round" opacity={p.op}
          variants={pathVariants} custom={p.delay}
          initial="hidden" animate={animate} />
      ))}

      {/* Leaf branches */}
      {[
        { d: 'M 200 360 Q 235 340 250 310', delay: 0.5 },
        { d: 'M 200 380 Q 162 360 148 330', delay: 0.55 },
        { d: 'M 200 310 Q 230 295 244 270', delay: 0.6 },
        { d: 'M 120 370 Q 150 355 162 325', delay: 0.65 },
        { d: 'M 280 345 Q 252 328 244 302', delay: 0.7 },
        { d: 'M 128 310 Q 100 294 90 268', delay: 0.75 },
      ].map((p, i) => (
        <motion.path key={`leaf-${i}`} d={p.d}
          stroke="#1c3a13" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"
          variants={pathVariants} custom={p.delay}
          initial="hidden" animate={animate} />
      ))}

      {/* Ground line */}
      <motion.path d="M 20 480 L 460 480"
        stroke="#1c3a13" strokeWidth="0.8" opacity="0.1"
        variants={pathVariants} custom={0}
        initial="hidden" animate={animate} />

      {/* Grain heads — appear after stalk draws */}
      {[
        { cx: 200, cy: 195, delay: 1.0 },
        { cx: 128, cy: 242, delay: 1.1 },
        { cx: 272, cy: 214, delay: 1.15 },
        { cx: 90, cy: 293, delay: 1.25 },
        { cx: 312, cy: 288, delay: 1.3 },
        { cx: 350, cy: 314, delay: 1.4 },
      ].map((h, i) => (
        <motion.g key={`head-${i}`} variants={headVariants} custom={h.delay} initial="hidden" animate={animate}>
          {[-12, -6, 0, 6, 12].map((off, j) => (
            <ellipse key={j}
              cx={h.cx + off * 0.45} cy={h.cy + Math.abs(off) * 0.35}
              rx="5" ry="12" fill="#1c3a13"
              opacity={0.35 - j * 0.04}
              transform={`rotate(${off * 1.8} ${h.cx + off * 0.45} ${h.cy + Math.abs(off) * 0.35})`}
            />
          ))}
        </motion.g>
      ))}

      {/* Gold accent grain heads */}
      {[
        { cx: 200, cy: 183, delay: 1.2 },
        { cx: 120, cy: 234, delay: 1.35 },
      ].map((h, i) => (
        <motion.ellipse key={`gold-${i}`} cx={h.cx} cy={h.cy} rx="6" ry="14"
          fill="#e8c547" opacity="0.65"
          transform={`rotate(-8 ${h.cx} ${h.cy})`}
          variants={headVariants} custom={h.delay} initial="hidden" animate={animate} />
      ))}
    </svg>
  )
}

const qualityPoints = [
  {
    icon: '◈',
    en: 'Triple-Grade Inspection',
    ur: 'تین مرحلوں کی جانچ',
    bodyEn: `Every batch passes field assessment, mill inspection, and pre-delivery verification — three independent quality gates before it leaves our facility.`,
    bodyUr: 'ہر بیچ تین الگ مراحل سے گزرتا ہے۔ فیلڈ جانچ، مل معائنہ، اور ڈیلیوری سے پہلے تصدیق۔',
  },
  {
    icon: '◎',
    en: 'Direct from Punjab Fields',
    ur: 'پنجاب کے کھیتوں سے براہ راست',
    bodyEn: `We source exclusively from verified farms in Sheikhupura, Gujranwala, and Sialkot — Pakistan's premier Basmati cultivation zones.`,
    bodyUr: 'شیخوپورہ، گوجرانوالہ، اور سیالکوٹ کے تصدیق شدہ کھیتوں سے سیدھا — کوئی بیچ والا نہیں۔',
  },
  {
    icon: '◇',
    en: 'Less Than 2% Broken Grain',
    ur: '2% سے کم ٹوٹا دانہ',
    bodyEn: `Our precision sorting guarantees less than 2% broken grain in every sack — so your daig comes out perfect, every single time.`,
    bodyUr: 'ہماری جدید چھنائی ہر بورے میں 2% سے کم ٹوٹے دانے یقینی بناتی ہے۔',
  },
]

function QualityCard({ point, index, sectionInView }) {
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, x: -28 }}
      animate={sectionInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.12 }}
      whileHover={reduce ? {} : { x: 6, transition: { duration: 0.25 } }}
      className="frosted-card"
      style={{ padding: '24px', direction: isUr ? 'rtl' : 'ltr' }}
    >
      <span style={{ fontSize: '16px', color: '#1c3a13', opacity: 0.4, display: 'block', marginBottom: '12px' }}>{point.icon}</span>
      <h3 style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, color: '#1c3a13', marginBottom: '10px', lineHeight: 1.35 }}>
        {isUr ? point.ur : point.en}
      </h3>
      <p className="t-caption" style={{ color: '#666', lineHeight: 1.65, fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
        {isUr ? point.bodyUr : point.bodyEn}
      </p>
    </motion.div>
  )
}

export default function GrainScience() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const svgRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const svgInView = useInView(svgRef, { once: true, margin: '-100px' })
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  /* Parallax on the stalk illustration */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const svgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="quality" ref={sectionRef}
      style={{ backgroundColor: '#fcfcf7', paddingTop: '112px', paddingBottom: '112px' }}>
      <div className="page-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '88px', alignItems: 'center' }}>

          {/* Left: text + frosted cards */}
          <div style={{ direction: isUr ? 'rtl' : 'ltr' }}>
            <div ref={titleRef}>
              <motion.p className="t-mono"
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                animate={titleInView ? { opacity: 1 } : {}}
                style={{ color: '#666', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '18px' }}>
                {isUr ? 'ہمارا معیار' : 'Our Standard'}
              </motion.p>
              <div className="clip-parent" style={{ marginBottom: '16px' }}>
                <motion.h2 className="t-heading"
                  initial={reduce ? { y: 0 } : { y: '105%' }}
                  animate={titleInView ? { y: 0 } : {}}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  style={{ color: '#1c3a13', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
                  {isUr ? 'تمام چاول برابر نہیں ہوتے۔' : 'Not all rice reaches your daig equal.'}
                </motion.h2>
              </div>
              <motion.p className="t-body"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.22 }}
                style={{ color: '#1c3a13', opacity: 0.62, marginBottom: '44px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
                {isUr
                  ? 'ایلیٹ رائس میں معیار کوئی وعدہ نہیں — یہ ایک عمل ہے جو کھیت سے شروع ہوتا ہے اور آپ کے دروازے تک ختم نہیں ہوتا۔'
                  : `At Elite Rice, quality is not a promise — it's a process that begins in the field and doesn't end until the grain reaches your kitchen door.`}
              </motion.p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {qualityPoints.map((p, i) => (
                <QualityCard key={i} point={p} index={i} sectionInView={titleInView} />
              ))}
            </div>

            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginTop: '32px' }}>
              <a href="#order" className="btn-text-dark">
                {isUr ? 'نمونہ آرڈر کریں ←' : 'Request a Sample →'}
              </a>
            </motion.div>
          </div>

          {/* Right: path-drawing stalks with parallax */}
          <motion.div
            ref={svgRef}
            style={{ y: svgY, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
            <GrainStalksDrawing inView={svgInView} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #quality .page-wrap > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #quality .page-wrap > div > div:last-child { order: -1; }
          #quality { padding-top: 72px !important; padding-bottom: 72px !important; }
        }
        @media (max-width: 600px) {
          #quality { padding-top: 56px !important; padding-bottom: 56px !important; }
        }
      `}</style>
    </section>
  )
}
