import React, { ReactNode } from 'react';
import Learn from '../../assets/learn.svg';
import Product from '../../assets/product.svg';
import Button from '../components/Button';
import routes from '../utils/routes';
import Form from '../components/Form';
import SEO from '../components/SEO';
import ExternalLink from '../components/ExternalLink';
import { globalStyles } from '../styles';
import Container from '../components/Container';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

function Section({ children, className = '' }: SectionProps) {
  return (
    <Container>
      <section
        className={`
          flex
          flex-col
          text-base
          lg:text-lg
          px-4
          md:px-6
          md:items-center
          md:flex-row
          
          ${className}
        `}
      >
        {children}
      </section>
    </Container>
  );
}

const IndexPage = () => {
  const svgStyles = `
    w-full
    h-auto
  `;

  const headerStyles = `
  leading-none
  text-3xl 
  font-bold
  lg:text-5xl
  mb-5
  `;

  return (
    <>
      <SEO
        title="About"
        description="skies.dev is a fully open-source blog on software engineering curated by Sean Keever."
        keywords={[
          'Sean Keever',
          'software engineer',
          'Seattle',
          'full stack developer',
        ]}
      />
      <Section className=" pt-4 md:pt-12 ">
        <div className="md:w-7/12">
          <h1 className={`${headerStyles} text-onNeutralBg`}>
            Hi,
            {' '}
            <span className="mr-2" role="img" aria-label="Waving hand">
              👋
            </span>
            I&apos;m Sean.
          </h1>
          <p className="text-onNeutralBgSoft">
            I&apos;m a software engineer, designer, and technology enthusiast
            from Seattle, WA. I&apos;m currently working on search at
            {' '}
            <ExternalLink
              className="border-b pb-1 text-onNeutralBgLink text-onNeutralBgLink border-onNeutralBgLink hover:text-onNeutralBgLinkHover"
              href="https://offerup.com"
            >
              OfferUp
            </ExternalLink>
            .
          </p>
        </div>
        <Product className={`${svgStyles} mt-6`} />
      </Section>

      <div
        className={`relative bg-primary diagonal-m pt-8 pb-16 md:pt-20 md:pb-20
      ${globalStyles.transitions}
      `}
      >
        <Section className="md:flex-row-reverse">
          <div className="md:w-7/12">
            <h2 className={`${headerStyles} mt-8 text-onPrimary`}>
              I like to help people learn.
            </h2>
            <p className="text-onPrimarySoft">
              I write articles on software engineering, web development, and
              whatever else I&apos;m thinking about.
            </p>
            <Button
              tag="Link"
              to={routes.home}
              color="light"
              className="mt-4 mb-8 lg:mt-6"
            >
              See the blog
            </Button>
          </div>
          <Learn className={`${svgStyles}`} />
        </Section>
      </div>

      <div
        id="contact"
        className={`${globalStyles.transitions} bg-neutralBgSoft  pt-12 pb-8 -mt-12 md:pt-0 md:pb-12`}
      >
        <Section className="md:justify-around">
          <div className="mb-4">
            <h2 className={`${headerStyles} text-onNeutralBg`}>
              Get in touch.
            </h2>
            <p className="text-onNeutralBgSoft">
              If you have any questions, send me a message.
            </p>
          </div>
          <div className="relative z-30 bg-neutralBg max-w-xl p-4 shadow-2xl rounded-md lg:p-6 lg:-mt-12">
            <Form />
          </div>
        </Section>
      </div>
    </>
  );
};

export default IndexPage;
