import React from 'react';
import {
  FaRegLightbulb,
  FaSmile,
  FaLightbulb,
  FaSmileBeam,
} from 'react-icons/fa';
import { Link, useLocation } from '@reach/router';
import routes from '../utils/routes';
import { globalStyles } from '../styles';

function Item({ route, children }: { route: string; children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <li
      className={`    
        tracking-widest
        h-full w-full
      `}
    >
      <Link
        to={route}
        className={`
          ${globalStyles.transitions}
          block h-full
          flex flex-col lg:flex-row justify-center items-center space-y-1 lg:space-x-2
          text-sm font-medium
          text-onPrimary
          hover:no-underline
        `}
        style={pathname === route ? { color: 'var(--color-light)' } : {}}
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
    <Item route={routes.home} key="nav-blog">
      {pathname === routes.home ? (
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
        ${globalStyles.transitions}
          h-full
          flex          
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
        ${globalStyles.transitions} 
        border-0
        mt-auto h-1 w-1/2
        ${underlineOffset ? 'bg-onPrimary' : 'bg-primary'}
        `}
      />
    </nav>
  );
}
