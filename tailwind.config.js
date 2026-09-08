/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Direct Design Update v2 Tokens
        'bg': '#FBFCFC',
        'surface': '#F4F6F6',
        'surface-slate': '#7C8B99',
        'text-primary': '#263238',
        'text-muted': '#6B7780',
        'border-custom': '#E1E6E7',
        'primary': '#2FB8A6',
        'primary-dark': '#1E8E7F',
        'cta-bg': '#2FB8A6',
        'cta-text': '#FFFFFF',
        'error': '#C0483D',
        'success': '#2FB8A6',

        // Solace namespace
        solace: {
          bg: '#FBFCFC',
          surface: '#F4F6F6',
          'surface-slate': '#7C8B99',
          text: '#263238',
          'text-muted': '#6B7780',
          border: '#E1E6E7',
          primary: '#2FB8A6',
          'primary-dark': '#1E8E7F',
          'cta-bg': '#2FB8A6',
          'cta-text': '#FFFFFF',
          error: '#C0483D',
          success: '#2FB8A6',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'page': '1280px',
        'content': '960px',
        'reading': '680px',
      },
      borderRadius: {
        'solace': '4px',
      },
      transitionTimingFunction: {
        'solace-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
