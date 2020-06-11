import React, { ReactNode } from 'react';

export default function CVList({ children }: { children: ReactNode }) {
  return (
    <ul className="ml-2 list-none flex flex-col space-y-4 border-l-2 border-primarySoft pl-4">
      {children}
    </ul>
  );
}
