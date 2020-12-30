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
import Header from './header';
import Footer from './footer';

export const LayoutContext = React.createContext({});

export const ldKey = 'prefers-ld';

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

const Layout = ({
  children,
  type,
}: {
  children: ReactNode;
  type: 'primary' | 'neutral';
}) => {
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  useEffect(() => {
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
        }}
      >
        <div
          className={tw(
            themeClass,
            extraClasses,
            'min-h-screen',
            'h-full',
            'flex flex-col',
          )}
        >
          <Header type={type} />
          <AlertProvider>
            <main
              // style={{ flex: '1 1 auto' }}
              className={tw(
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
