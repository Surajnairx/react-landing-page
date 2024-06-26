/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brighRed: "hsl(12,88%,59%)",
        brighRedLight: "hsl(12,88%,69%)",
        brighRedSupLight: "hsl(12,88%,95)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(230,12%,60%)",
        veryDarkBlue: "hsl(233,12%,31%)",
        veryPaleRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
      },
    },
  },
  plugins: [],
};
