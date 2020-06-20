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
        px-4 
        max-w-3xl
        relative
        ${className}
    `}
    >
      {children}
    </Container>
  );
}
