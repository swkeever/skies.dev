import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import { FaArrowRight } from 'react-icons/fa';
import { Blog } from '..';
import { slugToLink } from '../../utils/links';

export default function Item({ blog }: { blog: Blog }): ReactElement {
  const {
    title, slug, tags, description, date,
  } = blog;

  return (
    <li
      className={`
        mb-8
        pb-8
        pt-10
      `}
    >
      <h2
        className={`
          text-xl
          leading-tight
        `}
      >
        <Link
          to={slugToLink(slug)}
          className={`
            text-onNeutralBg
            hover:text-onNeutralBg
          `}
        >
          {title}
        </Link>
      </h2>
      <time
        className={`
          text-neutral
          mt-2
          inline-block
          uppercase
          tracking-widest
          text-neutral
          text-sm
        `}
      >
        {date}
      </time>
      <ul
        className={`
          list-none 
          ml-0
        `}
      >
        {tags.map((t) => (
          <li
            key={`${slug}-${t}`}
            className={`
              inline-block 
              bg-primaryBg
              text-onPrimaryBgSoft
              rounded-full 
              text-base
              px-2 
              mr-2
              mb-2 
              shadow-xs
           `}
          >
            {t}
          </li>
        ))}
      </ul>
      <p
        className={`
        text-onNeutralBgSoft
        mb-4
        lg:leading-relaxed
      `}
      >
        {description}
      </p>
      <Link
        to={slugToLink(slug)}
        className={`
        text-onNeturalLink
        pb-1
        border-b
        hover:text-onNeutralBgLinkHover
      `}
      >
        Read more
        <span
          className={`
          inline-block
          align-text-bottom
          ml-1
          text-onNeutralBgLink
        `}
        >
          <FaArrowRight />
        </span>
      </Link>
    </li>
  );
}
