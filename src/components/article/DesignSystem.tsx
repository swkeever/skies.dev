/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import ExternalLink from '../ExternalLink';

const styles = {
  copy: `
  text-base
  md:text-lg
  lg:text-xl
  text-onNeutralBgSoft
  leading-8
  font-serif
  `,

  link: `
  underline
  text-onNeutralBg 
  hover:text-onNeutralBgLink
  `,

  mt: 'mt-5 first:mt-0',
  mt2: 'mt-10 first:mt-2',

  list: `
  flex flex-col
  space-y-2
  ml-5
  mb-5
  `,

  card: `
  border-l-4
  p-5
  rounded-sm
  `,

  header: `
  text-onNeutralBg
  mb-0
  `,
};

const shortcodes = {
  p: (props) => (
    <p
      {...props}
      className={`
        ${styles.copy} 
        mb-5
    `}
    />
  ),
  a: ({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    let className = '';

    if (href.startsWith('#')) {
      className += 'anchor';
    }

    return (
      <a
        href={href}
        {...rest}
        className={`
          ${className}
          ${styles.copy} 
          ${styles.link}
        `}
      />
    );
  },
  ExternalLink: (props) => (
    <ExternalLink
      {...props}
      rel="nofollow noopener noreferrer"
      target="_blank"
      className={`${styles.copy} ${styles.link}`}
    />
  ),
  ul: (props) => (
    <ul {...props} className={`${styles.copy}${styles.list} list-disc`} />
  ),
  ol: (props) => (
    <ul {...props} className={`${styles.copy} ${styles.list} list-decimal`} />
  ),
  li: (props) => (
    <li
      {...props}
      className={`
     ${styles.mt} first:mt-2
    `}
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className={`${styles.header} text-2xl md:text-3xl font-bold ${styles.mt2}`}
    />
  ),
  inlineCode: (props) => (
    <code
      className="bg-neutralBgSoft text-onNeutralBgSoft px-1 rounded pt-1"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className={`${styles.header} text-xl md:text-2xl font-semibold ${styles.mt2}`}
    />
  ),
  table: (props) => (
    <table
      {...props}
      className={`${styles.copy} ${styles.mt} w-full bg-neutralBgSoft`}
    />
  ),
  th: (props) => (
    <th {...props} className="px-2 pt-3 text-left bg-primary text-onPrimary" />
  ),
  td: (props) => <td {...props} className="px-2 pt-1 text-onPrimaryBg" />,
  tr: (props) => <tr {...props} className="even:bg-neutralBg" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className={`
        ${styles.copy}
        ${styles.mt}
        ${styles.card}
        border-primaryBgSoft
        bg-primaryBg
        text-onPrimaryBgSoft
        mb-5
     `}
    />
  ),
  aside: (props) => (
    <aside
      {...props}
      className={`
        ${styles.copy} 
        ${styles.mt}
        ${styles.card}
        bg-neutralBgSoft 
        text-onNeutralBgSoft
        mb-5
        `}
    />
  ),
};

export default shortcodes;
