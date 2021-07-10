const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        nunito: ["nunito", "sans-serif"],
      },
      colors: {
        pokeRed: "#e8332a",
        pokeGrey: "#bfbfc9",
        pokeBlue: "#3661ac",
        pokeYellow: "#ffcb08",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
