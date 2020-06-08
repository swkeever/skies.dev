import React, { ReactNode } from 'react';
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { useLocation } from '@reach/router';
import links from '../../../utils/links';

type Sharable = {
  id: string
  icon: ReactNode
  link: (string) => string
}

const shareData: Sharable[] = [
  {
    id: 'linkedIn',
    icon: <TiSocialLinkedinCircular />,
    link: links.shareTo.linkedIn,
  },
  {
    id: 'facebook',
    icon: <TiSocialFacebookCircular />,
    link: links.shareTo.facebook,
  },
  {
    id: 'twitter',
    icon: <TiSocialTwitterCircular />,
    link: links.shareTo.twitter,
  },
];

export default function ShareCallToAction() {
  const { pathname } = useLocation();

  return (
    <ul
      className={`
      list-none
      flex
      md:fixed
      absolute
      right-0
      top-0
      mr-2
      mt-56
      text-4xl
      lg:mt-48
      lg:mr-64
      bg-transparent
      space-x-3
      z-30
    `}
    >
      {shareData.map(({ id, icon, link }) => (
        <li
          key={id}
          className={`
          
          `}
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={link(pathname)}
            className={`
              text-onPrimaryBg
            `}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
