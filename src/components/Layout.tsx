/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/style.css"
import Header from "./Header"
import Footer from "./Footer"

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
      mb-0
      min-h-screen
      lg:mt-8
    `,
  }

  return (
    <div className="theme-dark bg-bgColor text-textColor">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
