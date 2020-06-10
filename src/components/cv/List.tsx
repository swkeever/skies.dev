import React, { ReactNode } from 'react';

export default function List({ children }: { children: ReactNode }) {
  return (
    <ul className="ml-0 list-none flex flex-col space-y-4 border-l-2 border-primary pl-4">
      {children}
    </ul>
  );
}
