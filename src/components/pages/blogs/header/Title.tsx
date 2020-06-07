import React from 'react';

export default function Title() {
  return (
    <h1
      className={`
        w-11/12
        leading-tight
        md:text-4xl
        text-onPrimaryBg
        md:w-8/12
        md:w-9/12
        lg:w-7/12
      `}
    >
      Blogs about life as a software engineer.
    </h1>
  );
}
