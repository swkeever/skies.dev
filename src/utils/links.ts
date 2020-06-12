import routes from './routes';

const siteUrl = 'https://swkeever.github.io';
const withSiteUrl = (pathname: string): string => `${siteUrl}${pathname}`;

const links = {
  github: 'https://www.github.com/swkeever',
  linkedIn: 'https://www.linkedin.com/in/swkeever',
  twitter: 'https://www.twitter.com/swkeever',
  sourceRepo: 'https://github.com/swkeever/swkeever.github.io',
  shareTo: {
    facebook: (pathname: string): string => `https://www.facebook.com/sharer/sharer.php?u=${withSiteUrl(pathname)}`,
    linkedIn: (pathname: string): string => `https://www.linkedin.com/shareArticle?mini=true&url=${withSiteUrl(
      pathname,
    )}&title=&summary=&source=`,
    twitter: (pathname: string): string => `https://twitter.com/intent/tweet?text=${withSiteUrl(pathname)}`,
  },
  editOnGithub: (filepath: string): string => `https://github.com/swkeever/swkeever.github.io/blob/develop/src/${filepath}`,
  discussOnTwitter: (filepath: string): string => `https://www.twitter.com/search?q=${siteUrl}${filepath}`,
};

export function slugToLink(slug: string): string {
  return `${routes.blogs}/${slug}`;
}

export default links;
