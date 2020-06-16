import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTwitter,
  FaCopyright,
} from 'react-icons/fa';
import Container from './Container';
import links from '../utils/links';

export default function Footer() {
  const styles = {
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
      text: 'GitHub',
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
        </ul>
        <div className="mt-2 flex justify-center text-neutral">
          <FaCopyright className={`${styles.icon} mt-1`} />
          All Rights Reserved
          {' '}
          <time className="ml-1" dateTime={new Date().getFullYear().toString()}>
            {new Date().getFullYear()}
          </time>
        </div>
      </Container>
    </footer>
  );
}
