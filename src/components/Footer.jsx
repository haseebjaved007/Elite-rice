import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--c-dark)', color: 'var(--c-light)', paddingTop: '80px', paddingBottom: '30px' }}>
      <div className="page-wrap">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }} className="footer-grid">
          
          {/* Left: Call to Action */}
          <div>
            <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '24px', fontWeight: 500, marginBottom: '16px', color: 'var(--c-light)' }}>
              Let's Serve Quality Together
            </h3>
            <p style={{ fontFamily: 'var(--f-sans)', fontSize: '14px', color: 'rgba(245,240,230,0.7)', marginBottom: '24px', lineHeight: 1.6 }}>
              Partner with Elite Rice for the best rice supply for your Pakwan Center.
            </p>
            <Link to="/contact" className="btn-gold" style={{ padding: '10px 24px' }}>
              Get In Touch <span style={{ marginLeft: '8px' }}>@</span>
            </Link>
          </div>

          {/* Center: Logo & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--c-gold)', marginBottom: '24px' }}>
              <svg width="40" height="30" viewBox="0 0 32 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '8px' }}>
                <path d="M16 0L20 8L28 4L24 14H8L4 4L12 8L16 0Z" />
                <rect x="6" y="16" width="20" height="2" />
                <rect x="4" y="20" width="24" height="1" />
              </svg>
              <span style={{ fontFamily: 'var(--f-serif)', fontSize: '28px', fontWeight: 600, color: 'var(--c-light)', letterSpacing: '0.05em', lineHeight: 1 }}>ELITE</span>
              <span style={{ fontFamily: 'var(--f-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--c-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '4px' }}>— RICE MILLS —</span>
            </div>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              {['fb', 'ig', 'wa'].map((s) => (
                <a key={s} href="#" style={{ width: '40px', height: '40px', backgroundColor: 'var(--c-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-dark)', textDecoration: 'none', fontWeight: 'bold' }}>
                  {s === 'fb' ? 'f' : s === 'ig' ? 'ig' : 'w'}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '20px', fontWeight: 500, marginBottom: '24px', color: 'var(--c-light)' }}>
              Contact Information
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--c-gold)' }}>📞</span>
                <span style={{ fontFamily: 'var(--f-sans)', fontSize: '14px', color: 'rgba(245,240,230,0.8)' }}>03227017880</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--c-gold)' }}>✉️</span>
                <span style={{ fontFamily: 'var(--f-sans)', fontSize: '14px', color: 'rgba(245,240,230,0.8)' }}>Anasjaved@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--c-gold)' }}>📍</span>
                <span style={{ fontFamily: 'var(--f-sans)', fontSize: '14px', color: 'rgba(245,240,230,0.8)' }}>Depalpur, Punjab, Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(245,240,230,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontFamily: 'var(--f-sans)', fontSize: '13px', color: 'rgba(245,240,230,0.5)' }}>
            © {new Date().getFullYear()} Elite Rice Mills. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link to="/" style={{ color: 'rgba(245,240,230,0.7)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-sans)' }}>Home</Link>
            <Link to="/about" style={{ color: 'rgba(245,240,230,0.7)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-sans)' }}>About Us</Link>
            <Link to="/products" style={{ color: 'rgba(245,240,230,0.7)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-sans)' }}>Products</Link>
            <Link to="/quality" style={{ color: 'rgba(245,240,230,0.7)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-sans)' }}>Quality</Link>
            <Link to="/contact" style={{ color: 'rgba(245,240,230,0.7)', textDecoration: 'none', fontSize: '13px', fontFamily: 'var(--f-sans)' }}>Contact Us</Link>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-grid > div { align-items: center; }
          .footer-grid > div > div { align-items: center; justify-content: center; }
        }
      `}</style>
    </footer>
  )
}
