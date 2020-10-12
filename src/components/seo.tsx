import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { FluidObject } from 'node_modules/gatsby-image/index';
import { withSiteUrl } from '@utils/links';
import routes from '@utils/routes';
import {
  BlogPosting, BreadcrumbList, WebSite, WithContext,
} from 'schema-dts';
import { LayoutContext } from './layout';

export interface SiteInfo {
  siteMetadata: {
    siteUrl: string;
    handle: string;
    title: {
      long: string;
      medium: string;
      short: string;
    };
    description: string;
    lang: string;
  };
}

export const siteMetadata = graphql`
  fragment SiteInfo on Site {
    siteMetadata {
      siteUrl
      handle
      title {
        long
        medium
        short
      }
      description
      lang
    }
  }
`;

export interface Logo {
  childImageSharp: {
    fixed: {
      src: string;
    };
  };
}

export const logoFragment = graphql`
  fragment Logo on File {
    childImageSharp {
      fixed(height: 630, width: 1200) {
        src
      }
    }
  }
`;

export default function SEO({
  title = '',
  description = '',
  image = null,
  keywords = [],
  blogSchema = null,
}: {
  title?: string;
  description?: string;
  image?: FluidObject;
  keywords?: string[];
  blogSchema?: WithContext<BlogPosting>;
}) {
  const { site, logo }: { site: SiteInfo; logo: Logo } = useStaticQuery(graphql`
    query SEO {
      site {
        ...SiteInfo
      }
      logo: file(relativePath: { eq: "logo.jpg" }) {
        ...Logo
      }
    }
  `);
  const { pathname } = useLocation();
  const { lightTheme } = useContext(LayoutContext);
  const isArticle = blogSchema !== null;

  const seo = {
    title: !title
      ? site.siteMetadata.title.long
      : `${title} | ${site.siteMetadata.title.medium}`,
    description,
    canonicalUrl: withSiteUrl(pathname),
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
  };

  const schema: WithContext<WebSite | BreadcrumbList | BlogPosting>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: site.siteMetadata.siteUrl,
      name: site.siteMetadata.title.short,
      description: site.siteMetadata.description,
    },
  ];

  if (!routes.equals(routes.home, pathname)) {
    let itemListElement;
    if (isArticle) {
      itemListElement = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Blog',
          item: withSiteUrl(routes.blog),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: blogSchema.headline,
          item: withSiteUrl(pathname),
        },
      ];
      schema.push(blogSchema);
    } else {
      itemListElement = [
        {
          '@type': 'ListItem',
          position: 1,
          name: title,
          item: withSiteUrl(pathname),
        },
      ];
    }
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    });
  }

  const schemaMarkup = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schema,
  });

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <html lang={site.siteMetadata.lang} />
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
        {isArticle && <meta property="og:type" content="article" />}
        <script type="application/ld+json">{schemaMarkup}</script>
      </Helmet>
    </>
  );
}
