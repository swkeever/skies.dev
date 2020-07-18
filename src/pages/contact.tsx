import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Form from '../components/Form';
import Container from '../components/Container';
import { globalStyles } from '../styles';

export default function ContactPage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "message.png" }) {
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
        title="Contact"
        image={data.file.childImageSharp.fluid}
        imageDims={{
          width: data.file.childImageSharp.fluid.presentationWidth,
          height: data.file.childImageSharp.fluid.presentationHeight,
        }}
        keywords={['Contact', 'Sean Keever', 'Email']}
        description="Use the contact form to contact Sean Keever."
      />
      <div
        className={`absolute top-0 left-0 h-32 lg:h-64 lg:py-48 w-full bg-primary diagonal-t 
      z-0
      ${globalStyles.transitions.colors}
      `}
      />

      <div
        className={`${globalStyles.transitions.colors} bg-neutralBgSoft pt-32 my-auto flex-grow`}
      >
        <Container className="px-4 pb-4 md:pb-12">
          <div className="bg-neutralBg -mt-16 lg:mt-0 rounded-md z-20 relative pt-4 pb-5 mx-auto px-4 max-w-screen-sm h-full shadow-2xl">
            <h1 className="font-semibold text-xl mb-4 text-onNeutral">
              Contact
            </h1>
            <Form />
          </div>
        </Container>
      </div>

      {/* <div className="bg-primary diagonal-b pt-24 md:pt-40 xl:pt-32 pb-0" /> */}
    </>
  );
}
