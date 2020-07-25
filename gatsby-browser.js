/* eslint-disable react/prop-types */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require('./index.css');
require('katex/dist/katex.min.css');

const React = require('react');
const Layout = require('./src/components/Layout').default;

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
