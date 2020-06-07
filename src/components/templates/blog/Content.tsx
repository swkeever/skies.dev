/* eslint-disable react/no-danger */
import React from 'react';
import Container from './Container';

export default function Content({ html }: { html: string }) {
  return (
    <Container
      className={`
      mt-8
      lg:mt-0
    `}
    >
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}
