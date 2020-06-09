import React from 'react';

export default function Description({ description }: { description: string }) {
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
