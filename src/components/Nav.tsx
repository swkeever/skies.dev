import React, { ReactNode, useContext } from 'react';
import { FaRegLightbulb, FaSmile, FaFire } from 'react-icons/fa';
import { Link, useLocation } from '@reach/router';
import routes from '../utils/routes';
import { LayoutContext } from './Layout';
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
        hidden
        md:inline
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
  `;

  function getUnderlineOffset() {
    const numNavItems = 3;
    let off = numNavItems;
    if (pathname.includes(routes.blog) || pathname === routes.home) {
      off = 0;
    } else if (pathname === routes.about) {
      off = 1;
    } else if (pathname === routes.contact) {
      off = 2;
    }

    return off === numNavItems
      ? ''
      : `${(off * (100 / numNavItems)).toFixed(4)}%`;
  }

  const underlineOffset = getUnderlineOffset();

  return (
    <nav
      className={`
      w-full h-full lg:w-1/3 max-w-screen-sm
      flex flex-col

      `}
    >
      <ul
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
          // paddingTop: 'env(safe-area-inset-top)',
        }}
        className={`
        ${globalStyles.transitions.colors}
          h-full
          flex justify-around items-center
          uppercase
        `}
      >
        <Item route={routes.home}>
          <FaRegLightbulb className={iconStyles} />
          <Name name="Blog" />
        </Item>
        <Item route={routes.about}>
          <FaSmile
            className={`
              ${iconStyles}
              text-2xl
            `}
          />
          <Name name="About" />
        </Item>
        <Item route={routes.contact}>
          <FaFire className={iconStyles} />
          <Name name="Contact" />
        </Item>
      </ul>
      <hr
        style={{ marginLeft: underlineOffset }}
        className={`
        transition-all duration-500 ease-in-out 
        border-0
        mt-auto h-1 w-1/3 
        ${underlineOffset ? 'bg-onPrimary' : 'bg-primary'}
        `}
      />
    </nav>
  );
}
