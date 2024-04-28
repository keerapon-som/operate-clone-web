module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}