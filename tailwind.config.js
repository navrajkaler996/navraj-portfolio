/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "radial-gradient": "radial-gradient(ellipse at bottom, #0D1E31, #000)",
      }),
    },
  },
  plugins: [],
};
