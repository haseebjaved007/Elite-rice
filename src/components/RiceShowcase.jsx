import React, { useState, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useInView, useReducedMotion } from 'framer-motion'
import { useLang } from '../App'

const varieties = [
  {
    code: 'SK-01™', en: 'Super Kernel Basmati', ur: 'سپر کرنل باسمتی',
    tag: 'Best Seller', tagUr: 'سب سے زیادہ فروخت',
    grain: '#4a7c3f', grainLight: '#6aaa5e',
    specs: ['Extra-long grain · 8.5mm+', 'Aromatic · Grade A', 'Punjab Origin'],
    specsUr: ['لمبا دانہ · ۸.۵mm+', 'خوشبودار · گریڈ A', 'پنجاب'],
    backDesc: `The crown jewel of Pakistani Basmati. Grains elongate 2× on cooking with a floral aroma that defines the best daig biryani across Pakistan.`,
    backDescUr: 'پاکستانی باسمتی کا تاج۔ پکنے پر دانہ دوگنا لمبا ہو جاتا ہے اور خوشبو پوری دیگ کو مہکاتی ہے۔',
    forText: 'Biryani · Pulao · Zarda',
    forTextUr: 'بریانی · پلاؤ · زردہ',
    minOrder: '50kg',
  },
  {
    code: '1121-W™', en: '1121 White Sella', ur: '۱۱۲۱ وائٹ سیلہ',
    tag: 'Most Ordered', tagUr: 'سب سے زیادہ آرڈر',
    grain: '#c8b882', grainLight: '#e0d4a0',
    specs: ['Parboiled · Low breakage', 'Non-sticky texture', 'High-volume ideal'],
    specsUr: ['ابلا ہوا · کم ٹوٹنا', 'چپکتا نہیں', 'بڑی مقدار کے لیے'],
    backDesc: `The go-to for daig-scale catering. Parboiled for maximum durability — every grain stays separate, every time. Built for volume.`,
    backDescUr: 'دیگ بریانی کا بادشاہ۔ ہر دانہ الگ، ہر بار۔ بڑے کھانوں کے لیے بہترین انتخاب۔',
    forText: 'Daig Biryani · Catering Events',
    forTextUr: 'دیگ بریانی · بڑے کھانے',
    minOrder: '100kg',
  },
  {
    code: 'ST-02™', en: 'Steam Basmati', ur: 'سٹیم باسمتی',
    tag: null, tagUr: null,
    grain: '#7c9e6e', grainLight: '#9dbf8e',
    specs: ['Steam-processed', 'Golden tint · Rich flavor', 'Premium events'],
    specsUr: ['بھاپ سے پروسیسڈ', 'سنہری رنگ · امیر ذائقہ', 'خاص تقریبات'],
    backDesc: `Steam-processed for deeper flavor and golden color. The choice for premium wedding daigs and five-star events where presentation matters.`,
    backDescUr: 'خاص شادیوں اور پریمیم تقریبات کے لیے — بھاپ سے تیار، گہرا ذائقہ، سنہرا رنگ۔',
    forText: 'Wedding Daigs · Premium Events',
    forTextUr: 'شادی کے دیگ · پریمیم تقریبات',
    minOrder: '50kg',
  },
  {
    code: 'IRRI-9™', en: 'IRRI-9 Long Grain', ur: 'آئی آر آر آئی 9',
    tag: 'Best Value', tagUr: 'بہترین قیمت',
    grain: '#a8c090', grainLight: '#c4d8ae',
    specs: ['Long grain · Firm texture', 'High yield · Affordable', 'Zero breakage guarantee'],
    specsUr: ['لمبا دانہ · مضبوط', 'زیادہ مقدار · کم قیمت', 'ٹوٹنے کی گارنٹی نہیں'],
    backDesc: `The value champion. Consistent quality, high-volume yield, and reliable zero-breakage performance — the backbone of daily pakwan center operations.`,
    backDescUr: 'روزانہ کے پکوان سنٹر کی ریڑھ کی ہڈی۔ یکساں معیار، زیادہ مقدار، کم قیمت۔',
    forText: 'Daily Operations · Dal Chawal',
    forTextUr: 'روزانہ کا کھانا · دال چاول',
    minOrder: '100kg',
  },
  {
    code: 'SB-03™', en: 'Sella Basmati', ur: 'سیلہ باسمتی',
    tag: null, tagUr: null,
    grain: '#b8a060', grainLight: '#d4bc80',
    specs: ['Parboiled Basmati', 'Aroma retained', 'Versatile for all menus'],
    specsUr: ['ابلا ہوا باسمتی', 'خوشبو برقرار', 'تمام کھانوں کے لیے'],
    backDesc: `The best of both worlds — Basmati aroma with Sella durability. Handles large batches without losing the aromatic quality that makes the dish.`,
    backDescUr: 'باسمتی کی خوشبو اور سیلہ کی مضبوطی — ہر بڑے کھانے میں بہترین نتیجہ۔',
    forText: 'Mixed Menus · Versatile Use',
    forTextUr: 'مختلف کھانے · ہمہ جہت',
    minOrder: '50kg',
  },
  {
    code: 'KN-04™', en: 'Kainat Basmati', ur: 'کائنات باسمتی',
    tag: 'Premium', tagUr: 'پریمیم',
    grain: '#5a8050', grainLight: '#7aa870',
    specs: ['Super-premium grade', 'Longest grain length', 'Limited availability'],
    specsUr: ['سپر پریمیم گریڈ', 'سب سے لمبا دانہ', 'محدود دستیابی'],
    backDesc: `Kainat — meaning universe — is our finest grade, reserved for luxury events. The grain that makes guests ask: where did you get this rice?`,
    backDescUr: 'کائنات — ہمارا سب سے اعلیٰ — جب مہمان پوچھیں کہ یہ چاول کہاں سے ملا؟',
    forText: 'Luxury Events · Five-Star Catering',
    forTextUr: 'پانچ ستارہ کیٹرنگ · شاہی دعوتیں',
    minOrder: '25kg',
  },
]

