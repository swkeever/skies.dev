import React from 'react';
import BlogsContainer from './BlogsContainer';
import Item from './BlogListItem';
import Empty from '../../../assets/empty.svg';

function NoResultsFound() {
  return (
    <div
      className={`
        w-10/12 
        mx-auto
        mt-12
        md:-mt-1
        lg:-mt-8
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

export type Blog = {
  id: string;
  timeToRead: number;
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <BlogsContainer className="-mt-6">
      {blogs.length ? (
        <ul
          className={`
            list-none
            ml-0
            md:text-lg
            divide-y
            divide-onNeutralSoft
            lg:w-full
            mb-24
            md:mb-48
            lg:mx-auto
            lg:mb-32
          `}
        >
          {blogs.map((b) => (
            <Item key={b.id} blog={b} />
          ))}
        </ul>
      ) : (
        <NoResultsFound />
      )}
    </BlogsContainer>
  );
}
