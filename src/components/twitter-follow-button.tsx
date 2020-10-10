import React from 'react';
import links from '@utils/links';
import ExternalLink from '@components/external-link';

export default function TwitterFollowButton() {
  return (
    <ExternalLink
      href={links.twitter}
      data-dnt="true"
      data-size="large"
      className="twitter-follow-button"
      data-show-count="false"
    >
      Follow @swkeever
    </ExternalLink>
  );
}
