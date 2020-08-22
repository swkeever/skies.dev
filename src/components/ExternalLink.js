/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export default function ExternalLink(props) {
  return <OutboundLink {...props} rel="noopener nofollow" target="_blank" />;
}
