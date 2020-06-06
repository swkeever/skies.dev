import React from 'react';
import {
  FaHome,
  FaUserAlt,
  FaRegLightbulb,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';
import routes from '../utils/routes';

type HeaderProps = {
  lightTheme: boolean
  setLightTheme: Function
}

const Header = ({ lightTheme, setLightTheme }: HeaderProps) => {
  const { pathname } = useLocation();

  const styles = {
    nav: `
    fixed 
    bottom-0 
    left-0
    lg:top-0
    lg:bottom-auto
    w-full
    h-12
    
    bg-primary
    shadow
    z-40`,

    ul: `
    list-none
    m-0
    lg:ml-48
    flex
    lg:justify-start

    uppercase
    `,

    li: `
    text-center
    tracking-widest
    flex-1
    lg:flex-none
    lg:justify-start
    pt-1

    `,

    icon: `
    text-xl
    inline
    mr-2
    `,

    span: `
    text-sm
    hidden
    md:inline
    `,

    link: `
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

    `,

    linkActive: `
    border-b-4
    border-onPrimary
    `,

    active: `

    `,

    theme: `
    uppercase
    tracking-widest
    text-onPrimaryBgLink
    hover:text-onPrimaryBgLinkHover
    `,

    themeIcon: `
    inline-block

    `,
  };

  const activeStyles = { color: 'var(--color-light)' };

  return (
    <header
      className={`
    
    `}
    >
      <div
        className={`
      z-50
      hidden
      inline
      lg:block
      lg:fixed
      top-0
      left-0
      ml-4
      tracking-wider
      font-bold
      uppercase
      mt-3
      
      text-lg
      text-onPrimary
      hover:text-onPrimary

      
      `}
      >
        <span role="img" aria-label="Man technologist">
          👨‍💻
        </span>
        {' '}
        Sean Keever
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li
            className={`${styles.li} ${
              pathname === routes.home && styles.linkActive
            }`}
          >
            <Link
              to={routes.home}
              className={styles.link}
              activeClassName={styles.active}
              activeStyle={activeStyles}
            >
              <FaHome
                className={`
              ${styles.icon}
              text-2xl
            `}
              />
              <span className={styles.span}>Home</span>
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              pathname === routes.blogs && styles.linkActive
            }`}
          >
            <Link
              to={routes.blogs}
              className={styles.link}
              activeStyle={activeStyles}
            >
              <FaRegLightbulb className={styles.icon} />
              <span className={styles.span}>Blogs</span>
            </Link>
          </li>
          <li
            className={`${styles.li} ${
              pathname === routes.contact && styles.linkActive
            }`}
          >
            <Link
              to={routes.contact}
              className={styles.link}
              activeStyle={activeStyles}
            >
              <FaUserAlt className={styles.icon} />
              <span className={styles.span}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <span
          className={`
            fixed
            right-0
            top-0
            z-50
            mt-3
            text-2xl
            text-primarySoft
            lg:text-onPrimaryBgLink
            mr-24
            px-1
          `}
        >
          <FaSun />
        </span>
        <label
          htmlFor="theme-toggle"
          className={`
                switch
                mt-1
                fixed 
                right-0
                top-0
                z-50
                mt-2
                mr-8
            `}
        >
          <input
            id="theme-toggle"
            className={`
              
                `}
            onChange={() => setLightTheme(!lightTheme)}
            type="checkbox"
            checked={!lightTheme}
          />
          <span
            className={`
                  slider
                  round

  `}
          />
        </label>
        <span
          className={`
            fixed
            right-0
            top-0
            z-50
            mt-3
            text-xl
            text-primarySoft
            lg:text-onPrimaryBgLink
            lg:mr-1
            mr-1
            px-1
            pt-px
        `}
        >
          <FaMoon />
        </span>
      </div>
    </header>
  );
};

export default Header;
