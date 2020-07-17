import React from 'react';
import Slugger from 'github-slugger';
import { Link, useLocation } from '@reach/router';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import routes from '../utils/routes';
import { globalStyles } from '../styles';
import { useActiveHash } from '../hooks/use-active-hash';

type Heading = {
  value: string;
  depth: number;
};

export default function TableOfContents({
  headings,
  className = '',
}: {
  headings: Heading[];
  className?: string;
}) {
  const styles = {
    copy: `
    text-base
    md:text-lg
    lg:text-xl
    pb-1
    hover:border-b
    hover:border-onNeutralBg
    `,

    li: `
    
    `,
  };

  const { pathname } = useLocation();
  console.log(pathname);

  const activeHash = useActiveHash(
    headings.map((h) => new Slugger().slug(h.value, false)),
  );

  console.log(activeHash);

  return (
    <nav className={` ${className}`}>
      <h2 className="uppercase font-bold tracking-wider mb-2 text-neutralSoft">
        Table of Contents
      </h2>

      <ol
        className={`flex flex-col space-y-4
    ${globalStyles.transitions.colors}
   `}
      >
        {headings.map((h) => {
          const slug = new Slugger().slug(h.value, false);

          const link = (
            <AnchorLink
              className={`
            ${globalStyles.transitions.colors}
            ${styles.copy}
          ${
            activeHash === slug
              ? 'text-onNeutralBgLink pb-1 border-b border-onNeutralBgLink'
              : 'text-onNeutralBg'
          }
          `}
              to={`${pathname}#${slug}`}
            >
              {h.value}
            </AnchorLink>
          );

          switch (h.depth) {
            case 1:
              throw new Error('do not use h1 in body');
            case 2:
              return (
                <li
                  key={`toc-${slug}`}
                  className={`
              `}
                >
                  {link}
                </li>
              );
            case 3:
              return (
                <li
                  key={`toc-${slug}`}
                  className={` 
              pl-4`}
                >
                  {link}
                </li>
              );
            default:
              throw new Error('do not use headings < h4');
          }
        })}
      </ol>
    </nav>
  );
}
