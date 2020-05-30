import React from "react"

export default function Alert({ children }) {
  const styles = {
    alert: `
    bg-primary-100
    text-primary-900
    card
    border-l-4
    border-primary-500
    `,
  }

  return (
    <div className={styles.alert}>
      <h2 className={`text-lg mt-0`}>Alert</h2>
      <div>{children}</div>
    </div>
  )
}
