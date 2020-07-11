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

        mx-auto
        lg:ml-48
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
