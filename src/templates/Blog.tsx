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
    max-w-xl
    lg:py-8
    leading-relaxed
    text-onNeutralBg
    `,

    date: `
    uppercase
    tracking-widest
    text-onPrimaryBgSoft
    text-lg
    text-left
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
    text-onPrimaryBg
    diagonal-b
    mt-8
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
          <h1
            className={`
          md:w-3/4 
          lg:w-2/3 
          leading-none
          text-onPrimaryBg
          `}
          >
            {frontmatter.title}
          </h1>
          <p className={styles.date}>
            <span className={styles.span}>Published</span>
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
          <h2
            className={`
          text-onPrimaryBg
          leading-none
          text-2xl
          lg:text-3xl
          `}
          >
            Can this document be improved?
          </h2>
          <p className={`text-onPrimaryBgSoft`}>
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
