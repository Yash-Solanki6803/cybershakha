/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient":
          "linear-gradient(270deg, rgb(59 59 59) 0%, rgba(90,90,90,0) 52%, rgb(57 57 57) 100%);",
      },
      colors: {
        brand_primary: "#3ED5DD",
        brand_primary_dark: "#0A767B",
        brand_black: "#171717",
        glass: "rgba(255, 255, 255, 0.13)",
        dark_glass: "rgba(0, 0, 0, 0.23)",
        black_light: "#232323",
      },
      cursor: {
        default: "url(/icons/cursor.png),default",
        pointer: "url(/icons/cursor_pointer.png),pointer",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
