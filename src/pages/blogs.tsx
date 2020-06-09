import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import Layout from '../components/layout';
import Header from '../components/pages/blogs/header';
import Filters from '../components/pages/blogs/filter';
import BlogList from '../components/pages/blogs/list';
import { Tag } from '../components/pages/blogs/filter/FilterTags';

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
  const allBlogs = data.allMarkdownRemark.edges.map((e) => {
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
      setBlogs(search.search(query));
    } else {
      setBlogs(allBlogs);
    }
  }, [filterString, filterTags]);

  return (
    <Layout
      title="Blogs"
      className={`
        min-h-screen 
        bg-neutralBg
        text-onNeutral
      `}
    >
      <Header />
      <Filters
        filter={filterString}
        setFilter={setFilterString}
        tags={filterTags}
        setTags={setFilterTags}
      />
      <BlogList blogs={blogs} />
    </Layout>
  );
}
