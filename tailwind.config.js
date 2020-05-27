const { colors, rotate, boxShadow } = require("tailwindcss/defaultTheme")

// primary blue #4299E1

module.exports = {
  purge: [],
  theme: {
    colors: {
      textColor: "var(--color-text)",
      neutralColor: "var(--color-neutral)",
      bgColor: "var(--color-bg)",
      primaryColor: "var(--color-primary)",
      primaryBgColor: "var(--color-primary-bg)",
      primaryTextColor: "var(--color-primary-text)",
      darkColor: "var(--color-dark)",
      linkColor: "var(--color-link)",
      linkHoverColor: "var(--color-link-hover)",
      lightColor: "var(--color-light)",
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
    borderWidth: ["responsive", "focus"],
  },
  plugins: [],
}
