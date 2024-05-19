/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'custom': '500px 50px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #EDBEC2, #D84DD5, #734DED, #FF3DFF)',
        'opacity': '.5',
      }, 
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '-500px 0px' },
          '100%': { backgroundPosition: '500px 0px' },
        },
      },
      animation: {
        loading: 'loading 3s infinite linear',
      },
    },
  },
  plugins: [],
}

