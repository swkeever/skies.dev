/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { AnchorHTMLAttributes } from 'react';
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
import shortcodes from '../components/article/DesignSystem';

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

type Fields = {
  slug: string;
};

type NeighborContext = {
  id: string;
  fields: Fields;
};

export type Heading = {
  depth: number;
  value: string;
};

type PropTypes = {
  data: {
    mdx: {
      body: string;
      fields: Fields;
      fileAbsolutePath: string;
      frontmatter: BlogFrontmatter;
      headings: Heading[];
      timeToRead: number;
      id: string;
    };
  };
  pageContext: {
    id: string;
    next: NeighborContext;
    prev: NeighborContext;
  };
};

export default function Blog({ data: { mdx }, pageContext }: PropTypes) {
  const { frontmatter, body, fileAbsolutePath } = mdx;
  const editUrl = links.editOnGithub(
    `${fileAbsolutePath.split('/content/')[1]}`,
  );
  const styles = {
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
        itemScope
        itemType="http://schema.org/BlogPosting"
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
                  lg:text-5xl
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
                  className="text-base font-medium text-onPrimarySoft md:text-lg"
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
              <TableOfContents
                className="mb-8"
                watch={false}
                headings={mdx.headings}
              />
            </div>

            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
          <aside className="relative hidden col-span-3 md:block">
            <div className="sticky top-32">
              <h2 className="mt-4 mb-2 font-bold tracking-wider uppercase text-neutralSoft">
                Table of Contents
              </h2>
              <TableOfContents headings={mdx.headings} />
            </div>
          </aside>
        </div>
        <section
          className={`
              max-w-screen-lg
              flex flex-col md:flex-row
              justify-start md:justify-between
              mx-auto
              md:items-center
              mt-64
              mb-8
              px-4
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
            <ul className="flex justify-between md:justify-start md:space-x-4">
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
      </article>
    </>
  );
}
