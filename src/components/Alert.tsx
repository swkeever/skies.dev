import React from "react"

export default function Alert({ children }) {
  const styles = {
    alert: `
    bg-primaryBg
    text-onPrimaryText
    card
    border-l-4
    border-primary
    `,
  }

  return (
    <div className={styles.alert}>
      <h2 className={`text-lg mt-0`}>Alert</h2>
      <div>{children}</div>
    </div>
  )
}
