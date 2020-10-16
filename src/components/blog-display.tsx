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
};

export default function BlogDisplay({ title, blogs }: PropTypes) {
  return (
    <div className={tw('mx-auto', 'clearfix', 'max-w-screen-xl', 'px-4')}>
      <header className={tw('flex flex-col items-center')}>
        <h2
          className={tw(
            'text-onNeutralBg',
            'font-extrabold text-3xl',
            'mb-1',
            globalStyles.transitions,
          )}
        >
          {title}
        </h2>
      </header>
      <nav className={tw('mt-8', 'grid gap-5', 'grid-cols-1 md:grid-cols-3')}>
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
        Back to blog
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
