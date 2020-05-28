import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import routes from "../utils/routes"
import Container from "../components/Container"
import Alert from "../components/Alert"
import Bulb from "../../assets/bulb.svg"
import Empty from "../../assets/empty.svg"
import { FaSistrix, FaCheck } from "react-icons/fa"

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

    headerContainer: `
    
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

    a: `
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
    bg-primaryBgColor
    pt-px 
    pb-20
    md:pb-16 
    lg:pb-20 
    `,

    input: `
    -mt-8
    bg-primaryBgColor
    w-9/12
    rounded-full
    text-primaryTextColor
    pl-10 
    pr-2
    relative
    py-4
    md:text-lg
    md:w-8/12
    lg:w-6/12
    outline-none
    shadow-sm
    focus:border-1
    focus:border-primaryColor
    focus:shadow-focus
    `,

    search: `
    inline
    text-2xl 
    absolute
    text-neutralColor
    ml-3
    z-50
    `,

    tags: `
    list-none 
    ml-0
    `,

    tag: `
    inline-block 
    bg-neutralColor 
    rounded-full 
    px-4 
    mr-2
    mb-2 
    transition
    duration-75
    cursor-pointer 
    `,

    tagActive: `
    transition
    duration-75 
    inline-block
    bg-primaryColor
    text-lightColor
    rounded-full
    px-4 
    mr-2 
    mb-2
    shadow-md 
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
    text-primaryTextColor
    mb-4
    lg:text-xl
    `,
  }

  const blogs = data.allMarkdownRemark.edges
    .filter(e => {
      if (filter) {
        return e.node.frontmatter.title.toLowerCase().includes(filter)
      }

      const nodeTags = e.node.frontmatter.tags.split(", ")
      if (
        tags
          .filter(t => t.selected)
          .map(t => t.name)
          .every(t => nodeTags.includes(t))
      ) {
        return true
      }

      return false
    })
    .map(e => {
      const { title, slug } = e.node.frontmatter

      return (
        <li className={styles.li}>
          <div className="card">
            <img src="../images/uw.jpg" />
            <Link className={styles.a} to={`${slug}`}>
              {title}
            </Link>
          </div>
        </li>
      )
    })

  return (
    <Layout>
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
          <FaSistrix className={styles.search} />
          <input
            value={filter}
            onChange={e => setFilter(e.target.value)}
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
          <ul className={styles.ul}>{blogs}</ul>
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
