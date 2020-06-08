module.exports = {
  siteMetadata: {
    title: 'Sean Keever | Full Stack Developer',
    description: `Sean Keever is a software engineer specializing in JavaScript, 
    Java, and Python.`,
    author: 'Sean Keever',
    url: 'https://swkeever.github.io',
    handle: 'swkeever',
  },
  plugins: [
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
  ],
};
