import React from 'react'
import QualitySection from '../components/QualitySection'

export default function Quality() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--c-light)', paddingTop: '120px', paddingBottom: '40px', textAlign: 'center' }}>
        <h1 className="t-display" style={{ color: 'var(--c-dark)' }}>Our Quality Promise</h1>
      </div>
      <QualitySection />
    </main>
  )
}
