const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "shady-black": "#212121",
        "milkish-white": "#F8F8F8",
      },
      screens: {
        "big-desktop": "1920px",
      },
      fontSize: {
        "5.25xl": "3.25rem",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
