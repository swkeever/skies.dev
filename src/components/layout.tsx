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
import { AnalyticsLabel } from '@utils/analytics';
import Header from './header';
import Footer from './footer';

export const LayoutContext = React.createContext({});
export const themes = [
  {
    name: AnalyticsLabel.Blue,
    className: 'theme-blue',
    color: {
      active: {
        bg: 'bg-lightBlue-400',
        text: 'text-white',
        border: 'border-white',
      },
      inactive: {
        bg: 'bg-lightBlue-700',
        text: 'text-lightBlue-600',
        border: 'border-lightBlue-600',
      },
    },
  },

  {
    name: AnalyticsLabel.Cyan,
    className: 'theme-cyan',
    color: {
      active: {
        bg: 'bg-cyan-400',
        text: 'text-white',
        border: 'border-white',
      },
      inactive: {
        bg: 'bg-cyan-700',
        text: 'text-cyan-500',
        border: 'border-cyan-500',
      },
    },
  },

  {
    name: AnalyticsLabel.Teal,
    className: 'theme-teal',
    color: {
      active: {
        bg: 'bg-teal-400',
        text: 'text-white',
        border: 'border-white',
      },
      inactive: {
        bg: 'bg-teal-700',
        text: 'text-teal-600',
        border: 'border-teal-600',
      },
    },
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

const Layout = ({
  children,
  type = 'neutral',
}: {
  children: ReactNode;
  type: 'primary' | 'neutral';
}) => {
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
          <Header type={type} />
          <AlertProvider>
            <main
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
