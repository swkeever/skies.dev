import React from "react"

export default function Alert({ children }) {
  const styles = {
    alert: `
    bg-primaryBgColor
    text-primaryTextColor
    card
    border-l-4
    border-primaryColor
    `,
  }

  return (
    <div className={styles.alert}>
      <h2 className={`text-lg mt-0`}>Alert</h2>
      <div>{children}</div>
    </div>
  )
}
