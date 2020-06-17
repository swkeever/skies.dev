import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Lost from '../../assets/lost.svg';
import Layout from '../components/Layout';
import Container from '../components/Container';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lost.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Page not found"
        image={data.file.childImageSharp.original.src}
        keywords={['Page not found', '404']}
        description="The page you requested does not exist on our server."
      />
      <Container className="p-4">
        <h1
          className={`
        text-lg
        md:text-xl
        lg:text-2xl
        text-onNeutralBgSoft
        text-center
        mb-4
        mt-16
        md:mt-32
        lg:mt-24
      `}
        >
          The page you requested doesn&apos;t exist.
        </h1>
        <div className="w-11/12 md:w-9/12 max-w-2xl mx-auto">
          <Lost className="w-full h-full" />
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
