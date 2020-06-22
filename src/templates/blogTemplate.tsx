/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import BlogHeader from '../components/article/BlogHeader';
import CallToAction from '../components/article/CallToAction';
import links from '../utils/links';
import BlogContainer from '../components/article/BlogContainer';
import SEO from '../components/SEO';
import Connection from '../../assets/connection.svg';

export default function Blog({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: any;
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
        image={frontmatter.socialImage.childImageSharp.original.src}
      />
      <BlogHeader
        title={frontmatter.title}
        date={frontmatter.date}
        timeToRead={markdownRemark.timeToRead}
      />

      <BlogContainer>
        <Img
          className="w-48 md:w-64 ml-auto -mt-24 md:-mt-32 lg:-mt-40 lg:w-5/12 mr-2 relative z-10"
          fluid={frontmatter.siteImage.childImageSharp.fluid}
          alt={frontmatter.title}
        />
        <article className="mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        <Connection className="ml-auto mt-8 md:mr-8 relative z-10 w-7/12  h-full " />
      </BlogContainer>

      <CallToAction editUrl={links.editOnGithub(filepath)} />
    </Layout>
  );
}

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
        siteImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialImage {
          childImageSharp {
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
