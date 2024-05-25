/** @type {import('tailwindcss').Config} */

import { nextui } from '@nextui-org/react'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      variant:{

      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      light: {
        // ...
        colors: {
          primary: "rgb(23 37 84)",
          secondary:"rgb(37 99 235)"
        },
      }
    }
  })],
}

