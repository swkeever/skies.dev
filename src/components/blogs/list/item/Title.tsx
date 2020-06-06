import React from 'react';
import { Link } from 'gatsby';

export default function Title({
  title,
  slug,
}: {
  title: string
  slug: string
}) {
  return (
    <h2
      className={`
        text-xl
        leading-tight
      `}
    >
      <Link
        to={`/${slug}`}
        className={`
          text-onNeutralBg
          hover:text-onNeutralBg
        `}
      >
        {title}
      </Link>
    </h2>
  );
}
