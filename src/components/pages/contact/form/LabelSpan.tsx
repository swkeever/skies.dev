import React from 'react';

export default function LabelSpan({ label }: { label: string }) {
  return (
    <span
      className={`
        text-neutral
        tracking-widest
        uppercase
        text-xs
      `}
    >
      {label}
    </span>
  );
}
