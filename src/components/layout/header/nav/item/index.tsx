import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import routes from '../../../../../utils/routes';

function isActive(pathname: string, route: string): boolean {
  if (pathname.includes(routes.blogs)) {
    return pathname.substring(0, routes.blogs.length) === route;
  }
  return pathname === route;
}

export default function Item({
  route,
  children,
}: {
  route: string
  children: ReactNode
}) {
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

        ${
          isActive(pathname, route)
          && `
            border-b-4
            border-onPrimary
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
          md:px-16
          lg:px-12
          text-center
          py-2 
        `}
        style={isActive(pathname, route) ? { color: 'var(--color-light)' } : {}}
      >
        {children}
      </Link>
    </li>
  );
}
