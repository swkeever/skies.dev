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
          shadow-sm hover:shadow-xl active:shadow-sm
          ${globalStyles.transitions}
          ${globalStyles.outline}
        `}
      >
        <div className="flex-shrink-0">
          <Img
            className="h-48 w-full object-cover"
            fluid={blog.image}
            alt={blog.title}
          />
        </div>
        <div className="flex-1 bg-neutralBg p-3 flex flex-col justify-between">
          <div className="flex-1">
            <span
              className={`${blog.category.className} ${globalStyles.transitions} font-medium px-2 py-px rounded-full`}
            >
              {blog.category.name}
            </span>
            <h2 className="mt-2 text-2xl leading-7 font-semibold text-onNeutralBg">
              {blog.title}
            </h2>
            <p className="mt-3 text-base leading-6 text-neutral">
              {blog.description}
            </p>
          </div>
          <div className="mt-6 flex items-center">
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
