const withLegal = (slug) => `/legal/${slug}`;

module.exports = {
  blog: '/blog',
  home: '/',
  contact: '/contact/',
  about: '/about/',
  resume: '/resume/',
  sitemap: '/sitemap.xml',
  rss: '/rss.xml',
  legal: {
    privacyPolicy: withLegal('privacy-policy'),
  },
};
