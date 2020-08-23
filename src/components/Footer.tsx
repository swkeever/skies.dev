import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaRss,
} from 'react-icons/fa';
import { Link } from '@reach/router';
import links from '../utils/links';
import ExternalLink from './ExternalLink';
import globalStyles from '../styles';
import routes from '../utils/routes';

export default function Footer() {
  const styles = {
    icon: `
    h-6 w-6 fill-current z-0
    `,
  };

  const socialLinks = [
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

  const mainNavLinks = [
    {
      to: routes.home,
      text: 'Home',
    },

    {
      to: routes.blog,
      text: 'Blog',
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
    <footer className={`bg-footerBg ${globalStyles.transitions}`}>
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          {mainNavLinks.map((l) => (
            <div key={`footer-${l.text}`} className="px-5 py-2">
              <Link
                to={l.to}
                className={`
                text-base leading-6 
                text-gray-400 hover:text-gray-500
                ${globalStyles.transitions}
                `}
              >
                {l.text}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-5">
          {socialLinks.map((l) => (
            <ExternalLink
              key={`footer-${l.text}`}
              href={l.to}
              className={`text-gray-400 hover:text-gray-500
              ${globalStyles.transitions}
              `}
            >
              <span className="sr-only">{l.text}</span>
              {l.icon}
            </ExternalLink>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Skies. All rights reserved.
          </p>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </footer>
  );
}
