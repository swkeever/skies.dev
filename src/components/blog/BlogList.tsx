import React, { ReactNode } from 'react';
import BlogListItem from './BlogListItem';
import Empty from '../../../assets/empty.svg';
import { Blog } from '../../pages/blog';

function Header({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-5 text-onNeutralBgSoft mb-8 text-center font-light text-xl">
      {children}
    </h2>
  );
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const children = blogs.length ? (
    <>
      <Header>Click a card. Any card.</Header>
      <ul className="list-none mb-0 max-w-6xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <BlogListItem key={b.id} blog={b} />
        ))}
      </ul>
    </>
  ) : (
    <>
      <Header>No results found.</Header>
      <Empty
        className={`
          max-w-2xl
          mx-auto 
          h-auto 
          mb-12
        `}
      />
    </>
  );

  return (
    <section className="bg-neutralBgSoft self-stretch flex-grow pt-4 pb-12">
      {children}
    </section>
  );
}
