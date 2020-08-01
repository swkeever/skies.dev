import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaRss,
} from 'react-icons/fa';
import links from '../utils/links';
import ExternalLink from './ExternalLink';
import { globalStyles } from '../styles';
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

  return (
    <footer
      className={`
    ${globalStyles.transitions.colors}
    bg-footerBg
    `}
    >
      <div className="max-w-screen-xl mx-auto py-12 px-4 md:flex md:items-center md:justify-between">
        <ul className="flex justify-center md:order-2">
          {socialLinks.map((link) => (
            <li
              key={`foot-${link.text}`}
              className={`
            ml-6 text-gray-400 hover:text-gray-500`}
            >
              <ExternalLink
                href={link.to}
                className={`
                 inline-block
              `}
              >
                <span className="sr-only">{link.text}</span>
                {link.icon}
              </ExternalLink>
            </li>
          ))}
        </ul>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Skies. All rights reserved.
          </p>
        </div>
      </div>

      {/* make room for the mobile navbar */}
      <div className={`${globalStyles.navbar.height} lg:hidden`} />
    </footer>
  );
}
