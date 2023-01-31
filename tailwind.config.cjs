/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    "./public/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "mulish": ["Mulish", "cursive"],
        "lora": ["Lora", "cursive"],
        "rubik": ["Rubik", "cursive"],
        "sprodisplay": ["SproDisplay", "san-serif"],
      }
    },
  },
  plugins: [],
};
