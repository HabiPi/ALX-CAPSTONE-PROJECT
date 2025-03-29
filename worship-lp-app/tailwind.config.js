/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'b-image': "url('/src/assets/b-img.jpeg')",
        'logo': "url('/src/assets/logo.svg')",
        'New': "url('/src/assets/New.png')",
      }
    },
  },
  plugins: [],
}

