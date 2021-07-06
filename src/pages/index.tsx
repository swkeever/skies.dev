import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import { FaSistrix } from 'react-icons/fa';
import globalStyles from '@styles/index';
import BlogCard from '@components/blog-card';
import tw from '@utils/tailwind';
import Layout from '@components/layout';
import { FluidObject } from 'node_modules/gatsby-image/index';
import Img from 'gatsby-image';
import ExternalLink from '@components/external-link';
import { socialLinks } from '@components/footer';
import SEO, { SiteInfo } from '../components/seo';
import Logo from '../../assets/logo.svg';
import Newsletter from '../components/newsletter';
import { BlogMeta } from '../../graphql-types';

function getNumResultsString(k: number): string {
  switch (k) {
    case 0:
      return '';
    case 1:
      return `${k} post`;
    default:
      return `${k} posts`;
  }
}

export const dateFragment = graphql`
  fragment BlogDate on MdxFrontmatter {
    date {
      modified(formatString: "MMM D, YYYY")
      published(formatString: "MMM D, YYYY")
    }
  }
`;

export const avatarFragment = graphql`
  fragment Avatar on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

interface IAvatar {
  childImageSharp: {
    fluid: FluidObject;
  };
}

export const blogPageQuery = graphql`
  query BlogIndex {
    file(relativePath: { eq: "sean-keever.jpg" }) {
      ...Avatar
    }
    site {
      ...SiteInfo
    }
    allMdx(
      sort: {
        order: DESC
        fields: [frontmatter___date___modified, frontmatter___date___published]
      }
      filter: { fileAbsolutePath: { regex: "/content/" } }
    ) {
      nodes {
        ...BlogCard
        frontmatter {
          keywords
        }
      }
    }
  }
`;

const colors = {
  primary: {
    bg: 'bg-primary',
    svg: 'text-primary',
    logo: 'text-onPrimary',
    input: 'shadow-lg',
    p: 'text-neutral',
    a: 'text-onPrimary hover:text-onPrimaryBgLinkHover',
  },
  neutral: {
    bg: 'bg-neutralBg',
    svg: 'text-neutralBg',
    logo: 'text-primaryBold',
    input: 'shadow-lg',
    p: 'text-neutral',
    a: 'text-onNeutralBgLink hover:text-onNeutralBgLinkHover',
  },
}.primary;

export default function BlogsPage({
  data: {
    file,
    site,
    allMdx: { nodes },
  },
}: {
  data: {
    file: IAvatar;
    site: SiteInfo;
    allMdx: { nodes: BlogMeta[] };
  };
}) {
  const [filter, setFilter] = useState<string>('');
  const [search, setSearch] = useState<JsSearch.Search | null>(null);
  const [blogs, setBlogs] = useState<BlogMeta[]>(nodes);

  console.log('file', file);

  useEffect(() => {
    const s = new JsSearch.Search('id');
    s.addIndex(['frontmatter', 'title']);
    s.addIndex(['frontmatter', 'keywords']);
    s.addIndex(['frontmatter', 'description']);
    s.addIndex(['fields', 'category', 'name']);
    s.addDocuments(blogs);
    setSearch(s);
  }, []);

  useEffect(() => {
    if (search && filter) {
      setBlogs(search.search(filter));
    } else {
      setBlogs(nodes);
    }
  }, [filter]);

  return (
    <Layout type="primary">
      <SEO
        description="Skies is a software engineering blog curated by Seattle full stack developer Sean Keever."
        keywords={[
          'blog',
          'skies',
          'sean keever',
          'software engineering',
          'seattle, wa',
        ]}
      />

      <section
        className={tw(
          colors.bg,
          'z-20 relative',
          'pb-12 md:pt-8 md:pb-24',
          'flex-grow-0',
          globalStyles.transitions,
        )}
      >
        <div className="px-4 max-w-screen-sm mx-auto">
          <h1>
            <span className="sr-only">{site.siteMetadata.title.medium}</span>
            <Logo
              className={tw(
                'w-7/12 h-auto',
                'mx-auto',
                colors.logo,
                'hidden md:block',
                'fill-current',
              )}
            />
          </h1>

          <div id="search-input" className={tw('mt-12')}>
            <label htmlFor="filter-input">
              <span className="sr-only">Search</span>
              <FaSistrix
                className={tw(
                  'inline absolute z-30',
                  'text-2xl',
                  'ml-2',
                  colors.p,
                )}
              />
              <input
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoComplete="off"
                id="filter-input"
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
                placeholder="Search the blog..."
                className={tw(
                  '-mt-8',
                  'pl-10 pr-2 py-3',
                  'bg-neutralBgSoft focus:bg-neutralBg',
                  'rounded-full',
                  'text-onNeutralBg font-base',
                  'placeholder-neutralSoft',
                  'lg:text-xl',
                  'relative',
                  'w-full',
                  'shadow-lg',
                  globalStyles.outline,
                  globalStyles.transitions,
                )}
                type="search"
              />
            </label>
          </div>
        </div>
      </section>
      <div className={tw('bg-neutralBgSoft', globalStyles.transitions)}>
        <div
          className={tw(
            globalStyles.transitions,
            'bg-neutralBg sm:rounded-lg p-6',
            'max-w-screen-sm', 'mx-auto sm:-mt-8 md:-mt-16',
            'z-30 relative shadow-xl',
          )}
        >
          <div className="flex items-center">
            <Img
              className="h-12 w-12 rounded-full"
              fluid={file.childImageSharp.fluid}
            />
            <div className="ml-2">
              <h2
                className={tw(
                  globalStyles.transitions,
                  'font-medium text-onNeutralBg',
                )}
              >
                Sean Keever
              </h2>
              <ul className="flex space-x-2">
                {socialLinks.slice(1).map((link) => (
                  <li
                    key={link.text}
                  >
                    <ExternalLink href={link.to} className='text-neutral hover:underline hover:text-onNeutralBg'>
                      {link.text}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <p className='text-neutralBold mt-2'>
            I&apos;m a web developer living in Seattle, WA.

            I&apos;m currently

            working on Discovery at
            {' '}
            <ExternalLink
              className='underline hover:text-onNeutralBg'
              href='https://www.offerup.com'
            >
              OfferUp
            </ExternalLink>
            . Welcome to my software engineering blog.
          </p>
        </div>
      </div>

      <section
        id="blog-list"
        className={`
          bg-neutralBgSoft
          flex-grow
          py-16
          ${globalStyles.transitions}
          `}
      >
        <p className="mb-8 text-xl z-20 font-light text-center text-onNeutralBgSoft">
          {getNumResultsString(blogs.length)}
        </p>
        {blogs.length ? (
          <nav
            className={tw(
              'md:px-6',
              'md:max-w-screen-md xl:max-w-screen-2xl',
              'mx-auto',
              globalStyles.blogGrid,
            )}
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </nav>
        ) : (
          <section className={tw('max-w-xl', 'mx-auto my-24', 'px-6 lg:px-0')}>
            <h2
              className={tw(
                'text-5xl md:text-6xl font-semibold text-onNeutralBg',
              )}
            >
              Oh snap!
            </h2>
            <p className="text-neutral mt-1 text-xl md:text-2xl">
              Nothing matched your search.
            </p>
          </section>
        )}
      </section>
      <Newsletter color="neutral" />
    </Layout>
  );
}
