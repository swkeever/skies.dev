import React, { ReactNode } from 'react';

export default function DiagonalBg({ children }: { children: ReactNode }) {
  return (
    <div
      className={`
      bg-primaryBg
      diagonal-m 
      pt-16
      pb-8
      md:pt-24
      md:pb-4
      md:-mt-16
      md:mb-16
      lg:pt-12
      lg:pb-20
    `}
    >
      {children}
    </div>
  );
}
