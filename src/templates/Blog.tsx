import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/templates/blog/Header';
import Content from '../components/templates/blog/Content';
import CallToAction from '../components/templates/blog/CallToAction';

export default function Blog({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: Markdown
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Header title={frontmatter.title} date={frontmatter.date} />
      <Content html={html} />
      <CallToAction />
    </Layout>
  );
}

type Markdown = {
  markdownRemark: {
    html: string
    frontmatter: {
      date: string
      slug: string
      title: string
    }
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
