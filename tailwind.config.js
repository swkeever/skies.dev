/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

// primary blue #3F83F8

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
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // base
        primary: 'var(--color-primary)',
        primarySoft: 'var(--color-primarySoft)',
        primaryBold: 'var(--color-primaryBold)',

        neutral: 'var(--color-neutral)',
        neutralBold: 'var(--color-neutralBold)',
        neutralSoft: 'var(--color-neutralSoft)',

        success: 'var(--color-success)',
        successBg: 'var(--color-successBg)',
        successBgSoft: 'var(--color-successBgSoft)',
        onSuccessBg: 'var(--color-onSuccessBg)',
        onSuccessBgSoft: 'var(--color-onSuccessBgSoft)',

        danger: 'var(--color-danger)',
        dangerBg: 'var(--color-dangerBg)',
        dangerBgSoft: 'var(--color-dangerBgSoft)',
        onDangerBg: 'var(--color-onDangerBg)',
        onDangerBgSoft: 'var(--color-onDangerBgSoft)',

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
        onPrimaryBgSofter: 'var(--color-onPrimaryBgSofter)',

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
      ...defaultTheme.rotate,
      360: '360deg',
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
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'even', 'disabled'],
    margin: ['responsive', 'last', 'first'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
      'disabled',
    ],
  },
  plugins: [require('@tailwindcss/ui')],
};
