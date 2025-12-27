/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0066CC',
        'primary-dark': '#0052A3',
        'primary-light': '#E6F0FF',
        'accent': '#FF6B35',
        'text-dark': '#1F2937',
        'text-light': '#6B7280',
        'border': '#E5E7EB',
        'bg-light': '#F9FAFB',
      },
    },
  },
  plugins: [],
}

