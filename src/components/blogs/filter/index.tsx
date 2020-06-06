import React from 'react';
import BlogsContainer from '../BlogsContainer';
import Input from './Input';
import Tags from './Tags';
import type { Tag } from './Tags';

type FiltersProps = {
  filter: string
  setFilter: Function
  tags: Tag[]
  setTags: Function
}

export default function Filters({
  filter,
  setFilter,
  tags,
  setTags,
}: FiltersProps) {
  return (
    <BlogsContainer>
      <Input filter={filter} setFilter={setFilter} />
      <Tags tags={tags} setTags={setTags} />
    </BlogsContainer>
  );
}
