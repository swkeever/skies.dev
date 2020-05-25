const { colors } = require("tailwindcss/defaultTheme")

// primary blue #4299E1

module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: colors.blue,
      secondary: colors.green,
      neutral: colors.gray,
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
  variants: { flexDirection: ["responsive", "even", "odd"] },
  plugins: [],
}
