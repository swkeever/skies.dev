import React from 'react';
import { Link } from '@reach/router';
import globalStyles from '@styles/index';
import Logo from '@assets/logo.svg';
import { useStaticQuery, graphql } from 'gatsby';
import BlogCard from '@components/BlogCard';
import Img, { FluidObject } from 'gatsby-image';
import { FaArrowRight } from 'react-icons/fa';
import routes from '../utils/routes';
import Form from '../components/Form';
import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';
import siteConfig from '../../site.config';
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
      file(relativePath: { eq: "about/me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const avatarFluid: FluidObject = data.file.childImageSharp.fluid;

  const blogs: Blog[] = gqlResponseToBlogs(data);

  return (
    <>
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

      <section
        className={`
        bg-primary
        ${globalStyles.transitions}
      `}
      >
        <div
          className={`px-4 z-10 relative max-w-xl mx-auto
        mt-16 md:-mb-4 xl:-mb-16 2xl:-mb-48
        flex items-center justify-start

        `}
        >
          <Img
            className={`
            ${globalStyles.transitions}
            flex-shrink-0 
            rounded-full 
            w-24 h-24 md:w-32 md:h-32 
            shadow-lg
            `}
            fluid={avatarFluid}
            alt="A picture of Sean Keever"
          />
          <div className="flex-grow ml-4">
            <h1 className="">
              <span className="sr-only">{siteConfig.siteTitle}</span>
              <Logo
                className={`w-full h-auto text-onPrimary fill-current
              ${globalStyles.transitions}
              `}
              />
            </h1>
            <p
              className={`
              ${globalStyles.transitions}
              text-onPrimarySoft
            `}
            >
              A website by
              {' '}
              <Link
                to={routes.about}
                className={`
              ${globalStyles.transitions}
              text-onPrimary hover:text-onPrimarySoft
              font-semibold

              `}
              >
                Sean Keever
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Wave! */}
      <div
        className={`bg-neutralBgSoft flex-grow-0 relative z-0 ${globalStyles.transitions}`}
      >
        <svg
          className={`text-primary fill-current h-auto ${globalStyles.transitions}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 253"
        >
          <path
            fillOpacity="1"
            d="M0,128L40,144C80,160,160,192,240,197.3C320,203,400,181,480,165.3C560,149,640,139,720,138.7C800,139,880,149,960,176C1040,203,1120,245,1200,250.7C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>

      <div
        className={`relative bg-neutralBgSoft pb-24 pt-16 2xl:pt-0
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
                inline ml-1 mb-px
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
    </>
  );
};

export default IndexPage;
