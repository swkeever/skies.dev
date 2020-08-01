const siteUrlShort = 'skies.dev';
const siteUrl = `https://${siteUrlShort}`;
const withSiteUrl = (pathname) => `${siteUrl}${pathname}`;

module.exports = {
  siteUrl,
  siteUrlShort,
  github: 'https://www.github.com/swkeever',
  linkedIn: 'https://www.linkedin.com/in/swkeever',
  twitter: 'https://www.twitter.com/swkeever',
  sourceRepo: 'https://github.com/swkeever/skies.dev',
  shareTo: {
    facebook: (pathname) => `https://www.facebook.com/sharer/sharer.php?u=${withSiteUrl(pathname)}`,
    linkedIn: (pathname) => `https://www.linkedin.com/shareArticle?mini=true&url=${withSiteUrl(
      pathname,
    )}&title=&summary=&source=`,
    twitter: (pathname) => `https://twitter.com/intent/tweet?text=${withSiteUrl(pathname)}`,
  },
  editOnGithub: (filepath) => `https://github.com/swkeever/skies.dev/edit/master/content/${filepath}`,
  discussOnTwitter: (filepath) => `https://www.twitter.com/search?q=${siteUrl}${filepath}`,
};
