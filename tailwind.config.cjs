const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "shady-black": "#212121",
        "milkish-white": "#F8F8F8",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
