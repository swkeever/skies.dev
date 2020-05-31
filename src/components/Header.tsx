import React, { useState, useEffect } from "react"
import {
  FaHome,
  FaUserAlt,
  FaRegLightbulb,
  FaMoon,
  FaSun,
} from "react-icons/fa"
import { Link } from "gatsby"
import routes from "../utils/routes"

type HeaderProps = {
  siteTitle?: string
  lightTheme: boolean
  setLightTheme: Function
}

const Header = ({ siteTitle = "", lightTheme, setLightTheme }: HeaderProps) => {
  const styles = {
    nav: `
    fixed 
    bottom-0 
    left-0
    lg:fixed
    lg:top-0
    lg:bottom-auto
    w-screen
    pt-3
    pb-1
    bg-primary
    shadow
    z-50`,

    ul: `
    list-none
    m-0
    p-1
    flex
    lg:justify-start
    divide-x
    divide-onPrimaryDivider
    uppercase
    `,

    li: `
    text-center
    tracking-widest
    flex-1
    text-center
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

    active: `
    text-onPrimaryLinkActive
    hover:text-onPrimaryLinkActive
    `,

    link: `
    text-onPrimaryLink
    outline-none
    hover:text-onPrimaryLinkHover
    hover:no-underline
    focus:outline-none
    active:outline-none
    active:border-0
    focus:border-0
    `,

    theme: `
    uppercase
    tracking-widest
    hover:text-onPrimaryLinkHover
    `,

    themeIcon: `

    `,
  }

  const themeIcon = lightTheme ? (
    <FaSun className={`${styles.icon} text-2xl`} />
  ) : (
    <FaMoon className={`${styles.icon}`} />
  )

  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link
              to={routes.home}
              className={styles.link}
              activeClassName={styles.active}
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
          <li className={styles.li}>
            <Link
              to={routes.blogs}
              className={styles.link}
              activeClassName={styles.active}
            >
              <FaRegLightbulb className={styles.icon} />
              <span className={styles.span}>Blogs</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              to={routes.contact}
              className={styles.link}
              activeClassName={styles.active}
            >
              <FaUserAlt className={styles.icon} />
              <span className={styles.span}>Contact</span>
            </Link>
          </li>
          <li className={styles.li}>
            <button
              className={`${styles.link} ${styles.theme} ${styles.themeIcon}`}
              onClick={() => setLightTheme(!lightTheme)}
            >
              {themeIcon}
              <span className={styles.span}>Theme</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
