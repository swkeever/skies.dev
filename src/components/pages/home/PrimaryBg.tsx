import React, { ReactNode } from 'react';

export default function PrimaryBg({ children }: { children: ReactNode }) {
  return (
    <div
      className={`
      bg-primary
      text-light
      pt-16
      -mt-12
      z-0
      md:-mt-32
      md:pt-48
      md:pb-px
      `}
    >
      {children}
    </div>
  );
}
