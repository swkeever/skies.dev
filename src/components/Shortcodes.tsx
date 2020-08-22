/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import globalStyles from '@styles/index';
import ExternalLink from './ExternalLink';

const styles = {
  copy: `
  text-base
  md:text-lg
  lg:text-xl
  leading-8
  text-onNeutralBgSoft
  ${globalStyles.transitions}
  `,

  link: `
  underline
  text-onNeutralBg 
  hover:text-onNeutralBgLink
  `,

  mt: 'mt-5 first:mt-0',
  mt2: 'mt-10 first:mt-0',

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
  mb-1
  ${globalStyles.transitions}
  
  `,
};

const shortcodes = {
  p: (props) => {
    const textStyles = props.className?.includes('text-')
      ? ''
      : 'text-onNeutralBgSoft';

    return (
      <p
        {...props}
        className={`
        ${styles.copy}
        ${textStyles} 
        mb-5 
        last:mb-0
    `}
      />
    );
  },
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
     ${styles.mt}
    `}
    />
  ),
  h1: (props) => (
    <h1
      {...props}
      className={`${styles.header}
    text-onNeutralBg
    text-5xl md:text-6xl
    font-extrabold mt-8 mb-8
    `}
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className={`${styles.header} text-onNeutralBg
 text-2xl md:text-3xl font-semibold ${styles.mt2}`}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className={`${styles.header} text-onNeutralBg text-xl md:text-2xl font-semibold ${styles.mt2}`}
    />
  ),
  h4: (props) => (
    <h4
      className={`
        text-onNeutralBgSoft mb-1
        text-lg md:text-xl font-semibold ${styles.mt2}
      `}
      {...props}
    />
  ),
  inlineCode: (props) => (
    <code
      className="bg-neutralBgSoft text-onNeutralBgSoft px-1 rounded pt-1"
      {...props}
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
  Danger: (props) => (
    <div
      className={`
      ${styles.copy}
      ${styles.mt}
      ${styles.card}
      border-danger
      `}
      {...props}
    />
  ),
  Success: (props) => (
    <div
      className={`
      ${styles.copy}
      ${styles.mt}
      ${styles.card}
      border-success
      `}
      {...props}
    />
  ),
};

export default shortcodes;
