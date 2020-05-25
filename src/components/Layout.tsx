/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import '../styles/style.css';
import Header from "./Header"
import Footer from "./Footer";

const Layout = ({ children }) => {
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
      w-11/12
      mb-16
      md:w-9/12
      min-h-screen
      lg:w-5/12
      lg:mt-16
      m-auto
    `
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
