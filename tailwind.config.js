/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  scripts: {
    dev: 'npx tailwindcss -i ./src/index.css -o ./src/output.css --watch'
  } 
}

