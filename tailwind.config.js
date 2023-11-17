/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "radial-gradient": "radial-gradient(ellipse at bottom, #0D1E31, #000)",
      }),
      fontFamily: {
        "titan-one": ["Titan One", "sans-serif"],
        cuprum: ["KoHo"],
      },
      colors: {
        "color-home-welcome": "#2d9da9",
      },
    },
  },
  plugins: [],
};
