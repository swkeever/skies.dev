import React from "react"
import Container from "../Container"

export default function Section({ children, className = "" }) {
  return (
    <Container
      className={`
        md:pr-8
        max-w-screen-lg
      `}
    >
      <section
        className={`
          flex
          justify-center
          flex-col
          text-lg
          items-center
          md:text-base
          md:mb-32
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
