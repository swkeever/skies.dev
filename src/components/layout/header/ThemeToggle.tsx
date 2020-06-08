import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle({
  lightTheme,
  setLightTheme,
}: {
  lightTheme: boolean
  setLightTheme: Function
}) {
  return (
    <div>
      <span
        className={`
          fixed
          left-0
          top-0
          z-50
          mt-3
          text-2xl
          text-primarySoft
          lg:text-onPrimaryBgLink
          px-1
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
          left-0
          top-0
          z-50
          mt-2
          ml-8
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
        className={`
          fixed
          left-0
          top-0
          z-50
          mt-3
          ml-24
          text-xl
          text-primarySoft
          lg:text-onPrimaryBgLink
          lg:ml-1
          ml-1
          px-1
          pt-px
        `}
      >
        <FaMoon />
      </span>
    </div>
  );
}
