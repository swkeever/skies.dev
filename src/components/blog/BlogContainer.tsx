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
        max-w-xl
        px-2
        leading-relaxed
        text-onNeutralBg
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
