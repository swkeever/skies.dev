/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

// primary blue #3F83F8 (500), #1C64F2 (600)

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

        info: 'var(--color-info)',
        infoBold: 'var(--color-infoBold)',
        infoBg: 'var(--color-infoBg)',
        infoBgSoft: 'var(--color-infoBgSoft)',
        onInfoBg: 'var(--color-onInfoBg)',
        onInfoBgSoft: 'var(--color-onInfoBgSoft)',

        success: 'var(--color-success)',
        successBold: 'var(--color-successBold)',
        successBg: 'var(--color-successBg)',
        successBgSoft: 'var(--color-successBgSoft)',
        onSuccessBg: 'var(--color-onSuccessBg)',
        onSuccessBgSoft: 'var(--color-onSuccessBgSoft)',

        danger: 'var(--color-danger)',
        dangerBold: 'var(--color-dangerBold)',
        dangerBg: 'var(--color-dangerBg)',
        dangerBgSoft: 'var(--color-dangerBgSoft)',
        onDangerBg: 'var(--color-onDangerBg)',
        onDangerBgSoft: 'var(--color-onDangerBgSoft)',

        warning: 'var(--color-warning)',
        warningBold: 'var(--color-warningBold)',
        warningBg: 'var(--color-warningBg)',
        warningBgSoft: 'var(--color-warningBgSoft)',
        onWarningBg: 'var(--color-onWarningBg)',
        onWarningBgSoft: 'var(--color-onWarningBgSoft)',

        cat0: 'var(--color-cat0)',
        onCat0: 'var(--color-onCat0)',
        cat1: 'var(--color-cat1)',
        onCat1: 'var(--color-onCat1)',
        cat2: 'var(--color-cat2)',
        onCat2: 'var(--color-onCat2)',
        cat3: 'var(--color-cat3)',
        onCat3: 'var(--color-onCat3)',

        // backgrounds
        primaryBg: 'var(--color-primaryBg)',
        primaryBgSoft: 'var(--color-primaryBgSoft)',
        primaryBgSofter: 'var(--color-primaryBgSofter)',

        neutralBg: 'var(--color-neutralBg)',
        neutralBgSoft: 'var(--color-neutralBgSoft)',
        neutralBgSofter: 'var(--color-neutralBgSofter)',

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

      '2xl': '1900px',
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
