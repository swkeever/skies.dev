import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaTwitter, FaRss,
} from 'react-icons/fa';
import links from '../utils/links';
import ExternalLink from './ExternalLink';
import { globalStyles } from '../styles';
import routes from '../utils/routes';
import Logo from '../../assets/logo.svg';
import siteConfig from '../../site.config';

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
    ${globalStyles.transitions}
    bg-footerBg
    `}
    >
      <section
        className={`
      max-w-screen-xl
       space-y-12 md:space-y-0 
       mx-auto 
       py-12 px-4 
       md:flex md:items-center md:justify-between
       
       `}
      >
        <h2 className="md:order-2">
          <span className="sr-only ">{siteConfig.siteTitle}</span>
          <Logo
            className={`w-64 md:w-48 mx-auto md:mx-0  h-auto text-neutralSoft fill-current
          ${globalStyles.transitions}
          `}
          />
        </h2>

        <ul className="flex justify-center space-x-6 md:order-3">
          {socialLinks.map((link) => (
            <li
              key={`foot-${link.text}`}
              className={`
            text-gray-400 hover:text-gray-500
            ${globalStyles.transitions}
            `}
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

        <p
          className={`text-center text-base leading-6 text-gray-400 md:order-1 
        ${globalStyles.transitions}
        `}
        >
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Skies. All rights reserved.
        </p>
      </section>

      {/* make room for the mobile navbar */}
      <div className={`${globalStyles.navbar.height} lg:hidden`} />
    </footer>
  );
}
