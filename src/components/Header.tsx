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
  location: string
}

const Header = ({
  siteTitle = "",
  lightTheme,
  setLightTheme,
  location,
}: HeaderProps) => {
  const styles = {
    nav: `
    fixed 
    bottom-0 
    left-0
    lg:fixed
    lg:top-0
    lg:bottom-auto
    w-screen
    bg-primary
    shadow
    z-40`,

    ul: `
    list-none
    m-0
    lg:ml-48
    p-1
    flex
    lg:justify-start

    divide-x
    divide-onPrimarySoft
    uppercase
    `,

    li: `
    text-center
    tracking-widest
    flex-1
    lg:flex-none
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
    inline-block
    text-onPrimaryLink
    hover:text-onPrimaryLinkHover
    outline-none
    hover:no-underline
    lg:px-12
    pt-2 
    pb-1
    `,

    linkActive: `
    
    `,

    active: `

    `,

    theme: `
    uppercase
    tracking-widest
    text-onPrimaryLink
    hover:text-onPrimaryLinkHover
    `,

    themeIcon: `
    inline-block

    `,
  }

  const activeStyles = { color: "var(--color-light)" }

  const themeIcon = !lightTheme ? (
    <FaSun className={`${styles.icon} text-2xl`} />
  ) : (
    <FaMoon className={`${styles.icon}`} />
  )

  return (
    <header>
      <Link
        to={routes.home}
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
      text-light
      hover:text-light

      
      `}
      >
        👨‍💻 Sean Keever
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={`${styles.li} ${location === ""}`}>
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
          <li className={styles.li}>
            <Link
              to={routes.blogs}
              className={styles.link}
              activeStyle={activeStyles}
            >
              <FaRegLightbulb className={styles.icon} />
              <span className={styles.span}>Blogs</span>
            </Link>
          </li>
          <li className={styles.li}>
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
            text-primaryCloser
            mr-24
            px-1
          `}
        >
          <FaSun />
        </span>
        <label
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
            className={`
              
                `}
            onClick={() => setLightTheme(!lightTheme)}
            type="checkbox"
            checked={!lightTheme}
          />
          <span
            className={`
                  slider
                  round

  `}
          ></span>
        </label>
        <span
          className={`
            fixed
            right-0
            top-0
            z-50
            mt-3
            text-xl
            text-primaryCloser
            
            mr-1
            px-1
            pt-px
        `}
        >
          <FaMoon />
        </span>
      </div>
    </header>
  )
}

export default Header
