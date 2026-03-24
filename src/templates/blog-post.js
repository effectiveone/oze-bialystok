import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Białystok" />
      <div className="container" style={{ padding: '3rem 1.5rem 5rem', maxWidth: '720px' }}>
        <Link to="/blog" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2rem', letterSpacing: '0.04em' }}>← Powrót</Link>
        <header style={{ borderBottom: '2px solid var(--border)', marginBottom: '2.5rem', paddingBottom: '1.5rem' }}>
          {tags && <div style={{ marginBottom: '0.5rem' }}>{tags.map(t => <span key={t} style={{ display: 'inline-block', background: 'var(--cream-dark)', color: 'var(--forest-mid)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', marginRight: '0.3rem', letterSpacing: '0.04em' }}>{t}</span>)}</div>}
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, margin: '0.5rem 0 0.75rem', lineHeight: 1.15 }}>{title}</h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>🌲 {date} · {author}</p>
          {description && <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: 'var(--forest-mid)', fontStyle: 'italic', marginTop: '1rem', lineHeight: 1.5 }}>{description}</p>}
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
