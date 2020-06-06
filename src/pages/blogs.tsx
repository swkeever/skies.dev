import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/blogs/header';
import Filters from '../components/blogs/filter';
import BlogList from '../components/blogs/list';

type BlogList = {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string
          slug: string
          date: string
          tags: string[]
          image?: string
        }
        timeToRead: number
        id: string
        excerpt: string
        rawMarkdownBody: string
      }
    }[]
  }
}

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

export default function BlogsPage() {
  const data: BlogList = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
              tags
            }
            id
            timeToRead
            rawMarkdownBody
            excerpt
          }
        }
      }
    }
  `);

  const [filterString, setFilterString] = useState('');
  const [filterTags, setFilterTags] = useState(getInitialTags(data));

  const blogs = data.allMarkdownRemark.edges.filter((e) => {
    if (filterString) {
      return e.node.rawMarkdownBody.includes(filterString);
    }

    return filterTags
      .filter((t) => t.selected)
      .map((t) => t.name)
      .every((t) => e.node.frontmatter.tags.includes(t));
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
