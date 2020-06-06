import React from 'react';

export default function Name({ name }: { name: string }) {
  return (
    <span
      className={`
        text-sm
        hidden
        md:inline
      `}
    >
      {name}
    </span>
  );
}
