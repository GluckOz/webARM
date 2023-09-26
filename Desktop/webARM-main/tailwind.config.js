/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        oranasdsaddsaasddasge: '#232323',
        firstBgColor: "#3a1772",
        secondBgColor: "#534b52",
      }
    },
  },
  plugins: [],
}
