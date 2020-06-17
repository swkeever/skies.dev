import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Learn from '../../assets/learn.svg';
import Product from '../../assets/product.svg';
import Button from '../components/Button';
import Section from '../components/home/Section';
import Content from '../components/home/Content';
import routes from '../utils/routes';
import Form from '../components/Form';
import SEO from '../components/SEO';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "product.png" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `);

  const svgStyles = `
    w-full
    h-auto
  `;

  const headerStyles = `
  leading-none
  text-4xl 
  lg:text-5xl
  mb-5
  `;

  return (
    <Layout>
      <SEO
        title="Seattle Software Engineer"
        description="Sean Keever is a software engineer specializing in JavaScript,
    Java, and Python."
        keywords={[
          'Sean Keever',
          'software engineer',
          'Seattle',
          'full stack developer',
        ]}
        image={data.file.childImageSharp.original.src}
      />
      <Section className="pt-4 md:pt-12">
        <Content>
          <h1 className={`${headerStyles} text-onNeutralBg`}>
            Hi,
            {' '}
            <span role="img" aria-label="Waving hand">
              👋
            </span>
            {' '}
            I&apos;m Sean.
          </h1>
          <p className="text-onNeutralBgSoft">
            I&apos;m a software developer, designer, and technology enthusiast
            from Seattle, WA.
          </p>
          <Button
            tag="Link"
            to={routes.resume}
            color="primary"
            className={`
                mt-4
                mb-8
                lg:mt-6
              `}
          >
            Learn more
          </Button>
        </Content>
        <Product className={`${svgStyles} `} />
      </Section>

      <div className="relative bg-primary diagonal-m pt-8 pb-16 md:pt-20 md:pb-20">
        <Section className="md:flex-row-reverse">
          <Content>
            <h2 className={`${headerStyles} mt-8 text-onPrimary`}>
              I like to help people learn.
            </h2>
            <p className="text-onPrimarySoft">
              I write about technology, software engineering, and lessons
              learned in the field.
            </p>
            <Button
              tag="Link"
              to={routes.blogs}
              color="light"
              className="mt-4 mb-8 lg:mt-6"
            >
              Learn more
            </Button>
          </Content>
          <Learn className={`${svgStyles}`} />
        </Section>
      </div>

      <div
        id="contact"
        className="bg-neutralBgSoft pt-8 pb-8 -mt-12 md:pt-0 md:pb-12"
      >
        <Section className="justify-around">
          <Content className="mb-4">
            <h2 className={`${headerStyles} text-onNeutralBg`}>
              Get in touch.
            </h2>
            <p className="text-onNeutralBgSoft">
              If you have any questions, send me a message.
            </p>
          </Content>
          <div className="relative z-30 bg-neutralBg max-w-xl p-4 shadow-2xl rounded-md lg:p-6 lg:-mt-12">
            <Form />
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default IndexPage;
