import React from 'react';

export default function Title({ title }: { title: string }) {
  return (
    <h1
      className={`
        mt-10
        md:mt-8
        leading-none
        text-2xl
        text-onPrimaryBg
        md:text-3xl
        lg:mt-0
      `}
    >
      {title}
    </h1>
  );
}
