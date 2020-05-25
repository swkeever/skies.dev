import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import routes from "../utils/routes"
import Container from "../components/Container"

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
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
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
    `,

    header: `
    text-4xl
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
    hover:no-underline
    hover:text-primary-400
    `,
  }

  return (
    <Layout>
      <Container className={styles.container}>
        <h1 className={styles.header}>Here's where I write about things.</h1>
        <ul className={styles.ul}>
          {data.allMarkdownRemark.edges.reverse().map(e => {
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
