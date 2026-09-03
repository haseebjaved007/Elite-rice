import React from 'react'
import RiceShowcase from '../components/RiceShowcase'

export default function Products() {
  return (
    <main>
      <div style={{ backgroundColor: 'var(--c-dark)', paddingTop: '120px', paddingBottom: '40px', textAlign: 'center' }}>
        <h1 className="t-display" style={{ color: 'var(--c-light)' }}>Our Collection</h1>
      </div>
      <RiceShowcase />
    </main>
  )
}
