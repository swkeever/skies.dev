import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import routes from '../utils/routes';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultDescription: description
        siteUrl
      }
    }
  }
`;

export default function SEO({
  title,
  description = '',
  article = false,
}: {
  title: string;
  description?: string;
  article?: boolean;
}) {
  const { site }: { site: SiteMetadata } = useStaticQuery(query);
  const { pathname } = useLocation();

  const seo = {
    title,
    description: description || site.siteMetadata.defaultDescription,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet titleTemplate="%s - Sean Keever" title={seo.title}>
      <html lang="en" />
      <meta charSet="utf-8" />

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
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      {article && <meta property="og:type" content="article" />}

      <link rel="sitemap" type="application/xml" href={routes.sitemap} />
    </Helmet>
  );
}

type SiteMetadata = {
  siteMetadata: {
    defaultDescription: string;
    siteUrl: string;
  };
};
