import React, { ReactNode } from 'react';

export default function CVSectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="diagonal-sm pt-5 rounded-sm bg-primary">
      <span className="text-onPrimary pl-3">{children}</span>
    </h2>
  );
}
