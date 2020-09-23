import React from 'react';
import {
  FaRegLightbulb,
  FaRegSmile,
  FaLightbulb,
  FaRegSmileBeam,
  FaCog,
} from 'react-icons/fa';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { Link, useLocation } from '@reach/router';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';
import routes from '../utils/routes';

function Item({ route, children }: { route: string; children: ReactNode }) {
  const { pathname } = useLocation();
  const isActive = routes.equals(pathname, route);

  const colors = {
    primary: {
      link: 'text-neutral lg:text-onPrimarySoft',
      linkActive: 'text-onNeutralBg lg:text-onPrimary',
    },
    neutral: {
      link: 'text-neutral',
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
        className={tw(
          globalStyles.transitions,
          'block',
          'h-full',
          'flex flex-col lg:flex-row justify-center items-center',
          'space-y-1 lg:space-x-2',
          'text-sm hover:no-underline',
          'transform',
          isActive
            ? tw(colors.linkActive, 'scale-105 -translate-y-px', 'font-medium')
            : tw(colors.link, 'scale-100 translate-y-px'),
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
        on: 'bg-primary lg:bg-onPrimary',
        off: 'bg-neutralBg lg:bg-primary',
      },
      icon: {
        on: 'text-primaryBold lg:text-onPrimary',
        off: 'text-neutral lg:text-onPrimarySoft',
      },
    },
    neutral: {
      underline: {
        on: 'bg-primaryBold',
        off: 'bg-neutralBg',
      },
      icon: {
        on: 'text-neutral',
        off: 'text-primaryBold',
      },
    },
  }.primary;

  const iconStyles = tw(
    'text-2xl md:text-xl',
    'block',
    globalStyles.transitions,
  );

  const Name = ({ name }: { name: string }) => (
    <span className={tw('text-xs lg:text-sm')}>{name}</span>
  );

  const navItems = [
    <Item route={routes.home} key="nav-home">
      {routes.equals(pathname, routes.home) ? (
        <AiFillHome className={tw(iconStyles, colors.icon.on)} />
      ) : (
        <AiOutlineHome className={tw(iconStyles, colors.icon.off)} />
      )}
      <Name name="Home" />
    </Item>,
    <Item route={routes.blog} key="nav-blog">
      {routes.equals(pathname, routes.blog) ? (
        <FaLightbulb className={tw(iconStyles, colors.icon.on)} />
      ) : (
        <FaRegLightbulb className={tw(iconStyles, colors.icon.off)} />
      )}
      <Name name="Blog" />
    </Item>,
    <Item route={routes.about} key="nav-about">
      {routes.equals(pathname, routes.about) ? (
        <FaRegSmileBeam className={tw(iconStyles, colors.icon.on)} />
      ) : (
        <FaRegSmile className={tw(iconStyles, colors.icon.off)} />
      )}

      <Name name="About" />
    </Item>,
    <Item route={routes.uses} key="nav-uses">
      <FaCog
        className={tw(
          iconStyles,
          'transform',
          routes.equals(pathname, routes.uses)
            ? tw('rotate-180', colors.icon.on)
            : tw('rotate-0', colors.icon.off),
        )}
      />

      <Name name="Uses" />
    </Item>,
  ];

  function getUnderlineOffset() {
    let off = navItems.length;
    if (routes.equals(pathname, routes.home)) {
      off = 0;
    } else if (routes.equals(pathname, routes.blog)) {
      off = 1;
    } else if (routes.equals(pathname, routes.about)) {
      off = 2;
    } else if (routes.equals(pathname, routes.uses)) {
      off = 3;
    }

    return off === navItems.length
      ? ''
      : `${(off * (100 / navItems.length)).toFixed(4)}%`;
  }

  const underlineOffset = getUnderlineOffset();

  return (
    <nav
      aria-label="Primary Navigation"
      className={`
      w-full h-full lg:max-w-screen-sm
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
        className={tw(
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
