/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#9333EA',
        accent: '#FACC15',
        backgroundLight: '#FFFFFF',
        backgroundDark: '#1E293B',
        textLight: '#1E293B',
        textDark: '#E5E7EB',
        sidebarLight: '#F4F4F4',
        sidebarDark: '#0C1E35',
      },
    },
  },
  plugins: [],
}
