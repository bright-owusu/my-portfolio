/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        's-320': '320px',      // Smallest breakpoint
        's-500': '500px',      // Smallest breakpoint
        's-740': '740px',  // Custom name for small devices
        's-768': '768px',  // Custom name for small devices
        's-1024': '1024px',  // Custom name for small devices
        's-1036': '1036px', // Custom name for medium devices
        's-1220': '1220px', // Custom name for medium devices
        's-1350': '1350px', // Custom name for medium devices
        's-1450': '1450px', // Custom name for larger devices
        's-1530': '1530px',
        's-1540': '1540px' // Custom name for larger devices
      },
    },
  },
  plugins: [],
}

