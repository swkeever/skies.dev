import React from 'react';
import Empty from '../../../../assets/empty.svg';

export default function NoBlogs() {
  return (
    <div
      className={`
        w-10/12 
        mx-auto
        mt-12
        md:-mt-1
        lg:-mt-8
        lg:mb-8
      `}
    >
      <h2
        className={`
          text-lg
          w-64 
          mx-auto
          font-normal
          text-onPrimary
          mb-4
          lg:text-xl
        `}
      >
        Hmm. I don&apos;t have anything that matches your search.
      </h2>
      <Empty
        className={`
          w-11/12 
          h-auto 
        `}
      />
    </div>
  );
}
