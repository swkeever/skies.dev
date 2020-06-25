import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import { Blog } from '../../pages/blog';
import { slugToLink } from '../../utils/links';
import BlogMeta from '../BlogMeta';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  console.log(blog);
  const li = (
    <li
      className={`
        bg-neutralBg 
        md:transition 
        md:transform 
        hover:scale-105 
        hover:shadow-lg 
        translate-y-0
        hover:-translate-y-3 
        shadow-none 
        duration-300 
        border-t-4
        border-primary
        mb-0
      `}
    >
      <Link
        to={slugToLink(blog.slug)}
        className="grid grid-flow-row grid-rows-4 h-full justify-between text-onNeutralBg hover:text-onNeutralBg"
      >
        <div className="absolute top-0 left-0 z-10">
          <ul className="ml-2 mt-2 list-none flex flex-wrap">
            {blog.tags.map((t) => (
              <li className="bg-neutralBg mr-1 shadow- text-sm font-medium text-onNeutralBgSoft rounded-full px-2">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Img
          className="row-span-3 w-full mx-auto relative z-0"
          fluid={blog.image}
          alt={blog.title}
        />

        <div className="bg-neutralBg pb-4 px-2">
          <h2 className="relative leading-tight font-medium text-onNeutralBgSoft z-20 text-2xl ">
            {blog.title}
          </h2>
        </div>
      </Link>
    </li>
  );

  return <>{li}</>;
}
