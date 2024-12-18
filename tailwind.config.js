/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // screens: {
      //   's-320': '320px',      
      //   's-500': '500px',      
      //   's-680': '680px',      
      //   's-740': '740px',  
      //   // 's-768': '768px', 
      //   's-884': '884px', 
      //   's-900': '900px',
      //   's-972': '972px',  
      //   's-1110': '1200px',  
      //   's-1024': '1024px',  
      //   's-1036': '1036px', 
      //   's-1220': '1220px',
      //   's-1280': '1280px',
      //   's-1350': '1350px', 
      //   's-1380': '1380px', 
      //   's-1450': '1450px', 
      //   's-1530': '1530px',
      //   's-1540': '1540px',

      //   // Specific devices
      //   'ipad-pro-12.9': { raw: '(min-width: 1366px) and (min-height: 917px)' },
      // },
      fontSize: {
        'xxs': '.5rem',
      }
    },
  },
  plugins: [tailwindScrollbar],
}

