const { colors, rotate, boxShadow } = require("tailwindcss/defaultTheme")

// primary blue #4299E1

module.exports = {
  purge: [],
  theme: {
    colors: {
      "primary-100": "var(--color-primary-100)",
      "primary-200": "var(--color-primary-200)",
      "primary-300": "var(--color-primary-300)",
      "primary-400": "var(--color-primary-400)",
      "primary-500": "var(--color-primary-500)",
      "primary-600": "var(--color-primary-600)",
      "primary-700": "var(--color-primary-700)",
      "primary-800": "var(--color-primary-800)",
      "primary-900": "var(--color-primary-900)",
      "neutral-100": "var(--color-neutral-100)",
      "neutral-200": "var(--color-neutral-200)",
      "neutral-300": "var(--color-neutral-300)",
      "neutral-400": "var(--color-neutral-400)",
      "neutral-500": "var(--color-neutral-500)",
      "neutral-600": "var(--color-neutral-600)",
      "neutral-700": "var(--color-neutral-700)",
      "neutral-800": "var(--color-neutral-800)",
      "neutral-900": "var(--color-neutral-900)",
      light: "var(--color-light)",
      dark: "var(--color-dark)",
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
    transitionDuration: ["responsive", "hover", "focus"],
    boxShadow: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
