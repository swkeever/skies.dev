import React from 'react';
import Container from './Container';
import Title from './Title';
import Date from './Date';
import ShareCallToAction from './ShareCallToAction';

export default function Header({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div
      className={`
        bg-primaryBg
        diagonal-t
        pt-5
        pb-10
        lg:pb-2
        -mb-4
      `}
    >
      <Container>
        <Title title={title} />
        <Date date={date} />
        <ShareCallToAction />
      </Container>
    </div>
  );
}
