import React, { ReactElement } from 'react';
import { Link } from '@reach/router';
import { Blog } from '../../pages';
import { globalStyles } from '../../styles';

export default function BlogListItem({ blog }: { blog: Blog }): ReactElement {
  const li = (
    <li
      className={`
        bg-neutralBg 
        ${globalStyles.transitions.colors}
        box-content
        border-neutralBgSoft
        border-t-4
        hover:border-primarySoft
        mb-0
        block
        w-auto
        shadow-md
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
          sizes={blog.image.sizes}
          srcSet={blog.image.srcSet}
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
