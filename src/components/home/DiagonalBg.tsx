import React, { ReactNode } from 'react';

export default function DiagonalBg({ children }: { children: ReactNode }) {
  return (
    <div
      className={`
      bg-primary
      diagonal-m 
      pt-8
      pb-8
    `}
    >
      {children}
    </div>
  );
}
