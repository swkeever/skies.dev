import React from 'react';
import BlogListItem from './BlogListItem';
import Empty from '../../../assets/empty.svg';
import { Blog } from '../../pages/blog';

function NoResultsFound() {
  return (
    <div
      className={`
        w-10/12 
        mx-auto
        mt-12
        lg:mb-8
      `}
    >
      <h2
        className={`
          text-lg
          w-64 
          mx-auto
          font-normal
          text-onNeutralBgSoft
          mb-4
          lg:text-xl
        `}
      >
        Hmm. I don&apos;t have anything that matches your search.
      </h2>
      <Empty
        className={`
          w-11/12 
          h-auto 
          mb-12
        `}
      />
    </div>
  );
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const children = blogs.length ? (
    <ul className="list-none mb-0 max-w-4xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2  gap-6">
      {blogs.map((b) => (
        <BlogListItem key={b.id} blog={b} />
      ))}
    </ul>
  ) : (
    <NoResultsFound />
  );

  return <div className="bg-neutralBgSoft pt-8 pb-12 mx-auto">{children}</div>;
}
