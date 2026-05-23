/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#8fd6ff",
        secondary: "#70df31",
        tertiary: "#fcc554",
        background: "#050505",
      },

      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],

  // Safelist dynamic classes used in component loops
  safelist: [
    "border-primary",
    "border-secondary",
    "border-tertiary",
    "text-primary",
    "text-secondary",
    "text-tertiary",
    "bg-primary/10",
    "bg-secondary/10",
    "bg-tertiary/10",
    "hover:border-primary/50",
    "hover:border-secondary/50",
    "hover:border-tertiary/50",
  ],
};
