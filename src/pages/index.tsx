import React from 'react';
import Layout from '../components/layout';
import Code from '../../assets/code.svg';
import Building from '../../assets/building.svg';
import Product from '../../assets/product.svg';
import Button from '../components/Button';
import Section from '../components/pages/home/Section';
import Content from '../components/pages/home/Content';
import DiagonalBg from '../components/pages/home/DiagonalBg';
import PrimaryBg from '../components/pages/home/PrimaryBg';
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
            I&apos;m Sean.
          </h1>
          <p className="text-onNeutralBgSoft">
            I&apos;m a software developer, designer, and technology enthusiast
            from Seattle, WA.
          </p>
        </Content>
        <Code className={svgStyles} />
      </Section>

      <DiagonalBg>
        <Section className="md:flex-row-reverse">
          <Content>
            <h2 className="text-onPrimaryBg">I like to build things.</h2>
            <p className="text-onPrimaryBgSoft">
              From client facing applications to the platforms that serve them,
              I love creating and shipping quality software.
            </p>
          </Content>
          <Building className={svgStyles} />
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
            <h2>Let&apos;s build your product.</h2>
            <p className="text-onPrimarySoft">
              My full stack web development experience can help you get your
              project off the ground.
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
