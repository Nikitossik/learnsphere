/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  corePlugins: {
    container: false,
  },
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      sm: "0.825rem",
      "base-sm": "0.9375rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5625rem",
      "3xl": "2.1875rem",
      "4xl": "2.5rem",
      "5xl": "3.125rem",
      "6xl": "3.75rem",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     //DEFAULT: "36.875rem",
    //     // sm: "",
    //     lg: "49rem",
    //     xl: "100%",
    //     "2xl": "77rem",
    //   },
    // },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
