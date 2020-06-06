import React from 'react';
import BlogsContainer from '../BlogsContainer';
import Item from './item';
import NoBlogs from './NoBlogs';

type Blog = {
  title: string
  slug: string
  date: string
  tags: string[]
  excerpt: string
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
          {blogs.map((e) => {
            const {
              title, slug, date, tags,
            } = e.node.frontmatter;
            const { excerpt } = e.node;
            const dateFormat = new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(date));

            return (
              <Item
                key={slug}
                title={title}
                slug={slug}
                date={dateFormat}
                tags={tags}
                excerpt={excerpt}
              />
            );
          })}
        </ul>
      ) : (
        <NoBlogs />
      )}
    </BlogsContainer>
  );
}
