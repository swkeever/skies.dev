import React from 'react';

export default function Subtitle() {
  return (
    <p
      className={`
        w-7/12
        -mb-4
        lg:w-6/12
        lg:text-lg
        text-onPrimaryBgSoft
      `}
    >
      I write about lessons learned in the field, and anything else I feel is
      important.
    </p>
  );
}
