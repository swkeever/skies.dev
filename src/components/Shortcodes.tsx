/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { AnchorHTMLAttributes } from 'react';
import globalStyles from '@styles/index';
import tw from '@utils/tailwind';
import ExternalLink from './ExternalLink';

const styles = {
  copy: tw(
    'text-base md:text-lg lg:text-xl leading-8',
    globalStyles.transitions,
  ),

  link: tw('underline', 'text-onNeutralBgSoft hover:text-onNeutralBgLink'),

  mt: 'mt-5 first:mt-0',
  mt2: 'mt-10 first:mt-0',

  list: tw('flex flex-col space-y-3 lg:space-y-5', 'ml-5 mb-5 lg:mb-10'),

  card: tw('border-l-4', 'rounded-sm', 'p-5'),

  table: tw('border border-neutralBgSofter'),
};

const shortcodes = {
  iframe: (props) => <iframe {...props} className={tw('my-12')} />,
  p: (props) => (
    <p
      {...props}
      className={tw(
        styles.copy,
        'mb-4 lg:mb-8 last:mb-0',
        'text-onNeutralBgSoft',
      )}
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
        className={tw(className, styles.copy, styles.link)}
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
    <li {...props} className={tw(styles.mt, 'text-onNeutralBgSoft')} />
  ),
  h1: (props) => (
    <h1
      {...props}
      className={tw(
        'text-onNeutralBg',
        'text-5xl md:text-6xl font-extrabold',
        'mt-8 mb-8',
      )}
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className={tw(
        'text-onNeutralBgSoft',
        'text-3xl md:text-4xl font-bold',
        'mb-6',
        'first:mt-0 mt-16',
        globalStyles.transitions,
      )}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className={tw(
        'text-neutralBold',
        'text-2xl md:text-3xl font-thin',
        'mb-2',
        styles.mt2,
        globalStyles.transitions,
      )}
    />
  ),
  h4: (props) => (
    <h4
      className={tw(
        'text-neutral',
        'text-lg md:text-xl font-semibold',
        'mb-1',
        styles.mt2,
        globalStyles.transitions,
      )}
      {...props}
    />
  ),
  inlineCode: (props) => (
    <code
      className={tw(
        'bg-neutralBgSoft text-onNeutralBgSoft',
        styles.copy,
        'rounded',
      )}
      {...props}
    />
  ),

  table: (props) => (
    <table
      {...props}
      className={tw(
        styles.copy,
        styles.table,
        'rounded-md',
        'my-5 lg:my-10',
        'w-full',
        'shadow-lg',
        'bg-neutralBgSoft',
      )}
    />
  ),
  th: (props) => (
    <th
      {...props}
      className={tw(
        'px-2 pt-3',
        styles.table,
        'text-left',
        'bg-primary text-onPrimary',
        globalStyles.transitions,
      )}
    />
  ),
  td: (props) => (
    <td
      {...props}
      className={tw(
        'px-2 pt-1',
        'text-onPrimaryBg',
        styles.table,
        globalStyles.transitions,
      )}
    />
  ),
  tr: (props) => (
    <tr
      {...props}
      className={tw('even:bg-neutralBg', globalStyles.transitions)}
    />
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className={tw(
        props.className,
        'my-5 lg:my-10',
        styles.copy,
        styles.card,
        'border-primaryBgSoft',
        'bg-neutralBg',
      )}
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
