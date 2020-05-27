/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/style.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
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
      min-h-screen
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

  return (
    <div className={`${themeClass} bg-bgColor text-textColor`}>
      <Header
        lightTheme={lightTheme}
        setLightTheme={saveLightTheme}
        siteTitle={data.site.siteMetadata.title}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
