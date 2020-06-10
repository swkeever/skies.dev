/* eslint-disable react/no-danger */
import React from 'react';
import BlogContainer from './BlogContainer';

export default function Content({ html }: { html: string }) {
  return (
    <BlogContainer
      className={`
      mt-8
      lg:mt-0
    `}
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </BlogContainer>
  );
}
