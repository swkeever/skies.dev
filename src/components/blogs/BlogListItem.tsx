import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import { Blog } from '../../pages/blog';
import { slugToLink } from '../../utils/links';
import BlogMeta from '../BlogMeta';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  const li = (
    <li className="bg-neutralBg lg:transition lg:transform hover:scale-105 hover:shadow-xl hover:-translate-y-3 shadow-md duration-300 rounded-lg">
      <div className="diagonal-t rounded-t-lg relative pb-48 -mb-48 z-0 bg-primary" />

      <Link
        to={slugToLink(blog.slug)}
        className="flex flex-col text-onNeutralBg hover:text-onNeutralBg"
      >
        <div className="relative px-4 z-10 h-24">
          <BlogMeta
            date={blog.date}
            timeToRead={blog.timeToRead}
            className="justify-between relative z-20 text-sm text-onPrimarySoft"
          />
          <ul className="ml-0 mt-1 text-sm list-none flex flex-wrap">
            {blog.tags.map((t) => (
              <li className="bg-primaryBg mr-1 mb-1 relative z-40 text-onPrimaryBgSoft rounded-full px-2">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Img className="-mt-10" fluid={blog.imageFluid} alt={blog.title} />
        <div className="mt-4 px-4 pb-4">
          <h2 className="mt-auto relative z-20 text-xl ">{blog.title}</h2>
          <p className="mt-1 relative z-20 text-onNeutralBgSoft">
            {blog.description}
          </p>
        </div>
      </Link>
    </li>
  );

  return <>{li}</>;
}
