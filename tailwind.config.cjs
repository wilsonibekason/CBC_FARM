/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
    "./public/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "cursive"],
        lora: ["Lora", "cursive"],
        rubik: ["Rubik", "cursive"],
        sprodisplay: ["SproDisplay", "san-serif"],
      },
      backgroundImage: ({ theme }) => ({
        "linear-gradient": `linear-gradient(90deg, #0e0e0f 0%, #0e0e0f 50%, #ae45ff 50%,   #ae45ff 100%)`,
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.3), rgba(255,255,255,0.4), rgba(255,255,255,0.6), rgba(255,255,255,0.8), #FFFFFF), url('../src/assets/card.jpg')",
      }),
      transitionProperty: {
        "transition-slide":
          "background-position .3 cubic-bezier(.47, .1, 1, .63), color .2s linear",
        "slide-underline": "background-size 0.2s ease-in-out",
      },

      transitionDelay: {
        "slide-delay": "0.1s, 2s",
      },
      keyframes: {
        "pop-in": {
          "50, 100%": { transform: "scale(2)", opacity: 10 },
        },
      },
      animation: {
        "pop-in": "pop-in 4s cubic-bezier(0,0,0.6,1) ease-in-out",
      },
    },
  },
  plugins: [],
};
