import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import routes from '../utils/routes';
import { BlogFrontmatter } from '../pages/blog';
import config from '../../site.config';

type SchemaOrgType = {
  author: {
    name: string;
  };
  canonicalUrl: string;
  datePublished?: string;
  defaultTitle: string;
  description: string;
  image: string;
  article: boolean;
  organization: {
    name: string;
    url: string;
    logo: string;
  };
  title: string;
  url: string;
};

// source: https://github.com/kentcdodds/kentcdodds.com
const SchemaOrg = React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    article,
    organization,
    title,
    url,
  }: SchemaOrgType) => {
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url,
        name: title,
        alternateName: defaultTitle,
      },
    ];

    const schema = article
      ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: author.name,
          },
          publisher: {
            '@type': 'Organization',
            url: organization.url,
            logo: organization.logo,
            name: organization.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': canonicalUrl,
          },
          datePublished,
        },
      ]
      : baseSchema;

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    );
  },
);

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
  canonicalUrl: string;
  image: string;
  twitter: string;
  isArticle: boolean;
};

export default function SEO({
  title,
  description,
  image,
  frontmatter = null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keywords,
}: {
  title: string;
  description: string;
  image: string;
  frontmatter: BlogFrontmatter;
  keywords: string[];
}) {
  const { site }: { site: SiteMetadata } = useStaticQuery(query);
  const { pathname } = useLocation();
  const article = frontmatter !== null;

  const seo: SEO = {
    title:
      pathname === routes.home
        ? `Sean Keever | ${title}`
        : `${title} | Sean Keever`,
    description,
    canonicalUrl: `${site.siteMetadata.siteUrl}${pathname}`,
    image,
    twitter: `@${site.siteMetadata.handle}`,
    isArticle: article,
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <html lang="en" />
        <meta charSet="utf-8" />
        <link rel="canonical" href={seo.canonicalUrl} />
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
        <meta name="robots" content="index, follow" />

        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={seo.canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content="Sean Keever" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:alt" content={seo.title} />
        {seo.isArticle && <meta property="og:type" content="article" />}

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@swkeever" />
        <meta name="twitter:creator" content="@swkeever" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
      <SchemaOrg
        article={article}
        url={site.siteMetadata.siteUrl}
        title={title}
        image={image}
        description={seo.description}
        datePublished={frontmatter?.date}
        canonicalUrl={seo.canonicalUrl}
        author={{ name: 'Sean Keever' }}
        organization={{
          name: 'Sean Keever',
          url: site.siteMetadata.siteUrl,
          logo: config.siteLogo,
        }}
        defaultTitle={seo.title}
      />
    </>
  );
}

type SiteMetadata = {
  siteMetadata: {
    siteUrl: string;
    handle: string;
  };
};
