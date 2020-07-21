import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaCloud,
} from 'react-icons/fa';
import Container from './Container';
import links from '../utils/links';
import ExternalLink from './ExternalLink';
import { globalStyles } from '../styles';

export default function Footer() {
  const styles = {
    icon: `
    h-6 w-6 fill-current
    `,
  };

  const socialLinks = [
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
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <ul className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((link) => (
            <li
              key={`ft-${link.text}`}
              className="text-gray-400 hover:text-gray-500"
            >
              <ExternalLink href={link.to}>
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
