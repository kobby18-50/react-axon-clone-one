/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      screens : {
        sm: '270px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        main : '#010205',
        sub : '#015997',
        red : '#e3234e'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
