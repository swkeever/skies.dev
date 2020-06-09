module.exports = {
  siteMetadata: {
    description: `Sean Keever is a software engineer specializing in JavaScript, 
    Java, and Python.`,
    author: 'Sean Keever',
    siteUrl: 'https://swkeever.github.io',
    handle: 'swkeever',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-168956392-1',
        head: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
    // Add after these plugins if used
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Default Dark+',
              inlineCode: {
                marker: '•',
                theme: {
                  default: 'Default Light+',
                  dark: 'Default Dark+',
                },
              },
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-minify-html',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Sean Keever's personal page",
        short_name: 'Sean Keever',
        description:
          'Sean Keever is a full stack developer who writes about software engineering.',
        lang: 'en',
        icon: 'src/content/technologist.png',
        start_url: '/',
        background_color: '#F7FAFC',
        theme_color: '#4299E1',
        display: 'standalone',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
  ],
};
