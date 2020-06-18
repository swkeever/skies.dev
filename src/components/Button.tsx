/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

export default function Button({
  tag,
  to = '',
  color,
  className = '',
  children,
  props,
}: {
  tag: 'button' | 'a' | 'Link';
  to?: string;
  className?: string;
  color: 'primary' | 'light';
  children: ReactNode;
  props?: Object;
}) {
  let bgColor;
  let textColor;
  let bgHover;
  let textHover;

  switch (color) {
    case 'light':
      bgColor = 'bg-light';
      textColor = 'text-onLight';
      bgHover = 'hover:bg-lightSoft';
      textHover = 'hover:text-onLight';
      break;
    case 'primary':
      bgColor = 'bg-primary';
      textColor = 'text-onPrimary';
      bgHover = 'hover:bg-primaryBold';
      textHover = 'hover:text-onPrimary';
      break;
    default:
      throw new Error('unknown color');
  }

  const styles = `
    inline-block
    ${bgColor}
    ${textColor}
    hover:${textColor}
    rounded-full
    focus:outline-none
    px-4 
    ${bgHover}
    ${textHover}
    transition 
    duration-300 
    py-2 
    font-bold
    hover:font-bold
    lg:px-6 
    lg:text-lg
    ${className}
  `;

  switch (tag) {
    case 'button':
      return (
        // eslint-disable-next-line react/button-has-type
        <button className={styles} {...props}>
          {children}
        </button>
      );
    case 'a':
      return (
        <a
          href={to}
          rel="noopener noreferrer"
          target="_blank"
          className={styles}
          {...props}
        >
          {children}
        </a>
      );
    case 'Link':
      return (
        <Link to={to} className={styles} {...props}>
          {children}
        </Link>
      );
    default:
      throw new Error('unknown button type');
  }
}
