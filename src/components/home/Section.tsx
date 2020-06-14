import React, { ReactNode } from 'react';
import Container from '../Container';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <Container>
      <section
        className={`
          flex
          flex-col
          text-lg
          px-4
          md:px-6
          items-center
          
          md:flex-row 
          ${className}
        `}
      >
        {children}
      </section>
    </Container>
  );
}
