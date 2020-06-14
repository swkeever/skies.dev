import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle({
  lightTheme,
  setLightTheme,
}: {
  lightTheme: boolean;
  setLightTheme: Function;
}) {
  return (
    <div>
      <span
        onClick={() => setLightTheme(!lightTheme)}
        role="button"
        aria-hidden
        className={`
          fixed
          right-0
          top-0
          z-50
          mt-3
          text-2xl
          text-onPrimary
          lg:text-onPrimary
        
          mr-10
          ${lightTheme && 'hidden'}
          px-1
          opacity-75
          lg:opacity-100
        `}
      >
        <FaSun />
      </span>
      <label
        htmlFor="theme-toggle"
        className={`
          switch
          mt-1
          fixed 
          right-0
          top-0
          z-40
          mt-2
          mr-2
          opacity-75
          lg:opacity-100
        `}
      >
        <input
          id="theme-toggle"
          onChange={() => setLightTheme(!lightTheme)}
          type="checkbox"
          checked={!lightTheme}
        />
        <span
          className={`
            slider
            round
          `}
        />
      </label>
      <span
        onClick={() => setLightTheme(!lightTheme)}
        role="button"
        aria-hidden
        className={`
          fixed
          right-0
          top-0
          z-50
          mt-3
          text-xl
          text-onPrimary
          lg:text-onPrimary
          mr-3
          ${!lightTheme && 'hidden'}
          px-1
          pt-px
          opacity-75
        `}
      >
        <FaMoon />
      </span>
    </div>
  );
}
