import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły" description="Wszystkie artykuły o OZE na Podlasiu" siteName="OZE Białystok" />
      <div className="container" style={{ padding: '3rem 1.5rem 4rem', maxWidth: '720px' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: 'var(--forest)', marginBottom: '0.25rem' }}>Artykuły</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', letterSpacing: '0.04em' }}>{posts.length} tekstów o OZE na Podlasiu</p>
        {posts.length > 0 ? (
          posts.map(post => <PostCard key={post.fields.slug} title={post.frontmatter.title} excerpt={post.excerpt} slug={post.fields.slug} date={post.frontmatter.date} tags={post.frontmatter.tags} />)
        ) : <p style={{ color: 'var(--text-muted)', padding: '4rem 0', textAlign: 'center' }}>Artykuły pojawią się wkrótce.</p>}
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

export default BlogPage;
