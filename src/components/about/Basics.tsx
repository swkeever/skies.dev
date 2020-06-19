/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  FaUser,
  FaLink,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaPaperPlane,
  FaTelegramPlane,
} from 'react-icons/fa';
import { Link } from '@reach/router';
import CVSection from './CVSection';
import CVSectionTitle from './CVSectionTitle';
import routes from '../../utils/routes';
import CVList from './CVList';
import links from '../../utils/links';

export type CVBasics = {};

export default function Basics({ basics }: { basics: CVBasics }) {
  const iconStyles = 'inline text-primarySoft mr-1';
  const linkStyles = 'ml-1 text-onNeutralBgSoft hover:text-onNeutralBgLinkHover';
  const anchorProps = {
    className: linkStyles,
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <CVSection>
      <CVSectionTitle>
        <FaTelegramPlane className="inline text-onPrimarySoft text-2xl mb-1 mr-2" />
        Connect
      </CVSectionTitle>

      <CVList>
        {/* <li className="mb-0">
          <CVLocation location={basics.location} />
        </li> */}
        <li className="mb-0">
          <FaLink className={iconStyles} />
          <Link to={routes.contact} className={linkStyles}>
            {`${links.siteUrlShort}${routes.contact}`}
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
