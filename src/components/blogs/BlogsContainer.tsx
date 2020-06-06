import React from "react"
import Container from "../Container"

export default function BlogsContainer({ children }) {
  return (
    <Container
      className={`
        mt-8 
        px-4 
        max-w-2xl
        lg:mt-16 
        relative
    `}
    >
      {children}
    </Container>
  )
}
