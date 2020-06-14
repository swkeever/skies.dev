/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogHeader from '../components/blog/BlogHeader';
import CallToAction from '../components/blog/CallToAction';
import links from '../utils/links';
import BlogContainer from '../components/blog/BlogContainer';

export default function Blog({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: Markdown;
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const filepath = markdownRemark.fileAbsolutePath.split('/src/')[1];

  return (
    <Layout
      className={`
        bg-neutralBg
        text-onNeutralBg
    `}
      title={frontmatter.title}
      description={frontmatter.description}
    >
      <BlogHeader
        title={frontmatter.title}
        date={frontmatter.date}
        timeToRead={markdownRemark.timeToRead}
      />
      <BlogContainer className="lg:py-2 mt-8 lg:mt-0">
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </BlogContainer>
      <CallToAction editUrl={links.editOnGithub(filepath)} />
    </Layout>
  );
}

type Markdown = {
  markdownRemark: {
    html: string;
    excerpt: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      description: string;
    };
    fileAbsolutePath: string;
  };
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
      fileAbsolutePath
    }
  }
`;
