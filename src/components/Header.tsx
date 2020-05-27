import React from "react"
import { FaHome, FaUserAlt, FaRegLightbulb } from "react-icons/fa"
import { Link } from "gatsby"
import routes from "../utils/routes"

const Header = ({ siteTitle = "" }) => {
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
    bg-primaryColor
    shadow-sm
    z-50`,

    ul: `
    list-none
    m-0
    p-1
    grid
    grid-cols-3
    divide-x
    divide-neutralColor
    uppercase
    `,

    li: `
    text-center
    tracking-widest
    text-neutralColor
    hover:text-primaryBgColor
    flex-1
    justify-center
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
    text-bgColor
    hover:text-bgColor
    `,

    link: `
    text-neutralColor
    text-neutralColor
    hover:text-primaryTextColor
    hover:no-underline
    `,
  }

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
        </ul>
      </nav>
    </header>
  )
}

export default Header
