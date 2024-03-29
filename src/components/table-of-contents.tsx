import React from 'react';
import Slugger from 'github-slugger';
import { useLocation, Link } from '@reach/router';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';
import { useActiveHash } from '../hooks/use-active-hash';
import { BlogHeadings } from '../../graphql-types';

export default function TableOfContents({
  headings,
  className = '',
  olClassName = '',
  watch = true,
  underline = false,
}: {
  headings: BlogHeadings[];
  className?: string;
  olClassName?: string;
  watch?: boolean;
  underline?: boolean;
}) {
  const styles = {
    copy: tw(
      'text-base',
      'pb-1',
      underline
        ? tw(
          'border-b border-onNeutralBg hover:text-onNeutralBgLink hover:border-onNeutralBgLink',
        )
        : tw('hover:border-b hover:border-onNeutralBg'),
    ),
  };

  const { pathname } = useLocation();

  const activeHash = useActiveHash(
    headings.map((h) => new Slugger().slug(h.value, false)),
  );

  return (
    <nav className={className}>
      <ol
        className={tw(
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
              className={tw(
                globalStyles.transitions,
                styles.copy,
                watch && activeHash === slug
                  ? tw(
                    'text-onNeutralBgLink',
                    'pb-1',
                    'border-b border-onNeutralBgLink',
                  )
                  : tw('text-onNeutralBgSofter'),
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
