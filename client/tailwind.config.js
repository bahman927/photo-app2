 






// tailwind.config.js
module.exports = {
  content: [
    "./client/index.html",  
    "./client/src/**/*.{js,jsx,ts,tsx}", "./public/.jpg"],
  theme: {
    extend: {
      keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' }, // half the width for duplication
      },
    },
    animation: {
      scroll: 'scroll 30s linear infinite',
      'pause-scroll': 'pause 0s', // placeholder for hover
    },
     
    },
  },
  plugins: [],
};


 

//  animation: {
//         'scrollLtr': 'scrollLtr 25s linear infinite',
//       },
//       keyframes: {
//         'scrollLtr': {
//           '0%': { transform: 'translateX(-100)' },
//           '100%': { transform: 'translateX(100%)' },
//         },
        
//       },