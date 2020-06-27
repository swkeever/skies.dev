import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { FluidObject } from 'gatsby-image';
import routes from '../utils/routes';
import { BlogFrontmatter } from '../pages/blog';

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
  image: {
    fluid: FluidObject;
    dims: {
      width: number;
      height: number;
    };
    type: string;
  };
  twitter: string;
  isArticle: boolean;
};

export default function SEO({
  title,
  description,
  image,
  imageDims,
  frontmatter = null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keywords,
}: {
  title: string;
  description: string;
  image: FluidObject;
  imageDims: {
    width: number;
    height: number;
  };
  frontmatter?: BlogFrontmatter;
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
    image: {
      fluid: image,
      dims: {
        width: imageDims.width,
        height: imageDims.height,
      },
      type: image.base64.substring(
        image.base64.indexOf(':') + 1,
        image.base64.indexOf(';'),
      ),
    },
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

        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image.fluid.src} />

        <meta name="twitter:site" content={seo.twitter} />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image.fluid.src} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content={seo.canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content="Sean Keever" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image.fluid.src} />
        <meta property="og:image:type" content={seo.image.type} />
        <meta property="og:image:url" content={seo.image.fluid.src} />
        <meta
          property="og:image:width"
          content={seo.image.dims.width.toString()}
        />
        <meta
          property="og:image:height"
          content={seo.image.dims.height.toString()}
        />
        <meta property="og:image:alt" content={seo.title} />
        {seo.isArticle && <meta property="og:type" content="article" />}

        <meta itemProp="name" content={seo.title} />
        <meta itemProp="headline" content={seo.title} />
        <meta itemProp="description" content={seo.description} />
        <meta itemProp="image" content={seo.image.fluid.src} />
        <meta itemProp="author" content="Sean Keever" />
      </Helmet>
    </>
  );
}

type SiteMetadata = {
  siteMetadata: {
    siteUrl: string;
    handle: string;
  };
};
