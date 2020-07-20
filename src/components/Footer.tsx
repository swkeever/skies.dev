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
import ExternalLink from './ExternalLink';

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
  ];

  return (
    <footer className="flex-none pt-10 pb-24 mt-auto transition-all duration-200 ease-in bg-footerBg text-neutral lg:pb-8">
      <Container className="max-w-screen-lg">
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
              <ExternalLink
                className="text-onNeutralBgLink hover:text-onNeutralBgLinkHover"
                href={item.to}
              >
                {item.icon}
                {item.text}
              </ExternalLink>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center justify-center mt-2 md:flex-row text-neutral">
          <p className="mr-2">
            This website is
            {' '}
            <ExternalLink
              className="text-onNeutralBgLink hover:text-onNeutralBgLinkHover"
              href={links.sourceRepo}
            >
              open-source software
            </ExternalLink>
            .
          </p>
          <p>
            &copy; All Rights Reserved
            {' '}
            <time className="" dateTime={new Date().getFullYear().toString()}>
              {new Date().getFullYear()}
            </time>
          </p>
        </div>
      </Container>
    </footer>
  );
}
