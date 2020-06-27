import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import { Blog } from '../../pages/blog';
import { slugToLink } from '../../utils/links';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
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
        className=" items-center relative grid grid-rows-4 w-full h-full justify-between text-onNeutralBg hover:text-onNeutralBg"
      >
        <Img
          className="row-span-3 w-full h-full "
          fluid={blog.image}
          alt={blog.title}
        />

        <div className="bg-neutralBg py-2 px-2">
          <h2 className="leading-tight font-medium text-onNeutralBgSoft z-20 text-2xl ">
            {blog.title}
          </h2>
        </div>
      </Link>
    </li>
  );

  return <>{li}</>;
}
