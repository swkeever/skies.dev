import React from 'react';

export default function Footer() {
  const styles = {
    footer: `
      mb-8
      px-4
      py-8
      bg-neutral-900
      text-neutral-500
    `
  }

  return (
    <footer className={styles.footer}>
      © All Rights Reserved {new Date().getFullYear()}
      
      </footer>
  )
}