import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import globalStyles from '@styles/index';
import Logo from '@assets/logo.svg';
import { Link } from '@reach/router';
import classNames from '@utils/class-names';
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

  const styles = {
    primary: {
      bg: 'bg-primary',
      logo: 'text-onPrimary',
      input: 'shadow-lg',
      p: 'text-onPrimarySoft',
      a: 'text-onPrimary hover:text-onPrimaryBgLinkHover',
    },
    neutral: {
      bg: 'bg-neutralBg',
      logo: 'text-primaryBold',
      input: 'shadow-inner',
      p: 'text-neutralSoft',
      a: 'text-onNeutralBgLink hover:text-onNeutralBgLinkHover',
    },
  };

  const colors = styles.primary;

  return (
    <>
      <section className={classNames(colors.bg, globalStyles.transitions)}>
        <div
          className={`px-4 z-10 relative max-w-xl mx-auto
        py-12 lg:py-20 xl:py-24
        flex items-center justify-start
        `}
        >
          <Img
            className={classNames(
              globalStyles.transitions,
              'flex-shrink-0',
              'rounded-full',
              'w-24 h-24 md:w-32 md:h-32',
              'shadow-lg',
            )}
            fluid={avatarFluid}
            alt="A picture of Sean Keever"
          />
          <div className="flex-grow ml-4">
            <h1 className="">
              <span className="sr-only">{siteConfig.siteTitle}</span>
              <Logo
                className={classNames(
                  'w-full h-auto',
                  colors.logo,
                  'fill-current',
                  globalStyles.transitions,
                )}
              />
            </h1>
            <p className={classNames(globalStyles.transitions, colors.p)}>
              A website by
              {' '}
              <Link
                to={routes.about}
                className={classNames(
                  globalStyles.transitions,
                  'font-semibold',
                  colors.a,
                )}
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
