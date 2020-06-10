import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogHeader from '../components/blog/BlogHeader';
import Content from '../components/blog/Content';
import CallToAction from '../components/blog/CallToAction';
import links from '../utils/links';

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
      <BlogHeader title={frontmatter.title} date={frontmatter.date} />
      <Content html={html} />
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
