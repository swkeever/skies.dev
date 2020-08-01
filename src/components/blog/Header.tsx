import React from 'react';
import Search from './Search';
import { globalStyles } from '../../styles';

export default function Header() {
  return (
    <section
      className={`
          diagonal-t 
          bg-primary
          z-0
          py-16
          md:py-20
          xl:py-24
          ${globalStyles.transitions.colors}
          
        `}
    >
      <div className="px-4 pt-2 z-10 max-w-screen-sm mx-auto">
        <h1
          className={`
              leading-none
              text-base
              uppercase
              tracking-wider
              text-onPrimary
              font-semibold
            `}
        >
          Software Engineering Blog
        </h1>
        <Search />
      </div>
    </section>
  );
}
