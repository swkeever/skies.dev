/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  FaUser,
  FaLink,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import { Link } from '@reach/router';
import CVSection from './CVSection';
import CVSectionTitle from './CVSectionTitle';
import CVLocation from './CVLocation';
import routes from '../../utils/routes';
import CVList from './CVList';
import links from '../../utils/links';

export type CVBasics = {};

export default function Basics({ basics }: { basics: CVBasics }) {
  const iconStyles = 'inline text-primarySoft mr-1';
  const linkStyles = 'ml-px text-onNeutralBgSoft';
  const anchorProps = {
    className: linkStyles,
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <CVSection>
      <CVSectionTitle>
        <FaUser className="inline text-onPrimarySoft text-2xl ml-1 mb-1 mr-2" />
        Personal
      </CVSectionTitle>
      <CVList>
        <li className="mb-0">
          <CVLocation location={basics.location} />
        </li>
        <li>
          <FaLink className={iconStyles} />
          <Link to={routes.home} className={linkStyles}>
            swkeever.github.io
          </Link>
        </li>
        <li>
          <FaGithub className={iconStyles} />
          <a href={links.github} {...anchorProps}>
            github.com/swkeever
          </a>
        </li>
        <li>
          <FaTwitter className={iconStyles} />
          <a href={links.twitter} {...anchorProps}>
            twitter.com/swkeever
          </a>
        </li>
        <li>
          <FaLinkedin className={iconStyles} />
          <a href={links.linkedIn} {...anchorProps}>
            linkedin.com/in/swkeever
          </a>
        </li>
      </CVList>
    </CVSection>
  );
}
