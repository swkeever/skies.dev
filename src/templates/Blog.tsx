import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/pages/blog/Header';
import Content from '../components/pages/blog/Content';
import CallToAction from '../components/pages/blog/CallToAction';
import ShareCallToAction from '../components/pages/blog/ShareCallToAction';

export default function Blog({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: Markdown
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout
      className={`
        bg-neutralBg
        text-onNeutralBg
    `}
      title={frontmatter.title}
      description={frontmatter.description}
    >
      <Header title={frontmatter.title} date={frontmatter.date} />
      <ShareCallToAction />
      <Content html={html} />
      <CallToAction
        editUrl={`https://github.com/swkeever/swkeever.github.io/edit/master/src/${
          markdownRemark.fileAbsolutePath.split('/src/')[1]
        }`}
      />
    </Layout>
  );
}

type Markdown = {
  markdownRemark: {
    html: string
    excerpt: string
    frontmatter: {
      date: string
      slug: string
      title: string
      description: string
    }
    fileAbsolutePath: string
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
        description
      }
      fileAbsolutePath
    }
  }
`;
