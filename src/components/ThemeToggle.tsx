import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { LayoutContext } from './Layout';
import { globalStyles } from '../styles';

export default function ThemeToggle() {
  const { lightTheme, setLightTheme } = useContext(LayoutContext);
  const styles = {
    icon: `
    h-4 w-4
    text-onPrimarySoft
    fill-current
    
    `,
  };
  return (
    // <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
    <button
      type="button"
      className={`
      bg-neutralBgSoft
      fixed top-2 right-2 inline-flex items-center flex-shrink-0 h-8 w-16 border
      border-primaryBgSoft shadow-xl lg:shadow-none rounded-full z-50 cursor-pointer
       
      ${globalStyles.transitions} 
      ${globalStyles.outline}
      `}
      onClick={() => setLightTheme(!lightTheme)}
    >
      <span className="sr-only">Change theme</span>
      <span
        aria-hidden="true"
        className={`
      ${lightTheme ? 'translate-x-0' : 'translate-x-8'}
      relative 
      inline-block 
      h-6 w-6 
      rounded-full 
      bg-primaryBold
      shadow transform
      ml-1
      ${globalStyles.transitions}`}
      >
        <span
          className={`
        
        ${
          lightTheme
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-100 ease-in duration-200'
        }
        
        absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
        >
          {lightTheme ? (
            <FaMoon className={styles.icon} />
          ) : (
            <FaSun className={styles.icon} />
          )}
        </span>
      </span>
    </button>
  );
}
