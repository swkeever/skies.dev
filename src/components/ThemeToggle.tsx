import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { LayoutContext } from './Layout';

export default function ThemeToggle() {
  const { lightTheme, setLightTheme } = useContext(LayoutContext);
  return (
    <div className="fixed top-0 right-0 z-50">
      <span
        onClick={() => setLightTheme(!lightTheme)}
        role="button"
        aria-hidden
        className={`
          fixed
          right-0
          top-3
          z-50
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
          fixed 
          right-2
          top-2
          z-40
          opacity-75
          lg:opacity-100
        `}
      >
        <span className="sr-only">Change themes</span>
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
          top-3
          z-50
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
