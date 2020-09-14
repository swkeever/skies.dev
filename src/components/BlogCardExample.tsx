import React from 'react';
import blogCategories from '@utils/blog-categories';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from './BlogCard';

export default function BlogCardExample() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          mdx(fields: { slug: { regex: "/semantic-html/" } }) {
            frontmatter {
              category
              date(formatString: "MMMM DD, YYYY")
              description
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            id
            rawBody
            slug
            timeToRead
          }
        }
      `}
      render={(data) => {
        const {
          mdx: {
            frontmatter: {
              category,
              date,
              description,
              image: {
                childImageSharp: { fluid },
              },
              title,
            },
            id,
            rawBody,
            slug,
            timeToRead,
          },
        } = data;
        return (
          <BlogCard
            blog={{
              id,
              timeToRead,
              title,
              slug: `blog/${slug}`,
              description,
              date,
              category: blogCategories[category],
              body: rawBody,
              image: fluid,
            }}
          />
        );
      }}
    />
  );
}
