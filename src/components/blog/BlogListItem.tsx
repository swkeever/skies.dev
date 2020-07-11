import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import { Blog } from '../../pages/blog';

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
        block
        w-auto
      `}
    >
      <Link
        to={blog.slug}
        className=" items-center relative grid grid-rows-4 w-auto block justify-between text-onNeutralBg hover:text-onNeutralBg"
      >
        <img
          loading="lazy"
          className="row-span-3"
          src={blog.image.src}
          alt={blog.title}
        />

        <div className="bg-neutralBg py-2 px-2">
          <h2 className="leading-tight font-medium text-onNeutralBgSoft text-2xl ">
            {blog.title}
          </h2>
        </div>
      </Link>
    </li>
  );

  return <>{li}</>;
}
