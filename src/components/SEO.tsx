import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;

export default function SEO({
  title = '',
  description = '',
  article = false,
}: {
  title?: string;
  description?: string;
  article?: boolean;
}) {
  const { site }: { site: SiteMetadata } = useStaticQuery(query);
  const { pathname } = useLocation();

  const seo = {
    title: title || site.siteMetadata.defaultTitle,
    description: description || site.siteMetadata.defaultDescription,
    url: `${site.siteMetadata.siteUrl}${pathname}`,
  };

  return (
    <Helmet titleTemplate="%s - Sean Keever" title={seo.title}>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      {article && <meta property="og:type" content="article" />}
    </Helmet>
  );
}

type SiteMetadata = {
  siteMetadata: {
    defaultTitle: string;
    defaultDescription: string;
    siteUrl: string;
  };
};
