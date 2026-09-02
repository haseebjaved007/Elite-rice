import React, { useRef, useCallback, useEffect } from 'react'
import {
  motion, useMotionValue, useSpring, useTransform,
  useScroll, useReducedMotion, animate, useInView,
} from 'framer-motion'
import { useLang } from '../App'

/* ── Animated counter ────────────────────────────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (inView && !reduce) {
      const c = animate(count, to, { duration: 2.8, ease: 'easeOut' })
      return () => c.stop()
    } else if (reduce) { count.set(to) }
  }, [inView, count, to, reduce])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

/* ── Clip-path reveal for LATIN text only ────────────────────────────────── */
function RevealLine({ children, delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <div style={{ overflow: 'hidden', padding: '4px 0' }}>
      <motion.div
        initial={reduce ? { y: 0 } : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ── Simple fade-up for URDU text (no clip — Nastaliq diacritics get cut) ── */
function FadeUp({ children, delay = 0, style = {} }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/* ── Magnetic CTA ────────────────────────────────────────────────────────── */
function MagneticCTA({ href, label, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 14 })
  const sy = useSpring(y, { stiffness: 180, damping: 14 })
  const reduce = useReducedMotion()

  const onMove = useCallback((e) => {
    // Disable magnetic effect on touch devices or small screens
    if (reduce || (typeof window !== 'undefined' && window.innerWidth < 1024)) return
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - r.left - r.width / 2) * 0.32)
    y.set((e.clientY - r.top - r.height / 2) * 0.32)
  }, [reduce, x, y])
  
  const onLeave = useCallback(() => { 
    x.set(0); 
    y.set(0); 
  }, [x, y])

  return (
    <motion.a ref={ref} href={href} className={className}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: 'inline-block' }}>
      {label}
    </motion.a>
  )
}

