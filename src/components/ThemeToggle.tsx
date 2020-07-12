import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { LayoutContext } from './Layout';
// you make your checkings, and call lightmode() or darkmode()

// function applyBackgroundTheme(color) {
//     var css = "body { background: " + color + "; }",
//     head = document.head || document.getElementsByTagName('head')[0],
//     style = document.createElement('style');
//     head.appendChild(style);

//       style.type = 'text/css';
//       if (style.styleSheet){
//         style.styleSheet.cssText = css;
//       } else {
//         style.appendChild(document.createTextNode(css));
//       }
//     }

// function lightmode() {
//   applyBackgroundTheme("white") // color for light mode
// }
// function darkmode() {
//   applyBackgroundTheme("black") // color for light mode
// }

export default function ThemeToggle() {
  const { lightTheme, setLightTheme } = useContext(LayoutContext);
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
