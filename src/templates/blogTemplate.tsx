/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Img from 'gatsby-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { useLocation } from '@reach/router';
import { FaLinkedin, FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import globalStyles from '@styles/index';
import links from '@utils/links';
import SEO from '@components/SEO';
import ExternalLink from '@components/ExternalLink';
import TableOfContents from '@components/TableOfContents';
import shortCodes from '@components/Shortcodes';
import Newsletter from '@components/Newsletter';
import TwitterFollowButton from '@components/TwitterFollowButton';
import tw from '@utils/tailwind';
import BlogDisplay from '@components/BlogDisplay';
import About from '@components/About';
import { graphql } from 'gatsby';
import { BlogPostQuery } from 'graphql-types';

const styles = {
  ctaLinks: tw(
    'text-lg',
    'hover:border-b hover:border-onNeutralBgSoft',
    'pb-1',
    'text-onNeutralBgSoft',
  ),

  meta: {
    li: tw('md:text-center', 'py-2 md:py-4', 'flex justify-center space-x-1'),
  },

  ctaLinkIcons: tw('inline', 'mb-1'),

  shareLink: tw(
    globalStyles.transitions,
    'text-neutral hover:text-neutralBold',
  ),
};

const colors = {
  primary: {
    header: {
      h1: 'text-onPrimary',
      bg: 'bg-primary',
      meta: 'text-neutral',
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

export default function BlogPost({
  data: {
    blog: {
      fields: { slug, author },
      timeToRead,
      body,
      headings,
      frontmatter: {
        title,
        description,
        date,
        image: {
          photographer,
          src: {
            external,
            local: {
              childImageSharp: { fluid: imageFluid },
            },
          },
        },
        keywords,
        tags,
      },
    },
    logo,
    similarBlogs,
  },
}: BlogPostQuery) {
  const { pathname } = useLocation();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': links.withSiteUrl(slug),
    },
    headline: title,
    description,
    image: links.withSiteUrl(imageFluid.src),
    author: {
      '@type': 'Person',
      name: 'Sean Keever',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Skies',
      logo: {
        '@type': 'ImageObject',
        url: links.withSiteUrl(logo.childImageSharp.fixed.src),
      },
    },
    datePublished: date.published,
    dateModified: date.modified,
  };

  return (
    <>
      <SEO
        article
        title={title}
        description={description}
        keywords={keywords}
        image={imageFluid}
        schemaMarkup={schema}
      />
      <article>
        <header className={tw(colors.header.bg, globalStyles.transitions)}>
          <div
            className={tw(
              'lg:mt-4 mx-auto',
              'grid grid-cols-12 gap-4',
              'pt-24 pb-5 lg:pt-32 px-2 md:px-6',
              'max-w-screen-xl',
            )}
          >
            <h1
              className={tw(
                'col-span-12 lg:col-span-8',
                'leading-none text-5xl lg:text-6xl font-black',
                colors.header.h1,
                globalStyles.transitions,
              )}
            >
              {title}
            </h1>
          </div>
        </header>

        <div
          className={tw(
            'max-w-screen-xl',
            'mx-auto',
            'grid grid-cols-12 gap-4',
            'relative',
          )}
        >
          <div
            className={tw('col-span-12 px-2 md:px-6 lg:col-span-9', 'mb-64')}
          >
            <div className={tw('my-8', 'flex justify-between')}>
              <div className={tw('flex items-center')}>
                <Img
                  className={tw(
                    'rounded-full',
                    'mr-2',
                    'border-4 border-neutralBg',
                    // '-mt-4'
                  )}
                  fixed={author.image.childImageSharp.fixed}
                  alt={author.name}
                />
                <div>
                  <div className={tw('flex space-x-2 items-center')}>
                    <dl className={tw('text-neutralBold', 'font-medium')}>
                      <dt className="sr-only">Author</dt>
                      <dd>{author.name}</dd>
                    </dl>
                  </div>

                  <div
                    className={tw(
                      'flex space-x-1',
                      'text-sm',
                      globalStyles.transitions,
                      'text-neutral',
                    )}
                  >
                    <dl className={tw('')}>
                      <dt className="sr-only">Last modified</dt>
                      <dd>{date.modified}</dd>
                    </dl>
                    <span>&middot;</span>
                    <dl>
                      <dt className="sr-only">Time to read</dt>
                      <dd>
                        {timeToRead}
                        {' '}
                        min read
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <ul className={tw('flex space-x-4 items-center', 'text-2xl')}>
                <li key="twitter">
                  <ExternalLink
                    href={links.shareTo.twitter({
                      title,
                      pathname,
                    })}
                    className={styles.shareLink}
                  >
                    <FaTwitter />
                  </ExternalLink>
                </li>
                <li key="facebook">
                  <ExternalLink
                    className={styles.shareLink}
                    href={links.shareTo.facebook({ pathname })}
                  >
                    <FaFacebookSquare />
                  </ExternalLink>
                </li>
                <li key="linkedin">
                  <ExternalLink
                    className={styles.shareLink}
                    href={links.shareTo.linkedIn({
                      title,
                      description,
                      pathname,
                    })}
                  >
                    <FaLinkedin />
                  </ExternalLink>
                </li>
              </ul>
            </div>

            <figure className={tw('mb-24')}>
              <Img
                className={tw(
                  'relative z-10',
                  'w-full',
                  'rounded-sm',
                  'h-auto',
                  'mx-auto',
                  'shadow-xl',
                )}
                fluid={imageFluid}
                alt={title}
              />
              <figcaption className="mt-4 text-center text-neutral">
                <p>
                  Photo by
                  {' '}
                  <ExternalLink
                    className="underline text-neutral hover:text-neutralBold"
                    href={external}
                  >
                    {photographer}
                  </ExternalLink>
                </p>
              </figcaption>
            </figure>

            <div
              className={tw(
                'mt-4',
                'mx-auto',
                'lg:hidden',
                'bg-neutralBgSoft',
                'px-5 py-10',
                'rounded-lg',
                'shadow-inner',
                'max-w-screen-sm',
                'flex flex-col justify-center',
              )}
            >
              <h2 className="mb-4 font-bold tracking-wider uppercase text-neutral">
                Table of Contents
              </h2>
              <TableOfContents
                className={tw('')}
                watch={false}
                headings={headings}
              />
            </div>

            <MDXProvider
              components={{
                ...shortCodes,
              }}
            >
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
          <aside aria-hidden className="relative hidden col-span-3 lg:block">
            <div className="sticky top-32">
              <h2 className="mt-4 mb-4 font-bold tracking-wider uppercase text-neutral">
                Table of Contents
              </h2>
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>

        <div
          className={tw(
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

      <section
        className={tw(
          'bg-neutralBgSoft',
          globalStyles.transitions,
          'py-16 lg:py-24',
        )}
      >
        <BlogDisplay
          blogs={similarBlogs.nodes}
          subtitle="Here are some other articles you may enjoy."
          title="Related articles"
        />
      </section>

      <Newsletter
        tags={tags}
        color="neutral"
        copy="Want more articles like this?"
      />
      <About color="footer" />
    </>
  );
}

export const blogPostPageQuery = graphql`
  query BlogPost($id: String, $similarBlogs: [String]) {
    blog: mdx(id: { eq: $id }) {
      id
      timeToRead
      body
      headings {
        depth
        value
      }
      frontmatter {
        title
        ...BlogDate
        keywords
        description
        image {
          src {
            local {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            external
          }
          photographer
        }
        tags
      }
      fields {
        slug
        author {
          image {
            childImageSharp {
              fixed(width: 60, height: 60) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          link
          name
          username
        }
      }
    }
    logo: file(relativePath: { eq: "logo.jpg" }) {
      ...Logo
    }
    similarBlogs: allMdx(filter: { id: { in: $similarBlogs } }) {
      nodes {
        ...BlogCard
      }
    }
  }
`;
