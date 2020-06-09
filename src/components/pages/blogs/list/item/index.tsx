import React from 'react';
import Description from './Description';
import ReadMore from './ReadMore';
import Title from './Title';
import Date from './Date';
import Tags from './Tags';
import { Blog } from '..';

export default function Item({ key, blog }: { key: string; blog: Blog }) {
  return (
    <li
      key={key}
      className={`
        mb-8
        pb-8
        pt-10
      `}
    >
      <Title title={blog.title} slug={blog.slug} />
      <Date date={blog.date} />
      <Tags tags={blog.tags} slug={blog.slug} />
      <Description description={blog.description} />
      <ReadMore slug={blog.slug} />
    </li>
  );
}
