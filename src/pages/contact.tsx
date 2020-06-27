import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Form from '../components/Form';
import Container from '../components/Container';
import Message from '../../assets/message.svg';

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
    <Layout className="bg-neutralBgSoft">
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
      <div className="bg-primary diagonal-t pb-24 md:pb-40 xl:pb-56" />
      <Container className="-mt-4 px-4 md:px-8 pb-4 md:pt-12 md:pb-12 flex flex-col md:items-center md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-onNeutralBg font-bold text-4xl lg:text-5xl mt-0">
            Contact me
          </h1>
          <p className="text-onNeutralBgSoft mt-1 mb-4 text-lg lg:text-xl">
            Your message will be sent to my email.
          </p>
          <Message className="self-center md:-mt-5 lg:-mt-20 w-full h-auto hidden md:block" />
        </div>
        <div className="bg-neutralBg mt-0 rounded-md pt-4 pb-5 px-4 max-w-4xl h-full shadow-2xl">
          <Form />
        </div>
      </Container>
      <div className="bg-primary diagonal-b pt-24 md:pt-40 xl:pt-56 pb-0" />
    </Layout>
  );
}
