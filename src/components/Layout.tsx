/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect, ReactNode } from 'react';
import globalStyles from '@styles/index';
import AlertProvider from '@lib/alerts/AlertProvider';
import tw from '@utils/tailwind';
import Header from './Header';
import Footer from './Footer';

export const LayoutContext = React.createContext({});
const themes = ['theme-blue', 'theme-green', 'theme-red'];

function isSystemPrefLightMode() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return true;
    }
  }
  return false;
}

const Layout = ({ children }: { children: ReactNode }) => {
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<number>(0);

  useEffect(() => {
    setLightTheme(isSystemPrefLightMode());
  }, []);

  const themeClass = lightTheme ? 'theme-light' : 'theme-dark';
  const extraClasses = `${globalStyles.transitions} bg-neutralBg text-onNeutral`;

  return (
    <>
      <LayoutContext.Provider
        value={{
          lightTheme,
          setLightTheme,
          changeTheme: () => setTheme(() => (theme + 1) % themes.length),
        }}
      >
        <AlertProvider>
          <div
            className={tw(
              themeClass,
              extraClasses,
              'min-h-screen',
              'h-full',
              'flex flex-col',
              themes[theme],
            )}
          >
            <Header />
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

            <Footer />
          </div>
        </AlertProvider>
      </LayoutContext.Provider>
    </>
  );
};

export default Layout;
