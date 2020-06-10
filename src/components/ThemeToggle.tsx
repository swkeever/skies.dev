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
        className={`
          fixed
          right-0
          top-0
          z-50
          mt-3
          text-2xl
          text-primarySoft
          lg:text-onPrimaryBgLink
          mr-24
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
          right-0
          top-0
          z-50
          mt-2
          mr-8
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
          right-0
          top-0
          z-50
          mt-3
          text-xl
          text-primarySoft
          lg:text-onPrimaryBgLink
          lg:mr-1
          mr-1
          px-1
          pt-px
        `}
      >
        <FaMoon />
      </span>
    </div>
  );
}