/* Grain fan SVG per card */
function GrainFan({ fill, light }) {
  return (
    <svg viewBox="0 0 160 200" fill="none" style={{ width: '100%', maxWidth: '130px' }}>
      {[
        { cx: 80, cy: 100, rx: 11, ry: 44, rotate: 0, op: 0.92 },
        { cx: 57, cy: 94, rx: 9, ry: 37, rotate: -20, op: 0.72 },
        { cx: 103, cy: 94, rx: 9, ry: 37, rotate: 20, op: 0.72 },
        { cx: 38, cy: 104, rx: 7, ry: 30, rotate: -36, op: 0.48 },
        { cx: 122, cy: 104, rx: 7, ry: 30, rotate: 36, op: 0.48 },
      ].map((g, i) => (
        <ellipse key={i} cx={g.cx} cy={g.cy} rx={g.rx} ry={g.ry}
          fill={fill} opacity={g.op}
          transform={`rotate(${g.rotate} ${g.cx} ${g.cy})`} />
      ))}
      <ellipse cx="72" cy="88" rx="3" ry="15" fill="white" opacity="0.18" transform="rotate(0 72 88)" />
      <ellipse cx="80" cy="186" rx="32" ry="7" fill={fill} opacity="0.18" />
    </svg>
  )
}

