/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — edit these to change the whole site's mood.
        noir: '#0A0507',       // primary background, near-black
        noirDeep: '#160409',   // deeper panels / gradients
        wine: '#3D0F1D',       // mid burgundy, used in gradients
        crimson: '#8C1F3B',    // primary accent (buttons, borders)
        rose: '#E0637C',       // glow / highlight accent
        blush: '#F4E9EA',      // primary text on dark background
        dust: '#B78D95',       // muted / secondary text
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(224, 99, 124, 0.45)',
        card: '0 20px 60px -20px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at 50% 20%, rgba(224,99,124,0.16), transparent 60%)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-110vh) translateX(20px)', opacity: '0' },
        },
      },
      animation: {
        drift: 'drift linear infinite',
      },
    },
  },
  plugins: [],
};
