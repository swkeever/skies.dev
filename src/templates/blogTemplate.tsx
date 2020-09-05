/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useLocation } from '@reach/router';
import {
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti';
import globalStyles from '@styles/index';
import links from '@utils/links';
import SEO from '@components/SEO';
import ExternalLink from '@components/ExternalLink';
import TableOfContents from '@components/TableOfContents';
import shortcodes from '@components/Shortcodes';
import Newsletter from '@components/Newsletter';
import TwitterFollowButton from '@components/TwitterFollowButton';
import tw from '@utils/tailwind';
import BlogDisplay from '@components/BlogDisplay';
import About from '@components/About';

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
        imageUrl
        imagePhotographer
        title
      }
      fields {
        slug
      }
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
      frontmatter: {
        date: string;
        description: string;
        tags: string[];
        keywords: string[];
        image: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
        imagePhotographer: string;
        imageUrl: string;
        title: string;
      };
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

export default function Blog({ data, pageContext }: PropTypes) {
  const { mdx } = data;
  const { pathname } = useLocation();
  const { frontmatter, body } = mdx;
  const { similarBlogs } = pageContext;

  const styles = {
    ctaLinks: `
    text-lg 
    hover:border-b
    hover:border-onNeutralBgSoft 
    text-onNeutralBgSoft
    pb-1
    `,

    ctaLinkIcons: `
    inline
    mb-1
    `,

    shareLink: `
    ${globalStyles.transitions}
    text-neutral
    hover:text-neutralBold
    `,
  };

  const colors = {
    primary: {
      header: {
        h1: 'text-onPrimary',
        bg: 'bg-primary',
        meta: 'text-onPrimarySoft',
      },
    },
    neutral: {
      header: {
        h1: 'text-onNeutralBg',
        bg: 'bg-neutralBgSoft',
        meta: 'text-neutral',
      },
    },
  }.primary;

  return (
    <>
      <SEO
        article
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
        className={tw(globalStyles.transitions)}
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className={tw(colors.header.bg, 'relative z-10', 'pt-8 pb-64')} />
        <div
          className={`
            max-w-screen-xl
            mx-auto
            grid grid-cols-12 gap-8
            relative
          `}
        >
          <aside className="hidden mx-auto lg:block">
            <ul
              className={`
                list-none
                flex flex-col
                text-4xl
                space-y-4
                pt-3
                sticky top-32
              `}
            >
              <li key="twitter">
                <ExternalLink
                  href={links.shareTo.twitter({
                    title: frontmatter.title,
                    pathname,
                  })}
                  className={styles.shareLink}
                >
                  <TiSocialTwitterCircular />
                </ExternalLink>
              </li>
              <li key="facebook">
                <ExternalLink
                  className={styles.shareLink}
                  href={links.shareTo.facebook({ pathname })}
                >
                  <TiSocialFacebookCircular />
                </ExternalLink>
              </li>
              <li key="linkedin">
                <ExternalLink
                  className={styles.shareLink}
                  href={links.shareTo.linkedIn({
                    title: frontmatter.title,
                    description: frontmatter.description,
                    pathname,
                  })}
                >
                  <TiSocialLinkedinCircular />
                </ExternalLink>
              </li>
            </ul>
          </aside>
          <div
            className={tw(
              'col-span-12 px-2 md:px-6 pt-4 lg:col-span-8',
              'mb-64',
            )}
          >
            <header className="relative z-30 -mt-48 md:-mt-64">
              <h1
                className={tw(
                  'leading-none text-4xl lg:text-5xl font-extrabold',
                  colors.header.h1,
                )}
                itemProp="name"
              >
                {frontmatter.title}
              </h1>
              <div className={tw('flex', 'mt-2', colors.header.meta)}>
                <time>{frontmatter.date}</time>
                <span className="mx-2 mb-4 md:mb-0">&middot;</span>
                <span>
                  {mdx.timeToRead}
                  {' '}
                  min read
                </span>
              </div>
            </header>
            <figure className={tw('mb-20')}>
              <Img
                className="relative z-10 w-full rounded-sm h-auto mx-auto mt-5"
                fluid={frontmatter.image.childImageSharp.fluid}
                alt={frontmatter.title}
              />
              <figcaption className="my-2 text-center text-neutral">
                <p>
                  Photo by
                  {' '}
                  <ExternalLink
                    className="underline text-neutral hover:text-neutralBold"
                    href={frontmatter.imageUrl}
                  >
                    {frontmatter.imagePhotographer}
                  </ExternalLink>
                </p>
              </figcaption>
            </figure>

            <div className="mt-4 lg:hidden">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-neutral">
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
          <aside className="relative hidden col-span-3 lg:block">
            <div className="sticky top-32">
              <h2 className="mt-4 mb-2 font-bold tracking-wider uppercase text-neutral">
                Table of Contents
              </h2>
              <TableOfContents headings={mdx.headings} />
            </div>
          </aside>
        </div>

        <div
          className={tw(
            'fixed bottom-12',
            'lg:sticky lg:bottom-0', // sticky on desktop
            'mb-8 lg:mb-0',
            'flex justify-center lg:justify-end', // again, floating right is buggy on mobile, so only do it on desktop
            'z-30',
            'safe-bottom',
          )}
        >
          <TwitterFollowButton />
        </div>
      </article>

      <div className={tw('bg-neutralBgSoft', 'py-16 lg:py-24')}>
        <BlogDisplay
          blogs={similarBlogs}
          subtitle="Here are some other articles you may enjoy."
          title="Related articles"
        />
      </div>

      <Newsletter
        tags={frontmatter.tags}
        color="neutral"
        copy="Want more articles like this?"
      />
      <About color="footer" />
    </>
  );
}
