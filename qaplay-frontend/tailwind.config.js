/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'dark',
    'dark:bg-gray-900',
    'dark:bg-gray-800',
    'dark:bg-gray-700',
    'dark:text-gray-100',
    'dark:text-gray-300',
    'dark:text-white',
    'dark:border-gray-600',
    'dark:border-gray-700',
    'dark:hover:bg-gray-700',
    'dark:hover:bg-gray-600',
    'dark:text-indigo-400',
    'dark:text-purple-400',
    'dark:text-emerald-400',
    'dark:border-indigo-400',
    'dark:hover:bg-indigo-500',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}


