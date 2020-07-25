import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { FluidObject, FixedObject } from 'gatsby-image';
import routes from '../utils/routes';
import { BlogFrontmatter } from '../pages';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        handle
      }
    }
    file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`;

type SEO = {
  title: string;
  description: string;
  canonicalUrl: string;
  image: {
    src: string;
    dims: {
      width: string;
      height: string;
    };
    type: string;
  };
  twitter: string;
  isArticle: boolean;
};

export default function SEO({
  title,
  description,
  image = null,
  imageDims = null,
  frontmatter = null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keywords,
}: {
  title: string;
  description: string;
  image?: FluidObject;
  imageDims?: {
    width: number;
    height: number;
  };
  frontmatter?: BlogFrontmatter;
  keywords: string[];
}) {
  type QueryData = {
    file: {
      childImageSharp: {
        fixed: FluidObject;
      };
    };
  };

  const { site, file }: { site: QueryData } = useStaticQuery(query);
  const { pathname } = useLocation();
  const article = frontmatter !== null;

  const withSiteUrl = (path: string): string => `${site.siteMetadata.siteUrl}${path}`;

  const seo: SEO = {
    title: undefined,
    description,
    canonicalUrl: `${site.siteMetadata.siteUrl}${pathname}`,
    image: {
      src: image ? image.src : file.childImageSharp.fluid.src,
      dims: {
        width: imageDims
          ? imageDims.width.toString()
          : file.childImageSharp.fluid.presentationWidth.toString(),
        height: imageDims
          ? imageDims.height.toString()
          : file.childImageSharp.fluid.presentationHeight.toString(),
      },
      type: image
        ? image.base64.substring(
          image.base64.indexOf(':') + 1,
          image.base64.indexOf(';'),
        )
        : 'image/jpeg',
    },
    twitter: `@${site.siteMetadata.handle}`,
    isArticle: article,
  };

  if (!article) {
    seo.title = pathname === routes.home ? `Skies | ${title}` : `${title} | Skies`;
  } else {
    seo.title = title;
  }

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
        <meta name="image" content={withSiteUrl(seo.image.src)} />

        <meta name="twitter:site" content={seo.twitter} />
        <meta name="twitter:creator" content={seo.twitter} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={withSiteUrl(seo.image.src)} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content={seo.canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content="Sean Keever" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={withSiteUrl(seo.image.src)} />
        <meta property="og:image:type" content={seo.image.type} />
        <meta property="og:image:url" content={withSiteUrl(seo.image.src)} />
        <meta property="og:image:width" content={seo.image.dims.width} />
        <meta property="og:image:height" content={seo.image.dims.height} />
        <meta property="og:image:alt" content={seo.title} />
        {seo.isArticle && <meta property="og:type" content="article" />}

        <meta itemProp="name" content={seo.title} />
        <meta itemProp="headline" content={seo.title} />
        <meta itemProp="description" content={seo.description} />
        <meta itemProp="image" content={withSiteUrl(seo.image.src)} />
        <meta itemProp="author" content="Sean Keever" />
      </Helmet>
    </>
  );
}

type QueryData = {
  siteMetadata: {
    siteUrl: string;
    handle: string;
  };
  file: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
};
