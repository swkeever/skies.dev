import React, { useState, useCallback, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import Bulb from "../../assets/bulb.svg"
import Empty from "../../assets/empty.svg"
import { FaSistrix, FaArrowRight } from "react-icons/fa"
import Button from "../components/Button"

type BlogList = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string
          slug: string
          date: string
          tags: string
        }
        timeToRead: number
        id: string
        excerpt: string
        rawMarkdownBody: string
      }
    }[]
  }
}

export default function BlogsPage() {
  const [filter, setFilter] = useState("")

  const data: BlogList = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              tags
            }
            id
            timeToRead
            rawMarkdownBody
            excerpt
          }
        }
      }
    }
  `)

  // parse the tags from the markdown files
  // and only show tags that exist in the markdown files
  const validTags = []
  data.allMarkdownRemark.edges.forEach(e => {
    const blogTags = e.node.frontmatter.tags.split(",").map(t => t.trim())
    blogTags.forEach(t => {
      if (!validTags.includes(t)) {
        validTags.push(t)
      }
    })
  })

  const [tags, setTags] = useState(
    validTags.map(t => ({ name: t, selected: false }))
  )

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
    w-11/12
    leading-tight
    md:text-4xl
    md:w-8/12
    md:w-9/12
    lg:w-7/12
    `,

    description: `
    w-7/12
    -mb-4
    lg:w-6/12
    lg:text-lg
    `,

    ul: `
    list-none
    ml-0
    md:text-lg
    `,

    li: `
    mb-8
    `,

    svg: `
    w-40 
    absolute 
    right-0 
    top-0
    mr-4
    h-auto
    -mt-40
    md:-mt-40 
    md:w-48
    lg:w-64 
    lg:-mt-64 
    `,

    diagonal: `
    diagonal-t 
    bg-primaryBg
    pt-px 
    pb-20
    md:pb-16 
    lg:pb-20 
    `,

    input: `
    -mt-8
    bg-neutralBg
    w-9/12
    rounded-md
    border
    border-placeholder
    text-onPrimaryText
    pl-10 
    pr-2
    relative
    py-4
    md:text-lg
    placeholder-placeholder
    md:w-8/12
    lg:w-7/12
    outline-none
    shadow-inner
    focus:shadow-focus
    `,

    searchIcon: `
    inline
    text-2xl 
    absolute
    text-placeholder
    ml-3
    z-50
    `,

    tags: `
    list-none 
    ml-0
    `,

    tag: `
    inline-block 
    bg-neutral
    rounded-full 
    px-4 
    mr-2
    mb-2 
    transition
    duration-75
    cursor-pointer 
    shadow
    `,

    tagActive: `
    transition
    duration-75 
    inline-block
    bg-primary
    shadow-inner
    text-onPrimaryBold
    rounded-full
    px-4 
    mr-2 
    mb-2
    cursor-pointer 
    `,

    emptySvg: `
    w-11/12 
    h-auto 
    `,

    emptyContainer: `
    w-10/12 
    mx-auto
    mt-12
    md:-mt-1
    lg:-mt-8
    lg:mb-8
    `,

    emptyHeader: `
    text-lg
    w-64 
    mx-auto
    font-normal
    text-onPrimaryText
    mb-4
    lg:text-xl
    `,
  }

  const blogs = data.allMarkdownRemark.edges
    .filter(e => {
      if (filter) {
        return e.node.rawMarkdownBody.includes(filter)
      }

      const nodeTags = e.node.frontmatter.tags.split(", ")

      return tags
        .filter(t => t.selected)
        .map(t => t.name)
        .every(t => nodeTags.includes(t))
    })
    .map(e => {
      const { title, slug, date, tags } = e.node.frontmatter
      const { excerpt } = e.node
      const blogTags = tags.split(", ")
      const dateFormat = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(date))

      return (
        <li
          key={slug}
          className={`${styles.li}
          pb-8
          pt-10
        `}
        >
          <h2
            className={`
                text-xl
                leading-tight
              `}
          >
            <Link
              to={slug}
              className={`
              text-onNeutralText
              hover:text-onNeutralText
            `}
            >
              {title}
            </Link>
          </h2>
          <time
            className={`
              text-neutral
              mt-2
              inline-block
              uppercase
              tracking-widest
              text-sm
          `}
          >
            {dateFormat}
          </time>
          <ul className={styles.tags}>
            {blogTags.map(t => {
              return (
                <li
                  className={`
                      inline-block 
                      bg-primaryBg
                      text-onPrimarySoftText
                      rounded-full 
                      text-base
                      px-2 
                      mr-2
                      mb-2 
                      shadow-xs
                `}
                >
                  {t}
                </li>
              )
            })}
          </ul>
          <p
            className={`
          text-neutral
          mb-4
          lg:leading-relaxed
          `}
          >
            {excerpt}
          </p>
          <Link
            to={slug}
            className={`
          text-onNeturalLink
          pb-1
          border-b
          hover:text-onNeutralLinkHover
          `}
          >
            Read more
            <span
              className={`
          inline-block
          align-text-bottom
          ml-1
          text-onNeutralLink
          `}
            >
              <FaArrowRight />
            </span>
          </Link>
        </li>
      )
    })

  return (
    <Layout
      className={`
    min-h-screen 
    bg-neutralBg
    text-onNeutralText
    `}
    >
      <div className={styles.diagonal}>
        <Container className={`${styles.container} ${styles.headerContainer}`}>
          <h1 className={styles.header}>
            Blogs about life as a software engineer.
          </h1>
          <p className={styles.description}>
            I write about lessons learned in the field, and anything else I feel
            is important.
          </p>
        </Container>
      </div>
      <Container className={styles.container}>
        <Bulb className={styles.svg} />
      </Container>
      <Container className={styles.container}>
        <label for="filter" className="hidden">
          Search
        </label>
        <div>
          <FaSistrix className={styles.searchIcon} />
          <input
            autoFocus
            value={filter}
            onChange={e => {
              setFilter(e.target.value)
            }}
            className={styles.input}
            placeholder="What can I help you find?"
            name="filter"
            type="text"
          ></input>
        </div>

        <label className="block font-bold mt-4 -mb-2" for="tags">
          I'm interested in
        </label>
        <ul id="tags" className={styles.tags}>
          {tags.map((t, idx) => {
            return (
              <li
                key={t.name}
                onClick={() => {
                  const newTags = tags.slice()
                  newTags[idx] = {
                    name: t.name,
                    selected: !t.selected,
                  }
                  setTags(newTags)
                }}
                className={t.selected ? styles.tagActive : styles.tag}
              >
                {t.name}
              </li>
            )
          })}
        </ul>
      </Container>

      <Container className={styles.container}>
        {blogs.length ? (
          <ul
            className={`${styles.ul}
          divide-y
          divide-onNeutralDivider
          lg:w-full
          lg:mx-auto
          lg:mb-16
          `}
          >
            {blogs}
          </ul>
        ) : (
          <div className={styles.emptyContainer}>
            <h2 className={styles.emptyHeader}>
              Hmm. I don't have anything that matches your search.
            </h2>
            <Empty className={styles.emptySvg} />
          </div>
        )}
      </Container>
    </Layout>
  )
}
