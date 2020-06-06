import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FaArrowRight } from 'react-icons/fa';
import Layout from '../components/Layout';
import Empty from '../../assets/empty.svg';
import Header from '../components/blogs/Header';
import BlogsContainer from '../components/blogs/BlogsContainer';
import Filters from '../components/blogs/Filters';

type BlogList = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string
          slug: string
          date: string
          tags: string[]
          image?: string
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
  const [filterString, setFilterString] = useState('');

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
  `);

  // parse the tags from the markdown files
  // and only show tags that exist in the markdown files
  const validTags = [];
  data.allMarkdownRemark.edges.forEach((e) => {
    e.node.frontmatter.tags.forEach((t) => {
      if (!validTags.includes(t)) {
        validTags.push(t);
      }
    });
  });

  const [filterTags, setFilterTags] = useState(
    validTags.map((t) => ({ name: t, selected: false })),
  );

  const styles = {
    ul: `
    list-none
    ml-0
    md:text-lg
    `,

    li: `
    mb-8
    `,

    tags: `
    list-none 
    ml-0
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
    text-onPrimary
    mb-4
    lg:text-xl
    `,
  };

  const blogs = data.allMarkdownRemark.edges
    .filter((e) => {
      if (filterString) {
        return e.node.rawMarkdownBody.includes(filterString);
      }

      return filterTags
        .filter((t) => t.selected)
        .map((t) => t.name)
        .every((t) => e.node.frontmatter.tags.includes(t));
    })
    .map((e) => {
      const {
        title, slug, date, tags,
      } = e.node.frontmatter;
      const { excerpt } = e.node;
      const dateFormat = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(date));

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
              text-onNeutralBg
              hover:text-onNeutralBg
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
              text-neutral
              text-sm
          `}
          >
            {dateFormat}
          </time>
          <ul className={styles.tags}>
            {tags.map((t) => (
              <li
                className={`
                      inline-block 
                      bg-primaryBg
                      text-onPrimaryBgSoft
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
            ))}
          </ul>
          <p
            className={`
          text-onNeutralBgSoft
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
          hover:text-onNeutralBgLinkHover
          `}
          >
            Read more
            <span
              className={`
          inline-block
          align-text-bottom
          ml-1
          text-onNeutralBgLink
          `}
            >
              <FaArrowRight />
            </span>
          </Link>
        </li>
      );
    });

  return (
    <Layout
      className={`
        min-h-screen 
        bg-neutralBg
        text-onNeutral
    `}
    >
      <Header />
      <Filters
        filter={filterString}
        setFilter={setFilterString}
        tags={filterTags}
        setTags={setFilterTags}
      />

      <BlogsContainer>
        {blogs.length ? (
          <ul
            className={`${styles.ul}
          divide-y
          divide-onNeutralSoft
          lg:w-full
          mb-24
          md:mb-48
          lg:mx-auto
          lg:mb-32
          `}
          >
            {blogs}
          </ul>
        ) : (
          <div className={styles.emptyContainer}>
            <h2 className={styles.emptyHeader}>
              Hmm. I don&apos;t have anything that matches your search.
            </h2>
            <Empty className={styles.emptySvg} />
          </div>
        )}
      </BlogsContainer>
    </Layout>
  );
}
