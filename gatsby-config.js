module.exports = {
  siteMetadata: {
    title: 'OZE Białystok',
    description: 'Portal o odnawialnych źródłach energii w Białymstoku i Podlasiu',
    siteUrl: 'https://oze-bialystok.netlify.app',
    author: 'Redakcja OZE Białystok',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
