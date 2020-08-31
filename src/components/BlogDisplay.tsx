import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import globalStyles from '@styles/index';
import { Link } from '@reach/router';
import tw from '@utils/tailwind';
import BlogCard from './BlogCard';
import routes from '../utils/routes';

type PropTypes = {
  title: string;
  blogs: Blog[];
  subtitle: string;
};

export default function BlogDisplay({ title, blogs, subtitle }: PropTypes) {
  return (
    <section
      className={tw(
        'mx-auto',
        'max-w-md md:max-w-screen-md  xl:max-w-screen-2xl',
        'flex flex-col items-center',
        'px-4',
      )}
    >
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
          'text-lg xl:text-xl text-center',
          'max-w-lg',
          'mb-16',
          globalStyles.transitions,
        )}
      >
        {subtitle}
      </p>
      <ul
        className={tw(
          'grid gap-5',
          'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
        )}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
      <Link
        className={tw(
          'text-onNeutralBg hover:text-onNeutralBgLinkHover',
          'mt-8 ml-auto',
          'font-semibold text-lg',
          globalStyles.transitions,
        )}
        to={routes.blog}
      >
        See all publications
        <FaArrowRight className={tw('inline-block', 'ml-1 mb-1', 'text-xl')} />
      </Link>
    </section>
  );
}
