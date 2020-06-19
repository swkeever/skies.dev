import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import routes from '../utils/routes';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        handle
      }
    }
  }
`;

type SEO = {
  title: string;
  description: string;
  url: string;
  image: string;
  twitter: string;
  isArticle: boolean;
};

export default function SEO({
  title,
  description,
  image,
  article = false,
  keywords,
}: {
  title: string;
  description: string;
  image: string;
  article?: boolean;
  keywords: string[];
}) {
  const { site }: { site: SiteMetadata } = useStaticQuery(query);
  const { pathname } = useLocation();

  const seo: SEO = {
    title,
    description,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
    image,
    twitter: `@${site.siteMetadata.handle}`,
    isArticle: article,
  };

  const template = pathname === routes.home ? 'Sean Keever | %s' : '%s | Sean Keever';

  return (
    <Helmet titleTemplate={template} title={seo.title}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={seo.url} />
      <meta name="generator" content="Sean Keever on Gatsby!" />

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
      <meta name="image" content={seo.image} />

      {/* Facebook metadata */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content="Sean Keever" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content={seo.title} />
      {seo.isArticle && <meta property="og:type" content="article" />}

      {/* Twitter metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={seo.twitter} />
      <meta name="twitter:creator" content={seo.twitter} />
    </Helmet>
  );
}

type SiteMetadata = {
  siteMetadata: {
    siteUrl: string;
    handle: string;
  };
};
