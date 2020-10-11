import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import globalStyles from '@styles/index';
import { Link } from '@reach/router';
import tw from '@utils/tailwind';
import BlogCard from './blog-card';
import routes from '../utils/routes';
import { BlogMeta } from '../../graphql-types';

type PropTypes = {
  title: string;
  blogs: BlogMeta[];
  subtitle: string;
};

export default function BlogDisplay({ title, blogs, subtitle }: PropTypes) {
  return (
    <div
      className={tw(
        'mx-auto',
        'clearfix',
        'max-w-screen-md xl:max-w-screen-2xl',
        'px-4',
      )}
    >
      <header className={tw('flex flex-col lg:items-center')}>
        <h2
          className={tw(
            'text-onNeutralBg',
            'font-extrabold text-3xl',
            'mb-3',
            globalStyles.transitions,
          )}
        >
          {title}
        </h2>
        <p
          className={tw(
            'text-neutral',
            'text-lg xl:text-xl lg:text-center',
            'max-w-lg',
            globalStyles.transitions,
          )}
        >
          {subtitle}
        </p>
      </header>
      <nav
        className={tw(
          'mt-8',
          'grid gap-5',
          'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
        )}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </nav>
      <Link
        className={tw(
          'block',
          'text-onNeutralBg hover:text-onNeutralBgLink',
          'mt-8 ml-auto',
          'font-semibold text-lg',
          'float-right',
          'group',
          globalStyles.transitions,
        )}
        to={routes.blog}
      >
        See all publications
        <FaArrowRight
          className={tw(
            'inline-block',
            'ml-1',
            'text-xl',
            'transform group-hover:translate-x-2',

            'transition-transform duration-500 ease-in-out',
          )}
        />
      </Link>
    </div>
  );
}
