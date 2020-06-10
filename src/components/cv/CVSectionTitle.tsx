import React, { ReactNode } from 'react';

export default function CVSectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="ml-2">{children}</h2>;
}
