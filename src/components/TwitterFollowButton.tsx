import React, { useState } from 'react';
import links from '@utils/links';
import tw from '@utils/tailwind';
import ExternalLink from '@components/ExternalLink';
import { FaTimes } from 'react-icons/fa';

export default function TwitterFollowButton({ closable = false }) {
  const [visible, setVisible] = useState(true);

  return (
    <div className={tw('flex items-center', !visible && 'hidden')}>
      {closable ? (
        <button
          className={tw('md:hidden')}
          type="button"
          onClick={() => setVisible(!visible)}
        >
          <span className="sr-only">Dismiss</span>
          <FaTimes className="mr-2 text-neutralSoft" />
        </button>
      ) : null}
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
    </div>
  );
}
