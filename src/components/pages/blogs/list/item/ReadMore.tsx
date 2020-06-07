import React from 'react';
import { Link } from 'gatsby';
import { FaArrowRight } from 'react-icons/fa';
import { slugToLink } from '../../../../../utils/links';

export default function ReadMore({ slug }: { slug: string }) {
  return (
    <Link
      to={`/${slugToLink(slug)}`}
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
  );
}
