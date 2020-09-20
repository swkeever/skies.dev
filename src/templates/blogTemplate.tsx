/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import Img from 'gatsby-image';
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
import shortCodes from '@components/Shortcodes';
import Newsletter from '@components/Newsletter';
import TwitterFollowButton from '@components/TwitterFollowButton';
import tw from '@utils/tailwind';
import BlogDisplay from '@components/BlogDisplay';
import About from '@components/About';

const styles = {
  ctaLinks: tw(
    'text-lg',
    'hover:border-b hover:border-onNeutralBgSoft',
    'pb-1',
    'text-onNeutralBgSoft',
  ),

  meta: {
    li: tw('text-center', 'py-2'),
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

export default function Blog({ pageContext }) {
  const { pathname } = useLocation();
  const {
    similarBlogs, blog, headings, logo,
  } = pageContext;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': links.withSiteUrl(blog.slug),
    },
    headline: blog.title,
    description: blog.description,
    image: links.withSiteUrl(blog.image.fluid.src),
    author: {
      '@type': 'Person',
      name: 'Sean Keever',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Skies',
      logo: {
        '@type': 'ImageObject',
        url: links.withSiteUrl(logo),
      },
    },
    datePublished: blog.date.published,
    dateModified: blog.date.modified,
  };

  return (
    <>
      <SEO
        article
        title={blog.title}
        description={blog.description}
        keywords={blog.keywords}
        image={blog.image.fluid}
        imageDims={{
          width: blog.image.fluid.presentationWidth,
          height: blog.image.fluid.presentationHeight,
        }}
        schemaMarkup={schema}
      />
      <article className={tw(globalStyles.transitions)}>
        <header className={tw(colors.header.bg)}>
          <div
            className={tw(
              'lg:mt-4 mx-auto',
              'grid grid-cols-12 gap-4',
              'pt-24 pb-5 lg:pt-20 px-2 md:px-6',
              'mb-1',
              'max-w-screen-xl',
            )}
          >
            <h1
              className={tw(
                'lg:col-start-2 col-span-12 lg:col-span-8',

                'leading-none text-5xl lg:text-6xl font-extrabold',
                colors.header.h1,
              )}
            >
              {blog.title}
            </h1>
          </div>
        </header>

        <div
          className={tw(
            'max-w-screen-xl',
            'mx-auto',
            'grid grid-cols-12 gap-8',
            'relative',
          )}
        >
          <aside className="hidden mx-auto lg:block">
            <ul
              className={tw(
                'list-none',
                'flex flex-col space-y-4',
                'text-4xl',
                'pt-5',
                'sticky top-40',
              )}
            >
              <li key="twitter">
                <ExternalLink
                  href={links.shareTo.twitter({
                    title: blog.title,
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
                    title: blog.title,
                    description: blog.description,
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
            <figure className={tw('mb-16')}>
              <Img
                className={tw(
                  'relative z-10',
                  'w-full',
                  'rounded-sm',
                  'h-auto',
                  'mx-auto mt-1',
                  'shadow-xl',
                )}
                fluid={blog.image.fluid}
                alt={blog.title}
              />
              <figcaption className="mt-4 text-center text-neutral">
                <p>
                  Photo by
                  {' '}
                  <ExternalLink
                    className="underline text-neutral hover:text-neutralBold"
                    href={blog.image.url}
                  >
                    {blog.image.photographer}
                  </ExternalLink>
                </p>
              </figcaption>
            </figure>

            <ul
              className={tw(
                'grid grid-cols-3',
                'text-sm font-light',
                'border border-neutralBgSofter',
                'rounded-lg',
                'divide-x divide-neutralBgSofter',
                colors.header.meta,
                globalStyles.transitions,
              )}
            >
              <li className={styles.meta.li}>
                <time dateTime={blog.date.published}>
                  Published
                  {' '}
                  {blog.date.published}
                </time>
              </li>

              <li className={styles.meta.li}>
                <time dateTime={blog.date.modified}>
                  Last modified
                  {' '}
                  {blog.date.modified}
                </time>
              </li>

              <li className={styles.meta.li}>
                {blog.timeToRead}
                {' '}
                min read
              </li>
            </ul>

            <div className="mt-4 lg:hidden">
              <h2 className="mb-2 font-bold tracking-wider uppercase text-neutral">
                Table of Contents
              </h2>
              <TableOfContents
                className="mb-8"
                watch={false}
                headings={headings}
              />
            </div>

            <MDXProvider
              components={{
                ...shortCodes,
              }}
            >
              <MDXRenderer>{blog.body}</MDXRenderer>
            </MDXProvider>
          </div>
          <aside className="relative hidden col-span-3 lg:block">
            <div className="sticky top-32">
              <h2 className="mt-4 mb-2 font-bold tracking-wider uppercase text-neutral">
                Table of Contents
              </h2>
              <TableOfContents headings={headings} />
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

      <section className={tw('bg-neutralBgSoft', 'py-16 lg:py-24')}>
        <BlogDisplay
          blogs={similarBlogs}
          subtitle="Here are some other articles you may enjoy."
          title="Related articles"
        />
      </section>

      <Newsletter
        tags={blog.tags}
        color="neutral"
        copy="Want more articles like this?"
      />
      <About color="footer" />
    </>
  );
}
