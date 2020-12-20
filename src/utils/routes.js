const withLegal = (slug) => `/legal/${slug}`;

module.exports = {
  blog: '/',
  // home: '/',
  contact: '/contact',
  about: '/about',
  sitemap: '/sitemap.xml',
  uses: '/uses',
  rss: '/rss.xml',
  legal: {
    privacyPolicy: withLegal('privacy-policy'),
  },
  equals: (a, b) => {
    const i = a[a.length - 1] === '/' ? a.substring(0, a.length - 1) : a;
    const j = b[b.length - 1] === '/' ? b.substring(0, b.length - 1) : b;
    return i === j;
  },
};
