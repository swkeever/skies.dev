import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import routes from "../utils/routes"

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
  console.log()

  return (
    <Layout>
      <h1>Here's where I write about things.</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(e => {
          const { title, slug } = e.node.frontmatter

          return (
            <li>
              <Link to={`${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
