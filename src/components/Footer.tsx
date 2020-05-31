import React from "react"
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa"
import Container from "./Container"
import links from "../utils/links"

export default function Footer() {
  const styles = {
    footer: `
      mb-8
      px-4
      pt-4 
      pb-12
      z-40
      text-base
      text-xs
      md:pb-8
      lg:pb-1
      lg:mb-0
      bg-footerBg
      text-neutral
    `,

    li: `
    pr-10
    text-3xl
    md:text-3xl
    lg:text-4xl
    `,

    ul: `
    ml-0
    list-none 
    flex     
    `,

    container: `
    md:flex
    md:flex-row-reverse 
    md:justify-between
    md:items-baseline

    `,
  }

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a href={links.sourceRepo}>
              <FaCode />
            </a>
          </li>
          <li className={styles.li}>
            <a href={links.github}>
              <FaGithub />
            </a>
          </li>
          <li className={styles.li}>
            <a href={links.linkedIn}>
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <p>© All Rights Reserved {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}
