/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  hidden = false,
  className = '',
}: {
  children: ReactNode;
  hidden?: boolean;
  className?: string;
}) => {
  const [lightTheme, setLightTheme] = useState(true);

  function saveLightTheme(theme: boolean) {
    localStorage.setItem('theme', theme ? 'light' : 'dark');
    setLightTheme(theme);
  }

  useEffect(() => {
    const userTheme = localStorage.getItem('theme');
    if (userTheme) {
      setLightTheme(userTheme === 'light');
    } else if (
      window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setLightTheme(false);
    } else {
      setLightTheme(true);
    }
  });

  const themeClass = lightTheme ? 'theme-light' : 'theme-dark';
  const extraClasses = className || 'bg-neutralBg text-onNeutral';

  return (
    <>
      <div
        className={`${themeClass}
        ${extraClasses}
        min-h-screen
        flex
        flex-col
        justify-between
        `}
      >
        {!hidden && (
          <Header lightTheme={lightTheme} setLightTheme={saveLightTheme} />
        )}
        <main
          className={`
            mb-0
            lg:mt-8
            flex-grow
            h-auto
            w-full
            flex
            flex-col
            justify-between
          `}
        >
          {children}
        </main>
        {!hidden && <Footer />}
      </div>
    </>
  );
};

export default Layout;
