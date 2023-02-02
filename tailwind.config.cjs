/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg_dark": '#000000',
        "link_bg": '#343A40',
        "white_color": '#fff',
        "content_bg": '#EDF2FA',
        "icon_color": '#1DD1A1'
      },
    }
  },
  plugins: [],
}
