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
import SEO from '@components/seo';
import ExternalLink from '@components/external-link';
import TableOfContents from '@components/table-of-contents';
import shortCodes from '@components/shortcodes';
import Newsletter from '@components/newsletter';
import tw from '@utils/tailwind';
import BlogDisplay from '@components/blog-display';
import About from '@components/about';
import { graphql } from 'gatsby';
import { BlogPostQuery } from 'graphql-types';
import Feedback from '@components/feedback';
import { Transition } from '@headlessui/react';
import useOnScreen from '@hooks/use-on-screen';
import useHasMounted from '@hooks/use-has-mounted';

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
      h1: 'text-onNeutralBgSoft',
      bg: 'bg-neutralBg',
      meta: 'text-neutral',
    },
  },
}.neutral;

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
      },
    },
    logo,
    similarBlogs,
  },
}: BlogPostQuery) {
  const { pathname } = useLocation();
  const [topRef, isTopOnScreen] = useOnScreen({
    rootMargin: '45%',
  });
  const hasMounted = useHasMounted();

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
        <div
          className={tw(
            'max-w-screen-xl',
            'mx-auto',
            'grid grid-cols-12 gap-16',
            'relative',
          )}
        >
          <div
            className={tw('col-span-12 px-2 md:px-6 lg:col-span-9', 'mb-64')}
          >
            <header
              ref={topRef}
              className={tw(colors.header.bg, globalStyles.transitions)}
            >
              <div
                className={tw(
                  'lg:my-4 mx-auto',
                  // 'grid grid-cols-12 gap-4',
                  'pt-24 pb-5 lg:pt-20 px-2 md:px-6',
                  'max-w-screen-xl',
                  'border-b border-neutralBgSoft',
                  globalStyles.transitions,
                )}
              >
                <h1
                  className={tw(
                    // 'col-span-12 lg:col-span-8',
                    'leading-none text-5xl lg:text-6xl font-semibold',
                    colors.header.h1,
                    globalStyles.transitions,
                  )}
                >
                  {title}
                </h1>
              </div>
            </header>
            <div className={tw('my-8', 'flex justify-between')}>
              <div className={tw('flex items-center')}>
                <ExternalLink className="flex items-center" href={author.link}>
                  <Img
                    className={tw('rounded-full', 'mr-2')}
                    fixed={author.image.childImageSharp.fixed}
                    alt={author.name}
                  />
                </ExternalLink>

                <dl>
                  <div className={tw('flex space-x-2 items-center')}>
                    <div className={tw('text-neutralBold', 'font-medium')}>
                      <dt className="sr-only">Author</dt>
                      <dd>
                        <ExternalLink
                          className={tw(
                            'hover:text-onNeutralBgSofter',
                            globalStyles.transitions,
                          )}
                          href={author.link}
                        >
                          {author.name}
                        </ExternalLink>
                      </dd>
                    </div>
                  </div>

                  <div
                    className={tw(
                      'flex space-x-1',
                      'text-sm',
                      globalStyles.transitions,
                      'text-neutral',
                    )}
                  >
                    <div>
                      <dt className="sr-only">Last modified</dt>
                      <dd>{date.modified}</dd>
                    </div>
                    <span aria-hidden>&middot;</span>
                    <div>
                      <dt className="sr-only">Time to read</dt>
                      <dd>
                        {timeToRead}
                        {' '}
                        min read
                      </dd>
                    </div>
                  </div>
                </dl>
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

          <aside
            aria-hidden // because we don't hide the mobile ToC
            className={tw(
              'relative hidden',
              'col-span-3',
              'lg:block',
              'pr-6',
              'mb-64',
            )}
          >
            <div className="sticky top-32 mb-2">
              <Transition
                show={hasMounted && !isTopOnScreen}
                {...globalStyles.fadeTransition}
              >
                <h2 className="mt-4 mb-4 font-bold tracking-wider uppercase text-neutral">
                  Table of Contents
                </h2>
                <TableOfContents headings={headings} />
                <Feedback />
              </Transition>
            </div>
          </aside>
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

      <Newsletter color="neutral" />
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