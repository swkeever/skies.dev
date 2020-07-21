import React, { ReactNode, useContext } from 'react';
import {
  FaRegLightbulb,
  FaSmile,
  FaFire,
  FaLightbulb,
  FaSmileBeam,
} from 'react-icons/fa';
import { Link, useLocation } from '@reach/router';
import { icons } from 'react-icons/lib';
import routes from '../utils/routes';
import { globalStyles } from '../styles';

function Item({ route, children }: { route: string; children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <li
      className={`    
        tracking-widest
        w-1/3
      `}
    >
      <Link
        to={route}
        className={`
          ${globalStyles.transitions.colors}
          w-full
          text-center
          inline-block
          
          text-onPrimaryBgLink
          hover:text-onPrimaryBgLinkHover
          hover:border-0
          outline-none          
          hover:no-underline
        `}
        style={pathname === route ? { color: 'var(--color-light)' } : {}}
      >
        {children}
      </Link>
    </li>
  );
}

const Name = ({ name }: { name: string }) => (
  <span
    className={`
        text-sm
        
      `}
  >
    {name}
  </span>
);

export default function Nav() {
  const { pathname } = useLocation();
  const iconStyles = `
    text-2xl
    md:text-xl
    inline
    mr-2
    ${globalStyles.transitions.colors}
  `;

  const isArticle = pathname.includes(routes.blog);

  const navItems = [
    <Item route={routes.home} key="nav-blog">
      {isArticle ? (
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
  ];

  function getUnderlineOffset() {
    let off = navItems.length;
    if (pathname === routes.home) {
      off = 0;
    } else if (pathname === routes.about) {
      off = 1;
    } else if (pathname === routes.contact) {
      off = 2;
    }

    return off === navItems.length
      ? ''
      : `${(off * (100 / navItems.length)).toFixed(4)}%`;
  }

  const underlineOffset = getUnderlineOffset();

  return (
    <nav
      className={`
      w-full h-full lg:max-w-sm
      flex flex-col

      `}
    >
      <ul
        className={`
        ${globalStyles.transitions.colors}
          h-full
          flex justify-around items-center
          uppercase
          
        `}
      >
        {navItems}

        {/* <Item route={routes.contact}>
          <FaFire className={iconStyles} />
          <Name name="Contact" />
        </Item> */}
      </ul>
      <hr
        style={{ marginLeft: underlineOffset }}
        className={`
        transition-all duration-500 ease-in-out 
        border-0
        mt-auto h-1 w-1/2
        ${underlineOffset ? 'bg-onPrimary' : 'bg-primary'}
        `}
      />
    </nav>
  );
}
