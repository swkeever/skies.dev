const { colors, rotate, boxShadow } = require("tailwindcss/defaultTheme")

// primary blue #4299E1

module.exports = {
  purge: [],
  theme: {
    colors: {
      // base
      primary: "var(--color-primary)",
      neutral: "var(--color-neutral)",

      // backgrounds
      primaryBg: "var(--color-primaryBg)",
      neutralBg: "var(--color-neutralBg)",
      footerBg: "var(--color-footerBg)",

      // text
      onPrimaryText: "var(--color-onPrimaryText)",
      onPrimarySoftText: "var(--color-onPrimarySoftText)",
      onNeutralText: "var(--color-onNeutralText)",
      placeholder: "var(--color-placeholder)",

      // borders
      onPrimaryDivider: "var(--color-onPrimaryDivider)",
      onNeutralDivider: "var(--color-onNeutralDivider)",

      // links
      onPrimaryLinkActive: "var(--color-onPrimaryLinkActive)",
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
