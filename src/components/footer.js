import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--forest)', color: 'var(--sage)', padding: '3rem 0 1.5rem', marginTop: '5rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#fff', marginBottom: '0.75rem', fontSize: '1.3rem', borderBottom: 'none' }}>OZE Białystok</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--sage)', lineHeight: 1.7 }}>Lokalny portal o czystej energii w Białymstoku, Suwałkach i na Podlasiu.</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Work Sans', sans-serif", color: 'var(--sage)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Serwis</h4>
          <Link to="/" style={{ display: 'block', color: 'rgba(168,197,160,0.7)', fontSize: '0.9rem', marginBottom: '0.4rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'rgba(168,197,160,0.7)', fontSize: '0.9rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Work Sans', sans-serif", color: 'var(--sage)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Polecamy</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>→ ecoaudyt.app</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(168,197,160,0.2)', paddingTop: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'rgba(168,197,160,0.4)' }}>© {year} OZE Białystok · Podlasie</p>
      </div>
    </footer>
  );
};

export default Footer;
