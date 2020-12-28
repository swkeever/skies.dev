/* eslint-disable global-require */
const cssNano = require('cssnano');
const path = require('path');
const tailwindConfig = require('./tailwind.config');
const links = require('./src/utils/links');
const routes = require('./src/utils/routes');

const gatsbyRemarkImages = {
  resolve: 'gatsby-remark-images',
  options: {
    // It's important to specify the maxWidth (in pixels) of
    // the content container as this plugin uses this as the
    // base for generating different widths of each image.
    maxWidth: 1024,
    backgroundColor: 'transparent',

    // As much as I want the captions, they throw errors in the console.
    // Also, messes up the CSS in markdown.
    // showCaptions: true,

    linkImagesToOriginal: false,
  },
};

const siteMetadata = {
  siteUrl: process.env.ROOT_URL || 'https://www.skies.dev',
  handle: 'swkeever',
  title: {
    long: 'Skies | A blog by Sean Keever', // Alternative Site title for SEO
    medium: 'Skies by Sean Keever', // Navigation and Site Title
    short: 'Skies', // Short_name for manifest
  },
  description: 'A software engineering blog by Sean Keever',
  lang: 'en',
  color: {
    background: '#2D3748',
    theme: '#4299E1',
  },
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-168956392-1',
      },
    },
    // 'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
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
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
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
          { ...gatsbyRemarkImages },
          'gatsby-remark-external-links',

          // Note: I need to have this in order for the Table of Contents to work.
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
            resolve: 'gatsby-remark-prismjs',
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: true,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          {
            resolve: 'gatsby-remark-embedder',
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },
    { ...gatsbyRemarkImages },
    'gatsby-plugin-twitter',
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-minify-html',
    // 'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title.long,
        short_name: siteMetadata.title.short,
        description: siteMetadata.description,
        start_url: '/',
        lang: siteMetadata.lang,
        background_color: siteMetadata.color.background,
        theme_color: siteMetadata.color.primary,
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
        exclude: ['/rss.xml'],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title {
                  medium
                }
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
                  sort: { order: DESC, fields: [frontmatter___date___modified] },
                  filter: { fileAbsolutePath: { regex: "/content/" } }
                ) {
                  nodes {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date {
                        modified
                      }
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
        content: [
          path.join(process.cwd(), '/**/!(*.d).{ts,js,jsx,tsx,md,mdx}'),
        ],
        tailwind: true, // Enable tailwindcss support
        whitelist: [
          'gatsby-resp-image-image',
          'gatsby-resp-image-wrapper',
          'gatsby-resp-image-figcaption',
          'twitter-tweet',
        ], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.skies.dev',
        sitemap: 'https://www.skies.dev/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      },
    },
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
};
