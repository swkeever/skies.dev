import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import { FaSistrix } from 'react-icons/fa';
import globalStyles from '@styles/index';
import BlogCard from '@components/blog-card';
import tw from '@utils/tailwind';
import Layout from '@components/layout';
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

export const blogPageQuery = graphql`
  query BlogIndex {
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
    site,
    allMdx: { nodes },
  },
}: {
  data: { site: SiteInfo; allMdx: { nodes: BlogMeta[] } };
}) {
  const [filter, setFilter] = useState<string>('');
  const [search, setSearch] = useState<JsSearch.Search | null>(null);
  const [blogs, setBlogs] = useState<BlogMeta[]>(nodes);

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
          'md:pt-8 2xl:pt-16',
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
                  'ml-2.5',
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
      <div
        aria-hidden="true"
        className={tw(
          'bg-neutralBgSoft',
          'flex-grow-0',
          'relative z-0',
          '-mt-1 2xl:-mt-24',
          globalStyles.transitions,
        )}
      >
        <svg
          className={tw(colors.svg, 'fill-current', globalStyles.transitions)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 253"
        >
          <path
            fillOpacity="1"
            d="M0,128L40,144C80,160,160,192,240,197.3C320,203,400,181,480,165.3C560,149,640,139,720,138.7C800,139,880,149,960,176C1040,203,1120,245,1200,250.7C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>
      <section
        id="blog-list"
        className={`
          bg-neutralBgSoft 
          flex-grow
          pb-16
          ${globalStyles.transitions}
          `}
      >
        <p className="mb-8 text-xl z-20 font-light text-center text-onNeutralBgSoft">
          {getNumResultsString(blogs.length)}
        </p>
        {blogs.length ? (
          <nav
            className={tw(
              'sm:px-6 px-4',
              'max-w-sm md:max-w-screen-md 2xl:max-w-screen-2xl',
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
