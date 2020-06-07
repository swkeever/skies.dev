import routes from './routes';

const links = {
  github: 'https://www.github.com/swkeever',
  linkedIn: 'https://www.linkedin.com/in/swkeever',
  sourceRepo: 'https://github.com/swkeever/swkeever.github.io',
};

export function slugToLink(slug: string): string {
  return `${routes.blogs}/${slug}`;
}

export default links;
