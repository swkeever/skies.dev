import React, { ReactNode } from 'react';

export default function BlogContainer({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  props?: Object;
}) {
  return (
    <div
      className={`
        container
        mx-auto
        max-w-3xl
        px-4
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
