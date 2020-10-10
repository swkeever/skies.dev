import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from '@components/blog-card';

export default function BlogCardExample() {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          mdx(fields: { slug: { regex: "/semantic-html/" } }) {
            frontmatter {
              date {
                published
                modified
              }
              description
              title
              image {
                src {
                  local {
                    childImageSharp {
                      fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
            fields {
              category {
                name
                className
              }
            }
            id
            rawBody
            slug
            timeToRead
          }
        }
      `}
      render={(data) => (
        <section className="my-8 max-w-xs mx-auto">
          <BlogCard blog={data} />
        </section>
      )}
    />
  );
}
