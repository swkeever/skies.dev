/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/style.css';
import Header from './header';
import Footer from './Footer';

type LayoutPropTypes = {
  children: ReactNode
  className?: string
  location: string
}

function getLightTheme(): boolean {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    return true;
  }
  return theme === 'light';
}

const Layout = ({ children, className = '' }: LayoutPropTypes) => {
  const [lightTheme, setLightTheme] = useState(getLightTheme());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const styles = {
    main: `
      mb-0
      lg:mt-8
    `,
  };

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
        <Header lightTheme={lightTheme} setLightTheme={saveLightTheme} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
