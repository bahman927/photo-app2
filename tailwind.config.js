// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/.jpg"],
  theme: {
    extend: {
      animation: {
        'scrollLtr': 'scrollLtr 25s linear infinite',
      },
      keyframes: {
        'scrollLtr': {
          '0%': { transform: 'translateX(-100)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
      },
    },
  },
  plugins: [],
};


 