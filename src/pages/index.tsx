import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Container from "../components/Container"
import Code from "../../assets/code.svg"
import Building from "../../assets/building.svg"
import Product from "../../assets/product.svg"
import routes from "../utils/routes"
import Button from "../components/home/Button"
import Section from "../components/home/Section"
import Content from "../components/home/Content"
import DiagonalBg from "../components/home/DiagonalBg"
import PrimaryBg from "../components/home/PrimaryBg"

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
    lg:w-6/12
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
  }

  return (
    <Layout>
      <Section>
        <Content>
          <h1 className={`text-onNeutralBg`}>
            Hi,{" "}
            <span role="img" aria-label="Waving hand">
              👋
            </span>{" "}
            I'm Sean.
          </h1>
          <p
            className={`
            text-onNeutralBgSoft
            `}
          >
            I'm a software developer, designer, and technology enthusiast from
            Seattle, WA.
          </p>
        </Content>
        <Code className={`${styles.svg} ${styles.item}`} />
      </Section>

      <DiagonalBg>
        <Section className={`md:flex-row-reverse`}>
          <Content>
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
          </Content>
          <Building className={`${styles.svg} ${styles.item}`} />
        </Section>
      </DiagonalBg>

      <PrimaryBg>
        <Section>
          <Content>
            <div className="relative">
              <h2>Let&apos;s build your product.</h2>
              <p
                className={`
              text-onPrimarySoft
              
              `}
              >
                My full stack web development experience can help you get your
                project off the ground.
              </p>
              <Button />
            </div>
          </Content>
          <Product className={`${styles.svg} ${styles.item}`} />
        </Section>
      </PrimaryBg>
    </Layout>
  )
}

export default IndexPage
