import React from 'react';
import links from '@utils/links';
import ExternalLink from '@components/ExternalLink';

export default function TwitterFollowButton() {
  return (
    <div className="shadow-xl">
      <ExternalLink
        href={links.twitter}
        data-dnt="true"
        data-size="large"
        className="twitter-follow-button"
        data-show-count="false"
      >
        Follow @swkeever
      </ExternalLink>
    </div>
  );
}
