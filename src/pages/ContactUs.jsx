import React from 'react'

export default function ContactUs() {
  return (
    <main style={{ backgroundColor: 'var(--c-light)', minHeight: '80vh', padding: '120px 0' }}>
      <div className="page-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
        
        <div>
          <h1 className="t-display" style={{ color: 'var(--c-dark)', marginBottom: '24px' }}>Get in Touch</h1>
          <p className="t-body" style={{ color: 'var(--c-text-dark)', marginBottom: '40px', fontSize: '18px' }}>
            Whether you are placing a bulk order for your Pakwan center, or have questions about our premium rice varieties, our team is here to help.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--c-dark)', color: 'var(--c-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📞</div>
              <div>
                <h4 style={{ fontFamily: 'var(--f-serif)', fontSize: '18px', color: 'var(--c-dark)', marginBottom: '4px' }}>Phone</h4>
                <p style={{ fontFamily: 'var(--f-sans)', color: '#666' }}>03227017880</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--c-dark)', color: 'var(--c-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>✉️</div>
              <div>
                <h4 style={{ fontFamily: 'var(--f-serif)', fontSize: '18px', color: 'var(--c-dark)', marginBottom: '4px' }}>Email</h4>
                <p style={{ fontFamily: 'var(--f-sans)', color: '#666' }}>Anasjaved@gmail.com</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--c-dark)', color: 'var(--c-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📍</div>
              <div>
                <h4 style={{ fontFamily: 'var(--f-serif)', fontSize: '18px', color: 'var(--c-dark)', marginBottom: '4px' }}>Location</h4>
                <p style={{ fontFamily: 'var(--f-sans)', color: '#666' }}>Depalpur, Punjab, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 24px 48px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontFamily: 'var(--f-serif)', fontSize: '24px', color: 'var(--c-dark)', marginBottom: '24px' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--f-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--c-dark)', marginBottom: '8px' }}>Your Name</label>
              <input type="text" placeholder="e.g. Ali Khan" style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'var(--f-sans)', fontSize: '15px' }} required />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--f-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--c-dark)', marginBottom: '8px' }}>Pakwan Center / Business Name</label>
              <input type="text" placeholder="e.g. Al-Madina Pakwan" style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'var(--f-sans)', fontSize: '15px' }} required />
            </div>
            <div>
              <label style={{ display: 'block', fontFamily: 'var(--f-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--c-dark)', marginBottom: '8px' }}>Message or Order Details</label>
              <textarea placeholder="Tell us what varieties you need..." rows="4" style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: '4px', fontFamily: 'var(--f-sans)', fontSize: '15px', resize: 'vertical' }} required></textarea>
            </div>
            <button type="submit" className="btn-gold" style={{ marginTop: '8px', padding: '16px' }}>Submit Inquiry</button>
          </form>
        </div>
        
      </div>
    </main>
  )
}