/* ── Floating particle ───────────────────────────────────────────────────── */
function Particle({ x, y, size, delay }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, width: size, height: size, borderRadius: '50%', backgroundColor: '#e8c547', pointerEvents: 'none', zIndex: 1 }}
      animate={reduce ? {} : { y: [0, -14, 0], opacity: [0.15, 0.55, 0.15] }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

/* ── REALISTIC RICE FIELD ANIMATION ─────────────────────────────────────── */
const BASE_Y = 415
// [x, h, opacity, strokeW, swayDeg, durS, delayS, isGold]
const STALKS = [
  // Back layer — small, faint, gentle
  { x:52,  h:100, op:0.11, sw:0.75, s:1.8, d:3.9, dl:0.00, g:false },
  { x:106, h:113, op:0.12, sw:0.80, s:2.0, d:4.1, dl:0.24, g:false },
  { x:162, h: 97, op:0.10, sw:0.75, s:1.9, d:3.7, dl:0.46, g:false },
  { x:218, h:109, op:0.12, sw:0.80, s:1.7, d:4.0, dl:0.12, g:false },
  { x:270, h:105, op:0.11, sw:0.75, s:2.1, d:3.8, dl:0.36, g:false },
  { x:326, h:115, op:0.12, sw:0.80, s:1.8, d:4.2, dl:0.58, g:false },
  { x:382, h:103, op:0.10, sw:0.75, s:2.0, d:3.6, dl:0.18, g:false },
  { x:435, h:111, op:0.12, sw:0.80, s:1.9, d:4.3, dl:0.42, g:false },
  // Mid layer
  { x: 36, h:138, op:0.23, sw:1.1, s:2.8, d:3.3, dl:0.08, g:false },
  { x: 88, h:149, op:0.26, sw:1.2, s:3.0, d:3.1, dl:0.32, g:false },
  { x:142, h:134, op:0.22, sw:1.1, s:2.6, d:3.5, dl:0.54, g:false },
  { x:196, h:153, op:0.25, sw:1.2, s:2.9, d:3.2, dl:0.16, g:false },
  { x:250, h:141, op:0.23, sw:1.1, s:2.7, d:3.4, dl:0.44, g:false },
  { x:306, h:151, op:0.26, sw:1.2, s:3.1, d:3.0, dl:0.66, g:false },
  { x:362, h:139, op:0.22, sw:1.1, s:2.8, d:3.3, dl:0.10, g:false },
  { x:416, h:148, op:0.25, sw:1.2, s:2.6, d:3.6, dl:0.38, g:false },
  // Foreground layer — large, vivid, expressive
  { x: 22, h:172, op:0.54, sw:1.6, s:3.8, d:2.8, dl:0.05, g:false },
  { x: 78, h:183, op:0.60, sw:1.7, s:4.0, d:2.6, dl:0.28, g:false },
  { x:134, h:176, op:0.52, sw:1.6, s:3.6, d:2.9, dl:0.52, g:false },
  { x:192, h:189, op:0.64, sw:1.8, s:4.2, d:2.7, dl:0.15, g:true  },
  { x:248, h:179, op:0.56, sw:1.7, s:3.9, d:2.8, dl:0.38, g:false },
  { x:306, h:187, op:0.62, sw:1.8, s:4.1, d:2.6, dl:0.62, g:true  },
  { x:362, h:174, op:0.53, sw:1.6, s:3.7, d:2.9, dl:0.08, g:false },
  { x:420, h:182, op:0.58, sw:1.7, s:3.8, d:2.7, dl:0.35, g:false },
]

/* Grain positions for the drooping panicle (dx, dy, rotate) */
const GRAIN_POS = [
  [-14,16,-30], [-9,10,-19], [-5,6,-9], [-2,3.5,-3],
  [0, 2.5, 0],
  [2,3.5,3], [5,6,9], [9,10,19], [14,16,30],
  [-5,1,-7], [5,1,7],
]

function RiceFieldScene() {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 460 440" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '460px' }}
      aria-hidden="true">

      {/* Ground shadow */}
      <line x1="10" y1="422" x2="450" y2="422" stroke="rgba(252,252,247,0.08)" strokeWidth="1" />

      {STALKS.map((s, idx) => {
        const tipX = s.x + 4
        const tipY = BASE_Y - s.h
        const col = s.g ? '#e8c547' : '#fcfcf7'
        const colA = (a) => s.g ? `rgba(232,197,71,${a})` : `rgba(252,252,247,${a})`

        const stem = `M ${s.x} ${BASE_Y} Q ${s.x+3} ${BASE_Y - s.h*0.5} ${tipX} ${tipY}`
        const leaf1 = `M ${s.x+1} ${BASE_Y - s.h*0.32} L ${s.x-16} ${BASE_Y - s.h*0.46}`
        const leaf2 = `M ${s.x+2} ${BASE_Y - s.h*0.62} L ${s.x+15} ${BASE_Y - s.h*0.75}`

        const rx = 2.6 * (s.sw / 1.4)
        const ry = 7.0 * (s.sw / 1.4)

        return (
          <motion.g
            key={idx}
            animate={reduce ? {} : {
              rotate: [-s.s, s.s, -s.s*0.8, s.s*0.9, -s.s],
            }}
            transition={{ duration: s.d, repeat: Infinity, ease: 'easeInOut', delay: s.dl }}
            style={{ transformOrigin: `${s.x}px ${BASE_Y}px` }}
          >
            {/* Stem */}
            <path d={stem} stroke={colA(s.op)} strokeWidth={s.sw} strokeLinecap="round" />
            {/* Leaves */}
            <path d={leaf1} stroke={colA(s.op*0.7)} strokeWidth={s.sw*0.55} strokeLinecap="round" />
            <path d={leaf2} stroke={colA(s.op*0.7)} strokeWidth={s.sw*0.55} strokeLinecap="round" />

            {/* Drooping panicle (grain head) — its own independent sway */}
            <motion.g
              animate={reduce ? {} : { rotate: [2.5, -2.5, 2, -2, 2.5] }}
              transition={{ duration: s.d * 0.82, repeat: Infinity, ease: 'easeInOut', delay: s.dl + s.d * 0.15 }}
              style={{ transformOrigin: `${tipX}px ${tipY}px` }}
            >
              {GRAIN_POS.map(([dx, dy, angle], gi) => {
                const scale = s.sw / 1.5
                const cx = tipX + dx * scale
                const cy = tipY + dy * scale - 4
                return (
                  <ellipse key={gi}
                    cx={cx} cy={cy}
                    rx={rx * 0.88} ry={ry * 0.88}
                    fill={col} opacity={Math.min(s.op * 1.6, 0.92)}
                    transform={`rotate(${angle} ${cx} ${cy})`}
                  />
                )
              })}
              {/* Stem connection to panicle */}
              <path d={`M ${tipX} ${tipY} L ${tipX} ${tipY - 8}`}
                stroke={colA(s.op * 1.2)} strokeWidth={s.sw * 0.8} strokeLinecap="round" />
            </motion.g>
          </motion.g>
        )
      })}

      {/* Ambient floating gold grains in the air */}
      {!reduce && [[80,180,0.28,0],[200,145,0.22,0.9],[340,162,0.18,1.6],[420,200,0.24,0.4]].map(([ax,ay,aop,adl],i) => (
        <motion.circle key={`a${i}`} cx={ax} cy={ay} r="2.5"
          fill="#e8c547" opacity={aop}
          animate={{ y:[0,-10,0], opacity:[aop, aop*0.4, aop] }}
          transition={{ duration: 3.2 + adl, repeat: Infinity, ease: 'easeInOut', delay: adl }} />
      ))}
    </svg>
  )
}

