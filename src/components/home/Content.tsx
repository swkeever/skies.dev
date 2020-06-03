import React, { ReactNode } from "react"

type ContentProps = {
  children: ReactNode
  className?: string
}

export default function Content({ children, className = "" }: ContentProps) {
  return (
    <div
      className={`
      md:w-5/12
      lg:w-6/12 
      mx-8
      ${className}
    `}
    >
      {children}
    </div>
  )
}
