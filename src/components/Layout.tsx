/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { globalStyles } from '../styles';

export const LayoutContext = React.createContext({});

const Layout = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  const [lightTheme, setLightTheme] = useState(true);

  useEffect(() => {
    setLightTheme(
      window.matchMedia
        && window.matchMedia('(prefers-color-scheme: light)').matches,
    );
  }, []);

  const themeClass = lightTheme ? 'theme-light' : 'theme-dark';
  const extraClasses = className
    || `${globalStyles.transitions.colors} bg-neutralBg text-onNeutral`;

  return (
    <LayoutContext.Provider value={{ lightTheme, setLightTheme }}>
      <div
        className={`${themeClass}
        ${extraClasses}
        min-h-screen
        flex
        flex-col
        justify-between
        `}
      >
        <Header />
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
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
