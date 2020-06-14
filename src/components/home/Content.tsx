import React, { ReactNode } from 'react';

type ContentProps = {
  children: ReactNode;
  className?: string;
};

export default function Content({ children, className = '' }: ContentProps) {
  return (
    <div
      className={`
      ${className}
    `}
    >
      {children}
    </div>
  );
}