const PARTICLES = [
  { x:8,  y:18, size:'6px', delay:0   },
  { x:85, y:30, size:'4px', delay:0.7 },
  { x:20, y:65, size:'3px', delay:0.4 },
  { x:92, y:12, size:'4px', delay:1.8 },
  { x:52, y:88, size:'3px', delay:2.2 },
]

export default function Hero() {
  const { lang } = useLang()
  const reduce = useReducedMotion()
  const heroRef = useRef(null)
  const isUr = lang === 'ur'

  /* Mouse → 3D rotation of field */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 45, damping: 14 })
  const springY = useSpring(mouseY, { stiffness: 45, damping: 14 })
  const rotateY = useTransform(springX, [-1, 1], [-14, 14])
  const rotateX = useTransform(springY, [-1, 1], [10, -10])

  /* Scroll parallax */
  const { scrollYProgress } = useScroll({ target: heroRef })
  const fieldY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 45])

  const onMouseMove = useCallback((e) => {
    if (reduce) return
    const r = heroRef.current?.getBoundingClientRect()
    if (!r) return
    mouseX.set((e.clientX - r.left - r.width / 2) / (r.width / 2))
    mouseY.set((e.clientY - r.top - r.height / 2) / (r.height / 2))
  }, [reduce, mouseX, mouseY])

  const onMouseLeave = useCallback(() => { mouseX.set(0); mouseY.set(0) }, [mouseX, mouseY])

  /* ── Urdu headline lines ── */
  const urLines = ['کھیت سے', 'دسترخوان', 'تک۔']
  const urOpacities = [0.3, 0.72, 1]
  /* ── English headline lines ── */
  const enLines = [
    { text: 'From',        opacity: 0.28, weight: 300 },
    { text: 'Field to',    opacity: 0.72, weight: 300 },
    { text: 'Dastarkhwan.', opacity: 1,  weight: 400 },
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="grain-overlay"
      style={{ backgroundColor: '#1c3a13', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
    >
      {/* Floating particles */}
      {!reduce && PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      {/* Top meta strip */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 32px', borderBottom: '1px solid rgba(252,252,247,0.07)', position: 'relative', zIndex: 3 }}
      >
        <span className="t-mono" style={{ color: 'rgba(252,252,247,0.28)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          {isUr ? 'ایلیٹ رائس · پاکستان' : 'Elite Rice · Pakistan'}
        </span>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span className="variety-pill" dir="ltr">SK-01™</span>
          <span className="badge-gold" style={{ fontSize: '11px' }}>Est. 2003</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="page-wrap" style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 3, paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '40px', alignItems: 'center', width: '100%' }}>

          {/* LEFT / TEXT COLUMN */}
          <motion.div className="hero-text-col" style={{ y: titleY }}>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: reduce ? 0 : 0.3 }}
              style={{ marginBottom: '28px', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}
            >
              <span className="variety-pill" dir="ltr">SK-01™</span>
              <span className="badge-gold">Est. 2003</span>
            </motion.div>

            {/* ── ENGLISH headline — clip-path line reveals ── */}
            {!isUr && (
              <div style={{ marginBottom: '8px' }}>
                {enLines.map((l, i) => (
                  <RevealLine key={i} delay={reduce ? 0 : 0.35 + i * 0.15}>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(52px, 8vw, 110px)',
                      fontWeight: l.weight,
                      color: '#fcfcf7',
                      opacity: l.opacity,
                      lineHeight: 0.95,
                      letterSpacing: '-2.5px',
                    }}>
                      {l.text}
                    </div>
                  </RevealLine>
                ))}
              </div>
            )}

            {/* ── URDU headline — fade-up (NO clip, Nastaliq gets clipped otherwise) ── */}
            {isUr && (
              <div style={{ direction: 'rtl', textAlign: 'right', marginBottom: '8px' }}>
                {urLines.map((line, i) => (
                  <FadeUp key={i} delay={reduce ? 0 : 0.3 + i * 0.15}>
                    <div style={{
                      fontFamily: 'Noto Nastaliq Urdu, serif',
                      fontSize: 'clamp(34px, 5.5vw, 62px)',
                      fontWeight: 700,
                      color: '#fcfcf7',
                      opacity: urOpacities[i],
                      lineHeight: 2.0,
                      direction: 'rtl',
                    }}>
                      {line}
                    </div>
                  </FadeUp>
                ))}
              </div>
            )}

            {/* Gold underline */}
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: reduce ? 0 : isUr ? 0.75 : 1.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: '2px', width: '240px', backgroundColor: '#e8c547', transformOrigin: isUr ? 'right' : 'left', marginTop: '16px', marginLeft: isUr ? 'auto' : 0, opacity: 0.75 }}
            />

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : isUr ? 0.85 : 1.1, duration: 0.75 }}
              style={{
                fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif',
                fontSize: '17px', fontWeight: 400,
                color: 'rgba(252,252,247,0.5)',
                marginTop: '28px', marginBottom: '36px',
                maxWidth: '420px', lineHeight: isUr ? 2.2 : 1.5,
                direction: isUr ? 'rtl' : 'ltr',
                textAlign: isUr ? 'right' : 'left',
                marginLeft: isUr ? 'auto' : 0,
              }}
            >
              {isUr
                ? 'پانچ سو سے زائد پکوان سنٹروں کا بھروسہ مند سپلائر — پنجاب کے بہترین کھیتوں سے آپ کے دروازے تک۔'
                : `Pakistan's trusted partner for 500+ catering professionals. Six premium varieties, direct from Punjab's finest fields.`}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : isUr ? 1.0 : 1.25, duration: 0.65 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', direction: isUr ? 'rtl' : 'ltr' }}
            >
              <MagneticCTA href="#order" label={isUr ? 'ابھی آرڈر کریں' : 'Place Bulk Order'} className="btn-primary" />
              <a href="#varieties" className="btn-text" style={{ color: 'rgba(252,252,247,0.6)' }}>
                {isUr ? 'اقسام دیکھیں ←' : 'Explore Varieties →'}
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT / RICE FIELD COLUMN */}
          <motion.div
            className="hero-field"
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduce ? 0 : 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: '1000px', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 3 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d', y: fieldY }}
              animate={reduce ? {} : { y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <RiceFieldScene />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: reduce ? 0 : 1.4, duration: 0.8 }}
        style={{ borderTop: '1px solid rgba(252,252,247,0.07)', display: 'flex', alignItems: 'stretch', position: 'relative', zIndex: 3 }}
      >
        {[
          { to: 500, suffix: '+', label: isUr ? 'پکوان سنٹر' : 'Pakwan Centers' },
          { to: 6,   suffix: '',  label: isUr ? 'اقسام' : 'Varieties' },
          { to: 20,  suffix: 'yr',label: isUr ? 'تجربہ' : 'Heritage' },
        ].map((s, i) => (
          <div key={i} className="stat-cell" style={{ flex: 1, padding: '20px 24px', borderRight: i < 2 ? '1px solid rgba(252,252,247,0.07)' : 'none' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px,3vw,34px)', fontWeight: 300, color: '#fcfcf7', letterSpacing: '-0.6px', lineHeight: 1 }}>
              <Counter to={s.to} suffix={s.suffix} />
            </div>
            <div className="t-label" style={{ color: 'rgba(252,252,247,0.35)', marginTop: '4px', fontFamily: isUr ? 'Noto Nastaliq Urdu, serif' : 'Inter, sans-serif', fontSize: '11px' }}>{s.label}</div>
          </div>
        ))}
        {/* Scroll indicator */}
        <div className="scroll-ind" style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', borderLeft: '1px solid rgba(252,252,247,0.07)' }}>
          <span className="t-mono" style={{ color: 'rgba(252,252,247,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '9px', writingMode: 'vertical-rl' }}>
            Scroll
          </span>
          <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(252,252,247,0.1)', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              animate={reduce ? {} : { y: ['-100%', '100%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', width: '100%', height: '40%', backgroundColor: '#e8c547', opacity: 0.8 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Variety tickers */}
      <div style={{ position: 'relative', zIndex: 3 }}>
        <div className="marquee-track" style={{ borderTop: '1px solid rgba(252,252,247,0.06)', padding: '12px 0' }}>
          <div className="marquee-inner" style={{ alignItems: 'center' }}>
            {['SK-01™ Super Kernel Basmati','1121-W™ White Sella','ST-02™ Steam Basmati','IRRI-9™ Long Grain','SB-03™ Sella Basmati','KN-04™ Kainat',
              'SK-01™ Super Kernel Basmati','1121-W™ White Sella','ST-02™ Steam Basmati','IRRI-9™ Long Grain','SB-03™ Sella Basmati','KN-04™ Kainat'].map((v, i) => (
              <span key={i} className="t-mono" dir="ltr" style={{ color: 'rgba(252,252,247,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', paddingRight: '56px' }}>{v}</span>
            ))}
          </div>
        </div>
        <div className="marquee-track" style={{ borderTop: '1px solid rgba(252,252,247,0.04)', padding: '10px 0' }}>
          <div className="marquee-inner-rev" style={{ alignItems: 'center' }}>
            {['سپر کرنل باسمتی','وائٹ سیلہ ۱۱۲۱','سٹیم باسمتی','آئی آر آئی 9','سیلہ باسمتی','کائنات',
              'سپر کرنل باسمتی','وائٹ سیلہ ۱۱۲۱','سٹیم باسمتی','آئی آر آئی 9','سیلہ باسمتی','کائنات'].map((v, i) => (
              <span key={i} className="t-urdu" style={{ fontSize: '13px', color: 'rgba(252,252,247,0.16)', paddingRight: '48px' }}>{v}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-field { display: none !important; }
          .hero-text-col { transform: none !important; }
          #hero .page-wrap { padding-top: 24px !important; padding-bottom: 24px !important; }
        }
        @media (max-width: 600px) {
          .stat-cell { padding: 14px 12px !important; }
          .scroll-ind { display: none !important; }
          #hero .page-wrap { padding: 16px !important; }
        }
      `}</style>
    </section>
  )
}
