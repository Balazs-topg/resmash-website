/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./nav.html"],
  theme: {
    extend: {
      fontFamily: { sans: "Chivo" },
      backgroundImage: {
        racket: "url('../images/padel_racket.svg')",
      },
      keyframes: {
        openMenue: {
          "0%": { maxHeight: "0px", paddingTop: "0rem", paddingBottom: "0rem" },
          "100%": { maxHeight: "500px", paddingTop: "1rem", paddingBottom: "1rem" },
        },
        closeMenue: {
          "100%": { maxHeight: "0px", paddingTop: "0rem", paddingBottom: "0rem" },
          "0%": { maxHeight: "500px", paddingTop: "1rem", paddingBottom: "1rem" },
        },
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        openForm: {
          "0%": { opacity: "0%", scale: 0 },
          "100%": { opacity: "100%", scale: 1 },
        },
        closeForm: {
          "100%": { opacity: "0%", scale: 0 },
          "0%": { opacity: "100%", scale: 1 },
        },
      },
      animation: {
        "open-menue": "openMenue 400ms",
        "close-menue": "closeMenue 400ms",
        "fade-in": "fadeIn 400ms",
        "fade-out": "fadeOut 400ms",
        "open-form": "openForm 400ms",
        "close-form": "closeForm 400ms",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
