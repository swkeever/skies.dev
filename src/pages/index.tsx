import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import Container from "../components/Container"

const IndexPage = () => {
  const styles = {
    section: `
    py-32
    `,

    blurb: `
      text-3xl
      lg:w-1/2
    `,
  }

  return (
    <Layout>
      <section className={`bg-primary-100 ${styles.section}`}>
        <Container className="flex">
          <h1>Hi 👋 I'm Sean.</h1>
        </Container>
      </section>
      <section className={`${styles.section}`}>
        <Container className="flex">
          <p className={`${styles.blurb}`}>
            I'm a software engineer from Seattle, WA. 👨‍💻
          </p>
        </Container>
      </section>
      <section className={`bg-secondary-100 ${styles.section}`}>
        <Container className="flex">
          <p className={` ${styles.blurb}`}>
            I recently graduated from
            {` `}
            <a href="https://cs.uw.edu">University of Washington</a> with a B.S.
            in Computer Engineering. 👨‍🎓
          </p>
        </Container>
      </section>
    </Layout>
  )
}

export default IndexPage
