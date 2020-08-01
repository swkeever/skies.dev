import React from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import { globalStyles } from '../../styles';
import BlogMeta from '../BlogMeta';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  return (
    <li>
      <Link
        to={blog.slug}
        className={`
        ${globalStyles.transitions.colors}
        ${globalStyles.outline}
        flex flex-col
        shadow-xl
        bg-neutralBg
        rounded
        h-96
        hover:bg-primaryBg
        group



      `}
      >
        <Img fluid={blog.image} alt={blog.title} />

        <div className="flex flex-col px-3 py-2 space-y-1">
          <h2 className="text-2xl group-hover:text-onPrimaryBg font-bold leading-none text-onNeutralBg lg:text-2xl">
            {blog.title}
          </h2>
          <BlogMeta
            className="text-sm text-neutralSoft group-hover:text-onPrimaryBgSofter"
            date={blog.date}
            timeToRead={blog.timeToRead}
          />
          <p className="w-full text-onNeutralBgSoft group-hover:text-onPrimaryBgSoft">
            {blog.description}
          </p>
        </div>
      </Link>
    </li>
  );
}
