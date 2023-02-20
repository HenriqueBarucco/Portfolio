/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      app: 'radial-gradient(circle, rgba(40,58,149,1) 0%, rgba(75,0,115,1) 100%)'
    },
    gridTemplateRows: {
      layout: '2rem 1fr 1.5rem',
    },
    gridTemplateColumns: {
      editor: '3.5rem 16rem 1fr'
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
