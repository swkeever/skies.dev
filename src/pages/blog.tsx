import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import Layout from '../components/Layout';
import Header from '../components/blogs/Header';
import Search, { Tag } from '../components/blogs/Search';
import BlogList from '../components/blogs/BlogList';
import SEO from '../components/SEO';

type BlogList = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          slug: string;
          date: string;
          tags: string[];
          description: string;
        };
        timeToRead: number;
        id: string;
        rawMarkdownBody: string;
      };
    }[];
  };
};

// parse the tags from the markdown files
// and only show tags that exist in the markdown files
function getInitialTags(data): Tag[] {
  const validTags = [];
  data.allMarkdownRemark.edges.forEach((e) => {
    e.node.frontmatter.tags.forEach((t) => {
      if (!validTags.includes(t)) {
        validTags.push(t);
      }
    });
  });
  return validTags.map((t) => ({ name: t, selected: false }));
}

export type BlogMarkdownRemark = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          slug: string;
          date: string;
          tags: string[];
          description: string;
        };
        id: string;
        timeToRead: number;
        rawMarkdownBody: string;
      }[];
    };
  };
};

export default function BlogsPage() {
  const data: BlogMarkdownRemark = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              tags
              description
            }
            id
            timeToRead
            rawMarkdownBody
          }
        }
      }
    }
  `);

  const [filterString, setFilterString] = useState('');
  const [filterTags, setFilterTags] = useState<Tag[]>(getInitialTags(data));
  const [search, setSearch] = useState<JsSearch.Search | null>(null);
  type Blog = {
    id: string;
    timeToRead: number;
    title: string;
    slug: string;
    description: string;
    date: string;
    tags: string[];
    body: string;
  };
  const allBlogs: Blog[] = data.allMarkdownRemark.edges.map((e) => {
    const { id, timeToRead, rawMarkdownBody } = e.node;
    const {
      title, slug, description, date, tags,
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
      slug,
      description,
      date: dateFormat,
      tags,
      body: rawMarkdownBody,
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
      const results: any = search.search(query);
      results.sort((a: Blog, b: Blog): number => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return bDate.valueOf() - aDate.valueOf();
      });
      setBlogs(results);
    } else {
      setBlogs(allBlogs);
    }
  }, [filterString, filterTags]);

  return (
    <Layout
      className={`
        min-h-screen 
        bg-neutralBg
        text-onNeutral
      `}
    >
      <SEO
        title="Blog"
        description="Sean Keever's blog about software engineering."
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
