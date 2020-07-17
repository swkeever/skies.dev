import React, { ReactNode } from 'react';
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';
import { useLocation } from '@reach/router';
import links from '../../utils/links';
import ExternalLink from '../ExternalLink';

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
  className = '',
  linkClassName = '',
}: {
  className?: string;
  linkClassName?: string;
}) {
  const { pathname } = useLocation();

  return (
    <ul
      className={`
      list-none
      flex flex-col
      text-4xl
      space-y-4
      ${className}
    `}
    >
      {shareData.map(({ id, icon, link }) => (
        <li key={id}>
          <ExternalLink className={linkClassName} href={link(pathname)}>
            {icon}
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
