import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import routes from "../utils/routes"
import Container from "../components/Container"
import Alert from "../components/Alert"
import Bulb from "../../assets/bulb.svg"

type BlogList = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string
          slug: string
        }
      }
    }[]
  }
}

export default function BlogsPage() {
  const data: BlogList = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `)

  const styles = {
    container: `
    mt-8 
    px-4 
    md:w-2/3 
    lg:mt-16 
    lg:w-1/2
    relative
    `,

    header: `
    text-4xl
    w-64
    md:w-6/12
    `,

    ul: `
    list-none
    ml-0
    md:text-lg
    `,

    li: `
    mb-8
    `,

    a: `

    `,

    svg: `
    w-48 
    absolute 
    right-0 
    h-auto
    -mt-48
    md:w-64 
    md:-mt-56 
    lg:w-64 
    lg:-mt-64 
    `,

    diagonal: `
    diagonal-t 
    bg-primaryBgColor
    pt-px 
    pb-20
    lg:pb-24 
    `,
  }

  return (
    <Layout>
      <div className={styles.diagonal}>
        <Container className={styles.container}>
          <h1 className={styles.header}>Here's where I write about things.</h1>
        </Container>
      </div>
      <Container className={styles.container}>
        <Bulb className={styles.svg} />
      </Container>

      <Container className={styles.container}>
        <ul className={styles.ul}>
          {data.allMarkdownRemark.edges.map(e => {
            const { title, slug } = e.node.frontmatter

            return (
              <li className={styles.li}>
                <Link className={styles.a} to={`${slug}`}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}
