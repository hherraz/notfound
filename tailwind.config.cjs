/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        monospace: ["Space Mono", "monospace"],
      },
      lineHeight: {
        max: "95px",
      },
    },
  },
  plugins: [],
};
