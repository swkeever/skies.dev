/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, ReactNode } from 'react';
import '../../styles/style.css';
import Header from './header';
import Footer from './Footer';
import SEO from '../SEO';

function getLightTheme(): boolean {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    return true;
  }
  return theme === 'light';
}

const Layout = ({
  children,
  className = '',
  title = '',
  description = '',
}: {
  children: ReactNode
  className?: string
  title?: string
  description?: string
}) => {
  const [lightTheme, setLightTheme] = useState(getLightTheme());

  function saveLightTheme(theme: boolean) {
    localStorage.setItem('theme', theme ? 'light' : 'dark');
    setLightTheme(theme);
  }

  const themeClass = lightTheme ? 'theme-light' : 'theme-dark';
  const extraClasses = className || 'bg-neutralBg text-onNeutral';

  return (
    <>
      <div
        className={`${themeClass}
        ${extraClasses}
        flex
        min-h-screen
        flex-col
        `}
      >
        <SEO title={title} description={description} />
        <Header lightTheme={lightTheme} setLightTheme={saveLightTheme} />
        <main
          className={`
            mb-0
            lg:mt-8
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
