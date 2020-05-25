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
    w-full
    pt-3
    pb-1
    bg-primary-500
    shadow-xl
    z-50`,

    ul: `
    list-none
    m-0
    p-1
    grid
    grid-cols-3
    divide-x
    divide-primary-400
    uppercase
    `,

    li: `
    text-center
    tracking-widest
    text-primary-300
    hover:text-primary-100
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
    text-neutral-100
    `,

    link: `
    text-primary-300
    text-primary-300
    hover:text-primary-200
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
