import React from 'react';
import BlogsContainer from '../BlogsContainer';
import FilterInput from './FilterInput';
import FilterTags from './FilterTags';
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
      <FilterInput filter={filter} setFilter={setFilter} />
      <FilterTags tags={tags} setTags={setTags} />
    </BlogsContainer>
  );
}
