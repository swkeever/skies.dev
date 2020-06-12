import React from 'react';
import Layout from '../components/Layout';
import Code from '../../assets/code.svg';
import Learn from '../../assets/learn.svg';
import Product from '../../assets/product.svg';
import Button from '../components/Button';
import Section from '../components/home/Section';
import Content from '../components/home/Content';
import DiagonalBg from '../components/home/DiagonalBg';
import PrimaryBg from '../components/home/PrimaryBg';
import routes from '../utils/routes';

const IndexPage = () => {
  const svgStyles = `
    w-11/12
    h-auto
    mt-8
    mb-8
    md:mb-0
    md:w-7/12
    lg:w-9/12
  `;

  return (
    <Layout title="Home">
      <Section
        className={`
        mt-8
      `}
      >
        <Content>
          <h1 className="text-onNeutralBg">
            Hi,
            {' '}
            <span role="img" aria-label="Waving hand">
              👋
            </span>
            {' '}
            I&apos;m Sean
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
        <Code className={svgStyles} />
      </Section>

      <DiagonalBg>
        <Section className="md:flex-row-reverse">
          <Content>
            <h2 className="text-onPrimaryBg">I like to help people learn</h2>
            <p className="text-onPrimaryBgSoft">
              I write about technology, software engineering, and lessons
              learned in the field.
            </p>
            <Button
              tag="Link"
              to={routes.blogs}
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
          <Learn className={`${svgStyles} -mt-2`} />
        </Section>
      </DiagonalBg>

      <PrimaryBg>
        <Section
          className={`
          mt-4
          md:-mt-20
        `}
        >
          <Content>
            <h2>Get in touch</h2>
            <p className="text-onPrimarySoft">
              Do you need a developer for your next project?
            </p>
            <Button
              tag="Link"
              to={routes.contact}
              color="light"
              className={`
                mt-4
                mb-8
                lg:mt-6
              `}
            >
              Contact me
            </Button>
          </Content>
          <Product className={svgStyles} />
        </Section>
      </PrimaryBg>
    </Layout>
  );
};

export default IndexPage;
