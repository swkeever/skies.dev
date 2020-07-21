import React from 'react';
import Search from './Search';
import { globalStyles } from '../../styles';
import Skies from '../../../assets/skies.svg';

export default function Header() {
  return (
    <section
      className={`
          diagonal-t 
          bg-skies
          z-0
          py-16
          md:py-24
          xl:py-32
          ${globalStyles.transitions.colors}
          
        `}
    >
      <div
        className={`px-4 pt-2 z-10 max-w-screen-sm mx-auto ${globalStyles.transitions.colors}`}
      >
        <h1
          className={`
              leading-none
              text-base
              lg:text-lg
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
