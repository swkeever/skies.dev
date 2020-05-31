import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"
import Code from "../../assets/code.svg"
import Building from "../../assets/building.svg"
import Product from "../../assets/product.svg"
import routes from "../utils/routes"
import Button from "../components/Button"

const IndexPage = () => {
  const styles = {
    container: `
    `,

    section: `
    flex
    justify-center
    flex-col
    text-lg
    px-4
    items-center
    md:text-base
    md:mb-32
    lg:text-lg
    `,

    content: `
    md:w-5/12
    lg:w-5/12
    `,

    svg: `
    w-11/12
    h-64
    mb-8
    md:mb-0
    md:w-7/12
    lg:h-auto
    lg:w-8/12
    `,

    item: `
      mx-8
    `,

    diagonal: `
    bg-primaryBg
    diagonal-m 
    pt-16
    pb-8
    md:pt-32
    md:pb-4
    md:-mt-16
    md:mb-16
    lg:pt-64
    `,
  }

  return (
    <Layout>
      <Container className={`${styles.container}`}>
        <section className={`${styles.section}  md:flex-row pt-2 lg:pt-32`}>
          <div className={`${styles.content} ${styles.item}`}>
            <h1>Hi, 👋 I'm Sean.</h1>
            <p>
              I'm a software developer, designer, and technology enthusiast from
              Seattle, WA.
            </p>
          </div>
          <Code className={`${styles.svg} ${styles.item}`} />
        </section>
      </Container>

      <div className={styles.diagonal}>
        <Container className={`${styles.container}`}>
          <section className={`${styles.section} md:flex-row-reverse`}>
            <div className={`${styles.content} ${styles.item}`}>
              <div className="">
                <h2>I like to build things.</h2>
                <p>
                  From client facing applications to the platforms that serve
                  them, I love designing and implementing software.
                </p>
              </div>
            </div>
            <Building className={`${styles.svg} ${styles.item}`} />
          </section>
        </Container>
      </div>

      <Container className={`${styles.container}`}>
        <section className={`${styles.section} md:flex-row`}>
          <div className={`${styles.content} ${styles.item}`}>
            <div className="">
              <h2>Let's build your product.</h2>
              <p>
                My full stack web development experience can help you get your
                project off the ground.
              </p>
              <Button to={routes.contact}>Learn more</Button>
            </div>
          </div>
          <Product className={`${styles.svg} ${styles.item}`} />
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
