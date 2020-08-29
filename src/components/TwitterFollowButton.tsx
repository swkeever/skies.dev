import React from 'react';
import links from '@utils/links';
import classNames from '@utils/class-names';

export default function TwitterFollowButton() {
  return (
    <a
      href={links.twitter}
      data-dnt="true"
      data-size="large"
      className={classNames('twitter-follow-button')}
      data-show-count="false"
    >
      Follow @swkeever
    </a>
  );
}
