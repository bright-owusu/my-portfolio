/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        's-320': '320px',      
        's-500': '500px',      
        's-740': '740px',  
        's-768': '768px',  
        's-1024': '1024px',  
        's-1036': '1036px', 
        's-1220': '1220px',
        's-1350': '1350px', 
        's-1450': '1450px', 
        's-1530': '1530px',
        's-1540': '1540px', 

        // Specific devices
        'ipad-pro-12.9': { raw: '(min-width: 1366px) and (min-height: 917px)' },
      },
      fontSize: {
        'xxs': '.5rem',
      }
    },
  },
  plugins: [],
}

