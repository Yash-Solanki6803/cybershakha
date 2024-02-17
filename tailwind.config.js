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
        "glass-gradient":
          "linear-gradient(211deg, rgba(23,23,23,1) 0%, rgba(90,90,90,0) 52%, rgba(23,23,23,1) 100%)",
      },
      colors: {
        brand_primary: "#3ED5DD",
        brand_primary_dark: "#0A767B",
        brand_black: "#171717",
        glass: "rgba(255, 255, 255, 0.13)",
      },
    },
  },
  plugins: [],
};
