import React, { ReactNode } from 'react';
import Container from '../Container';

export default function BlogsContainer({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Container
      className={`
        mt-8 
        px-4 
        max-w-2xl
        lg:mt-16 
        relative
        ${className}
    `}
    >
      {children}
    </Container>
  );
}
