import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Strona główna" description="Portal OZE Białystok — energia odnawialna Podlasia" siteName="OZE Białystok" />
      <div style={{ background: 'var(--cream-dark)', borderBottom: '3px solid var(--sage)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forest-light)', marginBottom: '1rem' }}>Portal lokalny · Białystok · Podlasie</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 600, color: 'var(--forest)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Czysta energia<br/>na Podlasiu
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '520px', marginBottom: '2rem', lineHeight: 1.8 }}>
            Fotowoltaika, pompy ciepła, biomasa. Obserwujemy jak Podlasie przechodzi na zieloną energię.
          </p>
          <Link to="/blog" style={{ display: 'inline-block', border: '2px solid var(--forest)', color: 'var(--forest)', padding: '0.75rem 2rem', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.04em', textDecoration: 'none' }}>
            Czytaj artykuły
          </Link>
        </div>
      </div>
      <div className="container" style={{ padding: '3rem 1.5rem 4rem', maxWidth: '720px' }}>
        {posts.length > 0 ? (
          <>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: 'var(--forest)', marginBottom: '0.25rem' }}>Najnowsze wpisy</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem', letterSpacing: '0.04em' }}>{posts.length} artykułów</p>
            {posts.slice(0, 8).map(post => (
              <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />
            ))}
            {posts.length > 8 && (
              <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
                <Link to="/blog" style={{ border: '2px solid var(--forest)', color: 'var(--forest)', padding: '0.6rem 1.5rem', fontWeight: 600, textDecoration: 'none' }}>Wszystkie artykuły ({posts.length})</Link>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <span style={{ fontSize: '3rem' }}>🌲</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: 'var(--forest)', marginTop: '1rem' }}>Artykuły wkrótce</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Przygotowujemy treści o OZE na Podlasiu.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields { slug }
        excerpt(pruneLength: 200)
        frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags }
      }
    }
  }
`;

export default IndexPage;
