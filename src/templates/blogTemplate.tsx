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

export default function Blog({ pageContext }) {
  const { pathname } = useLocation();
  const {
    similarBlogs, blog, headings, logo,
  } = pageContext;

  const styles = {
    ctaLinks: tw(
      'text-lg',
      'hover:border-b hover:border-onNeutralBgSoft',
      'pb-1',
      'text-onNeutralBgSoft',
    ),

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
    datePublished: blog.date,
    dateModified: blog.date,
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
            <header className="relative z-30 -mt-48 md:-mt-64">
              <h1
                className={tw(
                  'leading-none text-4xl lg:text-5xl font-extrabold',
                  colors.header.h1,
                )}
              >
                {blog.title}
              </h1>
              <div className={tw('flex', 'mt-2', colors.header.meta)}>
                <time>{blog.date}</time>
                <span className="mx-2 mb-4 md:mb-0">&middot;</span>
                <span>
                  {blog.timeToRead}
                  {' '}
                  min read
                </span>
              </div>
            </header>
            <figure className={tw('mb-20')}>
              <Img
                className="relative z-10 w-full rounded-sm h-auto mx-auto mt-5"
                fluid={blog.image.fluid}
                alt={blog.title}
              />
              <figcaption className="my-2 text-center text-neutral">
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
