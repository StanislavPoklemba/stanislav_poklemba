/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:         '#f9f9f7',   // warm off-white
        surface:    '#ffffff',   // pure white — cards
        surfaceAlt: '#f3f3f1',   // slightly warmer — alternating sections
        surfaceMid: '#ececea',   // card bg inside alt sections
        border:     '#e3e3e1',   // subtle warm border
        borderLight:'#d1d1cf',   // more visible border
        accent:     '#111110',   // dark accent
        accent2:    '#64748b',   // slate-500
        textmain:   '#111110',   // warm near-black
        textmuted:  '#71717a',   // zinc-500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      })
    },
  ],
}
