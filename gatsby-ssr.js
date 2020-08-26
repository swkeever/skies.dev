/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// require('./src/styles/inter/inter.css');
require('./src/styles/index.css');
// require('katex/dist/katex.min.css');

const React = require('react');
const Layout = require('./src/components/Layout').default;

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
