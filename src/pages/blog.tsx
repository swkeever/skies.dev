import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import { FaSistrix } from 'react-icons/fa';
import globalStyles from '@styles/index';
import BlogCard from '@components/BlogCard';
import tw from '@utils/tailwind';
import SEO from '../components/SEO';
import Empty from '../../assets/empty.svg';
import blogCategories from '../utils/blog-categories';
import Logo from '../../assets/logo.svg';
import Newsletter from '../components/Newsletter';
import siteConfig from '../../site.config';

export type BlogFrontmatter = {
  title: string;
  date: string;
  category: number;
  description: string;
  image: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
};

export type BlogMarkdownRemark = {
  allMdx: {
    nodes: {
      frontmatter: BlogFrontmatter;
      id: string;
      timeToRead: number;
      rawBody: string;
      fields: {
        slug: string;
      };
    }[];
  };
};

export type Blog = {
  id: string;
  timeToRead: number;
  title: string;
  slug: string;
  description: string;
  date: string;
  category: {
    name: string;
    className: string;
  };
  body: string;
  image: FluidObject;
};

function getNumResultsString(k: number): string {
  switch (k) {
    case 0:
      return 'No results found';
    case 1:
      return `${k} result found`;
    default:
      return `${k} results found`;
  }
}

type Category = {
  name: string;
  className: string;
};

const categories: Category[] = blogCategories;

export function gqlResponseToBlogs(data): Blog[] {
  return data.allMdx.nodes.map((node) => {
    const { id, timeToRead, rawBody } = node;
    const {
      title, description, date, image,
    } = node.frontmatter;
    const dateFormat = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
    return {
      id,
      timeToRead,
      title,
      slug: node.fields.slug,
      description,
      date: dateFormat,
      category: categories[node.frontmatter.category],
      body: rawBody,
      image: image.childImageSharp?.fluid,
    };
  });
}

export default function BlogsPage() {
  const data: BlogMarkdownRemark = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/content/" } }
      ) {
        nodes {
          frontmatter {
            title
            date
            category
            description
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          id
          timeToRead
          rawBody
        }
      }
    }
  `);

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState<JsSearch.Search | null>(null);

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

  const allBlogs: Blog[] = gqlResponseToBlogs(data);

  const [blogs, setBlogs] = useState(allBlogs);

  useEffect(() => {
    const s = new JsSearch.Search('id');
    s.addIndex('title');
    s.addIndex('description');
    s.addIndex(['category', 'name']);
    s.addIndex('body');
    s.addDocuments(blogs);
    setSearch(s);
  }, []);

  useEffect(() => {
    if (search && filter) {
      const results: any = search.search(filter);

      // sort the result by latest published
      results.sort((a: Blog, b: Blog): number => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return bDate.valueOf() - aDate.valueOf();
      });

      setBlogs(results);
    } else {
      setBlogs(allBlogs);
    }
  }, [filter]);

  return (
    <>
      <SEO
        title="Blog"
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
          'pt-12 lg:pt-16',
          'flex-grow-0',
          globalStyles.transitions,
        )}
      >
        <div className="px-4 max-w-screen-sm mx-auto">
          <h1>
            <span className="sr-only">{siteConfig.siteTitle}</span>
            <Logo
              className={tw(
                'w-7/12 h-auto',
                'mx-auto',
                colors.logo,
                'fill-current',
              )}
            />
          </h1>
          <div id="search-input" className="mt-12">
            <label htmlFor="filter-input">
              <span className="sr-only">Search</span>
              <div>
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
                  autoFocus
                  autoComplete="off"
                  id="filter-input"
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                  }}
                  placeholder="Search"
                  className={`
                        -mt-8
                        bg-neutralBgSoft
                        rounded-full
                        text-onNeutral
                        placeholder-neutral
                        lg:text-xl
                        pl-10 
                        pr-2
                        relative
                        py-3
                        w-full
                        shadow-lg
                        ${globalStyles.outline}
                        
                        ${globalStyles.transitions}
                      `}
                  type="search"
                />
              </div>
            </label>
          </div>
        </div>
      </section>
      <div
        className={tw(
          'bg-neutralBgSoft',
          'flex-grow-0',
          'relative z-0',
          '2xl:-mt-24',
          globalStyles.transitions,
        )}
      >
        <svg
          className={tw(
            colors.svg,
            'fill-current',
            'h-auto',
            globalStyles.transitions,
          )}
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
        <p className="mb-6 text-xl z-20 font-light text-center text-onNeutralBgSoft">
          {getNumResultsString(blogs.length)}
        </p>
        {blogs.length ? (
          <div className="sm:px-6 px-4 max-w-screen-xl mx-auto">
            <ul
              className={`grid
                  grid-cols-1 
                  gap-6
                  md:grid-cols-2 
                  lg:grid-cols-3 
                `}
            >
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="content-center">
            <Empty
              className={`
                  max-w-2xl
                  w-full
                  px-4
                  mx-auto 
                  h-auto 
                  mb-12
                `}
            />
          </div>
        )}
      </section>
      <Newsletter showTopics color="neutral" />
    </>
  );
}
