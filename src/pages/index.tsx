import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"

const IndexPage = () => {
  const styles = {
    header: `
      h-24
      bg-primary-100
    `,

    blurb: `
      text-3xl
    `,
  }

  return (
    <Layout>
      <h1 className={styles.header}>Hi 👋 I'm Sean.</h1>
      <p className={styles.blurb}>
        I'm a software engineer from Seattle, WA. 👨‍💻
      </p>
      <p className={styles.blurb}>
        I recently graduated from
        {` `}
        <a href="https://cs.uw.edu">University of Washington</a> with a B.S. in
        Computer Engineering. 👨‍🎓
      </p>
    </Layout>
  )
}

export default IndexPage
