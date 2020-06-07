import React, { ReactNode } from 'react';
import Container from '../../layout/Container';

export default function BlogsContainer({ children }: { children: ReactNode }) {
  return (
    <Container
      className={`
        mt-8 
        px-4 
        max-w-2xl
        lg:mt-16 
        relative
    `}
    >
      {children}
    </Container>
  );
}
