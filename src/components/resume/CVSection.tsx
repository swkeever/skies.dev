import React, { ReactNode } from 'react';

export default function CVSection({ children }: { children: ReactNode }) {
  return <section className="mb-12">{children}</section>;
}