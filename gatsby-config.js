module.exports = {
  siteMetadata: {
    siteUrl: 'https://skies.dev',
    handle: 'swkeever',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-168956392-1',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
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
    'gatsby-plugin-postcss',
    // Add after these plugins if used
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ['blockquote'], // Don't remove this selector
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
              theme: 'Dark+ (default dark)',
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
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '50',
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
        icon: 'src/images/favicon.png',
        start_url: '/',
        background_color: '#f7fafc',
        theme_color: '#4299e1',
        display: 'standalone',
      },
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
        exclude: ['/resume'],
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.skies.dev',
        sitemap: 'https://www.skies.dev/sitemap.xml',
        policy: [
          { userAgent: '*', disallow: ['/resume/'] },
          { userAgent: '*', allow: '/' },
        ],
      },
    },
  ],
};
