import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import { FluidObject } from 'gatsby-image';
import Layout from '../components/Layout';
import Header from '../components/blog/Header';
import Search, { Tag } from '../components/blog/Search';
import BlogList from '../components/blog/BlogList';
import SEO from '../components/SEO';

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

  const [filterString, setFilterString] = useState('');
  const [filterTags, setFilterTags] = useState<Tag[]>(getInitialTags(data));
  const [search, setSearch] = useState<JsSearch.Search | null>(null);

  const allBlogs: Blog[] = data.allMdx.edges.map((e) => {
    const { id, timeToRead, body } = e.node;
    const {
      title, description, date, tags, image,
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
      tags,
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
    const query = filterTags
      .filter((t) => t.selected)
      .map((t) => t.name)
      .concat(filterString)
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
      const tagsSelected = filterTags.filter((t) => t.selected).map((t) => t.name);

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
  }, [filterString, filterTags]);

  return (
    <Layout
      className={`
        bg-neutralBg
        text-onNeutral
      `}
    >
      <SEO
        title="Blog"
        description={blogDescription}
        keywords={filterTags
          .map((t) => t.name)
          .concat(['blog', 'learn', 'how to'])}
        image={data.file.childImageSharp.fluid}
        imageDims={{
          width: data.file.childImageSharp.fluid.presentationWidth,
          height: data.file.childImageSharp.fluid.presentationHeight,
        }}
      />
      <Header />
      <Search
        filter={filterString}
        setFilter={setFilterString}
        tags={filterTags}
        setTags={setFilterTags}
      />
      <BlogList blogs={blogs} />
    </Layout>
  );
}
