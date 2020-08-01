import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import Header from '../components/blog/Header';
import BlogList from '../components/blog/BlogList';
import SEO from '../components/SEO';

export const BlogContext = React.createContext({
  filter: '',
  setFilter: null,
  tags: [],
  setTags: null,
  blogs: [],
});

// parse the tags from the markdown files
// and only show tags that exist in the markdown files
function getInitialTags(data): Tag[] {
  const validTags = [];
  data.allMdx.edges.forEach((e) => {
    e.node.frontmatter.tags.forEach((t) => {
      if (!validTags.includes(t)) {
        validTags.push(t);
      }
    });
  });
  validTags.sort();
  return validTags.map((t) => ({ name: t, selected: false }));
}

export type BlogFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  description: string;
  image: {
    childImageSharp: {
      fluid: FluidObject;
      presentationWidth: number;
      presentationHeight: number;
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
  file: {
    childImageSharp: {
      fluid: FluidObject;
      presentationWidth: number;
      presentationHeight: number;
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
  tags: string[];
  body: string;
  image: FluidObject;
};

export const blogDescription = 'Explore articles on software engineering, computer science, web development, and more.';

export default function BlogsPage() {
  const data: BlogMarkdownRemark = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
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
      file(relativePath: { eq: "bulb.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `);

  const [filter, setFilter] = useState('');
  const [tags, setTags] = useState<Tag[]>(getInitialTags(data));
  const [search, setSearch] = useState<JsSearch.Search | null>(null);
  const [page, setPage] = useState(0);

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
      tags: e.node.frontmatter.tags,
      body,
      image: image.childImageSharp.fluid,
    };
  });

  const [blogs, setBlogs] = useState(allBlogs);

  useEffect(() => {
    const s = new JsSearch.Search('id');
    s.addIndex('title');
    s.addIndex('description');
    s.addIndex('date');
    s.addIndex('tags');
    s.addIndex('body');
    s.addDocuments(blogs);
    setSearch(s);
  }, []);

  useEffect(() => {
    const query = tags
      .filter((t) => t.selected)
      .map((t) => t.name)
      .concat(filter)
      .join(' ');

    if (search && query) {
      let results: any = search.search(query);

      // sort the result by latest published
      results.sort((a: Blog, b: Blog): number => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return bDate.valueOf() - aDate.valueOf();
      });

      // get the tag names that are selected
      const tagsSelected = tags.filter((t) => t.selected).map((t) => t.name);

      if (tagsSelected.length) {
        results = results.filter((e) => e.tags.some((v) => tagsSelected.includes(v)));
      }

      // set the blogs that
      // - are included in the filter
      // - and included in the selected tags
      setBlogs(results);
    } else {
      setBlogs(allBlogs);
    }
  }, [filter, tags]);

  return (
    <>
      <SEO
        title="Software Engineering Blog by Sean Keever"
        description={blogDescription}
        keywords={['blog', 'skies', 'sean keever', 'software engineering blog']}
      />
      <BlogContext.Provider
        value={{
          filter,
          setFilter,
          tags,
          setTags,
          page,
          setPage,
          blogs,
        }}
      >
        <Header />
        <BlogList blogs={blogs} />
      </BlogContext.Provider>
    </>
  );
}
