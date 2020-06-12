import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTwitter,
  FaCopyright,
  FaSitemap,
} from 'react-icons/fa';
import { Link } from '@reach/router';
import Container from './Container';
import links from '../utils/links';
import routes from '../utils/routes';

export default function Footer() {
  const styles = {
    footer: `
      mt-auto
      mb-8
      px-4
      pt-4 
      pb-20
      z-20
      text-base
      text-xs
      text-center
      md:pb-8
      lg:pb-1
      lg:mb-0
      bg-footerBg
      text-neutral
    `,

    icon: `
    inline
    mb-1 
    mr-1
    `,
  };

  const socialLinks = [
    {
      icon: <FaGithub className={styles.icon} />,
      to: links.github,
      text: 'Github',
    },
    {
      icon: <FaTwitter className={styles.icon} />,
      to: links.twitter,
      text: 'Twitter',
    },
    {
      icon: <FaLinkedin className={styles.icon} />,
      to: links.linkedIn,
      text: 'LinkedIn',
    },
    {
      icon: <FaCode className={styles.icon} />,
      to: links.sourceRepo,
      text: 'Source',
    },
  ];

  return (
    <footer className="bg-footerBg text-neutral mt-auto pt-10 pb-24 lg:pb-8">
      <Container className="max-w-md">
        <ul
          className={`
          list-none
          flex
          flex-wrap
          justify-center
          ml-0
          space-x-4
          my-0
        `}
        >
          {socialLinks.map((item) => (
            <li key={item.to}>
              <a rel="noopener noreferrer" target="_blank" href={item.to}>
                {item.icon}
                {item.text}
              </a>
            </li>
          ))}
          <li>
            <Link to={routes.sitemap}>
              <FaSitemap className={styles.icon} />
              Sitemap
            </Link>
          </li>
        </ul>
        <div className="text-center text-neutralSoft">
          <FaCopyright className={styles.icon} />
          All Rights Reserved
          {' '}
          <time dateTime={new Date().getFullYear().toString()}>
            {new Date().getFullYear()}
          </time>
        </div>
      </Container>
    </footer>
  );
}
