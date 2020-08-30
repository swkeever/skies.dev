import globalStyles from '@styles/index';
import { Blog } from '@pages/blog';
import React from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <li className="">
      <Link
        to={blog.slug}
        className={`
          flex flex-col 
          rounded-lg 
          overflow-hidden 
          h-full
          transform
          translate-y-0 hover:-translate-y-1 active:translate-y-0
          shadow-sm hover:shadow-lg active:shadow-sm
          ${globalStyles.transitions}
          ${globalStyles.outline}
        `}
      >
        <div className="flex-shrink-0">
          <Img
            className="object-cover w-full h-48"
            fluid={blog.image}
            alt={blog.title}
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-3 bg-neutralBg">
          <div className="flex-1">
            <span
              className={`${blog.category.className} ${globalStyles.transitions} font-medium px-2 py-px rounded-full`}
            >
              {blog.category.name}
            </span>
            <h2 className="mt-2 text-2xl font-semibold leading-7 text-onNeutralBg">
              {blog.title}
            </h2>
            <p className="mt-3 text-base leading-6 text-neutral">
              {blog.description}
            </p>
          </div>
          <div className="flex items-center mt-6">
            <div className="">
              <div className="flex text-sm leading-5 text-neutral">
                <time dateTime={blog.date}>{blog.date}</time>
                <span className="mx-1">&middot;</span>
                <span>
                  {blog.timeToRead}
                  &nbsp;min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
