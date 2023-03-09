/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg_dark": '#051023',
        "link_bg": '#343A40',
        "white_color": '#fff',
        "content_bg": '#F5F5F5',
        "icon_color": '#1DD1A1',
        'button_color': '#27B3AA'
      },
    }
  },
  plugins: [],
}
