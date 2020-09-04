import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from '@reach/router';
import routes from '@utils/routes';
import tw from '@utils/tailwind';
import globalStyles from '@styles/index';

export default function About({ color = 'footer' }) {
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

  const styles = {
    footer: {
      bg: 'bg-footerBg',
      backgroundImage: 'bg-primaryBold',
      image: 'border-gray-700',
      preHeader: 'text-gray-300',
      header: 'text-light',
      p: 'text-gray-300',
      button: tw('text-gray-800 hover:text-gray-600', 'bg-gray-100'),
    },
    neutral: {
      bg: 'bg-neutralBg',
      backgroundImage: 'bg-primaryBold',
      preHeader: 'text-neutral',
      header: 'text-onNeutralBg',
      p: 'text-neutral',
      button: tw(
        'text-onPrimarySoft hover:text-onPrimary',
        'bg-primary hover:bg-primaryBold',
      ),
    },
  }[color];

  return (
    <>
      <section
        className={tw(
          'relative',

          styles.bg,
          globalStyles.transitions,
        )}
      >
        <div
          className={tw(
            'grid grid-cols-1 md:grid-cols-2',
            'max-w-screen-lg',
            'mx-auto',
            'py-16 px-4',
          )}
        >
          <Img
            className={tw(
              'w-64 h-64 lg:w-84 lg:h-84',
              'shadow-lg',
              'mx-auto',
              'rounded-full',
              'object-cover',
              'mb-12 md:mb-0',
            )}
            fluid={data.file.childImageSharp.fluid}
            alt="Sean Keever"
          />
          <div className="flex flex-col justify-center">
            <div
              className={tw(
                'text-base leading-6 font-semibold uppercase tracking-wider',
                styles.preHeader,
                globalStyles.transitions,
              )}
            >
              About the author
            </div>
            <h2
              className={tw(
                'mt-2',
                styles.header,
                'text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10',
                globalStyles.transitions,
              )}
            >
              Hi, I&apos;m Sean Keever.
            </h2>
            <p className={tw('mt-3', 'text-lg leading-7', styles.p)}>
              I&apos;m a full stack developer from Seattle, WA. I&apos;m
              interested in helping you become a better software developer
              through this blog. Tune in if you&apos;re interested in web
              development and software engineering.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-full shadow">
                <Link
                  to={routes.about}
                  className={tw(
                    'inline-flex items-center justify-center',
                    'px-5 py-3',
                    'border border-transparent',
                    'text-base leading-6 font-semibold',
                    'rounded-full',
                    styles.button,
                    'focus:outline-none focus:shadow-outline',
                    globalStyles.transitions,
                  )}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
