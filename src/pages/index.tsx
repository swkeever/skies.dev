import React from 'react';
import { Link } from '@reach/router';
import globalStyles from '@styles/index';
import { useStaticQuery, graphql } from 'gatsby';
import BlogCard from '@components/BlogCard';
import { FaArrowRight } from 'react-icons/fa';
import Hero from '@components/Hero';
import routes from '../utils/routes';
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
        title="Sean Keever"
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
        className={`relative pb-24 pt-12 xl:pt-20
      ${globalStyles.transitions}
      `}
      >
        <section
          className={`
        mx-auto
        max-w-screen-2xl flex flex-col items-center px-4`}
        >
          <h2
            className={`text-onNeutralBg font-extrabold text-3xl mb-3
          ${globalStyles.transitions}
          `}
          >
            Recent publications
          </h2>
          <p
            className={`text-neutral text-lg xl:text-xl text-center max-w-lg mb-16
          ${globalStyles.transitions}
          `}
          >
            I write articles on software engineering, computer science, and
            lessons learned in industry.
          </p>
          <ul
            className={`
          grid 
          grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-5
          `}
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </ul>
          <Link
            className={`
            text-onNeutralBg hover:text-onNeutralBgLinkHover 
            font-semibold
            mt-8 ml-auto
            text-lg
            
              ${globalStyles.transitions}
              `}
            to={routes.blog}
          >
            See all publications
            <FaArrowRight
              className={`
                inline-block 
                ml-1 mb-1
              text-xl
            `}
            />
          </Link>
        </section>
      </div>

      <div
        id="contact"
        className={`${globalStyles.transitions} bg-neutralBg py-24`}
      >
        <section className="max-w-screen-md mx-auto px-4">
          <h2
            className={`
            ${globalStyles.transitions}
            font-extrabold
            text-onNeutralBg
            text-3xl
            mb-3
            `}
          >
            Contact
          </h2>
          <p
            className={`text-onNeutralBgSoft
            text-lg mb-16
            max-w-lg
            
            ${globalStyles.transitions}
            `}
          >
            If you would like to get in touch with me, contact me here. Your
            message will go straight to my email.
          </p>
          <Form />
        </section>
      </div>
      <Newsletter showTopics color="primarySoft" />
    </div>
  );
};

export default IndexPage;
