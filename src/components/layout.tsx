/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect, ReactNode } from 'react';
import globalStyles from '@styles/index';
import AlertProvider from '@lib/alerts/alert-provider';
import tw from '@utils/tailwind';
import { ImFire, ImLeaf, ImDroplet } from 'react-icons/im';
import Header from './header';
import Footer from './footer';

export const LayoutContext = React.createContext({});
export const themes = [
  {
    name: 'blue',
    className: 'theme-blue',
    color: {
      active: {
        bg: 'bg-blue-400',
        text: 'text-white',
        border: 'border-white',
      },
      inactive: {
        bg: 'bg-gray-800',
        text: 'text-blue-600',
        border: 'border-blue-600',
      },
    },
    icon: (props) => <ImDroplet {...props} />,
  },

  {
    name: 'red',
    className: 'theme-red',
    color: {
      active: {
        bg: 'bg-red-400',
        text: 'text-white',
        border: 'border-white',
      },
      inactive: {
        bg: 'bg-gray-800',
        text: 'text-red-600',
        border: 'border-red-600',
      },
    },
    icon: (props) => <ImFire {...props} />,
  },
  {
    name: 'green',
    className: 'theme-green',
    color: {
      active: {
        bg: 'bg-green-400',
        text: 'text-white',
        border: 'border-white',
      },
      inactive: {
        bg: 'bg-gray-800',
        text: 'text-green-600',
        border: 'border-green-600',
      },
    },
    icon: (props) => <ImLeaf {...props} />,
  },
];

export const ldKey = 'prefers-ld';
export const rgbKey = 'prefers-rgb';

function getInitialLDTheme(): boolean {
  const ld = window.localStorage.getItem(ldKey);
  if (ld !== 'undefined') {
    return JSON.parse(ld);
  }
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return true;
    }
  }

  return false;
}
function getInitialRGBTheme(): number {
  const rgb = window.localStorage.getItem(rgbKey);
  if (rgb) {
    return JSON.parse(rgb);
  }

  return 0;
}

const Layout = ({ children }: { children: ReactNode }) => {
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<number>(0);

  useEffect(() => {
    setTheme(getInitialRGBTheme());
    setLightTheme(getInitialLDTheme());
  }, []);

  const themeClass = lightTheme ? 'theme-light' : 'theme-dark';
  const extraClasses = `${globalStyles.transitions} bg-neutralBg text-onNeutral`;

  return (
    <>
      <LayoutContext.Provider
        value={{
          lightTheme,
          setLightTheme,
          setTheme,
          theme,
        }}
      >
        <div
          className={tw(
            themeClass,
            extraClasses,
            'min-h-screen',
            'h-full',
            'flex flex-col',
            themes[theme].className,
          )}
        >
          <Header />
          <AlertProvider>
            <main
              // style={{ flex: '1 1 auto' }}
              className={tw(
                'mb-0 lg:mt-8',
                'flex-grow',
                'flex flex-col', // for children
                'w-full h-full',
              )}
            >
              {children}
            </main>
          </AlertProvider>

          <Footer />
        </div>
      </LayoutContext.Provider>
    </>
  );
};

export default Layout;
