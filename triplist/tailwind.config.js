/** @type {import('tailwindcss').Config} */
export default {
       content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 10 column grid
        '10': 'repeat(10, minmax(0, 1fr))',
        // Complex site-specific column configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}

