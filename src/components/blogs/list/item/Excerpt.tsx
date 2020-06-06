import React from 'react';

export default function Excerpt({ excerpt }: { excerpt: string }) {
  return (
    <p
      className={`
        text-onNeutralBgSoft
        mb-4
        lg:leading-relaxed
      `}
    >
      {excerpt}
    </p>
  );
}
