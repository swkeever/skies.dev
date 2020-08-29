import React from 'react';
import {
  FaRegLightbulb,
  FaRegSmile,
  FaLightbulb,
  FaRegSmileBeam,
  FaCog,
  FaCloudSun,
  FaCloudSunRain,
} from 'react-icons/fa';
import { Link, useLocation } from '@reach/router';
import globalStyles from '@styles/index';
import classNames from '@utils/class-names';
import routes from '../utils/routes';

function Item({ route, children }: { route: string; children: ReactNode }) {
  const { pathname } = useLocation();
  const isActive = pathname === route;

  const colors = {
    primary: {
      link: 'text-neutralSoft lg:text-onPrimarySoft',
      linkActive: 'text-primaryBold lg:text-light',
    },
    neutral: {
      link: 'text-neutralSoft',
      linkActive: 'text-primaryBold',
    },
  }.primary;

  return (
    <li
      className={`    
        tracking-wide
        h-full w-full
      `}
    >
      <Link
        to={route}
        className={classNames(
          globalStyles.transitions,
          'block',
          'h-full',
          'flex flex-col lg:flex-row justify-center items-center',
          'space-y-1 lg:space-x-2',
          'text-sm hover:no-underline',
          'transform',
          isActive
            ? classNames(
              colors.linkActive,
              'scale-105 -translate-y-px',
              'font-semibold',
            )
            : classNames(colors.link, 'scale-100 translate-y-px'),
        )}
      >
        {children}
      </Link>
    </li>
  );
}

export default function Nav() {
  const { pathname } = useLocation();

  const colors = {
    primary: {
      underline: {
        on: 'bg-primaryBold lg:bg-light',
        off: 'bg-neutralBg lg:bg-primary',
      },
      icon: {
        on: 'text-primaryBold lg:text-light',
        off: 'text-neutralSoft lg:text-onPrimarySoft',
      },
    },
    neutral: {
      underline: {
        on: 'bg-primaryBold',
        off: 'bg-neutralBg',
      },
      icon: {
        on: 'text-neutralSoft',
        off: 'text-primaryBold',
      },
    },
  }.primary;

  const iconStyles = classNames(
    'text-2xl md:text-xl',
    'block',
    globalStyles.transitions,
  );

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
        <FaCloudSunRain className={classNames(iconStyles, colors.icon.on)} />
      ) : (
        <FaCloudSun className={classNames(iconStyles, colors.icon.off)} />
      )}
      <Name name="Home" />
    </Item>,
    <Item route={routes.blog} key="nav-blog">
      {pathname === routes.blog ? (
        <FaLightbulb className={classNames(iconStyles, colors.icon.on)} />
      ) : (
        <FaRegLightbulb className={classNames(iconStyles, colors.icon.off)} />
      )}
      <Name name="Blog" />
    </Item>,
    <Item route={routes.about} key="nav-about">
      {pathname === routes.about ? (
        <FaRegSmileBeam className={classNames(iconStyles, colors.icon.on)} />
      ) : (
        <FaRegSmile className={classNames(iconStyles, colors.icon.off)} />
      )}

      <Name name="About" />
    </Item>,
    <Item route={routes.uses} key="nav-uses">
      <FaCog
        className={classNames(
          iconStyles,
          'transform',
          pathname === routes.uses
            ? classNames('rotate-180', colors.icon.on)
            : classNames('rotate-0', colors.icon.off),
        )}
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
        className={classNames(
          globalStyles.transitions,
          'border-0',
          'mt-auto',
          'h-1',
          'w-1/4', // denominator must == num navbar items
          underlineOffset ? colors.underline.on : colors.underline.off,
        )}
      />
    </nav>
  );
}
