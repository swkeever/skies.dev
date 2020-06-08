import React from 'react';

export default function Date({ date }: { date: string }) {
  return (
    <p
      className={`
        uppercase
        tracking-widest
        text-onPrimaryBgSoft
        text-lg
        text-left
      `}
    >
      <span
        className={`
          text-xs 
          mr-1
          block
          -mb-px
          lg:-mb-2
        `}
      >
        Published
      </span>
      <time dateTime={date}>{date}</time>
    </p>
  );
}
