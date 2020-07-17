import React, { ReactNode } from 'react';

export default function BlogContainer({
  children = null,
  className = '',
  ...props
}: {
  children: ReactNode;
  className?: string;
  props?: Object;
}) {
  return (
    <div
      className={`
        container
        relative
        mx-auto
        max-w-screen-md
        px-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
