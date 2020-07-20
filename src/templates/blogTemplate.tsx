/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from '@reach/router';
import { FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa';
import links from '../utils/links';

import SEO from '../components/SEO';
import ExternalLink from '../components/ExternalLink';
import { globalStyles } from '../styles';
import TableOfContents from '../components/TableOfContents';
import ShareCallToAction from '../components/article/ShareCallToAction';
import BlogMeta from '../components/BlogMeta';

const styles = {
  copy: `
  text-base
  md:text-lg
  lg:text-xl
  text-onNeutralBgSoft
  leading-8
  `,

  link: `
  border-b 
  pb-1 
  border-onNeutralBgLink 
  hover:border-onNeutralBgLinkHover 
  text-onNeutralBgLink 
  hover:text-onNeutralBgLinkHover
  `,

  mt: 'mt-5 first:mt-0',
  mt2: 'mt-10 first:mt-2',

  list: `
  flex flex-col
  space-y-2
  ml-5
  mb-5
  `,

  card: `
  border-l-4
  p-5
  rounded-sm
  `,

  header: `
  text-onNeutralBg
  `,

  ctaLinks: `
  text-lg 
  border-b border-onNeutralBgSoft 
  hover:border-onNeutralBgLinkHover 
  text-onNeutralBgSoft hover:text-onNeutralBgLinkHover 
  pb-1
  `,

  ctaLinkIcons: `
  inline
  mb-1
  `,
};

const shortcodes = {
  p: (props) => (
    <p
      {...props}
      className={`
        ${styles.copy} 
        ${styles.mt}
    `}
    />
  ),
  a: (props) => {
    let className = '';

    if (props.href.startsWith('#')) {
      className += 'anchor';
    }

    return (
      <a
        {...props}
        className={`
        ${className}
        ${styles.copy} 
        ${styles.link}
      `}
      />
    );
  },
  ExternalLink: (props) => (
    <ExternalLink
      {...props}
      rel="nofollow noopener noreferrer"
      target="_blank"
      className={`${styles.copy} ${styles.link}`}
    />
  ),
  ul: (props) => (
    <ul {...props} className={`${styles.copy}${styles.list} list-disc`} />
  ),
  ol: (props) => (
    <ul {...props} className={`${styles.copy} ${styles.list} list-decimal`} />
  ),
  li: (props) => (
    <li
      {...props}
      className={`
     ${styles.mt} first:mt-2
    `}
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className={`${styles.header} text-2xl md:text-3xl font-bold ${styles.mt2}`}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className={`${styles.header} text-xl md:text-2xl font-semibold ${styles.mt2}`}
    />
  ),
  table: (props) => (
    <table
      {...props}
      className={`${styles.copy} ${styles.mt} w-full bg-primaryBgSoft`}
    />
  ),
  th: (props) => (
    <th {...props} className="px-2 pt-3 text-left bg-primary text-onPrimary" />
  ),
  td: (props) => <td {...props} className="px-2 pt-1 text-onPrimaryBg" />,
  tr: (props) => <tr {...props} className="even:bg-primaryBg" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className={`
        ${styles.copy}
        ${styles.mt}
        ${styles.card}
        border-primaryBgSoft
        bg-primaryBg
        text-onPrimaryBgSoft
     `}
    />
  ),
  aside: (props) => (
    <aside
      {...props}
      className={`
        ${styles.copy} 
        ${styles.mt}
        ${styles.card}
        bg-neutralBgSoft 
        text-onNeutralBgSoft
        `}
    >
      {props.children}
    </aside>
  ),
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      headings {
        depth
        value
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        keywords
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
              presentationWidth
              presentationHeight
            }
          }
        }
        title
      }
      fields {
        slug
      }
      fileAbsolutePath
    }
  }
`;

export default function Blog({ data: { mdx }, pageContext }) {
  const { frontmatter, body, fileAbsolutePath } = mdx;
  const editUrl = links.editOnGithub(
    `${fileAbsolutePath.split('/content/')[1]}`,
  );
  return (
    <>
      <SEO
        frontmatter={frontmatter}
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords.concat(frontmatter.tags)}
        image={frontmatter.image.childImageSharp.fluid}
        imageDims={{
          width: frontmatter.image.childImageSharp.fluid.presentationWidth,
          height: frontmatter.image.childImageSharp.fluid.presentationHeight,
        }}
      />
      <article
        className={`${globalStyles.transitions.colors}

      `}
      >
        <div
          className={`
        bg-primary
        relative
        z-10
        diagonal-t
        pt-8
        pb-64
      `}
          itemScope
          itemType="http://schema.org/BlogPosting"
        />

        <div
          className={`
          max-w-screen-lg
          mx-auto
          grid grid-cols-12 gap-8
          relative
        `}
        >
          <aside className="hidden mx-auto md:block">
            <ShareCallToAction
              className={`
              fixed `}
              linkClassName={`
              ${globalStyles.transitions.colors}
              text-neutralSoft
              hover:text-neutral
            `}
            />
          </aside>
          <div className="col-span-12 px-2 md:col-span-8">
            <header className="relative z-30 -mt-48 md:-mt-64">
              <h1
                className={`
                  leading-none
                  text-4xl
                  text-onPrimary
                  md:text-5xl
                  font-bold
                `}
                itemProp="name"
              >
                {frontmatter.title}
              </h1>
              <div className="flex flex-col mt-4 md:items-center md:flex-row md:justify-between">
                <BlogMeta
                  date={frontmatter.date}
                  timeToRead={mdx.timeToRead}
                  className="text-sm font-medium text-onPrimarySoft md:text-base"
                />
              </div>
            </header>
            <Img
              className="relative z-10 w-full h-auto mx-auto mt-5"
              fluid={frontmatter.image.childImageSharp.fluid}
              alt={frontmatter.title}
            />

            <div className="mt-4 md:hidden">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-neutralSoft">
                Table of Contents
              </h2>
              <TableOfContents headings={mdx.headings} />
            </div>

            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>

            <section
              className={`
              max-w-screen-lg
              flex flex-col md:flex-row
              justify-start md:justify-between
              
              md:items-center
              mt-32
              mb-8
              `}
            >
              <div>
                <ul className="flex space-x-4">
                  <li>
                    <ExternalLink
                      href={editUrl}
                      className={`
              ${styles.ctaLinks}
              `}
                    >
                      <FaGithub className={`${styles.ctaLinkIcons} mr-1`} />
                      Edit this page on GitHub
                    </ExternalLink>
                  </li>
                </ul>
              </div>

              <nav className="mt-4 md:mt-0">
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      to={pageContext.prev.fields.slug}
                      className={`
              ${styles.ctaLinks}
              `}
                    >
                      <FaArrowLeft className={`${styles.ctaLinkIcons} mr-1`} />
                      Previous
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={pageContext.next.fields.slug}
                      className={`
              ${styles.ctaLinks}
              `}
                    >
                      Next
                      <FaArrowRight className={`${styles.ctaLinkIcons} ml-1`} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
          <aside className="relative hidden col-span-3 md:block">
            <div className="sticky top-16">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-neutralSoft">
                Table of Contents
              </h2>
              <TableOfContents headings={mdx.headings} />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
