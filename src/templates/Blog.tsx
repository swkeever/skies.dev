import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import links from "../utils/links"

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
    lg:w-7/12
    lg:py-8
    xl:leading-loose
    `,

    date: `
    uppercase
    tracking-widest
    text-onPrimarySoft
    text-lg
    text-right
  `,

    span: `
    text-xs 
    mr-1
    block
    -mb-px
    lg:-mb-2
    `,

    diagonal: `
    bg-primaryBg
    text-onPrimary
    diagonal-b
    pt-12
    pb-10 
    z-0
    `,

    header: `
    bg-primaryBg
    diagonal-t
    py-4
    pb-12 
    -mb-4
    
    `,
  }

  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.article}>
          <h1 className="md:w-3/4 lg:w-2/3 leading-tight">
            {frontmatter.title}
          </h1>
          <p className={styles.date}>
            <span className={styles.span}>Last published</span>
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
          </p>
        </div>
      </div>
      <article
        className={styles.article}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className={styles.diagonal}>
        <section className={styles.article}>
          <h2>Can this document be improved?</h2>
          <p>
            Please consider opening an{" "}
            <a href={`${links.sourceRepo}/issues`}>issue</a> or{" "}
            <a href={`${links.sourceRepo}/pulls`}>pull request</a>. ❤️
          </p>
        </section>
      </div>
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
