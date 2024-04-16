/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '100%':{ transform: 'scale(1.2)' },
        }
      },
      animation: {
        zoomInOut: 'zoomInOut 25s 1s linear infinite alternate'
      },
    },
  },
  plugins: [],
}