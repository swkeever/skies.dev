import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import routes from '../../../../../utils/routes';

export function isActive(pathname: string, route: string): boolean {
  const pname = pathname[pathname.length - 1] === '/'
    ? pathname.substring(0, pathname.length - 1)
    : pathname;
  if (pname.includes(routes.blogs)) {
    return pname.substring(0, routes.blogs.length) === route;
  }
  return pname === route;
}

export default function Item({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
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
          md:px-16
          lg:px-12
          py-3 
          lg:py-2
        `}
        style={isActive(pathname, route) ? { color: 'var(--color-light)' } : {}}
      >
        {children}
      </Link>
    </li>
  );
}
