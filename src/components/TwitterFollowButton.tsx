import React from 'react';
import links from '@utils/links';
import globalStyles from '@styles/index';

export default function TwitterFollowButton() {
  return (
    <a
      href={links.twitter}
      data-size="large"
      className={`
      ${globalStyles.transitions}
      twitter-follow-button
      `}
      data-show-count="false"
    >
      Follow @swkeever
    </a>
  );
}
