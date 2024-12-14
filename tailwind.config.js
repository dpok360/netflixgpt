/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        appleWhite: '#F5F5F7',
        darkBlack: '#0B0B0B',
      },
      fontFamily: { inter: [['var(--font-inter)', 'sans-serif']] },
    },
  },
  plugins: [],
};
