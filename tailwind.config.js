/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '32px'
      },
      margin: {
        '25': '100px'
      },
      height: {
        '1200':'1200px'
      },
      backgroundImage:{
        'headerImg':"url('/src/assets/headerHomeBgNew.png')"
      },
      boxShadow:{
        'download': '1px 140px 0px'
      }
      
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/forms')
  ],
}

