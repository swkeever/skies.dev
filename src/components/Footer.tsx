import React from 'react';

export default function Footer() {
  const styles = {
    footer: `
      mb-8
      px-4
      py-16
      lg:mb-0
      bg-neutral-900
      text-neutral-500
    `
  }

  return (
    <footer className={styles.footer}>
      <div className="container mx-auto">
        © All Rights Reserved {new Date().getFullYear()}
      </div>
    </footer>
  )
}