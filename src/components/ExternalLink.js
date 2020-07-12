/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export default function ExternalLink(props) {
  return <a {...props} rel="nofollow noopener noreferrer" target="_blank" />;
}
