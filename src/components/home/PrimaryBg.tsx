import React from "react"

export default function PrimaryBg({ children }) {
  return (
    <div
      className={`
        bg-primary
        text-light
        pt-16
        -mt-12
        z-0
        md:-mt-32
        md:pb-px
      `}
    >
      {children}
    </div>
  )
}
