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
              dateModified(formatString: "MMMM DD, YYYY")
              datePublished(formatString: "MMMM DD, YYYY")
              description
              title
              imageUrl
              imagePhotographer
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
              dateModified,
              datePublished,
              description,
              imageUrl,
              imagePhotographer,
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
          <section className="my-8 max-w-xs mx-auto">
            <BlogCard
              blog={{
                id,
                timeToRead,
                title,
                slug: `blog/${slug}`,
                description,
                date: {
                  modified: dateModified,
                  published: datePublished,
                },
                category: blogCategories[category],
                body: rawBody,
                image: {
                  fluid,
                  photographer: imagePhotographer,
                  src: imageUrl,
                },
              }}
            />
          </section>
        );
      }}
    />
  );
}
