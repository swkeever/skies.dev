import React from 'react';
import BlogsContainer from '../BlogsContainer';
import Item from './item';
import NoResultsFound from './NoResultsFound';

export type Blog = {
  id: string
  timeToRead: number
  title: string
  slug: string
  date: string
  tags: string[]
  description: string
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <BlogsContainer>
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
