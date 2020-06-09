import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { Link } from '@reach/router';
import Container from './Container';
import links from '../../utils/links';
import routes from '../../utils/routes';

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

    li: `
    px-8
    text-3xl
    md:text-3xl
    lg:text-4xl
    `,

    ul: `
    ml-0
    list-none
    flex     
    justify-center
    `,

    container: `
    md:flex
    md:flex-row-reverse 
    md:justify-between
    md:items-baseline

    `,

    adminLi: `
    px-2
    `,
  };

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={links.sourceRepo}
            >
              <FaCode />
            </a>
          </li>
          <li className={styles.li}>
            <a rel="noopener noreferrer" target="_blank" href={links.github}>
              <FaGithub />
            </a>
          </li>
          <li className={styles.li}>
            <a rel="noopener noreferrer" target="_blank" href={links.linkedIn}>
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <ul
          className={`
          list-none
          flex
          divide-x
          divide-neutral
        `}
        >
          <li className={styles.adminLi}>
            © All Rights Reserved
            <time
              dateTime={new Date().getFullYear().toString()}
              className={`
            ml-1
          `}
            >
              {new Date().getFullYear()}
            </time>
          </li>
          <li className={styles.adminLi}>
            <Link to={routes.sitemap}>Sitemap</Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
