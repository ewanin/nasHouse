/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montreg: ["MontReg", "sans-serif"],
        montsemi: ["MontSemi", "sans-serif"],
        montbold: ["MontBold", "sans-serif"],
        montheavy: ["MontHeavy", "sans-serif"],
      },
      colors: {
        'lightGreen': '#5e8b19a6',
        'geeen': '#31b94f',
        '4e6d1ad9': 'rgba(rgba(78, 109, 26, 0.85))',
        'f4ebdc': 'rgba(rgba(244, 235, 220, 1))',
        'e2d9ca': 'rgba(226, 217, 202, 1)',
        '454a277d': 'rgba(69, 74, 39, 0.49)',
        'd4cec3': 'rgba(212, 206, 195, 1)',
        'af9e74': 'rgba(175, 158, 116, 1)',
        '5e8b19': 'rgba(94, 139, 25, 1)',
        'fff7e2': 'rgba(255, 247, 226, 1)',
        '2b372e': 'rgba(43, 55, 46, 1)',
        '71997b99': 'rgba(113, 153, 123, 0.6)',
        'ffffffb3': 'rgba(255, 255, 255, 0.7)',
        'ffffff33': 'rgba(255, 255, 255, 0.2)',
        '233027': 'rgba(35, 48, 39, 1)',
        'bdc1be': 'rgba(189, 193, 190, 1)',
        '8f9591b3': 'rgba(143, 149, 145, 0.7)',
        '2b372e': 'rgba(43, 55, 46, 1)',
      },
      screens: {
        '2xl': '1800px',
      },
      backgroundImage: {
        'about': "url('https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e40a07ca4b606e4124a1c4_about-bg2.png')",
        'enquire': "url('https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e5811a621fcbb835590667_home-cta-bg.jpg')",
      }
    },
  },
  plugins: [],
}