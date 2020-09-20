import globalStyles from '@styles/index';
import { Blog } from '@pages/blog';
import React from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import tw from '@utils/tailwind';

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      to={blog.slug}
      className={tw(
        globalStyles.outline,
        globalStyles.transitions,
        'rounded-lg',
        'shadow-sm hover:shadow-lg active:shadow-sm',
        'overflow-hidden',
        'h-full',
        'transform',
        'translate-y-0 hover:-translate-y-1 active:translate-y-0',
      )}
    >
      <article className={tw('h-full', 'flex flex-col')}>
        <figure className="flex-shrink-0">
          <Img
            className="object-cover w-full h-48"
            fluid={blog.image.fluid}
            alt={blog.title}
          />
        </figure>
        <section className="flex flex-col justify-between flex-1 p-3 bg-light">
          <header className="flex-1">
            <span
              className={tw(
                blog.category.className,
                globalStyles.transitions,
                'font-medium',
                'px-2 py-px',
                'rounded-full',
              )}
            >
              {blog.category.name}
            </span>
            <h2 className="mt-2 text-2xl font-semibold leading-7 text-onNeutralBg">
              {blog.title}
            </h2>
          </header>
          <p className="mt-3 text-base leading-6 text-neutral mt-6">
            {blog.description}
          </p>
          <div className="flex items-center mt-6 text-sm leading-5 text-neutralSoft">
            <time dateTime={blog.date.modified}>{blog.date.modified}</time>
            <span className="mx-1">&middot;</span>
            <span>
              {blog.timeToRead}
              &nbsp;min read
            </span>
          </div>
        </section>
      </article>
    </Link>
  );
}
