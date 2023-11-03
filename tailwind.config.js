/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          100: '#FFA07A',
          300: '#FF6B4A',
          500: '#FF4500', // Your primary color
          700: '#c54325', // Your primary color
        },
        secondary: {
          100: '#008080',
          300: '#006666',
          500: '#006400', // Your secondary color
        },
        tertiary: {
          100: '#8A2BE2',
          300: '#9400D3', // Your tertiary color
        },
        complementary: {
          orange: '#FFA500',
          teal: '#008080',
          green: '#008000',
          yellow: '#FFFF00',
          pink: '#FF69B4',
          indigo: '#4B0082',
          cyan: '#00CED1',
          red: '#FF0000',
          lime: '#32CD32',
          blue: '#0000FF',
          gray: {
            100: '#F5F5F5',
            300: '#D3D3D3',
            500: '#808080',
          },
        },
      },
    },
  },
  plugins: [],
};
