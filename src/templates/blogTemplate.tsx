/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import Layout from '../components/Layout';
import BlogHeader from '../components/blog/BlogHeader';
import CallToAction from '../components/blog/CallToAction';
import links from '../utils/links';
import BlogContainer from '../components/blog/BlogContainer';
import SEO from '../components/SEO';
import Connection from '../../assets/connection.svg';

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
    >
      <SEO
        article
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.tags}
        image={frontmatter.image.childImageSharp.original.src}
      />
      <BlogHeader
        title={frontmatter.title}
        date={frontmatter.date}
        timeToRead={markdownRemark.timeToRead}
      />

      <BlogContainer className="lg:py-2 mt-8 lg:mt-0">
        <Img
          className="w-64 ml-auto -mt-32 mr-2 relative z-10"
          fluid={frontmatter.image.childImageSharp.fluid}
          alt={frontmatter.title}
        />
        <article className="mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        <Connection className="ml-auto mt-8 relative z-10 w-7/12 h-full " />
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
      tags: string[];
      image: {
        childImageSharp: {
          fluid: FluidObject;
          original: {
            src: string;
          };
        };
      };
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
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
      }
      fileAbsolutePath
    }
  }
`;
