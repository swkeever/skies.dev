import globalStyles from '@styles/index';
import React from 'react';
import { Link } from '@reach/router';
import Img from 'gatsby-image';
import tw from '@utils/tailwind';
import { BlogMeta } from 'graphql-types';
import { graphql } from 'gatsby';

export const blogCardFragment = graphql`
  fragment BlogCard on Mdx {
    id
    timeToRead
    fields {
      slug
      category {
        name
        className
      }
    }
    frontmatter {
      title
      ...BlogDate
      description
      image {
        src {
          local {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

interface PropTypes {
  blog: BlogMeta;
}

export default function BlogCard({
  blog: {
    timeToRead,
    fields: { slug, category },
    frontmatter: {
      date: { modified },
      title,
      description,
      image: {
        src: {
          local: {
            childImageSharp: { fluid },
          },
        },
      },
    },
  },
}: PropTypes) {
  return (
    <Link
      to={slug}
      className={tw(
        globalStyles.outline,
        globalStyles.transitions,
        'sm:rounded-lg',
        'sm:hover:shadow-lg',
        'overflow-hidden',
        'h-full',
      )}
    >
      <article className={tw('h-full', 'flex flex-col')}>
        <figure className="flex-shrink-0">
          <Img className="object-cover w-full h-48" fluid={fluid} alt={title} />
        </figure>
        <section className="flex flex-col justify-between flex-1 p-3 bg-neutralBg">
          <header className="flex-1">
            <span
              className={tw(
                category.className,
                globalStyles.transitions,
                'font-medium',
                'px-2 py-px',
                'rounded-full',
              )}
            >
              {category.name}
            </span>
            <h2 className="mt-2 text-2xl font-semibold leading-7 text-onNeutralBgSofter">
              {title}
            </h2>
          </header>
          <p className="mt-3 text-base leading-6 text-neutralBold mt-6">
            {description}
          </p>
          <dl className="flex items-center mt-6 text-sm leading-5 text-neutral">
            <div>
              <dt className="sr-only">Date modified</dt>
              <dd>
                <time dateTime={modified}>{modified}</time>
              </dd>
            </div>
            <span aria-hidden="true" className="mx-1">
              &middot;
            </span>
            <div>
              <dt className="sr-only">Time to read</dt>
              <dd>
                {timeToRead}
                &nbsp;min read
              </dd>
            </div>
          </dl>
        </section>
      </article>
    </Link>
  );
}
