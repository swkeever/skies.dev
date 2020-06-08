import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/pages/blogs/header';
import Filters from '../components/pages/blogs/filter';
import BlogList from '../components/pages/blogs/list';

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
function getInitialTags(data) {
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
  const [filterTags, setFilterTags] = useState(getInitialTags(data));

  const blogs = data.allMarkdownRemark.edges
    .filter((e) => {
      if (filterString) {
        return e.node.rawMarkdownBody.includes(filterString);
      }

      return filterTags
        .filter((t) => t.selected)
        .map((t) => t.name)
        .every((t) => e.node.frontmatter.tags.includes(t));
    })
    .map((e) => {
      const { id, timeToRead } = e.node;
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
      };
    });

  return (
    <Layout
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
