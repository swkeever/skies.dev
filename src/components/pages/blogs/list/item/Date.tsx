import React from 'react';

export default function Date({ date }: { date: string }) {
  return (
    <time
      className={`
        text-neutral
        mt-2
        inline-block
        uppercase
        tracking-widest
        text-neutral
        text-sm
      `}
    >
      {date}
    </time>
  );
}
