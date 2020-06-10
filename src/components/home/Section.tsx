import React, { ReactNode } from 'react';
import Container from '../Container';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <Container
      className={`
        md:pr-8
        px-0
      `}
    >
      <section
        className={`
          flex
          justify-center
          flex-col
          text-lg
          items-center
          md:text-base
          md:mb-32
          md:flex-row 
          pt-2 
          lg:pt-32
          ${className}
        `}
      >
        {children}
      </section>
    </Container>
  );
}
