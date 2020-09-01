import React from 'react';
import globalStyles from '@styles/index';
import { useStaticQuery, graphql } from 'gatsby';
import Hero from '@components/Hero';
import tw from '@utils/tailwind';
import BlogDisplay from '@components/BlogDisplay';
import Form from '../components/Form';
import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';
import { gqlResponseToBlogs, Blog } from './blog';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 4
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/content/" } }
      ) {
        nodes {
          frontmatter {
            title
            date
            category
            description
            image {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          id
          timeToRead
          rawBody
        }
      }
    }
  `);

  const blogs: Blog[] = gqlResponseToBlogs(data);

  return (
    <div
      className={`
    ${globalStyles.transitions}
    bg-neutralBgSoft`}
    >
      <SEO
        title="A website by Sean Keever"
        description="skies.dev is a fully open-source blog on software engineering curated by Sean Keever."
        keywords={[
          'Sean Keever',
          'software engineer',
          'Seattle',
          'full stack developer',
        ]}
      />
      <Hero />

      <div
        className={tw(
          'relative',
          'pb-24 pt-12 xl:pt-20',
          globalStyles.transitions,
        )}
      >
        <BlogDisplay
          blogs={blogs}
          title="Recent publications"
          subtitle="I write articles on software engineering, computer science, and lessons
          learned in industry."
        />
      </div>

      <div
        id="contact"
        className={`${globalStyles.transitions} bg-neutralBg py-24`}
      >
        <section className="max-w-screen-md mx-auto px-4">
          <h2
            className={tw(
              globalStyles.transitions,
              'font-extrabold',
              'text-onNeutralBg',
              'text-3xl',
              'mb-3',
            )}
          >
            Contact
          </h2>
          <p
            className={tw(
              'text-onNeutralBgSoft',
              'text-xl',
              'mb-16',
              'max-w-lg',
              globalStyles.transitions,
            )}
          >
            If you would like to get in touch with me, contact me here. Your
            message will go straight to my email.
          </p>
          <Form />
        </section>
      </div>
      <Newsletter showTopics color="neutral" />
    </div>
  );
};

export default IndexPage;
