import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const styles = {
    article: `
    container
    mx-auto
    px-4
    md:px-32
    lg:px-64
    lg:py-8
    xl:leading-loose
    `,
  }

  return (
    <Layout>
      <article className={styles.article}>
        <h1>{frontmatter.title}</h1>
        <time
          className={`
          uppercase
          tracking-widest
          text-neutral-600
        `}
          dateTime={frontmatter.date}
        >
          {frontmatter.date}
        </time>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
