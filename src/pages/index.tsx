import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import { FaSistrix } from 'react-icons/fa';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import { globalStyles } from '../styles';
import Empty from '../../assets/empty.svg';

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

function NumResults({ children }: { children: ReactNode }) {
  return (
    <p className="my-8 text-xl font-light text-center text-onNeutralBgSoft">
      {children}
    </p>
  );
}

type Category = {
  name: string;
  className: string;
};

const categories: Category[] = [
  {
    name: 'Opinion',
    className: 'bg-cat0 text-onCat0',
  },
  {
    name: 'Lesson',
    className: 'bg-cat1 text-onCat1',
  },
  {
    name: 'Lifestyle',
    className: 'bg-cat2 text-onCat2',
  },
  {
    name: 'Project',
    className: 'bg-cat3 text-onCat3',
  },
];

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
        title="Blog by Sean Keever"
        description="Life as a software engineer."
        keywords={['blog', 'skies', 'sean keever', 'software engineering blog']}
      />
      <section
        className={`
          bg-primary
          z-0
          py-16
          md:py-20
          xl:py-24
          ${globalStyles.transitions}
        `}
      >
        <div className="px-4 pt-2 z-10 max-w-screen-sm mx-auto">
          <h1
            className={`
              leading-none
              text-base
              uppercase
              tracking-wider
              text-onPrimary
              font-semibold
            `}
          >
            Software Engineering Blog
          </h1>
          <div className="mt-6">
            <div className="">
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
                        shadow-inner
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
        </div>
      </section>
      <section
        className={`
          bg-neutralBgSoft self-stretch flex-grow pt-16 -mt-16 pb-12
          ${globalStyles.transitions}
          `}
      >
        {blogs.length ? (
          <div className="sm:px-6 px-4 max-w-screen-xl mx-auto">
            <NumResults>
              {`${blogs.length} result${blogs.length > 1 ? 's' : ''}.`}
            </NumResults>
            <ul
              className={`grid
                  grid-cols-1 
                  gap-6
                  md:grid-cols-2 
                  lg:grid-cols-3 
                `}
            >
              {blogs.map((blog) => (
                <li className="">
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
          <div className="">
            <NumResults>No results found.</NumResults>
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
    </>
  );
}
