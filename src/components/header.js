import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header style={{ background: 'var(--cream-dark)', borderBottom: '2px solid var(--border)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
        <span style={{ fontSize: '1.8rem' }}>🌲</span>
        <div>
          <span style={{ display: 'block', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.35rem', color: 'var(--forest)', letterSpacing: '0.01em' }}>OZE Białystok</span>
          <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Energia odnawialna Podlasia</span>
        </div>
      </Link>
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>Strona główna</Link>
        <Link to="/blog" style={{ color: 'var(--text)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>Artykuły</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ background: 'var(--forest)', color: 'var(--cream)', padding: '0.4rem 1rem', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', borderRadius: 3 }}>
          Audyt energetyczny →
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
