import React, { ReactNode } from 'react';
import { FaHome, FaRegLightbulb, FaTelegramPlane } from 'react-icons/fa';
import { Link, useLocation } from '@reach/router';
import routes from '../utils/routes';

export function isActive(pathname: string, route: string): boolean {
  if (pathname.length === 1) {
    return route === routes.home;
  }
  const pname = pathname[pathname.length - 1] === '/'
    ? pathname.substring(0, pathname.length - 1)
    : pathname;
  if (pname.includes(routes.blog)) {
    return pname.substring(0, routes.blog.length) === route;
  }
  return pname === route;
}

function Item({ route, children }: { route: string; children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <li
      className={`    
        text-center
        tracking-widest
        flex-1
        lg:flex-none
        lg:justify-start
        pt-1
        md:mb-3
        ${
          isActive(pathname, route)
          && `
            lg:border-b-4
            lg:border-onPrimary
        `
        }
      `}
    >
      <Link
        to={route}
        className={`
          inline-block
          text-onPrimaryBgLink
          hover:text-onPrimaryBgLinkHover
          hover:border-0
          outline-none          
          hover:no-underline
          px-8
          pt-2
          pb-4
          md:py-2
        `}
        style={isActive(pathname, route) ? { color: 'var(--color-light)' } : {}}
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
  const iconStyles = `
    text-2xl
    md:text-xl
    inline
    mr-2
  `;

  return (
    <nav
      className={`
        fixed 
        bottom-0 
        left-0
        lg:top-0
        lg:bottom-auto
        w-full
        lg:h-12
        bg-primary
        z-40
        pt-2
        lg:pt-0

      `}
    >
      <ul
        style={{
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
        className={`
          list-none
          m-0
          lg:ml-40
          flex
          lg:justify-start
          uppercase
        `}
      >
        <Item route={routes.home}>
          <FaHome
            className={`
              ${iconStyles}
              text-2xl
            `}
          />
          <Name name="Home" />
        </Item>
        <Item route={routes.blog}>
          <FaRegLightbulb className={iconStyles} />
          <Name name="Blog" />
        </Item>
        <Item route={routes.contact}>
          <FaTelegramPlane className={iconStyles} />
          <Name name="Contact" />
        </Item>
      </ul>
    </nav>
  );
}
