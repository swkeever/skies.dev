import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaRss,
} from 'react-icons/fa';
import { Link } from '@reach/router';
import tw from '@utils/tailwind';
import links from '../utils/links';
import ExternalLink from './external-link';
import globalStyles from '../styles';
import routes from '../utils/routes';

const styles = {
  icon: tw('h-6 w-6 fill-current z-0', 'rounded'),
};

export const socialLinks = [
  {
    icon: <FaRss className={styles.icon} />,
    to: routes.rss,
    text: 'RSS',
  },
  {
    icon: <FaGithub className={styles.icon} />,
    to: links.github,
    text: 'GitHub',
  },
  {
    icon: <FaTwitter className={styles.icon} />,
    to: links.twitter,
    text: 'Twitter',
  },
  {
    icon: <FaLinkedinIn className={styles.icon} />,
    to: links.linkedIn,
    text: 'LinkedIn',
  },
];

export default function Footer() {
  const mainNavLinks = [
    {
      to: routes.blog,
      text: 'Home',
    },
    {
      to: routes.about,
      text: 'About',
    },
    {
      to: routes.uses,
      text: 'Uses',
    },
    {
      to: routes.legal.privacyPolicy,
      text: 'Privacy',
    },
  ];

  return (
    <footer
      className={tw('bg-footerBg', 'flex-shrink-0', globalStyles.transitions)}
    >
      <section className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          {mainNavLinks.map((l) => (
            <Link
              key={`footer-${l.text}`}
              to={l.to}
              className={tw(
                'px-5 py-2',
                'block',
                'text-base leading-6',
                'text-gray-400 hover:text-gray-500',
                'rounded',
                globalStyles.transitions,
                globalStyles.outline,
              )}
            >
              {l.text}
            </Link>
          ))}
        </nav>
        <ul className="mt-8 flex justify-center space-x-5">
          {socialLinks.map((l) => (
            <li key={`footer-${l.text}`}>
              <ExternalLink
                href={l.to}
                className={tw(
                  'text-gray-400 hover:text-gray-500',
                  globalStyles.transitions,
                )}
              >
                <span className="sr-only">{l.text}</span>
                {l.icon}
              </ExternalLink>
            </li>
          ))}
        </ul>
        <p
          className={tw(
            'mt-8',
            'text-center text-base leading-6',
            'text-gray-400',
          )}
        >
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Skies. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
