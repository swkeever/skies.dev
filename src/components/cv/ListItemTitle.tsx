import React, { ReactNode } from 'react';

export default function ListItemTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-2xl mt-px">{children}</h3>;
}
