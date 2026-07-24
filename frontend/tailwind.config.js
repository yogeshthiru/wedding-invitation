export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "maroon" now carries a deep blue-violet night-sky / Shiva palette (no pure black).
        maroon: {
          DEFAULT: '#232a5c',
          dark: '#171b3d',
          light: '#3d3f7f'
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f4e2b8',
          bright: '#f0c14b',
          dark: '#e0bf5f'
        },
        // "saffron" now carries the icy moonlight-blue accent.
        saffron: '#7ecbff',
        // Rich violet accent used to blend the blue night theme with warmer purple glows.
        violet: {
          DEFAULT: '#6d5dfc',
          dark: '#4c3fb0',
          light: '#a78bfa'
        },
        teal: {
          DEFAULT: '#0a5c5c',
          dark: '#063b3b'
        },
        // "cream" now carries the pale moonlight text/glow tone.
        cream: '#eaf2ff'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Poppins"', 'sans-serif']
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' }
        },
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0.2' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        fall: 'fall linear infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        flicker: 'flicker 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
