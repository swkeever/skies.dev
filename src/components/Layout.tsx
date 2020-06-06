/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, ReactChildren, ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/style.css"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"

type LayoutPropTypes = {
  children: ReactNode
  className?: string
  location: string
}

const Layout = ({ children, location, className = "" }: LayoutPropTypes) => {
  const [lightTheme, setLightTheme] = useState(getLightTheme())

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const styles = {
    main: `
      mb-0
      lg:mt-8
    `,
  }

  function saveLightTheme(theme: boolean) {
    localStorage.setItem("theme", theme ? "light" : "dark")
    setLightTheme(theme)
  }

  function getLightTheme(): boolean {
    const theme = localStorage.getItem("theme")
    if (!theme) {
      return true
    }
    return theme === "light"
  }

  const themeClass = lightTheme ? "theme-light" : "theme-dark"

  const extraClasses = className || `bg-neutralBg text-onNeutral`

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
        <Header
          location={location}
          lightTheme={lightTheme}
          setLightTheme={saveLightTheme}
          siteTitle={data.site.siteMetadata.title}
        />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
