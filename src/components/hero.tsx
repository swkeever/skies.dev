import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import globalStyles from '@styles/index';
import Logo from '@assets/logo.svg';
import { Link } from '@reach/router';
import tw from '@utils/tailwind';
import routes from '../utils/routes';
import { SiteInfo } from './seo';

interface Avatar {
  childImageSharp: {
    fluid: FluidObject;
  };
}

export const avatarFragment = graphql`
  fragment Avatar on File {
    childImageSharp {
      fluid(maxWidth: 1024) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

interface QueryData {
  site: SiteInfo;
  file: Avatar;
}

export default function Hero() {
  const data: QueryData = useStaticQuery(graphql`
    query {
      site {
        ...SiteInfo
      }
      file(relativePath: { eq: "sean-keever.jpg" }) {
        ...Avatar
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
      p: 'text-neutral',
      a: 'text-onNeutralBgLink hover:text-onNeutralBgLinkHover',
    },
  };

  const colors = styles.primary;

  return (
    <>
      <section className={tw(colors.bg, globalStyles.transitions)}>
        <div
          className={tw(
            'px-4 py-12 lg:py-20 xl:py-24',
            'z-10 relative',
            'max-w-xl',
            'mx-auto',
            'flex items-center justify-start',
          )}
        >
          <Img
            className={tw(
              globalStyles.transitions,
              'flex-shrink-0',
              'rounded-full',
              'w-24 h-24 md:w-32 md:h-32',
            )}
            fluid={avatarFluid}
            alt="A picture of Sean Keever"
          />
          <header className="flex-grow ml-4">
            <h1>
              <span className="sr-only">
                {data.site.siteMetadata.title.long}
              </span>
              <Logo
                className={tw(
                  'w-full h-auto',
                  colors.logo,
                  'fill-current',
                  globalStyles.transitions,
                )}
              />
            </h1>
            <p className={tw(globalStyles.transitions, colors.p)}>
              A blog by
              {' '}
              <Link
                to={routes.about}
                className={tw(
                  globalStyles.transitions,
                  'font-semibold',
                  colors.a,
                )}
              >
                Sean Keever
              </Link>
              .
            </p>
          </header>
        </div>
      </section>
    </>
  );
}
