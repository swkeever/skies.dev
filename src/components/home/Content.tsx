import React, { ReactNode } from "react"

type ContentProps = {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <div
      className={`
      md:w-5/12
      lg:w-6/12 
      mx-8
    `}
    >
      {children}
    </div>
  )
}
