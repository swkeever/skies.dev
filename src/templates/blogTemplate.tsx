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
import Layout from '../components/Layout';
import BlogHeader from '../components/article/BlogHeader';
import CallToAction from '../components/article/CallToAction';
import links from '../utils/links';
import BlogContainer from '../components/article/BlogContainer';
import Connection from '../../assets/connection.svg';
import SEO from '../components/SEO';
import ExternalLink from '../components/ExternalLink';
import { globalStyles } from '../styles';

const styles = {
  copy: `
  text-xl
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
  h2: (props) => <h2 {...props} className={`text-2xl font-bold ${styles.mt}`} />,
  h3: (props) => <h3 {...props} className={`text-xl font-bold ${styles.mt}`} />,
  table: (props) => (
    <table
      {...props}
      className={`${styles.copy} ${styles.mt} w-full bg-primaryBgSoft`}
    />
  ),
  th: (props) => (
    <th {...props} className="bg-primary text-onPrimary text-left px-2 pt-3" />
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        tags
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

// type Data = {
//   data: {
//     mdx:
//   }
// }

export default function Blog({ data: { mdx } }) {
  const { frontmatter, body, fileAbsolutePath } = mdx;

  const filepath = fileAbsolutePath.split('/src/')[1];

  return (
    <>
      <SEO
        frontmatter={frontmatter}
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.tags}
        image={frontmatter.image.childImageSharp.fluid}
        imageDims={{
          width: frontmatter.image.childImageSharp.fluid.presentationWidth,
          height: frontmatter.image.childImageSharp.fluid.presentationHeight,
        }}
      />
      <article className={`${globalStyles.transitions.colors}`}>
        <BlogHeader
          title={frontmatter.title}
          date={frontmatter.date}
          timeToRead={mdx.timeToRead}
        />

        <BlogContainer>
          <Img
            className="-mt-20 md:-mt-24 lg:-mt-32 relative z-10 w-full mx-auto h-auto"
            fluid={frontmatter.image.childImageSharp.fluid}
            alt={frontmatter.title}
          />
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
          <Connection className="ml-auto mt-8 md:mr-8 relative z-10 w-7/12  h-full " />
        </BlogContainer>

        <CallToAction editUrl={links.editOnGithub(filepath)} />
      </article>
    </>
  );
}