/* ── 3D Flip Card — hooks at component level ──────────────────────────── */
function FlipCard({ v, index }) {
  const [flipped, setFlipped] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  /* Per-card tilt on mouse when not flipped */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 80, damping: 20 })
  const smy = useSpring(my, { stiffness: 80, damping: 20 })
  const ry = useTransform(smx, [-1, 1], [-8, 8])
  const rx = useTransform(smy, [-1, 1], [6, -6])

  const onMove = useCallback((e) => {
    if (reduce || flipped) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left - r.width / 2) / (r.width / 2))
    my.set((e.clientY - r.top - r.height / 2) / (r.height / 2))
  }, [reduce, flipped, mx, my])

  const onLeave = useCallback(() => { mx.set(0); my.set(0) }, [mx, my])

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: '900px', height: '480px', cursor: 'none' }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        style={{ rotateX: flipped ? 0 : rx, rotateY: flipped ? undefined : ry, transformStyle: 'preserve-3d', position: 'relative', width: '100%', height: '100%' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── FRONT ── */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          borderRadius: '16px',
          backgroundColor: 'rgba(252,252,247,0.04)',
          border: '1px solid rgba(252,252,247,0.1)',
          padding: '24px', display: 'flex', flexDirection: 'column',
          direction: isUr ? 'rtl' : 'ltr',
        }}>
          {/* Top row — code pill always LTR; badge wraps if Urdu text is long */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span className="variety-pill" dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'embed', flexShrink: 0 }}>{v.code}</span>
            {(isUr ? v.tagUr : v.tag) && (
              <span className="badge-subtle" style={{ maxWidth: '120px', textAlign: 'center', whiteSpace: 'normal', lineHeight: 1.3, padding: '5px 10px' }}>
                {isUr ? v.tagUr : v.tag}
              </span>
            )}
          </div>

          {/* Name */}
          <h3 style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '19px', fontWeight: 350, color: '#fcfcf7', lineHeight: 1.25, marginBottom: '16px', letterSpacing: '-0.2px' }}>
            {isUr ? v.ur : v.en}
          </h3>

          {/* Grain visual */}
          <div style={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center', padding: '12px 0' }}>
            <GrainFan fill={v.grain} light={v.grainLight} />
          </div>

          {/* Specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
            {(isUr ? v.specsUr : v.specs).map((s, si) => (
              <div key={si} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#e8c547', flexShrink: 0 }} />
                <span className="t-caption" style={{ color: 'rgba(252,252,247,0.55)' }}>{s}</span>
              </div>
            ))}
          </div>

          {/* Flip hint */}
          <div style={{ borderTop: '1px solid rgba(252,252,247,0.08)', paddingTop: '12px', display: 'flex', justifyContent: 'center' }}>
            <span className="t-mono" style={{ color: 'rgba(252,252,247,0.22)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '9px' }}>
              {isUr ? 'تفصیل کے لیے ٹیپ کریں' : 'Click to see details'}
            </span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div style={{
          position: 'absolute', inset: 0, backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          borderRadius: '16px',
          backgroundColor: '#e8c547',
          padding: '28px', display: 'flex', flexDirection: 'column',
          direction: isUr ? 'rtl' : 'ltr',
        }}>
          <span className="variety-pill" dir="ltr" style={{ color: '#1c3a13', borderColor: 'rgba(28,58,19,0.4)', marginBottom: '20px', alignSelf: 'flex-start', direction: 'ltr', unicodeBidi: 'embed' }}>
            {v.code}
          </span>
          <h3 style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '20px', fontWeight: 400, color: '#1c3a13', lineHeight: 1.25, marginBottom: '16px', letterSpacing: '-0.2px' }}>
            {isUr ? v.ur : v.en}
          </h3>
          <p style={{ fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgba(28,58,19,0.75)', lineHeight: isUr ? 2 : 1.65, flex: 1, marginBottom: '20px' }}>
            {isUr ? v.backDescUr : v.backDesc}
          </p>
          <div style={{ marginBottom: '20px' }}>
            <span className="t-label" style={{ color: 'rgba(28,58,19,0.5)', display: 'block', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {isUr ? 'بہترین استعمال' : 'Best for'}
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1c3a13' }}>
              {isUr ? v.forTextUr : v.forText}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(28,58,19,0.12)', paddingTop: '16px' }}>
            <span className="t-mono" style={{ color: 'rgba(28,58,19,0.45)' }}>Min. {v.minOrder}</span>
            <a href="#order" className="btn-ghost-dark" style={{ padding: '10px 20px', fontSize: '13px' }}
              onClick={(e) => e.stopPropagation()}>
              {isUr ? 'آرڈر کریں →' : 'Order →'}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function RiceShowcase() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const { lang } = useLang()
  const isUr = lang === 'ur'

  return (
    <section id="varieties" style={{ backgroundColor: '#1c3a13', paddingTop: '112px', paddingBottom: '112px' }}>
      <div className="page-wrap">
        {/* Header */}
        <div ref={titleRef} style={{ marginBottom: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', direction: isUr ? 'rtl' : 'ltr' }}>
          <div>
            <motion.p className="t-mono"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              style={{ color: 'rgba(252,252,247,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>
              {isUr ? 'اقسام کا انتخاب' : 'Click any card to flip'}
            </motion.p>
            <div className="clip-parent">
              <motion.h2
                className="t-heading-lg"
                initial={reduce ? { y: 0 } : { y: '105%' }}
                animate={titleInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                style={{ color: '#fcfcf7', maxWidth: '480px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif' }}>
                {isUr ? 'ہر ضرورت کے لیے، بہترین چاول۔' : 'Six varieties. One standard — excellence.'}
              </motion.h2>
            </div>
          </div>
          <motion.a href="#order" className="btn-ghost"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}>
            {isUr ? 'بلک آرڈر →' : 'Bulk Quote →'}
          </motion.a>
        </div>

        {/* 3D flip card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {varieties.map((v, i) => <FlipCard key={v.code} v={v} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { #varieties .page-wrap > div:last-child { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px) {
          #varieties .page-wrap > div:last-child { grid-template-columns: 1fr !important; }
          #varieties { padding-top: 64px !important; padding-bottom: 64px !important; }
          #varieties .page-wrap > div:first-child { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
