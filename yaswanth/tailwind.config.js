/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        bgcolor: "#0a0a0a",
        primary: "#8B5CF6",
        secondary: "#6366F1", 
        accent: "#6366F1",
        tertiary: "#4A9EFF",
        black: {
          DEFAULT: '#0a0a0a',
          100: '#111111',
          200: '#1a1a1a',
          300: '#2a2a2a',
          400: '#404040',
          500: '#525252',
          600: '#737373',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#f8fafc',
          700: '#f1f5f9',
          600: '#e2e8f0',
          500: '#94a3b8',
          400: '#64748b',
        },
        blue: {
          DEFAULT: '#4A9EFF',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#4A9EFF',
          700: '#3B82F6',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        indigo: {
          DEFAULT: '#6366F1',
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#6366F1',
          700: '#4f46e5',
          800: '#4338ca',
          900: '#3730a3',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#8B5CF6',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 4s',
      }
    },
  },
  plugins: [],
};