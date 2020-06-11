import React, { ReactNode } from 'react';

export default function CVSectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="pt-5 rounded-sm pb-0 bg-primary">
      <span className="text-onPrimary pl-3">{children}</span>
    </h2>
  );
}
