import React from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import Alert from "../components/Alert"

export default function ContactPage() {
  const styles = {
    container: `
    mt-8 
    px-4 
    md:w-2/3 
    lg:mt-16 
    lg:w-1/2
    `,

    header: `
    text-4xl
    `,
  }

  return (
    <Layout>
      <Container className={styles.container}>
        <h1 className={styles.header}>This part of the site is coming soon.</h1>
        <Alert>
          This page is a work in progress! I'll get around to this when I finish
          up school. 😃
        </Alert>
        <p>
          It will have a summary of the services I offer and a way to get in
          touch with me. Thanks for stopping by in the mean time!
        </p>
      </Container>
    </Layout>
  )
}
