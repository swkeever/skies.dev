import React from 'react';
import Excerpt from './Excerpt';
import ReadMore from './ReadMore';
import Title from './Title';
import Date from './Date';
import Tags from './Tags';

type ItemPropTypes = {
  title: string
  slug: string
  date: string
  tags: string[]
  excerpt: string
}

export default function Item({
  title,
  slug,
  date,
  tags,
  excerpt,
}: ItemPropTypes) {
  return (
    <li
      key={slug}
      className={`
        mb-8
        pb-8
        pt-10
      `}
    >
      <Title title={title} slug={slug} />
      <Date date={date} />
      <Tags tags={tags} />
      <Excerpt excerpt={excerpt} />
      <ReadMore slug={slug} />
    </li>
  );
}
