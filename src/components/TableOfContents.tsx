import React from 'react';
import Slugger from 'github-slugger';
import { useLocation, Link } from '@reach/router';
import globalStyles from '@styles/index';
import classNames from '@utils/class-names';
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
  };

  const { pathname } = useLocation();

  const activeHash = watch
    && useActiveHash(headings.map((h) => new Slugger().slug(h.value, false)));

  return (
    <nav className={` ${className}`}>
      <ol
        className={classNames(
          'flex flex-col',
          'space-y-4',
          globalStyles.transitions,
          olClassName,
        )}
      >
        {headings.map((h) => {
          const slug = new Slugger().slug(h.value, false);

          const link = (
            <Link
              className={classNames(
                globalStyles.transitions,
                styles.copy,
                watch && activeHash === slug
                  ? classNames(
                    'text-onNeutralBgLink',
                    'pb-1',
                    'border-b border-onNeutralBgLink',
                  )
                  : classNames('text-onNeutralBg'),
              )}
              to={`${pathname}#${slug}`}
            >
              {h.value}
            </Link>
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
