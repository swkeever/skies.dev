import React, { ReactNode } from 'react';

export default function Container({
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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </div>
  );
}
