import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import globalStyles from '@styles/index';
import Logo from '@assets/logo.svg';
import { Link } from '@reach/router';
import siteConfig from '../../site.config';
import routes from '../utils/routes';

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
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

  return (
    <>
      <section
        className={`
        bg-primary
        ${globalStyles.transitions}
      `}
      >
        <div
          className={`px-4 z-10 relative max-w-xl mx-auto
        py-8 lg:py-12 xl:py-16
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
    </>
  );
}
