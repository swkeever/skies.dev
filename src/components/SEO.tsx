import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { FluidObject } from 'node_modules/gatsby-image/index';
import links from '@utils/links';
import { LayoutContext } from './Layout';

type SEO = {
  title: string;
  description: string;
  canonicalUrl: string;
  image: {
    src: string;
    type: string;
  };
  twitter: string;
  article: boolean;
};

export default function SEO({
  title = '',
  description = '',
  image = null,
  article = false,
  keywords = [],
  schemaMarkup = null,
}: {
  title?: string;
  description?: string;
  image?: FluidObject;
  article?: boolean;
  keywords?: string[];
  schemaMarkup?: any;
}) {
  const { site, logo, avatar } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteUrl
          handle
        }
      }
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(height: 630, width: 1200) {
            src
          }
        }
      }
      avatar: file(relativePath: { eq: "about/me.jpg" }) {
        childImageSharp {
          fixed(height: 400, width: 400) {
            src
          }
        }
      }
    }
  `);
  const { pathname } = useLocation();
  const { lightTheme } = useContext(LayoutContext);

  const withSiteUrl = (path: string): string => `${site.siteMetadata.siteUrl}${path}`;

  const seo: SEO = {
    title: !title
      ? 'Skies by Seattle Software Engineer Sean Keever'
      : `${title} | Skies by Sean Keever`,
    description,
    canonicalUrl: `${site.siteMetadata.siteUrl}${pathname}`,
    image: {
      src: image ? image.src : logo.childImageSharp.fixed.src,
      type: image
        ? image.base64.substring(
          image.base64.indexOf(':') + 1,
          image.base64.indexOf(';'),
        )
        : 'image/jpeg',
    },
    twitter: `@${site.siteMetadata.handle}`,
    article,
  };

  let schema;
  if (!schemaMarkup) {
    schema = {
      '@context': 'https://schema.org/',
      '@type': 'Person',
      name: 'Sean Keever',
      url: links.siteUrl,
      image: links.withSiteUrl(avatar.childImageSharp.fixed.src),
      sameAs: [links.twitter, links.linkedIn, links.github, links.siteUrl],
      jobTitle: 'Software Development Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'OfferUp',
      },
    };
  } else {
    schema = schemaMarkup;
  }

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <html lang="en" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="canonical" href={seo.canonicalUrl} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="description" content={seo.description} />
        <meta name="image" content={withSiteUrl(seo.image.src)} />
        <meta name="twitter:site" content={seo.twitter} />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={withSiteUrl(seo.image.src)} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:widgets:theme"
          content={lightTheme ? 'light' : 'dark'}
        />
        <meta property="og:url" content={seo.canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content="Sean Keever" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={withSiteUrl(seo.image.src)} />
        <meta property="og:image:type" content={seo.image.type} />
        <meta property="og:image:url" content={withSiteUrl(seo.image.src)} />
        <meta property="og:image:alt" content={seo.title} />
        {seo.article && <meta property="og:type" content="article" />}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    </>
  );
}
