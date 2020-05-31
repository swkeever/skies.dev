import React, { ReactChildren } from "react"
import { Link } from "gatsby"

type ButtonProps = {
  children: ReactChildren
  to: string
}

export default function Button({ children, to }: ButtonProps) {
  const buttonStyles = `
    bg-primary
    text-onPrimary
    hover:text-onPrimary
    rounded-full
    px-4 
    py-2 
    inline-block
    mt-4
    inline-block
    align-middle
    shadow
    active:shadow-none
    hover:no-underline
    hover:align-top
    font-bold
    mb-4
    lg:px-6 
    lg:text-lg
  `

  return (
    <Link className={buttonStyles} to={to}>
      {children}
    </Link>
  )
}
