import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(16, 185, 129, 0.35)'
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}

export default config

