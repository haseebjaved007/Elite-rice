import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CustomCursor() {
  const [variant, setVariant] = useState('default')
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  /* Inner dot — very fast */
  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40 })
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40 })

  /* Outer ring — lags behind */
  const ringX = useSpring(mouseX, { stiffness: 130, damping: 18 })
  const ringY = useSpring(mouseY, { stiffness: 130, damping: 18 })

  /* Center-offset so cursor point = mouse */
  const dotLeft = useTransform(dotX, (v) => v - 4)
  const dotTop = useTransform(dotY, (v) => v - 4)
  const ringLeft = useTransform(ringX, (v) => v - 14)
  const ringTop = useTransform(ringY, (v) => v - 14)

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const onEnter = (e) => {
      if (e.target.closest('button, a, [data-hover]')) setVariant('hover')
    }
    const onLeave = (e) => {
      if (e.target.closest('button, a, [data-hover]')) setVariant('default')
    }
    const onOut = () => setVisible(false)
    const onIn = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    document.documentElement.addEventListener('mouseleave', onOut)
    document.documentElement.addEventListener('mouseenter', onIn)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      document.documentElement.removeEventListener('mouseleave', onOut)
      document.documentElement.removeEventListener('mouseenter', onIn)
    }
  }, [mouseX, mouseY, visible])

  /* Hide on touch devices */
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return null

  return (
    <>
      {/* Outer ring — white + mixBlendMode:difference so it auto-contrasts on any bg */}
      <motion.div
        animate={{ scale: variant === 'hover' ? 1.9 : 1, opacity: visible ? 1 : 0 }}
        transition={{ scale: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.2 } }}
        style={{
          position: 'fixed', top: 0, left: 0,
          x: ringLeft, y: ringTop,
          width: '28px', height: '28px',
          borderRadius: '50%',
          border: '1.5px solid #ffffff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 99998,
        }}
      />

      {/* Inner dot — white + difference blend = always visible on any background */}
      <motion.div
        animate={{ scale: variant === 'hover' ? 1.3 : 1, opacity: visible ? 1 : 0 }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.15 } }}
        style={{
          position: 'fixed', top: 0, left: 0,
          x: dotLeft, y: dotTop,
          width: '8px', height: '8px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
    </>
  )
}
