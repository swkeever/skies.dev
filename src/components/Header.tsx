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

    link: `
    text-onPrimaryLink
    hover:text-onPrimaryLinkHover
    outline-none
    hover:no-underline
    `,

    theme: `
    uppercase
    tracking-widest
    text-onPrimaryLink
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
              activeStyle={{ color: "var(--color-light)" }}
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
              activeStyle={{ color: "var(--color-light)" }}
            >
              <FaRegLightbulb className={styles.icon} />
              <span className={styles.span}>Blogs</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              to={routes.contact}
              className={styles.link}
              activeStyle={{ color: "var(--color-light)" }}
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
