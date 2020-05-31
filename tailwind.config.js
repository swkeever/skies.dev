const { colors, rotate, boxShadow } = require("tailwindcss/defaultTheme")

// primary blue #4299E1

module.exports = {
  purge: [],
  theme: {
    colors: {
      // base
      primary: "var(--color-primary)",
      neutral: "var(--color-neutral)",
      light: "var(--color-light)",
      dark: "var(--color-dark)",

      // backgrounds
      primaryBg: "var(--color-primaryBg)",
      neutralBg: "var(--color-neutralBg)",
      footerBg: "var(--color-footerBg)",
      primaryBgFarther: "var(--color-primaryBgFarther)",
      neutralBgFarther: "var(--color-neutralBgFarther)",
      onPrimarySoft: "var(--color-onPrimarySoft)",
      primaryCloser: "var(--color-primaryCloser)",

      // text
      onPrimary: "var(--color-onPrimary)",
      onNeutral: "var(--color-onNeutral)",
      onNeutralSoft: "var(--color-onNeutralSoft)",
      onPrimaryBg: "var(--color-onPrimaryBg)",
      onPrimaryBgSoft: "var(--color-onPrimaryBgSoft)",
      onNeutralBg: "var(--color-onNeutralBg)",
      onNeutralBgSoft: "var(--color-onNeutralBgSoft)",
      onLightText: "var(--color-onLightText)",

      // borders
      onPrimarySoft: "var(--color-onPrimarySoft)",
      onNeutralSoft: "var(--color-onNeutralSoft)",

      // links
      onPrimaryLink: "var(--color-onPrimaryLink)",
      onPrimaryLinkHover: "var(--color-onPrimaryLinkHover)",
      onNeutralLink: "var(--color-onNeutralLink)",
      onNeutralLinkHover: "var(--color-onNeutralLinkHover)",
    },
    rotate: {
      ...rotate,
      "360": "360deg",
    },
    boxShadow: {
      ...boxShadow,
      focus: "0 0 5px rgba(66, 153, 225, 0.7)",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "760px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    rotate: ["responsive", "hover", "focus", "active"],
    flexDirection: ["responsive", "even", "odd"],
    borderWidth: ["responsive", "focus", "hover"],
    transitionDuration: ["responsive", "hover", "focus"],
    boxShadow: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
