import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const letters = 'Elite Rice'.split('')

  useEffect(() => {
    const t = setTimeout(onComplete, 3000)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      key="preloader"
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        backgroundColor: '#1c3a13',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 0,
      }}
    >
      {/* Letter stagger */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '3px' }}>
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.065, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: l === ' ' ? '18px' : '36px',
              fontWeight: 300,
              color: '#fcfcf7',
              letterSpacing: '-0.5px',
              display: 'inline-block',
              minWidth: l === ' ' ? '12px' : undefined,
            }}
          >
            {l === ' ' ? '\u00A0' : l}
          </motion.span>
        ))}
        {/* Gold dot */}
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '8px', height: '8px', borderRadius: '50%',
            backgroundColor: '#e8c547', display: 'inline-block',
            marginLeft: '4px', marginBottom: '6px', flexShrink: 0,
          }}
        />
      </div>

      {/* Urdu tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        style={{
          fontFamily: 'Noto Nastaliq Urdu, serif',
          fontSize: '16px', color: '#fcfcf7',
          marginTop: '14px', direction: 'rtl',
        }}
      >
        کھیت سے دسترخوان تک
      </motion.p>

      {/* Loading progress line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 2.3, ease: 'linear' }}
        style={{
          position: 'absolute', bottom: '48px',
          width: '100px', height: '1px',
          backgroundColor: '#e8c547', opacity: 0.5,
          transformOrigin: 'left',
        }}
      />

      {/* Corner labels */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '40px', left: '32px',
          fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
          color: '#fcfcf7', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}
      >
        Elite Rice · Pakistan
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '40px', right: '32px',
          fontFamily: 'JetBrains Mono, monospace', fontSize: '10px',
          color: '#fcfcf7', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}
      >
        Est. 2003
      </motion.span>
    </motion.div>
  )
}
