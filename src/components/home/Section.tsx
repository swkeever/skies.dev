import React from "react"
import Container from "../Container"

export default function Section({ children, className = "" }) {
  return (
    <Container
      className={`
      md:pt-16
      `}
    >
      <section
        className={`
          flex
          justify-center
          flex-col
          text-lg
          px-4
          items-center
          md:text-base
          md:mb-32
          lg:text-lg
          md:flex-row 
          pt-2 
          lg:pt-32
          ${className}
        `}
      >
        {children}
      </section>
    </Container>
  )
}
