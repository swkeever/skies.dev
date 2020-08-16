import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Lost from '../../assets/lost.svg';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lost.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `);

  return (
    <>
      <SEO
        title="Page not found"
        image={data.file.childImageSharp.fluid}
        imageDims={{
          width: data.file.childImageSharp.fluid.presentationWidth,
          height: data.file.childImageSharp.fluid.presentationHeight,
        }}
        keywords={['Page not found', '404']}
        description="The page you requested does not exist on our server."
      />
      <section className="max-w-screen-xl mx-auto p-4 my-auto">
        <h1
          className={`
            text-lg
            md:text-xl
            text-neutralSoft
            text-center
            mb-4 xl:mb-8
          `}
        >
          404 &ndash; Page not found.
        </h1>
        <div className="w-11/12 md:w-9/12 max-w-6xl mx-auto">
          <Lost className="w-full h-full" />
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
