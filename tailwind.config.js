/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

// primary blue #3F83F8 (500), #1C64F2 (600)

module.exports = {
  purge: [
    './**/*.html',
    './**/*.jsx',
    './**/*.tsx',
    './**/*.js',
    './**/*.ts',
    './content/**/*.mdx',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        pink: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        green: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },

        primary: 'var(--color-primary)',
        primarySoft: 'var(--color-primarySoft)',
        primaryBold: 'var(--color-primaryBold)',
        primaryBg: 'var(--color-primaryBg)',
        primaryBgSoft: 'var(--color-primaryBgSoft)',
        primaryBgSofter: 'var(--color-primaryBgSofter)',
        onPrimaryBg: 'var(--color-onPrimaryBg)',
        onPrimaryBgSoft: 'var(--color-onPrimaryBgSoft)',
        onPrimaryBgSofter: 'var(--color-onPrimaryBgSofter)',

        neutralBg: 'var(--color-neutralBg)',
        neutralBgSoft: 'var(--color-neutralBgSoft)',
        neutralBgSofter: 'var(--color-neutralBgSofter)',
        neutral: 'var(--color-neutral)',
        neutralBold: 'var(--color-neutralBold)',
        neutralSoft: 'var(--color-neutralSoft)',
        onNeutralBg: 'var(--color-onNeutralBg)',
        onNeutralBgSoft: 'var(--color-onNeutralBgSoft)',
        onNeutralBgSofter: 'var(--color-onNeutralBgSofter)',

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

        footerBg: 'var(--color-footerBg)',

        // text
        onPrimary: 'var(--color-onPrimary)',
        onPrimarySoft: 'var(--color-onPrimarySoft)',
        onPrimarySofter: 'var(--color-onPrimarySofter)',

        light: 'var(--color-light)',
        lightSoft: 'var(--color-primary-100)',
        onLight: 'var(--color-onLight)',

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

      '2xl': '1600px',
      '3xl': '1960px',
    },
  },
  variants: {
    rotate: ['responsive', 'hover', 'focus', 'active'],
    flexDirection: ['responsive', 'even', 'odd'],
    borderWidth: ['responsive', 'focus', 'hover'],
    outline: ['focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
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
