import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import { FaSistrix } from 'react-icons/fa';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import globalStyles from '@styles/index';
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
    edges: {
      node: {
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

export default function BlogsPage() {
  const data: BlogMarkdownRemark = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
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
    }
  `);

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState<JsSearch.Search | null>(null);

  const allBlogs: Blog[] = data.allMdx.edges.map((e) => {
    const { id, timeToRead, body } = e.node;
    const {
      title, description, date, image,
    } = e.node.frontmatter;
    const dateFormat = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
    return {
      id,
      timeToRead,
      title,
      slug: e.node.fields.slug,
      description,
      date: dateFormat,
      category: categories[e.node.frontmatter.category],
      body,
      image: image.childImageSharp.fluid,
    };
  });

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
        title="A blog by Sean Keever"
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
        className={`
          bg-primary
          z-20 relative
          pt-12 lg:pt-16
          flex-grow-0
          ${globalStyles.transitions}
        `}
      >
        <div className="px-4 max-w-screen-sm mx-auto">
          <h1
            className={`

            `}
          >
            <span className="sr-only">{siteConfig.siteTitle}</span>
            <Logo className="w-7/12 h-auto mx-auto text-onPrimarySoft fill-current" />
          </h1>
          <div id="search-input" className="mt-12">
            <label htmlFor="filter-input">
              <span className="sr-only">Search</span>
              <div>
                <FaSistrix
                  className={`
                      inline
                      text-2xl 
                      absolute
                      text-neutral
                      ml-2
                      z-30
                    `}
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
                  className={`
                        -mt-8
                        bg-neutralBgSoft
                        rounded-full
                        text-onNeutral
                        placeholder-neutralSoft
                        lg:text-xl
                        pl-10 
                        pr-2
                        relative
                        py-3
                        w-full
                        shadow-lg
                        ${globalStyles.outline}
                        focus:bg-neutralBg
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
        className={`bg-neutralBgSoft flex-grow-0 relative z-0 2xl:-mt-24 ${globalStyles.transitions}`}
      >
        <svg
          className={`text-primary fill-current h-auto ${globalStyles.transitions}`}
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
                <li key={blog.id} className="">
                  <Link
                    to={blog.slug}
                    className={`
                        flex flex-col 
                        rounded-lg shadow-lg 
                        overflow-hidden 
                        h-full
                        ${globalStyles.outline}
                      `}
                  >
                    <div className="flex-shrink-0">
                      <Img
                        className="h-48 w-full object-cover"
                        fluid={blog.image}
                        alt={blog.title}
                      />
                    </div>
                    <div className="flex-1 bg-neutralBg p-3 flex flex-col justify-between">
                      <div className="flex-1">
                        <span
                          className={`${blog.category.className} ${globalStyles.transitions} font-medium px-2 py-px rounded-full`}
                        >
                          {blog.category.name}
                        </span>
                        <h2 className="mt-2 text-2xl leading-7 font-semibold text-onNeutralBg">
                          {blog.title}
                        </h2>
                        <p className="mt-3 text-base leading-6 text-neutral">
                          {blog.description}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="">
                          <div className="flex text-sm leading-5 text-neutral">
                            <time dateTime={blog.date}>{blog.date}</time>
                            <span className="mx-1">&middot;</span>
                            <span>
                              {blog.timeToRead}
                              &nbsp;min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
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
