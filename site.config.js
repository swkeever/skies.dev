module.exports = {
  siteTitle: 'Skies Software Engineering Blog by Sean Keever', // Navigation and Site Title
  siteTitleAlt: 'Skies Software Engineering Blog', // Alternative Site title for SEO
  siteTitleShort: 'Skies', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'https://skies.dev', // Domain of your site. No trailing slash!
  lang: 'en', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Sean Keever is a Seattle-based software engineer specializing in full stack web development.',
  minibio: `
    <strong>Sean Keever</strong> is a JavaScript software engineer based out of
    Seattle, Washington. He is currently working as a software engineer at OfferUp. 
  `,
  author: 'Sean Keever', // Author for schemaORGJSONLD
  organization: 'Sean Keever',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@swkeever', // Twitter Username
  ogSiteName: 'Sean Keever', // Facebook Site Name
  ogLanguage: 'en_US',

  // Manifest and Progress color
  themeColor: '#4299E1',
  backgroundColor: '#2D3748',

  // Social component
  twitter: 'https://twitter.com/swkeever/',
  twitterHandle: '@swkeever',
  github: 'https://github.com/swkeever/',
  linkedin: 'https://www.linkedin.com/in/swkeever/',
  // youtube: 'https://www.youtube.com/channel/UCz-BYvuntVRt_VpfR6FKXJw',
  // rss: 'https://kentcdodds.com/blog/rss.xml',
};
