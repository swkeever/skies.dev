import React from 'react';
import { FaHome, FaUserAlt, FaRegLightbulb } from 'react-icons/fa';
import routes from '../../../../utils/routes';
import Item from './item';
import Name from './item/Name';

export default function Nav() {
  const iconStyles = `
    text-2xl
    md:text-xl
    inline
    mr-2
  `;

  return (
    <nav
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      className={`
        fixed 
        bottom-0 
        left-0
        lg:top-0
        lg:bottom-auto
        w-full
        h-12
        bg-primary
        shadow
        z-40
      `}
    >
      <ul
        className={`
          list-none
          m-0
          lg:ml-48
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
        <Item route={routes.blogs}>
          <FaRegLightbulb className={iconStyles} />
          <Name name="Blogs" />
        </Item>
        <Item route={routes.contact}>
          <FaUserAlt className={iconStyles} />
          <Name name="Contact" />
        </Item>
      </ul>
    </nav>
  );
}
