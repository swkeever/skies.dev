const siteUrlShort = 'www.skies.dev';
const siteUrl = `https://${siteUrlShort}`;
const withSiteUrl = (pathname) => `${siteUrl}${pathname}`;
const linkedIn = 'https://www.linkedin.com/in/swkeever';
module.exports = {
  siteUrl,
  siteUrlShort,
  withSiteUrl,
  github: 'https://www.github.com/swkeever',
  linkedIn,
  twitter: 'https://www.twitter.com/swkeever',
  sourceRepo: 'https://github.com/swkeever/skies.dev',
  shareTo: {
    facebook: ({ pathname }) => `https://www.facebook.com/sharer/sharer.php?u=${withSiteUrl(pathname)}`,
    linkedIn: ({ pathname, title, description }) => `https://www.linkedin.com/shareArticle?mini=true&url=${withSiteUrl(
      pathname,
    )}&title=${title}&summary=${description}&source=${linkedIn}`,
    twitter: ({ title, pathname }) => `https://twitter.com/share?text=${title}%20via%20@swkeever&url=${withSiteUrl(
      pathname,
    )}`,
  },
  editOnGithub: (filepath) => `https://github.com/swkeever/skies.dev/edit/master/content/${filepath}`,
  discussOnTwitter: (filepath) => `https://www.twitter.com/search?q=${siteUrl}${filepath}`,
};
