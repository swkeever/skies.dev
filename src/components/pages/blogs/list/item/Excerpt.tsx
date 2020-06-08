import React from 'react';

export default function Excerpt({ description }: { description: string }) {
  return (
    <p
      className={`
        text-onNeutralBgSoft
        mb-4
        lg:leading-relaxed
      `}
    >
      {description}
    </p>
  );
}
