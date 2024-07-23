/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'pattern1' : 'url("./images/pattern.jpg")',
        'pattern2' : 'url("./images/back-img.png")'
      },
      colors:{
        'black-dark': '00000050',
      }
    },
    screens: {
      'sm1': '600px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },

  plugins: [],
}

