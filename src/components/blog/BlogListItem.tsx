import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import { Blog } from '../../pages';
import { globalStyles } from '../../styles';
import BlogMeta from '../BlogMeta';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  const li = (
    <li>
      <Link
        to={blog.slug}
        className={`
        ${globalStyles.transitions.colors}
        flex flex-col
        h-full
        shadow-lg
        bg-neutralBg
        rounded

        hover:bg-primaryBg
        group



      `}
      >
        <Img className="" fluid={blog.image} alt={blog.title} />

        <div className="flex flex-col px-3 py-2 space-y-1">
          <h2 className="text-2xl group-hover:text-onPrimaryBg font-bold leading-none text-onNeutralBg lg:text-3xl">
            {blog.title}
          </h2>
          <BlogMeta
            className="text-sm text-neutralSoft group-hover:text-primarySoft"
            date={blog.date}
            timeToRead={blog.timeToRead}
          />
          <p className="w-full text-onNeutralBgSoft group-hover:text-onPrimaryBgSoft lg:text-lg">
            {blog.description}
          </p>
        </div>
      </Link>
    </li>
  );

  return <>{li}</>;
}
