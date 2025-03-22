/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'b-image': "url('/src/assets/icons&images/b-img.jpeg')",
        'logo': "url('/src/assets/icons&images/Logo.svg')",
      }
    },
  },
  plugins: [],
}

