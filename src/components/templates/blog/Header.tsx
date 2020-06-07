import React from 'react';
import Container from './Container';
import Title from './Title';
import Date from './Date';

export default function Header({
  title,
  date,
}: {
  title: string
  date: string
}) {
  return (
    <div
      className={`
        bg-primaryBg
        diagonal-t
        py-4
        pb-16
        lg:pb-8 
        -mb-4
      `}
    >
      <Container>
        <Title title={title} />
        <Date date={date} />
      </Container>
    </div>
  );
}
