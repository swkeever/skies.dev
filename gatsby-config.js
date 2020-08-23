/* eslint-disable global-require */
const cssNano = require('cssnano');
const path = require('path');
const config = require('./site.config');
const tailwindConfig = require('./tailwind.config');
const links = require('./src/utils/links');
const routes = require('./src/utils/routes');

const gatsbyRemarkImages = {
  resolve: 'gatsby-remark-images',
  options: {
    // It's important to specify the maxWidth (in pixels) of
    // the content container as this plugin uses this as the
    // base for generating different widths of each image.
    maxWidth: 1280,
    backgroundColor: 'transparent',
    showCaptions: true,
    linkImagesToOriginal: false,
  },
};

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    handle: 'swkeever',
    title: 'Skies',
    description: 'A software engineering blog by Sean Keever',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-168956392-1',
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require('tailwindcss')(tailwindConfig),
          require('autoprefixer'),
          ...(process.env.NODE_ENV === 'production' ? [cssNano] : []),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: path.join(__dirname, './src/templates/markdown-page.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Dark+ (default dark)',
            },
          },
          {
            resolve: 'gatsby-remark-katex',
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: 'ignore',
            },
          },
          gatsbyRemarkImages,
          'gatsby-remark-external-links',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon:
                '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>',
              isIconAfterHeader: true,
              removeAccents: true,
            },
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 800,
              height: 400,
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    gatsbyRemarkImages,
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-minify-html',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        lang: config.lang,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#1C64F2',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // 'gatsby-plugin-offline',

    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
        exclude: ['/resume', '/contact'],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { allMdx } }) => allMdx.nodes.map((node) => ({
              ...node.frontmatter,
              description: node.excerpt,
              date: node.frontmatter.date,
              url: links.siteUrl + node.fields.slug,
              guid: links.siteUrl + node.fields.slug,
              custom_elements: [{ 'content:encoded': node.html }],
            })),
            query: `
              {
                allMdx(
                  limit: 25, 
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: routes.rss,
            title: 'Skies Software Engineering Blog RSS Feed',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
    // Add after these plugins if used
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: [], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    // 'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.skies.dev',
        sitemap: 'https://www.skies.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
};
