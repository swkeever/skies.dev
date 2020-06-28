/* eslint-disable global-require */
const { rotate, boxShadow, colors } = require('tailwindcss/defaultTheme');

// primary blue #4299E1

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/**/*.js',
    './src/**/*.ts',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // base
        primary: 'var(--color-primary)',
        primarySoft: 'var(--color-primarySoft)',
        primaryBold: 'var(--color-primaryBold)',

        neutral: 'var(--color-neutral)',
        neutralBold: 'var(--color-neutralBold)',
        neutralSoft: 'var(--color-neutralSoft)',

        // backgrounds
        primaryBg: 'var(--color-primaryBg)',
        primaryBgSoft: 'var(--color-primaryBgSoft)',

        neutralBg: 'var(--color-neutralBg)',
        neutralBgSoft: 'var(--color-neutralBgSoft)',

        footerBg: 'var(--color-footerBg)',

        // text
        onPrimary: 'var(--color-onPrimary)',
        onPrimarySoft: 'var(--color-onPrimarySoft)',

        onNeutral: 'var(--color-onNeutral)',
        onNeutralSoft: 'var(--color-onNeutralSoft)',

        onPrimaryBg: 'var(--color-onPrimaryBg)',
        onPrimaryBgSoft: 'var(--color-onPrimaryBgSoft)',

        onNeutralBg: 'var(--color-onNeutralBg)',
        onNeutralBgSoft: 'var(--color-onNeutralBgSoft)',

        light: 'var(--color-light)',
        lightSoft: 'var(--color-primary-100)',
        onLight: 'var(--color-onLight)',

        transparent: 'transparent',

        onPrimaryBgLink: 'var(--color-onPrimaryBgLink)',
        onPrimaryBgLinkHover: 'var(--color-onPrimaryBgLinkHover)',
        onNeutralBgLink: 'var(--color-onNeutralBgLink)',
        onNeutralBgLinkHover: 'var(--color-onNeutralBgLinkHover)',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
    rotate: {
      ...rotate,
      360: '360deg',
    },
    boxShadow: {
      ...boxShadow,
      focus: '0 0 5px rgba(66, 153, 225, 0.7)',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '760px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    rotate: ['responsive', 'hover', 'focus', 'active'],
    flexDirection: ['responsive', 'even', 'odd'],
    borderWidth: ['responsive', 'focus', 'hover'],
    outline: ['focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'active'],
    scale: ['responsive', 'hover', 'focus', 'active'],
    transitionDuration: ['responsive', 'hover', 'focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
