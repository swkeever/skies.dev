import React, { ReactNode } from 'react';

export default function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`}>{children}</div>
  );
}
