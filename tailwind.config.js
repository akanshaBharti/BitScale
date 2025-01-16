/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx}`],
  theme: {
    extend: {
      colors:{
        darkGray: '#1F2A37',
        lightGray: '#6B7280',
        mediumGray: '#374151', 
        lightBlack: '#1C1B1F'
      },
    },  
  },
  plugins: [], 
}

