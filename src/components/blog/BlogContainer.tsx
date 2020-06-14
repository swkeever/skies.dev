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
        md:max-w-md
        lg:max-w-lg
        xl:max-w-xl
        px-2
        lg:py-8
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
