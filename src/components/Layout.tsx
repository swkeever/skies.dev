/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect, ReactNode } from 'react';
import globalStyles from '@styles/index';
import Header from './Header';
import Footer from './Footer';
import AlertProvider from '../lib/alerts/AlertProvider';

export const LayoutContext = React.createContext({});

function isSystemPrefLightMode() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return true;
    }
  }
  return false;
}

const Layout = ({ children }: { children: ReactNode }) => {
  const [lightTheme, setLightTheme] = useState(true);

  useEffect(() => {
    setLightTheme(isSystemPrefLightMode());
  }, []);

  const themeClass = lightTheme ? 'theme-light' : 'theme-dark';
  const extraClasses = `${globalStyles.transitions} bg-neutralBg text-onNeutral`;

  return (
    <>
      <LayoutContext.Provider value={{ lightTheme, setLightTheme }}>
        <div
          className={`
              ${themeClass}
              ${extraClasses}
              min-h-screen
              flex
              flex-col
              justify-between
            `}
        >
          <Header />
          <AlertProvider>
            <main
              className={`
            mb-0
            lg:mt-8
            flex-grow
            h-auto
            w-full
            flex
            flex-col
          `}
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
