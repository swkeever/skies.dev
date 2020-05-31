import React, { useState } from "react"
import Layout from "../components/Layout"
import Container from "../components/Container"
import Alert from "../components/Alert"
import { FiSend } from "react-icons/fi"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const styles = {
    container: `
    mt-8 
    px-5 
    pb-5
    bg-neutral-100
    z-50
    -mt-64
    relative
    w-10/12
    mx-auto
    p-2
    shadow-2xl
    rounded-md
    md:w-2/3 
    lg:-mt-64
    lg:w-6/12
    xl:w-4/12
    `,

    header: `
    text-4xl
    `,

    input: `
    bg-neutral-100 
    shadow-inner 
    outline-none
    focus:shadow-focus
    rounded
    border
    border-primary-200
    w-full
    rounded-md
    px-2 
    py-1
    placeholder-neutral-400
    text-neutral-900
    mb-2
    `,

    label: `
    text-neutral-500
    tracking-widest
    uppercase
    text-xs
    `,
  }

  return (
    <Layout
      className={`
    bg-neutral-200
    `}
    >
      <div
        className={`
      diagonal-t
      py-56
      relative
      bg-primary-200
      md:py-64
      `}
      ></div>
      <Container className={`${styles.container}`}>
        <h1
          className={`
          text-lg
          `}
        >
          Contact
        </h1>
        <p
          className={`
            mt-1
            text-neutral-600
            mb-2
          `}
        >
          Do you need to hire a developer for your next project?
        </p>
        <form
          method="post"
          action="#"
          className={`
            w-auto
          `}
        >
          <input type="text" name="_gotcha" style={{ display: "none" }} />
          <label>
            <span className={`${styles.label}`}>Name</span>
            <input
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Bob Ross"
              className={styles.input}
              type="text"
              name="name"
              id="name"
              required
            />
          </label>
          <label>
            <span className={`${styles.label}`}>Email</span>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="bob.ross@example.com"
              className={styles.input}
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
          <label>
            <span className={`${styles.label}`}>Message</span>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="We'll paint one happy little tree right here."
              className={`${styles.input}
              h-32
              resize-none
              `}
              name="message"
              id="message"
              required
            ></textarea>
          </label>
          <div
            className={`
            flex
            justify-end
          `}
          >
            <button
              type="button"
              className={`
                px-4
                hover:pt-0
                mr-2
                text-neutral-700
                hover:border-b
                hover:border-neutral-700
                focus:outline-none
          `}
              onClick={() => {
                setName("")
                setEmail("")
                setMessage("")
              }}
            >
              Reset
            </button>
            <button
              type="submit"
              className={`
                bg-primary-500
                rounded-full
                px-6
                py-2
                text-light
                font-bold
                shadow
                active:shadow-none
                focus:outline-none
          `}
            >
              Send
              <span
                className={`
                  inline-block
                  ml-1
                  align-text-top
                  text-light
                  opacity-75
              `}
              >
                <FiSend />
              </span>
            </button>
          </div>
        </form>
      </Container>
    </Layout>
  )
}
