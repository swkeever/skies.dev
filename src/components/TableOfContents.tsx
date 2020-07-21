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
  olClassName = '',
  watch = true,
  underline = false,
}: {
  headings: Heading[];
  className?: string;
  olClassName?: string;
  watch?: boolean;
  underline?: boolean;
}) {
  const styles = {
    copy: `
    text-base
    md:text-lg
    lg:text-xl
    pb-1
    ${
  underline
    ? 'border-b border-onNeutralBg hover:text-onNeutralBgLink hover:border-onNeutralBgLink'
    : 'hover:border-b hover:border-onNeutralBg'
}
    `,

    li: `
    
    `,
  };

  const { pathname } = useLocation();

  const activeHash = watch
    && useActiveHash(headings.map((h) => new Slugger().slug(h.value, false)));

  return (
    <nav className={` ${className}`}>
      <ol
        className={`flex flex-col space-y-4
    ${globalStyles.transitions.colors}
    ${olClassName}
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
            watch && activeHash === slug
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
