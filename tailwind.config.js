/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
      colors: {
        black: "#262626",
        gray: "#767676",
        bg: "#F5F5F3",
        lightGray: "#6D6D6D",
        lightWhite: "#F0F0F0",
      },
      fontFamily: {
        primaryFont: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
