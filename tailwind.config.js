/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#060B1A',
          800: '#0B132B',
          700: '#18213D',
          600: '#2A3450',
          500: '#424D6B',
          400: '#6B748E',
          300: '#98A0B5',
          200: '#C7CCD9',
          100: '#E7E9F0',
          50:  '#F3F4F8',
        },
        coral: {
          700: '#D83A40',
          600: '#F0484E',
          500: '#FF5A5F',
          300: '#FF9498',
          100: '#FFE2E3',
          50:  '#FFF1F1',
        },
        blurple: {
          700: '#4D40DE',
          600: '#5B53E2',
          500: '#6C66E5',
          400: '#8A85EE',
          200: '#C6C3F7',
          100: '#E7E5FB',
          50:  '#F1F0FD',
        },
        mint: {
          700: '#066B53',
          600: '#0A8266',
          500: '#0D9C7A',
          400: '#2FB897',
          200: '#9EDDCD',
          100: '#D6F2EA',
          50:  '#ECFAF5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans HK', '-apple-system', 'system-ui', 'sans-serif'],
        hk:   ['Noto Sans HK', 'PingFang HK', '-apple-system', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'action':    '0 6px 18px rgba(255,90,95,0.28)',
        'action-lg': '0 10px 26px rgba(255,90,95,0.36)',
        'pos':       '0 6px 18px rgba(108,102,229,0.30)',
        'mint':      '0 6px 18px rgba(13,156,122,0.28)',
        'mint-lg':   '0 10px 24px rgba(13,156,122,0.34)',
        'card':      '0 1px 3px rgba(11,19,43,0.08), 0 1px 2px rgba(11,19,43,0.04)',
        'card-lg':   '0 4px 12px rgba(11,19,43,0.10), 0 2px 6px rgba(11,19,43,0.05)',
        'navy-xl':   '0 24px 56px rgba(11,19,43,0.14), 0 8px 18px rgba(11,19,43,0.06)',
      },
      animation: {
        'bob': 'bob 1.8s cubic-bezier(0.34,1.56,0.64,1) infinite',
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(5px)' },
        },
      },
      maxWidth: {
        container: '1200px',
      },
      letterSpacing: {
        overline: '0.14em',
      },
    },
  },
  plugins: [],
}
