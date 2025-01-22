/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors
      }
    },
  },
  safelist:[
    {
      pattern: /bg-(.*)-(.*)/,
    },
    {
      pattern: /border-(.*)-(.*)/,
    },
    {
      pattern: /text-(.*)-(.*)/,
    },
    {
      pattern: /(from|via|to)-(.*)-(.*)/,
    }
  ],
  plugins: [require('tailwind-scrollbar')],
}