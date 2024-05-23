/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero": "url('/public/assets/hero.png')",  
      },
      colors: {
        primary: "#FFFFF0",
        secondary: "#FFC0CB"
      },
      padding: {
        sectionPadding: "2.5rem 4rem"
      }
    },
   
  },
  plugins: [],
};
