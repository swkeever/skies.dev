import React from 'react';
import {
  FaRegLightbulb,
  FaSmile,
  FaLightbulb,
  FaSmileBeam,
  FaCog,
  FaCloudSun,
  FaCloudSunRain,
} from 'react-icons/fa';
import { Link, useLocation } from '@reach/router';
import globalStyles from '@styles/index';
import routes from '../utils/routes';

function Item({ route, children }: { route: string; children: ReactNode }) {
  const { pathname } = useLocation();
  const isActive = pathname === route;

  return (
    <li
      className={`    
        tracking-wide
        h-full w-full
      `}
    >
      <Link
        to={route}
        className={`
          ${globalStyles.transitions}
          block h-full
          flex flex-col lg:flex-row justify-center items-center space-y-1 lg:space-x-2
          text-sm
          text-onPrimary
          transform
          hover:no-underline
          ${
            isActive
              ? `
          text-light
           scale-105
          -translate-y-px
          font-semibold
          `
              : `
          scale-100
          translate-y-px
          `
          }
        `}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  const iconStyles = `
    text-2xl
    md:text-xl
    block
    ${globalStyles.transitions}
  `;

  const Name = ({ name }: { name: string }) => (
    <span
      className={`
        text-xs lg:text-sm
        
      `}
    >
      {name}
    </span>
  );

  const navItems = [
    <Item route={routes.home} key="nav-home">
      {pathname === routes.home ? (
        <FaCloudSunRain className={iconStyles} />
      ) : (
        <FaCloudSun className={iconStyles} />
      )}
      <Name name="Home" />
    </Item>,
    <Item route={routes.blog} key="nav-blog">
      {pathname === routes.blog ? (
        <FaLightbulb className={iconStyles} />
      ) : (
        <FaRegLightbulb className={iconStyles} />
      )}
      <Name name="Blog" />
    </Item>,
    <Item route={routes.about} key="nav-about">
      {pathname === routes.about ? (
        <FaSmileBeam
          className={`
      ${iconStyles} text-2xl
      `}
        />
      ) : (
        <FaSmile
          className={`
              ${iconStyles}
              text-2xl
            `}
        />
      )}

      <Name name="About" />
    </Item>,
    <Item route={routes.uses} key="nav-uses">
      <FaCog
        className={`
      ${iconStyles} text-2xl transform ${globalStyles.transitions}
      ${pathname === routes.uses ? ' rotate-180' : 'rotate-0'}
      `}
      />

      <Name name="Uses" />
    </Item>,
  ];

  function getUnderlineOffset() {
    let off = navItems.length;
    if (pathname === routes.home) {
      off = 0;
    } else if (pathname === routes.blog) {
      off = 1;
    } else if (pathname === routes.about) {
      off = 2;
    } else if (pathname === routes.uses) {
      off = 3;
    }

    return off === navItems.length
      ? ''
      : `${(off * (100 / navItems.length)).toFixed(4)}%`;
  }

  const underlineOffset = getUnderlineOffset();

  return (
    <nav
      className={`
      w-full h-full lg:max-w-screen-md
      flex flex-col
      `}
    >
      <ul
        className={`
        ${globalStyles.transitions}
          h-full
          flex          
        `}
      >
        {navItems}
      </ul>
      <hr
        style={{ marginLeft: underlineOffset }}
        className={`
        ${globalStyles.transitions} 
        border-0
        mt-auto h-1 
        
        
        w-1/4
        ${underlineOffset ? 'bg-onPrimary' : 'bg-primary'}
        `}
      />
    </nav>
  );
}
