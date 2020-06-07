import React from 'react';

export default function Brand() {
  return (
    <div
      className={`
          z-50
          hidden
          inline
          lg:block
          lg:fixed
          top-0
          left-0
          ml-4
          tracking-wider
          font-bold
          uppercase
          mt-3
          text-lg
          text-onPrimary
          hover:text-onPrimary
        `}
    >
      <span role="img" aria-label="Man technologist">
        👨‍💻
      </span>
      {' '}
      Sean Keever
    </div>
  );
}
