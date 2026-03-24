import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: 'var(--white)', borderBottom: '2px solid var(--border)', padding: '2rem 0', transition: 'padding-left 0.2s' }}
    onMouseEnter={e => e.currentTarget.style.paddingLeft = '1rem'}
    onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}>
    <time style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>🌲 {date}</time>
    {tags && <div style={{ marginBottom: '0.4rem' }}>{tags.map(t => <span key={t} style={{ display: 'inline-block', background: 'var(--cream-dark)', color: 'var(--forest-mid)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', marginRight: '0.3rem', borderRadius: 2, letterSpacing: '0.04em' }}>{t}</span>)}</div>}
    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>
      <Link to={`/blog${slug}`} style={{ color: 'var(--forest)', textDecoration: 'none' }}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ color: 'var(--forest-mid)', fontSize: '0.88rem', fontWeight: 600, borderBottom: '1px solid var(--sage)', paddingBottom: 1 }}>Czytaj więcej →</Link>
  </article>
);

export default PostCard;
