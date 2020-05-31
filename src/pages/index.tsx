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
      <Container
        className={`${styles.container}
      md:pt-16
      `}
      >
        <section className={`${styles.section}  md:flex-row pt-2 lg:pt-32`}>
          <div className={`${styles.content} ${styles.item}`}>
            <h1
              className={`
            text-onNeutralBg
            `}
            >
              Hi, 👋 I'm Sean.
            </h1>
            <p
              className={`
            text-onNeutralBgSoft
            `}
            >
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
                <h2
                  className={`
                text-onPrimaryBg
                `}
                >
                  I like to build things.
                </h2>
                <p
                  className={`
                text-onPrimaryBgSoft
                `}
                >
                  From client facing applications to the platforms that serve
                  them, I love designing and implementing software.
                </p>
              </div>
            </div>
            <Building className={`${styles.svg} ${styles.item}`} />
          </section>
        </Container>
      </div>

      <div
        className={`
      bg-primary
      text-light
      pt-16
      -mt-12
      z-0
      md:-mt-32
      md:pt-48
      md:pb-px
      `}
      >
        <Container>
          <section className={`${styles.section} md:flex-row`}>
            <div className={`${styles.content} ${styles.item}`}>
              <div className="">
                <h2>Let's build your product.</h2>
                <p
                  className={`
              text-onPrimarySoft
              
              `}
                >
                  My full stack web development experience can help you get your
                  project off the ground.
                </p>
                <Link
                  to={routes.contact}
                  className={`
                  bg-light
                  text-onLight
                  hover:text-onLight
                  rounded-full
                  px-4 
                  py-2 
                  inline-block
                  mt-4
                  inline-block
                  align-middle
                  shadow
                  active:shadow-none
                  hover:no-underline
                  hover:align-top
                  font-bold
                  mb-4
                  lg:px-6 
                  lg:text-lg
              `}
                >
                  Learn more
                </Link>
              </div>
            </div>
            <Product className={`${styles.svg} ${styles.item}`} />
          </section>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
