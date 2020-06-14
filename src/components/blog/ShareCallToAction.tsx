import React, { ReactNode } from 'react';
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { useLocation } from '@reach/router';
import links from '../../utils/links';

type Sharable = {
  id: string;
  icon: ReactNode;
  link: (string) => string;
};

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

export default function ShareCallToAction({
  className,
  linkClassName = '',
}: {
  className: string;
  linkClassName?: string;
}) {
  const { pathname } = useLocation();

  return (
    <ul
      className={`
      list-none
      flex
      text-4xl
      ml-0
      my-0
      space-x-3
      ${className}
    `}
    >
      {shareData.map(({ id, icon, link }) => (
        <li key={id}>
          <a
            rel="noopener noreferrer"
            className={linkClassName}
            target="_blank"
            href={link(pathname)}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
